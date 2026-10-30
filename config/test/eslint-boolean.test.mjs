import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import test from "node:test";

// Resolve exactly the ESLint runner used by core's package script, not the root's
// runner: ESLint 9.39.0 incorrectly passes AST parents as a second listener arg.
const require = createRequire(new URL("../../packages/core/package.json", import.meta.url));
const { ESLint } = require("eslint");
const eslint = new ESLint({ cwd: fileURLToPath(new URL("../../packages/core", import.meta.url)) });
const rule = "@typescript-eslint/strict-boolean-expressions";

for (const [name, code, expected] of [
    ["JSX is a short-circuit result, not a boolean condition",
        'declare const show: boolean; export const view = show && <div />;', 0],
    ["conditional object spread preserves missing locations and column zero",
        'declare const location: readonly [number, number] | undefined; export const value = { ...(location && { location }) };', 0],
    ["a short-circuit result may be a column index including zero",
        'declare const enabled: boolean; declare const result: boolean | number; export const value = enabled && result;', 0],
    ["an always-truthy object in a real condition is still rejected",
        'declare const value: object; export function f() { if (value) return 1; return 0; }', 1],
    ["an any-valued condition is still rejected",
        'declare const value: any; export const result = value ? 1 : 0;', 1],
]) {
    test(name, async () => {
        const [result] = await eslint.lintText(code, { filePath: "src/common/utils.tsx" });
        assert.equal(result.fatalErrorCount, 0);
        assert.equal(result.messages.filter(message => message.ruleId === rule).length, expected);
    });
}
