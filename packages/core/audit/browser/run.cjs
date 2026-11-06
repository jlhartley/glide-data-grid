const fs = require("node:fs"),
    path = require("node:path"),
    assert = require("node:assert/strict");
const { chromium } = require("playwright");
const { createServer } = require("./server.cjs");
const resultsDir = path.join(__dirname, "results", process.env.AUDIT_RUN_LABEL || "main");
fs.mkdirSync(resultsDir, { recursive: true });
const delay = ms => new Promise(r => setTimeout(r, ms));
async function canvasPoint(page, x = 75, y = 52) {
    const box = await page.locator('[data-testid="data-grid-canvas"]').boundingBox();
    assert(box, "Canvas missing");
    return { x: box.x + x, y: box.y + y };
}
async function clickCell(page) {
    const p = await canvasPoint(page);
    await page.mouse.click(p.x, p.y);
}
async function openEditor(page) {
    const p = await canvasPoint(page);
    await page.mouse.dblclick(p.x, p.y);
    await page.locator(".gdg-input").waitFor({ state: "visible", timeout: 2500 });
}
async function scrollGrid(page, pixels) {
    const p = await canvasPoint(page, 200, 150);
    await page.mouse.move(p.x, p.y);
    await page.mouse.wheel(0, pixels);
    await delay(450);
}
const tests = [
    {
        name: "edit-save",
        scenario: "grid",
        kind: "grid journey",
        run: async page => {
            await openEditor(page);
            await page.locator(".gdg-input").fill("Updated mark");
            await page.locator(".gdg-input").press("Enter");
            await page.waitForFunction(() => window.__audit.edits.length > 0);
            const actual = await page.locator("#edited").innerText();
            return { pass: actual === "Updated mark", actual };
        },
    },
    {
        name: "native-scroll",
        scenario: "grid",
        kind: "grid journey",
        run: async page => {
            await scrollGrid(page, 640);
            await clickCell(page);
            const state = await page.evaluate(() => ({
                visible: window.__audit.visible,
                click: window.__audit.clicks.at(-1),
                top: document.querySelector(".dvn-scroller").scrollTop,
            }));
            return { pass: state.top > 0 && state.click?.[1] === state.visible.y, actual: state };
        },
    },
    {
        name: "controlled-scroll",
        scenario: "grid",
        kind: "grid journey",
        run: async page => {
            await page.getByRole("button", { name: "Go to row 100", exact: true }).click();
            await page.waitForFunction(() => document.querySelector(".dvn-scroller").scrollTop === 3200);
            await delay(250);
            await clickCell(page);
            const actual = await page.evaluate(() => ({
                visibleY: window.__audit.visible.y,
                clicked: window.__audit.clicks.at(-1),
                scrollTop: document.querySelector(".dvn-scroller").scrollTop,
            }));
            return { pass: actual.visibleY === 100 && actual.clicked?.[1] === 100, actual };
        },
    },
    {
        name: "clamped-scroll",
        scenario: "grid",
        kind: "grid journey",
        run: async page => {
            await page.getByRole("button", { name: "Go past final row", exact: true }).click();
            await delay(500);
            const actual = await page.evaluate(() => {
                const s = document.querySelector(".dvn-scroller");
                return { visibleY: window.__audit.visible.y, top: s.scrollTop, max: s.scrollHeight - s.clientHeight };
            });
            return { pass: actual.top === actual.max && actual.visibleY >= 980 && actual.visibleY < 1000, actual };
        },
    },
    {
        name: "scroll-plus-resize",
        scenario: "grid",
        kind: "grid journey",
        run: async page => {
            await page.getByRole("button", { name: "Scroll and resize", exact: true }).click();
            await delay(500);
            await clickCell(page);
            const actual = await page.evaluate(() => ({
                visibleY: window.__audit.visible.y,
                clicked: window.__audit.clicks.at(-1),
                scrollTop: document.querySelector(".dvn-scroller").scrollTop,
                canvasWidth: document.querySelector('[data-testid="data-grid-canvas"]').getBoundingClientRect().width,
            }));
            return {
                pass: actual.visibleY === 200 && actual.clicked?.[1] === 200 && actual.canvasWidth === 680,
                actual,
            };
        },
    },
    {
        name: "grid-resize",
        scenario: "grid",
        kind: "grid journey",
        run: async page => {
            await page.getByRole("button", { name: "Resize grid", exact: true }).click();
            await delay(300);
            await clickCell(page);
            const box = await page.locator('[data-testid="data-grid-canvas"]').boundingBox();
            return { pass: box.width === 620 && box.height === 300, actual: box };
        },
    },
    {
        name: "portal-replacement",
        scenario: "portal",
        kind: "grid journey",
        run: async page => {
            await openEditor(page);
            await page.locator(".gdg-input").fill("Moved value");
            await page.getByRole("button", { name: "Move editor portal", exact: true }).click();
            await delay(100);
            const beforeRemoval = await page.evaluate(() => ({
                a: !!document.querySelector("#portal-a .gdg-input"),
                b: !!document.querySelector("#portal-b .gdg-input"),
            }));
            await page.getByRole("button", { name: "Remove old portal", exact: true }).click();
            await delay(100);
            const editorVisible = await page.locator(".gdg-input").isVisible();
            if (editorVisible) {
                await page.locator(".gdg-input").press("Enter");
                await delay(100);
            }
            const actual = { beforeRemoval, editorVisible, saved: await page.locator("#edited").innerText() };
            return {
                pass: beforeRemoval.b && !beforeRemoval.a && editorVisible && actual.saved === "Moved value",
                actual,
            };
        },
    },
    {
        name: "event-boundary-initial",
        scenario: "event-target-initial",
        kind: "positive control: isolated native boundary from mount",
        run: async page => {
            await clickCell(page);
            await delay(80);
            const actual = await page.evaluate(() => window.__audit.clicks.length);
            return { pass: actual > 0, actual };
        },
    },
    {
        name: "pending-reorder-control",
        scenario: "move-pending",
        kind: "positive control: header drag without a pending transition",
        run: async page => {
            const p = await canvasPoint(page, 90, 18);
            await page.mouse.move(p.x, p.y);
            await page.mouse.down();
            await page.mouse.move(p.x + 195, p.y, { steps: 12 });
            await page.mouse.up();
            await delay(100);
            const actual = await page.evaluate(() => window.__audit.moves);
            return { pass: actual.length > 0 && actual.every(m => m.dataset === "A"), actual };
        },
    },
    {
        name: "resize-observer-control",
        scenario: "resize-observer",
        kind: "positive control: actual ResizeObserver on its initial node",
        run: async page => {
            await page.waitForFunction(() => document.querySelector("#measured").textContent === "260");
            await page.getByRole("button", { name: "Widen active panel", exact: true }).click();
            await delay(150);
            const actual = await page.locator("#measured").innerText();
            return { pass: actual === "310", actual };
        },
    },
    {
        name: "event-boundary-switch",
        scenario: "event-target",
        kind: "grid journey",
        run: async page => {
            await page.getByRole("button", { name: "Use inner event boundary", exact: true }).click();
            await clickCell(page);
            await delay(80);
            const first = await page.evaluate(() => window.__audit.clicks.length);
            await delay(400);
            await clickCell(page);
            const actual = {
                firstClickCallbacks: first,
                afterSecondClick: await page.evaluate(() => window.__audit.clicks.length),
            };
            return { pass: first > 0, actual };
        },
    },
    {
        name: "resize-observer-retarget",
        scenario: "resize-observer",
        kind: "browser component integration",
        run: async page => {
            await page.waitForFunction(() => document.querySelector("#measured").textContent === "260");
            await page.getByRole("button", { name: "Measure right panel", exact: true }).click();
            await delay(150);
            await page.setViewportSize({ width: 1200, height: 900 });
            await delay(200);
            const actual = await page.evaluate(() => ({
                reported: Number(document.querySelector("#measured").textContent),
                actual: document.querySelector("#right-panel").getBoundingClientRect().width,
            }));
            return { pass: actual.reported === actual.actual, actual };
        },
    },
    {
        name: "outside-click-retarget",
        scenario: "outside-target",
        kind: "browser component integration",
        run: async page => {
            await page.getByRole("button", { name: "Use boundary B", exact: true }).click();
            await page.getByRole("button", { name: "Outside via B", exact: true }).click();
            const closedByNew = (await page.locator("#open").innerText()) === "false";
            if (!closedByNew) await page.getByRole("button", { name: "Outside via A", exact: true }).click();
            const actual = { closedByNew, closedAfterOld: (await page.locator("#open").innerText()) === "false" };
            return { pass: closedByNew, actual };
        },
    },
    {
        name: "pending-reorder",
        scenario: "move-pending",
        kind: "grid journey",
        run: async page => {
            await page.getByRole("button", { name: "Start pending dataset B", exact: true }).click();
            await page.waitForFunction(() => window.__audit.pendingRenderSeen);
            const committed = await page.locator("#dataset").innerText();
            const p = await canvasPoint(page, 90, 18);
            await page.mouse.move(p.x, p.y);
            await page.mouse.down();
            await page.mouse.move(p.x + 195, p.y, { steps: 12 });
            await page.mouse.up();
            await delay(100);
            let moves = await page.evaluate(() => window.__audit.moves);
            let method = "header drag";
            if (!moves.length) {
                method = "reorder button";
                await page.getByRole("button", { name: "Move first column right", exact: true }).click();
                moves = await page.evaluate(() => window.__audit.moves);
            }
            const actual = { committed, moves, method };
            return { pass: moves.length > 0 && moves.every(m => m.dataset === committed), actual };
        },
    },
    {
        name: "layout-event",
        scenario: "layout-event",
        kind: "controlled commit-order diagnostic",
        run: async page => {
            await page.getByRole("button", { name: "Apply version 1", exact: true }).click();
            await delay(80);
            const actual = await page.locator("#actual").innerText();
            return { pass: actual === "1", actual, expected: "1" };
        },
    },
    {
        name: "layout-input",
        scenario: "layout-input",
        kind: "controlled commit-order diagnostic; unused production helper",
        run: async page => {
            await page.getByRole("button", { name: "Set 10 and increment", exact: true }).click();
            await delay(80);
            const actual = await page.locator("#actual").innerText();
            return { pass: actual === "11", actual, expected: "11" };
        },
    },
    {
        name: "layout-scroll",
        scenario: "layout-scroll",
        kind: "controlled commit-order diagnostic",
        run: async page => {
            await page.getByRole("button", { name: "Apply offset and report viewport", exact: true }).click();
            await delay(80);
            const actual = await page.locator("#actual").innerText();
            return { pass: actual === "88", actual, expected: "88" };
        },
    },
    {
        name: "accessibility-after-scroll",
        scenario: "strict-a11y",
        kind: "grid journey",
        run: async page => {
            await scrollGrid(page, 640);
            const actual = await page.evaluate(() => ({
                visibleY: window.__audit.visible.y,
                a11yRows: [
                    ...new Set(
                        [...document.querySelectorAll('[data-testid^="glide-cell-"]')].map(el =>
                            Number(el.getAttribute("data-testid").split("-").at(-1))
                        )
                    ),
                ].sort((a, b) => a - b),
            }));
            return { pass: actual.visibleY > 0 && actual.a11yRows[0] === actual.visibleY, actual };
        },
    },
    {
        name: "async-grid-data",
        scenario: "strict-fetch",
        kind: "grid journey; native fetch and AbortSignal",
        run: async page => {
            await delay(500);
            const actual = await page.evaluate(() => ({
                loaded: document.querySelector("#loaded").textContent,
                requests: window.__audit.fetches,
            }));
            return { pass: actual.loaded === "true" && actual.requests.some(r => r.status === "success"), actual };
        },
    },
];
(async () => {
    const server = createServer();
    await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
    const origin = `http://127.0.0.1:${server.address().port}`;
    const browser = await chromium.launch({
        executablePath: process.env.AUDIT_CHROMIUM_PATH || undefined,
        headless: true,
        args: process.env.AUDIT_CHROMIUM_ARGS
            ? JSON.parse(process.env.AUDIT_CHROMIUM_ARGS)
            : [
                  "--no-sandbox",
                  "--disable-dev-shm-usage",
                  "--use-gl=angle",
                  "--use-angle=swiftshader",
                  "--enable-unsafe-swiftshader",
              ],
    });
    const version = browser.version(),
        results = [];
    const matrix = [];
    for (const variant of ["base", "current"])
        for (const test of tests) matrix.push({ variant, mode: "production", strict: false, test });
    for (const variant of ["base", "current"])
        for (const mode of ["development", "production"])
            for (const name of ["accessibility-after-scroll", "async-grid-data"])
                matrix.push({ variant, mode, strict: true, test: tests.find(t => t.name === name) });
    for (const variant of ["base", "current"])
        for (const name of ["accessibility-after-scroll", "async-grid-data"])
            matrix.push({ variant, mode: "development", strict: false, test: tests.find(t => t.name === name) });
    matrix.push({
        variant: "initial",
        mode: "production",
        strict: false,
        test: tests.find(t => t.name === "portal-replacement"),
    });
    if (process.env.AUDIT_VARIANTS) {
        const variants = process.env.AUDIT_VARIANTS.split(",");
        for (let i = matrix.length - 1; i >= 0; i--) if (!variants.includes(matrix[i].variant)) matrix.splice(i, 1);
    }
    if (process.env.AUDIT_FILTER) {
        const names = process.env.AUDIT_FILTER.split(",");
        for (let i = matrix.length - 1; i >= 0; i--) if (!names.includes(matrix[i].test.name)) matrix.splice(i, 1);
    }
    assert(matrix.length > 0, "No browser scenarios selected");
    for (const { variant, mode, strict, test } of matrix) {
        const context = await browser.newContext({ viewport: { width: 1100, height: 900 }, deviceScaleFactor: 1 });
        await context.tracing.start({ screenshots: true, snapshots: true, sources: true });
        const page = await context.newPage();
        const errors = [],
            networkFailures = [];
        page.on("pageerror", e => errors.push(e.message));
        page.on("requestfailed", r => networkFailures.push({ url: r.url(), failure: r.failure() }));
        const key = `${variant}-${mode}-${strict ? "strict" : "normal"}-${test.name}`;
        const start = Date.now();
        let result;
        try {
            await page.goto(`${origin}/${variant}/${mode}/?case=${test.scenario}&strict=${strict ? 1 : 0}`, {
                waitUntil: "load",
            });
            await page.waitForFunction(() => window.__audit?.ready, { timeout: 5000 });
            if (
                [
                    "grid",
                    "portal",
                    "event-target",
                    "event-target-initial",
                    "strict-a11y",
                    "strict-fetch",
                    "move-pending",
                ].includes(test.scenario)
            )
                await page.waitForTimeout(350);
            result = await test.run(page);
            result.status = result.pass ? "PASS" : "FAIL";
        } catch (error) {
            result = { status: "ERROR", pass: false, error: String(error) };
        }
        if (errors.length > 0) result = { ...result, pass: false, status: "FAIL" };
        result = {
            key,
            variant,
            mode,
            strict,
            scenario: test.name,
            kind: test.kind,
            ...result,
            errors,
            networkFailures,
            durationMs: Date.now() - start,
        };
        await page.screenshot({ path: path.join(resultsDir, key + ".png"), fullPage: true }).catch(() => {});
        await context.tracing.stop({ path: path.join(resultsDir, key + ".zip") });
        await context.close();
        results.push(result);
        fs.writeFileSync(path.join(resultsDir, "results.json"), JSON.stringify({ browser: version, results }, null, 2));
        console.log(result.status, key, JSON.stringify(result.actual ?? result.error));
    }
    await browser.close();
    await new Promise(resolve => server.close(resolve));
    console.log(
        "Browser:",
        version,
        "Runs:",
        results.length,
        "Pass:",
        results.filter(r => r.status === "PASS").length,
        "Fail:",
        results.filter(r => r.status === "FAIL").length,
        "Errors:",
        results.filter(r => r.status === "ERROR").length
    );
    process.exitCode = results.some(result => result.status !== "PASS") ? 1 : 0;
})().catch(e => {
    console.error(e);
    process.exit(1);
});
