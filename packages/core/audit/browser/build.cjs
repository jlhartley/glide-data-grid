const fs = require("node:fs");
const path = require("node:path");
const esbuild = require("esbuild");
const repo = path.resolve(__dirname, "../../../..");
const roots = {
    current: process.env.AUDIT_CURRENT_ROOT || repo,
    base: process.env.AUDIT_BASE_ROOT || repo + "-audit-base",
    initial: process.env.AUDIT_INITIAL_ROOT || repo + "-audit-initial-pr",
};
const out = path.join(__dirname, "out");
fs.mkdirSync(out, { recursive: true });
(async () => {
    for (const [variant, dir] of Object.entries(roots)) {
        if (process.env.AUDIT_VARIANTS && !process.env.AUDIT_VARIANTS.split(",").includes(variant)) continue;
        const code = fs
            .readFileSync(path.join(__dirname, "app.tsx"), "utf8")
            .replaceAll("CORE/", dir + "/packages/core/dist/esm/")
            .replaceAll("SOURCE/", dir + "/packages/source/src/");
        for (const mode of ["production", "development"]) {
            const dest = path.join(out, variant, mode);
            fs.mkdirSync(dest, { recursive: true });
            await esbuild.build({
                stdin: { contents: code, resolveDir: repo, loader: "tsx" },
                bundle: true,
                format: "esm",
                platform: "browser",
                outfile: path.join(dest, "app.js"),
                define: { "process.env.NODE_ENV": JSON.stringify(mode), VARIANT: JSON.stringify(variant) },
                sourcemap: true,
                logLevel: "silent",
            });
            await esbuild.build({
                entryPoints: [dir + "/packages/core/dist/index.css"],
                bundle: true,
                outfile: path.join(dest, "styles.css"),
                logLevel: "silent",
            });
            fs.writeFileSync(
                path.join(dest, "index.html"),
                `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="styles.css"><style>body{font:16px system-ui;margin:24px;color:#172033;background:#f8fafc}h1{font-size:21px}nav{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px}button{font:inherit;padding:7px 12px;margin:4px;border:1px solid #8a9aaf;background:white;border-radius:5px}output{font-family:monospace;font-weight:bold}.readouts{line-height:1.8;margin-top:16px}section{outline:1px solid #cbd5e1;padding:12px;margin:16px 0}#popover{padding:20px;background:#dcfce7;outline:2px solid #15803d}#boundary-a{width:max-content}#portal-a,#portal-b{min-height:16px}</style></head><body><main id="app"></main><div id="portal"></div><div id="portal-a"></div><div id="portal-b"></div><script type="module" src="app.js"></script></body></html>`
            );
        }
    }
    console.log("Built browser audit:", out);
})().catch(e => {
    console.error(e);
    process.exit(1);
});
