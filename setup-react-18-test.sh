#!/bin/bash
set -euo pipefail

# Compatibility jobs are isolated; only their dependency overlay may change the lockfile.
# Override peer auto-installs too, so every workspace uses the selected major.
node -e 'const fs = require("node:fs"); const p = JSON.parse(fs.readFileSync("package.json", "utf8")); p.pnpm ??= {}; p.pnpm.overrides = { ...p.pnpm.overrides, react: "18", "react-dom": "18", "react-test-renderer": "18" }; fs.writeFileSync("package.json", JSON.stringify(p, null, 4) + "\n");'
pnpm add -Dw react@18 react-dom@18 react-test-renderer@18 @types/react@18 @types/react-dom@18
