#!/bin/bash
set -euo pipefail

# Compatibility jobs are isolated; only their dependency overlay may change the lockfile.
# Override peer auto-installs too, so every workspace uses the selected major.
node -e 'const fs = require("node:fs"); const p = JSON.parse(fs.readFileSync("package.json", "utf8")); p.pnpm ??= {}; p.pnpm.overrides = { ...p.pnpm.overrides, react: "19", "react-dom": "19", "react-test-renderer": "19" }; fs.writeFileSync("package.json", JSON.stringify(p, null, 4) + "\n");'
pnpm add -Dw react@19 react-dom@19 react-test-renderer@19 @types/react@19 @types/react-dom@19
