# React 19 component typing audit

Baseline: `06fa9e0a92237e4ecdee96e5a76daebc1e2f208e` (main, including merged PRs #13 and #14).
Locked TypeScript 5.9.3, React 19.2.0 and @types/react 19.2.2; pnpm 10.29.2.

## Full core inventory

```sh
corepack pnpm install --frozen-lockfile
pnpm exec tsc -p packages/core/tsconfig.json --noEmit --pretty false --tsBuildInfoFile /tmp/core-audit.tsbuildinfo
```

Use a fresh build-info path for each comparison. Both src and test stay included;
strict options are unchanged. Full output is checked in alongside this report.

| Diagnostic | Before | After |
| --- | ---: | ---: |
| TS2694: removed React.VFC | 80 | 0 |
| TS7006: implicit any | 11 | 1 |
| TS2559: wrapper children rejected | 11 | 0 |
| TS2339: implicit children missing | 3 | 0 |
| TS2554: renderer argument count | 1 | 1 |
| TS2345: synthetic/native mouse event mismatch | 1 | 1 |
| TS2741: column fixture missing headerOrientation | 1 | 1 |
| TS2686: lint fixture JSX without React import | 1 | 1 |
| **Total** | **108** | **5** |

103 original diagnostics eliminated, with no new diagnostics. The remaining five
match the original file/code/message inventory exactly. The remaining implicit-any
callback is in scroll-shadows (the generic Number(...) test does not narrow its
number-or-function prop). These five are separate API/fixture/JSX issues, not
removed component types; no suppression or compiler relaxation is introduced.

## Changes and scope

Replace all 84 React.VFC declarations in TypeScript source across core (80), cells
(2) and source (2) with React.FC, retaining existing generic props. React 19 FC
has no implicit children. Add explicit PropsWithChildren to DocWrapper, two core
test Context fixtures, and the four cells/source Storybook wrappers that actually
consume children. No bodies, public library exports, lifecycle logic, dependencies,
lint fixtures or lint harness/workflow code change. The historical changelog's
old VFC snippet remains an archival quotation.

Searched TypeScript sources for VFC/VoidFunctionComponent, SFC/StatelessComponent,
ReactChild/ReactText/ReactFragment/ReactNodeArray, SFCElement, ComponentSpec/Mixin,
ReactHTML/ReactSVG/ReactType, ClassicComponent, LegacyRef and MutableRefObject:
no remaining uses. React.FC, FunctionComponent, ReactNode and explicit prop types
are valid under the locked React 19 definitions.

## Regression coverage and validation

```sh
pnpm run test:types:react19
pnpm run build
VITEST_MAX_THREADS=2 VITEST_MIN_THREADS=1 pnpm -r --workspace-concurrency=1 exec vitest run
```

- Dedicated strict, no-emit typecheck passes. The same fixture/config fails against
  unchanged main. It imports real documentation components and the test Context,
  accepts existing children/activation props and rejects implicit story children,
  non-string Highlight children, missing Marked children and invalid activation
  options via checked @ts-expect-error assertions. It is deliberately separate
  from the still-failing full core check and does not weaken that configuration.
- All core/cells/source ESM, CJS and declaration builds pass.
- Core 476, cells 62, source 12 tests pass: **550 total**.
- git diff --check passes.

Supplementary cells/source audits removed project references temporarily and
mapped @glideapps/glide-data-grid to the core source entry point, to inspect stories
without requiring full-project reference outputs. They show no remaining obsolete
component/implicit-children diagnostics. Cells retains 11 unrelated test errors
(editor result union narrowing and a partial date fixture); source retains an
incomplete Theme fixture plus six core DOM-iterability errors under source's lib
settings. These are exploratory audits, not claims that those full projects pass.

## CI follow-up

The focused test:types:react19 command is usable as a gate now. Full core
no-emit typechecking still exits nonzero, so it must not be advertised as clean.
Fix the five explicit remaining failures in a separate change, then add the full
core command to CI (with a fresh or correctly keyed build-info file). Keep src/test
included and strict options enabled; no diagnostic allowlist is needed once clean.
A monorepo-wide full-project gate additionally needs project-reference/output and
cells/source diagnostic cleanup; the passing production builds are narrower checks.
