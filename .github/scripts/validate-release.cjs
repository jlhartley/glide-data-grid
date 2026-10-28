const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const { RELEASE_TAG: tag, RELEASE_CHANNEL: channel } = process.env;
assert(["latest", "beta"].includes(channel), "Unknown release channel");
const match = /^v(\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?)$/.exec(tag || "");
assert(match, "Use an existing vX.Y.Z or vX.Y.Z-prerelease tag");
assert.equal(match[1].includes("-"), channel === "beta", "Wrong release channel");
const git = (...args) => execFileSync("git", args, { encoding: "utf8" }).trim();
assert.equal(git("rev-parse", `refs/tags/${tag}^{commit}`), git("rev-parse", "HEAD"));
execFileSync("git", ["merge-base", "--is-ancestor", "HEAD", "origin/main"]);
for (const [dir, name] of [["core", "glide-data-grid"], ["cells", "glide-data-grid-cells"], ["source", "glide-data-grid-source"]]) {
    const pkg = require(`../../packages/${dir}/package.json`);
    assert.equal(pkg.name, `@jlhartley/${name}`);
    assert.equal(pkg.version, match[1], "Tag must match every package version");
    assert.equal(pkg.publishConfig.registry, "https://npm.pkg.github.com");
    assert.equal(pkg.publishConfig.access, "restricted");
    assert(!pkg.private, "Release package must be publishable");
}
console.log(`Validated ${tag} for ${channel} on GitHub Packages`);
