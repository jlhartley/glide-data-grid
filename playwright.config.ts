import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./experiments/first-edit",
    testMatch: "**/*.spec.ts",
    fullyParallel: false,
    workers: 1,
    forbidOnly: !!process.env.CI,
    retries: 0,
    reporter: "list",
    use: {
        baseURL: "http://127.0.0.1:4173",
        locale: "en-US",
        trace: "retain-on-failure",
    },
    projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
    webServer: {
        command:
            "pnpm --dir packages/core run build && " +
            "pnpm exec vite build experiments/first-edit --config experiments/first-edit/vite.config.mjs && " +
            "pnpm exec vite preview experiments/first-edit --config experiments/first-edit/vite.config.mjs --host 127.0.0.1 --port 4173 --strictPort",
        url: "http://127.0.0.1:4173",
        reuseExistingServer: false,
        timeout: 120_000,
    },
});
