import { expect, test } from "@playwright/test";

interface Results {
    latency: number | null;
    saved: string | number | null;
    react: string;
}

declare global {
    interface Window {
        results: Results;
    }
}

for (const kind of ["Text", "Number"] as const) {
    for (let trial = 1; trial <= 5; trial++) {
        test(`${kind} preserves the first edit (trial ${trial})`, async ({ page }, testInfo) => {
            const text = kind === "Number" ? "12345" : "edited";
            const expected = kind === "Number" ? 12345 : text;
            await page.goto(kind === "Number" ? "/?number" : "/");
            // This is intentionally a warmed-chunk check. Cold downloads are outside its scope.
            await page.waitForLoadState("networkidle");
            // The transparent scroller is the grid's pointer-event surface above its canvas.
            // Clicking the canvas locator times out waiting for this intentional overlay to move.
            await page.locator(".dvn-scroller").click({ position: { x: 100, y: 50 }, timeout: 5_000 });
            await page.keyboard.type(text, { delay: 75 });

            const input = page.locator("input:focus, textarea:focus");
            // Check content before Enter too, so a commit failure cannot hide character loss.
            await expect(input).toHaveValue(text);
            // Keep rapid-Enter out of this regression: allow the edited state to settle.
            await page.waitForTimeout(400);
            await page.keyboard.press("Enter");
            await expect.poll(() => page.evaluate(() => window.results.saved)).toBe(expected);

            const results = await page.evaluate(() => window.results);
            expect(results.latency).not.toBeNull();
            await testInfo.attach("first-edit-results", {
                body: JSON.stringify({ kind, trial, ...results }, null, 2),
                contentType: "application/json",
            });
        });
    }
}
