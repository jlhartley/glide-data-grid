import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";
import js from "@eslint/js";
import { fileURLToPath } from "node:url";

// Preserve the existing rule sets while migrating to ESLint 9's flat config.
// The compatibility wrapper supports older plugin rule APIs (notably Unicorn).
export function createConfig(baseDirectory, config) {
    const compat = new FlatCompat({
        baseDirectory,
        resolvePluginsRelativeTo: fileURLToPath(new URL("..", import.meta.url)),
        recommendedConfig: js.configs.recommended,
    });
    return fixupConfigRules(
        compat.config({
            ...config,
            parserOptions: { ...config.parserOptions, tsconfigRootDir: baseDirectory },
        })
    );
}
