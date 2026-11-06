import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

// Resolve exactly the ESLint runner used by core's package script, not the root's
// runner: ESLint 9.39.0 incorrectly passes AST parents as a second listener arg.
const require = createRequire(new URL("../../packages/core/package.json", import.meta.url));
const { ESLint } = require("eslint");
const eslint = new ESLint({ cwd: fileURLToPath(new URL("../../packages/core", import.meta.url)) });
const rule = "@typescript-eslint/strict-boolean-expressions";

// Real files keep the parser AST, type-checker program and SourceCode text in
// agreement in both watch and CI single-run modes. Never alias snippets to an
// unrelated production file: single-run programs read that file from disk.
const cases = [
    ["JSX is a short-circuit result, not a boolean condition", 0],
    ["conditional object spread preserves missing locations and column zero", 0],
    ["a short-circuit result may be a column index including zero", 0],
    ["an always-truthy object in a real condition is still rejected", 1],
    ["an any-valued condition is still rejected", 1],
];

if (process.env.GLIDE_LINT_FIXTURE_WORKER === "1") {
    for (const [index, [name, expected]] of cases.entries()) {
        test(name, async () => {
            const [result] = await eslint.lintFiles(`test/lint-fixtures/boolean-${index}.tsx`);
            assert.equal(result.fatalErrorCount, 0, JSON.stringify(result.messages));
            assert.equal(
                result.messages.filter(message => message.ruleId === rule).length,
                expected,
                JSON.stringify(result.messages)
            );
        });
    }
} else {
    // Parser mode is selected at module initialization: use separate processes so
    // both the local watch-program path and CI single-run path remain covered.
    for (const singleRun of ["false", "true"]) {
        test(`core boolean rules with TSESTREE_SINGLE_RUN=${singleRun}`, context => {
            const env = { ...process.env, CI: "true", TSESTREE_SINGLE_RUN: singleRun, GLIDE_LINT_FIXTURE_WORKER: "1" };
            // A nested Node test runner must not inherit its parent worker marker.
            delete env.NODE_TEST_CONTEXT;
            const child = spawnSync(
                process.execPath,
                ["--test", "--test-reporter=tap", fileURLToPath(import.meta.url)],
                {
                    env,
                    timeout: 60_000,
                    encoding: "utf8",
                }
            );
            assert.ifError(child.error);
            assert.equal(child.status, 0, child.stdout + child.stderr);
            assert.match(child.stdout, /# tests 5\b/, child.stdout);
            assert.match(child.stdout, /# pass 5\b/, child.stdout);
            for (const line of child.stdout.trim().split(/\r?\n/)) context.diagnostic(line);
        });
    }
}
