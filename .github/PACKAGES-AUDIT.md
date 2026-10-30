# GitHub Packages publication audit — 29 October 2026

Audited main at `2307b21de75dead6c4ed4b8fcb10ac4441899897`.
No packages were published and no release workflows were dispatched.

## Configuration verified

| Workspace | Published name | Version |
| --- | --- | --- |
| core | @jlhartley/glide-data-grid | 6.0.4-alpha26 |
| cells | @jlhartley/glide-data-grid-cells | 6.0.4-alpha26 |
| source | @jlhartley/glide-data-grid-source | 6.0.4-alpha26 |

All three manifests specify `https://npm.pkg.github.com`, restricted access,
and the fork repository URL with the appropriate workspace directory. Root
`.npmrc` routes only `@jlhartley` to GitHub Packages. The package scope identifies
the owning account; the repository field associates packages with a repository.
Repository write access alone does not establish package publishing permission.

Both `release.js.yml` and `beta.js.yml` are manual workflows, gated to this
repository and dispatches from main. They use full-history tag checkout without
persisted credentials, contents:read and job-level packages:write. Authentication
is configured after build/lint/tests and NODE_AUTH_TOKEN is supplied only to
publication. Both channels share a concurrency group with cancellation disabled.
Current actions are checkout v7.0.1 and setup-node v7.1.0; the build runtime is
Node 22. No npmjs publishing token is required.

Validation requires the tag to resolve to HEAD, HEAD to be an ancestor of
origin/main, all three versions to match, the correct stable/prerelease channel,
the expected names, registry and access, and publishable packages. An ancestor
of main is accepted: the tag does not have to identify the current main tip.
The tag's tree must contain the validator and compatible build configuration.
The regex is a version-shape check, not a complete SemVer parser; use valid
SemVer versions when preparing tags.

## Demonstrated defect and isolated correction

`update-version.sh` previously replaced both workspace aliases with plain
versions on the `@glideapps/glide-data-grid` dependency key. A version bump could
therefore select the upstream package instead of this fork. The correction
preserves `workspace:@jlhartley/glide-data-grid@VERSION`. Keeping the upstream
dependency key is intentional: source imports use it, and pnpm packs it as
`npm:@jlhartley/glide-data-grid@VERSION`.

After a version bump, regenerate and commit the lockfile using pinned pnpm,
then validate with a frozen install. The helper itself does not update the lockfile.

## Safe validation completed

Used Node 24.22.1 locally and Corepack-selected pnpm 10.29.2. Shell syntax and
whitespace checks passed. Tests used disposable local git repositories, never
the fork's refs. Positive checks accepted stable/latest and prerelease/beta.
Negative checks rejected wrong channels, nonexistent tags, unrelated main
ancestry, mismatched versions/names, private packages, wrong registry and wrong
access. A fixture bump to alpha27 preserved both workspace aliases; local
`pnpm pack` converted both to the correct npm alias targeting this fork.

Packing was a manifest-transformation check without installation/build: those
fixture archives have no dist files and are not release artifacts. This audit
does not establish current full CI success, package write authorization, existing
registry versions or installability of built release archives. No remote tags
were present in the clone at audit time.

## Package settings to check in GitHub

The integration exposes repository operations but no package administration
operations. Package existence, visibility, Actions grants and existing versions
remain unverified. Sign in as the package owner and open
https://github.com/jlhartley?tab=packages. Repeat for each of the three names above:

1. Open the package, then **Package settings**. Confirm its linked repository
   is `jlhartley/glide-data-grid`; connect that repository if missing or incorrect.
2. Under **Manage Actions access**, add `jlhartley/glide-data-grid` if absent.
   Select **Write** (existing Admin also suffices). A repository link and an
   Actions grant are distinct settings; inherited access may already provide
   the grant, but verify the effective access.
3. Confirm visibility. To change it use **Danger Zone → Change visibility**.
   Keep Private unless public distribution is intended. Public visibility is
   irreversible. `--access=restricted` is not proof of the existing visibility.
4. Inspect **Versions** and record whether the intended version already exists
   for each package, and which versions the beta/latest dist-tags reference.
   Do not overwrite an existing version or assume a partial release is absent.

If a package does not yet exist, its settings cannot be configured in advance.
First publication with GITHUB_TOKEN and the repository metadata normally links
it to this repository; new packages default to private. Verify effective access
and intended visibility once created. This is a future release step, not an
instruction to publish during the audit.

Package ownership follows `@jlhartley`, not the original upstream project.
The GitHub connector's repository authorization and the Actions job's
GITHUB_TOKEN are different credentials. Granting the connector repository write
access does not grant the job access to an independently configured package.
Likewise, widening the repository's default token permissions is unnecessary:
the workflows already request packages:write explicitly.

## Remaining release gates

1. Merge the version-helper fix independently of source/lint corrections.
2. Verify the external settings and intended versions above.
3. Prepare versions and lockfile together. Obtain successful build, lint and
   all three test suites on the exact intended release commit; historical
   failure counts in WORKFLOWS.md are not a current CI result.
4. Inspect built `pnpm pack` archives for dist JavaScript, declarations, CSS
   exports and correct alias dependencies; test installation in a clean consumer
   with React 19. Registry-backed consumers need GitHub Packages authentication
   even for public npm packages. Other repositories need package read access
   for their GITHUB_TOKEN, or an appropriate classic PAT for installation.
5. Create a matching version tag on main that includes the required workflows
   and validator. Current alpha26 belongs to Beta CI, not Release CI.
6. Only in a separately authorized release, dispatch the chosen workflow from
   main. Publication is not atomic across the three packages. After interruption,
   inspect versions and dist-tags before deciding whether to resume or bump.

## References

- https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry
- https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility
- https://pnpm.io/workspaces#referencing-workspace-packages-through-aliases
