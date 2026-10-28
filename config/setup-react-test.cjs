const assert = require("node:assert/strict");
const fs = require("node:fs");

const major = process.argv[2];
const versions = { 18: "18.3.1", 19: "19.2.0" };
assert(Object.hasOwn(versions, major), "Choose React 18 or 19");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
// Write the direct dependencies before pnpm resolves the $react overrides.
// pnpm add resolves overrides against the previous manifest in pnpm 10.
pkg.devDependencies.react = versions[major];
pkg.devDependencies["react-dom"] = versions[major];
pkg.devDependencies["@types/react"] = `^${major}`;
pkg.devDependencies["@types/react-dom"] = `^${major}`;
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 4) + "\n");
