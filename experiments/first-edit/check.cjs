const { chromium } = require(
    process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES
        ? process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES + "/playwright"
        : "playwright"
);
(async () => {
    const browser = await chromium.launch({
        executablePath: process.env.CHROMIUM_EXECUTABLE || "/usr/bin/chromium",
        args: ["--no-sandbox"],
    });
    const trials = [];
    for (const number of [false, true])
        for (let trial = 0; trial < 5; trial++) {
            const page = await browser.newPage();
            await page.goto("http://localhost:4173/" + (number ? "?number" : ""));
            await page.waitForLoadState("networkidle");
            const canvas = page.locator("canvas").first();
            await canvas.click({ position: { x: 100, y: 50 } });
            await page.keyboard.type(number ? "12345" : "edited", { delay: 75 });
            await page.waitForTimeout(400);
            await page.keyboard.press("Enter");
            await page.waitForTimeout(100);
            trials.push({ kind: number ? "Number" : "Text", trial, ...(await page.evaluate(() => window.results)) });
            await page.close();
        }
    console.log(JSON.stringify(trials, null, 2));
    await browser.close();
    if (
        process.argv.includes("--assert-full") &&
        trials.some(t => t.saved !== (t.kind === "Number" ? 12345 : "edited") || t.latency == null)
    ) {
        process.exitCode = 1;
    }
})();
