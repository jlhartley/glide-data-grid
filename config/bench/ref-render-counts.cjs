// Build each checkout first, then run:
// node config/bench/ref-render-counts.cjs BASE_CHECKOUT ORIGINAL_PR_CHECKOUT [ADJUSTED_CHECKOUT]
// Counts synchronous production React render attempts, including commit-triggered
// corrective renders. Canvas/resize/RAF are controlled; this is not an FPS benchmark.
const path = require("node:path");
const fs = require("node:fs");
const os = require("node:os");
const { createRequire } = require("node:module");
const assert = require("node:assert/strict");
const esbuild = require("esbuild");
const { JSDOM } = require("jsdom");
const repo = path.resolve(__dirname, "../..");
const [baseRoot, originalRoot, adjustedRoot = repo] = process.argv.slice(2);
assert(baseRoot && originalRoot, "Pass the base and original PR checkout paths");
const temp = fs.mkdtempSync(path.join(os.tmpdir(), "grid-ref-renders-"));
(async () => {
    for (const [label, dir] of [
        ["base", baseRoot],
        ["original", originalRoot],
        ["adjusted", adjustedRoot],
    ]) {
        const src = fs
            .readFileSync(path.join(__dirname, "ref-render-counts-entry.jsx"), "utf8")
            .replaceAll("CORE/", dir + "/packages/core/dist/esm/");
        await esbuild.build({
            stdin: { contents: src, resolveDir: repo, loader: "jsx" },
            bundle: true,
            platform: "node",
            format: "cjs",
            outfile: path.join(temp, label + ".cjs"),
            define: { "process.env.NODE_ENV": '"production"', BASE: label === "base" ? "true" : "false" },
            logLevel: "silent",
            plugins: [
                {
                    name: "counts",
                    setup(b) {
                        b.onLoad({ filter: /\.js$/ }, async args => {
                            if (!args.path.includes("/dist/esm/")) return;
                            if (args.path.endsWith("/common/resize-detector.js"))
                                return {
                                    contents:
                                        "export function useResizeDetector(){return {ref:undefined,width:globalThis.__benchSize[0],height:globalThis.__benchSize[1]}}",
                                    loader: "js",
                                };
                            let code = fs.readFileSync(args.path, "utf8");
                            for (const [decl, name] of [
                                ["const DataEditorImpl = (p, forwardedRef) => {", "DataEditor"],
                                ["export const InfiniteScroller = p => {", "InfiniteScroller"],
                                ["const DataGridOverlayEditor = p => {", "Overlay"],
                                ["const DataGrid = (p, forwardedRef) => {", "DataGrid"],
                                ["const GridScroller = p => {", "GridScroller"],
                                ["const DataGridDnd = p => {", "DataGridDnd"],
                            ])
                                code = code.replace(
                                    decl,
                                    decl + `globalThis.__counts.${name}=(globalThis.__counts.${name}??0)+1;`
                                );
                            return { contents: code, loader: "js" };
                        });
                    },
                },
            ],
        });
    }
    const dom = new JSDOM("<!doctype html><html><body></body></html>", { pretendToBeVisual: true });
    for (const k of [
        "window",
        "document",
        "HTMLElement",
        "HTMLCanvasElement",
        "HTMLImageElement",
        "Image",
        "Element",
        "Node",
        "getComputedStyle",
        "DOMException",
        "Blob",
        "navigator",
    ])
        Object.defineProperty(global, k, {
            configurable: true,
            value:
                typeof dom.window[k] === "function" && k === "getComputedStyle"
                    ? dom.window[k].bind(dom.window)
                    : dom.window[k],
        });
    Object.defineProperty(navigator, "userAgent", {
        value: "Mozilla/5.0 (Macintosh) AppleWebKit/605.1.15 Version/17.0 Safari/605.1.15",
    });
    global.jest = {
        fn: impl => {
            const f = function (...a) {
                return impl?.apply(this, a);
            };
            f._isMockFunction = true;
            return f;
        },
        isMockFunction: f => f?._isMockFunction === true,
    };
    const req = createRequire(require.resolve("vitest-canvas-mock"));
    const mockWindow = req("jest-canvas-mock/lib/window.js").default;
    mockWindow(window);
    for (const k of [
        "Path2D",
        "CanvasGradient",
        "CanvasPattern",
        "CanvasRenderingContext2D",
        "DOMMatrix",
        "ImageData",
        "TextMetrics",
        "ImageBitmap",
        "createImageBitmap",
    ])
        global[k] = window[k];
    global.ResizeObserver = window.ResizeObserver = class {
        observe() {}
        disconnect() {}
    };
    let raf = 0;
    window.requestAnimationFrame = global.requestAnimationFrame = () => ++raf;
    window.cancelAnimationFrame = global.cancelAnimationFrame = () => {};
    Image.prototype.decode = () => new Promise(() => {});
    Element.prototype.getBoundingClientRect = () => ({
        x: 0,
        y: 0,
        top: 0,
        left: 0,
        right: 800,
        bottom: 600,
        width: 800,
        height: 600,
    });
    const modes = [
        "listener-stable",
        "listener-fresh",
        "animation-stable",
        "animation-fresh",
        "reactive-stable",
        "reactive-change",
        "reactive-update",
        "key-default",
        "key-equal",
        "key-change",
        "offset-stable",
        "offset-x",
        "offset-y",
        "offset-row-height",
        "offset-return",
        "offset-clamped",
        "observed-scroll",
        "scroller",
        "scroller-kinetic",
        "scroller-resize",
        "scroller-zero",
        "portal-default",
        "portal-custom",
        "portal-replace",
        "grid-stable",
        "grid-offset",
        "grid-keybindings",
    ];
    const results = [];
    for (const label of ["base", "original", "adjusted"]) {
        const m = require(path.join(temp, label + ".cjs"));
        for (const mode of modes) {
            try {
                results.push({ label, ...m.run(mode) });
            } catch (e) {
                throw new Error(`${label}/${mode} failed`, { cause: e });
            }
        }
    }
    // Compare every tracked component in both phases of every scenario.
    for (const actual of results.filter(result => result.label === "adjusted")) {
        const baseline = results.find(result => result.label === "base" && result.mode === actual.mode);
        assert(actual.portalTargetCorrect, `${actual.mode}: portal target was not followed`);
        for (const phase of ["mount", "updates"]) {
            for (const component of new Set([...Object.keys(baseline[phase]), ...Object.keys(actual[phase])])) {
                assert(
                    (actual[phase][component] ?? 0) <= (baseline[phase][component] ?? 0),
                    `${actual.mode}/${phase}/${component}: adjusted render count exceeds baseline`
                );
            }
        }
    }
    process.stdout.write(JSON.stringify(results, null, 2) + "\n", () => {
        fs.rmSync(temp, { recursive: true, force: true });
        process.exit(0);
    });
})().catch(error => {
    fs.rmSync(temp, { recursive: true, force: true });
    console.error(error);
    process.exit(1);
});
