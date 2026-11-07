# Remaining core lint findings

Base: `16eddc3` (current main, including merged PRs #13, #14 and #15).
This change is independent of the lifecycle, lint-harness and React typing PRs.

Run the real package configuration, bypassing the root harness:

```sh
cd packages/core
./node_modules/.bin/eslint src --ext .ts,.tsx -f json -o /tmp/core-lint.json
```

## Exact baseline inventory

Paths below are relative to `packages/core/src`; line numbers refer to the base.

| Rule | File and lines | Count | Classification and correction |
| --- | --- | ---: | --- |
| sonarjs/no-misleading-character-class | common/utils.tsx:183 | 2 | False positives on intentional Unicode ranges including combining marks. Extend the existing narrow exception to Sonar's equivalent rule; preserve the regex exactly and cover its behavior. |
| react-hooks/immutability | data-editor/use-column-sizer.ts:183,194 | 2 | False positives: Canvas 2D context belongs to the hook's private canvas. Measurement must set its font. Document two exact-line exceptions; preserve sizing and cache behavior. |
| react-hooks/immutability | docs/examples/server-side-data.stories.tsx:43 | 1 | Local primitive argument reassignment, not a runtime mutation of caller data. Use a normalized local constant. This exposes a render-time ref publication, corrected with the existing committed-ref bridge and stable dependency. |
| @typescript-eslint/no-floating-promises | internal/data-grid/data-grid-sprites.ts:87 | 1 | Genuine unhandled rejection on failed image decode/draw. Catch failure, retain the empty cached sprite to prevent retry loops, and preserve batch settlement. |
| react-hooks/immutability | internal/data-grid/data-grid.tsx:1038 | 1 | Genuine render-phase DOM write. Move to layout effect, compare the actual attached node's cursor, and handle replacement targets. A narrow exception documents the intentional post-commit DOM mutation, which the rule also flags. |
| sonarjs/no-nested-functions | internal/data-grid/data-grid.tsx:1844,1862 | 2 | Structural requirement, no observed behavior defect. Extract cell rendering within the same accessibility factory; share the no-op event methods to avoid excessive nesting without adding a React component. |
| sonarjs/no-unused-vars | internal/data-grid/render/data-grid-render.blit.ts:274 | 1 | Unused destructured width. Use the destructured widths in the existing comparison; preserve width-only blit decisions. |
| **Total errors** | | **10** | **0 after fixes** |
| no-console (warning) | docs/examples/selection-serialization.stories.tsx:41,137 | 2 | Existing example logging, unchanged. |

No global rule changes, public API changes or dependency changes. Exceptions are
limited to the intentional Unicode regex and three imperative canvas/DOM lines.

## Validation

- Direct core ESLint: **10 errors / 2 warnings -> 0 errors / 2 warnings**.
- Package lint includes the core cycle check; both pass. Root lint-harness tests
  pass with the already-merged #14 correction.
- Core: **480 passing** (476 existing plus four tests). Source: **12 passing**.
  Cells: **62 passing**. One earlier cells run reported a date-picker asynchronous
  rejection despite passing assertions; the repeat and baseline runs passed.
- All three package builds pass (ESM, CJS, declarations).
- Full-project TypeScript inventories remain identical to base: core **5**,
  source **1**, cells **11** diagnostics. These are existing story/test fixture
  problems; production builds pass. Core includes the intentional lint fixture's
  missing React import. No new TypeScript diagnostic is introduced.
- Two cursor tests fail on the base and pass after the fix: unchanged-cursor
  retargeting and a suspended render's attempted cursor publication. The sprite
  regression produces an unhandled rejection on base and passes cleanly after.
  Direction coverage preserves the intentionally broad character-range behavior.
- Production render comparison: **27/27 scenarios have identical mount/update
  counts**, for every tracked component, against current main. Use the existing
  `config/bench/ref-render-counts.cjs` runner with both historical arguments set
  to a built checkout of base and the adjusted root set to this checkout. For
  this current-main comparison only, set its temporary build define `BASE` to
  `"false"` for all variants: the base already uses #13's new offset-hook signature.
  Both trees resolve the same React installation. No harness edits are committed.
  This measures synchronous component executions and effect cascades, not FPS or
  browser paint. No new browser audit was run.

Reproduction (pnpm 10.29.2; bounded Vitest workers):

```sh
pnpm lint
VITEST_MAX_THREADS=2 VITEST_MIN_THREADS=1 pnpm --dir packages/core exec vitest run
pnpm --dir packages/source exec vitest run
pnpm --dir packages/cells exec vitest run
pnpm build
pnpm exec tsc -p packages/core/tsconfig.json --noEmit --tsBuildInfoFile /tmp/core-lint.tsbuildinfo
```

The last command intentionally exits nonzero for the five documented baseline
TypeScript findings. The root lint workflow no longer has the earlier harness blocker, but still
fails in other packages: source has three existing errors (refs in
`stories/utils.tsx:305`, immutability in `use-async-data-source.ts:29`,
set-state-in-effect in `use-undo-redo.ts:195`); cells has four existing refs
errors, two each in `cells/dropdown-cell.tsx:154` and
`cells/multi-select-cell.tsx:359`. These independent package findings remain
outside this focused core change.
