# Fork CI and publication

CI uses Node 22 and Corepack's `packageManager` pin (pnpm 10.29.2).
The three workspace packages build in dependency order. Lint is a separate,
required step. ESLint 9 uses flat configuration, with the official compatibility
utilities preserving existing rules and older plugin APIs.
Core (with coverage), source and cells tests run without watch mode against the
single locked React 19 installation. Exact development versions and pnpm
workspace overrides keep the runner and every package on the same React
instance. Hook tests use React Testing Library. CI never rewrites the lockfile.
Core coverage is retained in test output and the core-coverage Actions artifact.

This fork supports React 19 and React DOM 19 only (`^19.0.0` peer requirements).
The default test job covers that supported runtime, so there is no separate
compatibility matrix, dependency overlay helper or test-18/test-19 script.
The obsolete React 17 Next 12/CRA 5 consumer fixtures and their npm lockfiles
have been removed rather than retained as misleading compatibility checks.

## Publication (never run as part of verification)

Release CI and Beta CI are manual workflows, dispatched from main with an
existing version tag. Tag pushes do not publish. Tags must resolve to a commit
on main, match all three package versions, and have the correct release channel:
`vX.Y.Z` for `latest`, `vX.Y.Z-prerelease` for `beta`. The tagged commit must
include this workflow and its validation script. Current alpha versions can
only pass the beta workflow's validation.

The job checks package names, restricted access and GitHub Packages registry
before installation/build/lint/tests. It publishes core, cells and source via
pnpm so workspace aliases are rewritten for consumers. The workflow is limited
to jlhartley/glide-data-grid. Authentication uses GITHUB_TOKEN only on the
publication step, with contents:read and packages:write; checkout credentials
are not persisted. No NPM_TOKEN or npmjs publication action is used.

Existing packages must grant this repository Actions write access in their
GitHub Packages settings. Package visibility is managed there; this workflow
does not change it. Publication is not atomic: if a registry error interrupts
publication, inspect which versions already exist before retrying.

## Local verification (no publication)

```sh
corepack enable
pnpm --version # must be 10.29.2
pnpm install --frozen-lockfile
pnpm run build
pnpm run lint
pnpm run test --run --coverage
pnpm run test-source --run
pnpm run test-cells --run
```

## Dependency and lint configuration validation on 29 October 2026

Local runtime: Node 24.22.1 (workflow runtime: Node 22), Corepack 0.34.6,
pnpm 10.29.2. Frozen lockfile validation, all three workspace builds,
shell/JavaScript syntax and whitespace checks passed. The lockfile is unchanged:
its React overrides already resolve the supported React 19 versions. Module
resolution was checked from the root and each workspace: all resolve to one
shared React 19.2.0 instance.

| Check | Result |
| --- | --- |
| Core, React 19.2.0 with coverage | 385 passed, 2 failed |
| Source | 7 passed |
| Cells | 62 passed |
| Core cycle check | Passed |
| Core ESLint | Runs to completion: 230 errors, 31 warnings |
| Source ESLint | Runs to completion: 5 errors |
| Cells ESLint | Runs to completion: 6 errors |

The two core failures are unchanged behavioural assertions: the blend smoke
test expects fractional channels while the implementation rounds them, and the
Ctrl Arrow keys test expects column zero while the fork's Ctrl+Left handler
selects `freezeColumns + 1`. No assertion has been relaxed and no production
behaviour was changed in this configuration fix.

Lint now loads the rule sets and completes analysis rather than crashing on
SonarJS's flat-format preset or old plugin APIs. The remaining findings in
unchanged production code include React compiler ref/immutability restrictions,
SonarJS type comparisons/deprecations and TypeScript checks. Existing rule
severities and recommended presets are retained; resolving those findings needs
separate source/rule-policy review. CI and publication therefore remain failing
until those findings and the two behavioural failures are addressed.

The runtime and package structure remain unchanged; only the supported React
peer range is narrowed. Existing lint findings and behavioural failures remain
visible. Package access/visibility settings and release workflow verification
remain separate work. Nothing was published.
