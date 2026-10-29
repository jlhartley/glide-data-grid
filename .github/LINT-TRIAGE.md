# ESLint investigation and focused fixes — 29 October 2026

Baseline: PR #2 head `89a430f42d4bea7eb4e55a5d64c88ea6f366e9a7`.
[CI run 40873911036](https://github.com/jlhartley/glide-data-grid/actions/runs/40873911036) tested merge commit `7684a5948991e061e0d13c6606551db312a1413b`.
Local JSON analyses reproduce core's CI counts and independently cover source/cells (recursive lint stops after core fails). Node 24.22.1, Corepack-selected pnpm 10.29.2; CI used Node 22.23.4.

| Package | Baseline errors | Warnings | After first batch errors | Warnings |
| --- | ---: | ---: | ---: | ---: |
| core | 230 | 31 | 216 | 31 |
| source | 5 | 1 | 5 | 1 |
| cells | 6 | 5 | 6 | 5 |

## First batch: decision and scope

The largest groups are different-types-comparison (49), refs (40 across packages), and no-nested-conditional (30). Their size does not make a blanket fix safe: they mix defensive runtime checks, render/commit lifecycle issues, and disputed style policy.

The highest-impact batch with an established behavior-preserving replacement is React ref type deprecation: replace all 14 `MutableRefObject` references in core with `RefObject` across 11 files. In the locked `@types/react` 19.2.2 declarations, both interfaces have the exact same mutable `current: T` member; the former is marked deprecated in favor of the latter. Preserve every existing type argument, including `null` and `undefined`. No ref reads/writes, hooks, dependencies, public prop shapes or execution order are changed. This removes two thirds of the 21 deprecation errors without disabling the deprecation rule. The remaining seven concern `navigator.platform`, `KeyboardEvent.keyCode`, and the grid's own deprecated prop compatibility paths.

The first batch changes no lint configuration, suppressions, dependency versions, workflow, React support contract, or behavioral assertions. This PR is stacked on `fix/react-and-lint` so its diff excludes the React 19 migration. Retarget to main after #2 merges. The known blend-channel rounding and Ctrl+Left test failures remain separate work.

## Findings and likely causes

Counts below are baseline diagnostics, not unique root causes. Each row includes all affected files, with line numbers grouped per file. Paths are relative to the repository root. The classifications are triage judgments, not claims that every warning in a group has the same cause.

### `sonarjs/different-types-comparison` — 49 errors, 0 warnings

Mixed: type-model mismatch and possibly redundant guards. Indexed caches/arrays can be absent at runtime despite non-optional index signatures; do not delete guards or accept loose-equality suggestions. Fix nullable/indexed types with call-site verification first.

- [packages/core/src/cells/drilldown-cell.tsx](../packages/core/src/cells/drilldown-cell.tsx): 69
- [packages/core/src/cells/image-cell.tsx](../packages/core/src/cells/image-cell.tsx): 102
- [packages/core/src/common/image-window-loader.ts](../packages/core/src/common/image-window-loader.ts): 82, 101
- [packages/core/src/common/utils.tsx](../packages/core/src/common/utils.tsx): 23
- [packages/core/src/data-editor/data-editor-fns.ts](../packages/core/src/data-editor/data-editor-fns.ts): 181, 208
- [packages/core/src/data-editor/data-editor.tsx](../packages/core/src/data-editor/data-editor.tsx): 179, 975, 1568, 1943, 3513, 3665, 3683, 3815
- [packages/core/src/data-editor/use-column-sizer.ts](../packages/core/src/data-editor/use-column-sizer.ts): 40, 189, 196
- [packages/core/src/docs/examples/server-side-data.stories.tsx](../packages/core/src/docs/examples/server-side-data.stories.tsx): 62, 139
- [packages/core/src/docs/examples/shadow-dom.stories.tsx](../packages/core/src/docs/examples/shadow-dom.stories.tsx): 58
- [packages/core/src/internal/data-grid-dnd/data-grid-dnd.tsx](../packages/core/src/internal/data-grid-dnd/data-grid-dnd.tsx): 134, 173
- [packages/core/src/internal/data-grid-search/data-grid-search.tsx](../packages/core/src/internal/data-grid-search/data-grid-search.tsx): 145, 157
- [packages/core/src/internal/data-grid/color-parser.ts](../packages/core/src/internal/data-grid/color-parser.ts): 26, 67
- [packages/core/src/internal/data-grid/data-grid-sprites.ts](../packages/core/src/internal/data-grid/data-grid-sprites.ts): 72, 84
- [packages/core/src/internal/data-grid/data-grid.tsx](../packages/core/src/internal/data-grid/data-grid.tsx): 616, 660, 663, 926, 1080, 1086, 1144, 1147, 1206, 1255, 1297, 1506
- [packages/core/src/internal/data-grid/render/data-grid-lib.ts](../packages/core/src/internal/data-grid/render/data-grid-lib.ts): 314
- [packages/core/src/internal/data-grid/render/data-grid-render.header.ts](../packages/core/src/internal/data-grid/render/data-grid-render.header.ts): 198, 582
- [packages/core/src/internal/data-grid/render/data-grid-render.ts](../packages/core/src/internal/data-grid/render/data-grid-render.ts): 446, 517
- [packages/core/src/internal/data-grid/render/data-grid.render.rings.ts](../packages/core/src/internal/data-grid/render/data-grid.render.rings.ts): 196
- [packages/core/src/internal/scrolling-data-grid/infinite-scroller.tsx](../packages/core/src/internal/scrolling-data-grid/infinite-scroller.tsx): 196

### `react-hooks/refs` — 40 errors, 0 warnings

Correctness candidates: render-time ref reads/writes, including shared hooks, scroll state and portal targets. Review each data flow; event/effect reads and guarded lazy initialization differ from render dependencies. Require committed-render/StrictMode tests before changing lifecycle timing.

- [packages/cells/src/cells/dropdown-cell.tsx](../packages/cells/src/cells/dropdown-cell.tsx): 154
- [packages/cells/src/cells/multi-select-cell.tsx](../packages/cells/src/cells/multi-select-cell.tsx): 359
- [packages/core/src/common/utils.tsx](../packages/core/src/common/utils.tsx): 19, 222, 224, 226, 256, 279, 280, 283
- [packages/core/src/data-editor/stories/utils.tsx](../packages/core/src/data-editor/stories/utils.tsx): 460
- [packages/core/src/data-editor/use-initial-scroll-offset.ts](../packages/core/src/data-editor/use-initial-scroll-offset.ts): 50, 52, 53, 60, 63
- [packages/core/src/docs/02-editing-data.stories.tsx](../packages/core/src/docs/02-editing-data.stories.tsx): 332, 359
- [packages/core/src/docs/04-streaming-data.stories.tsx](../packages/core/src/docs/04-streaming-data.stories.tsx): 393, 428
- [packages/core/src/docs/05-copy-paste.stories.tsx.tsx](../packages/core/src/docs/05-copy-paste.stories.tsx.tsx): 210, 237, 273
- [packages/core/src/docs/examples/custom-event-target.stories.tsx](../packages/core/src/docs/examples/custom-event-target.stories.tsx): 150
- [packages/core/src/docs/examples/stretch-column-size.stories.tsx](../packages/core/src/docs/examples/stretch-column-size.stories.tsx): 39
- [packages/core/src/internal/data-grid-overlay-editor/data-grid-overlay-editor.tsx](../packages/core/src/internal/data-grid-overlay-editor/data-grid-overlay-editor.tsx): 80, 82, 213
- [packages/core/src/internal/data-grid/use-animation-queue.ts](../packages/core/src/internal/data-grid/use-animation-queue.ts): 12
- [packages/core/src/internal/scrolling-data-grid/use-kinetic-scroll.ts](../packages/core/src/internal/scrolling-data-grid/use-kinetic-scroll.ts): 14
- [packages/source/src/stories/utils.tsx](../packages/source/src/stories/utils.tsx): 306
- [packages/source/src/use-movable-columns.ts](../packages/source/src/use-movable-columns.ts): 50

### `sonarjs/no-nested-conditional` — 30 errors, 0 warnings

Readability policy: overlaps the explicitly disabled unicorn/no-nested-ternary rule. Decide whether to preserve that policy or refactor selected expressions; no automatic production rewrite.

- [packages/core/src/cells/marker-cell.tsx](../packages/core/src/cells/marker-cell.tsx): 61
- [packages/core/src/cells/number-cell.tsx](../packages/core/src/cells/number-cell.tsx): 60
- [packages/core/src/data-editor/copy-paste.ts](../packages/core/src/data-editor/copy-paste.ts): 42, 44
- [packages/core/src/data-editor/data-editor.tsx](../packages/core/src/data-editor/data-editor.tsx): 952, 1139, 1530, 1531, 1713, 1766
- [packages/core/src/data-editor/stories/utils.tsx](../packages/core/src/data-editor/stories/utils.tsx): 663
- [packages/core/src/docs/examples/uneven-rows.stories.tsx](../packages/core/src/docs/examples/uneven-rows.stories.tsx): 38
- [packages/core/src/internal/data-grid-search/data-grid-search.tsx](../packages/core/src/internal/data-grid-search/data-grid-search.tsx): 395
- [packages/core/src/internal/data-grid/data-grid.tsx](../packages/core/src/internal/data-grid/data-grid.tsx): 570, 571, 576, 577, 601, 761, 976, 978, 980, 982, 1879
- [packages/core/src/internal/data-grid/render/data-grid-lib.ts](../packages/core/src/internal/data-grid/render/data-grid-lib.ts): 697
- [packages/core/src/internal/data-grid/render/data-grid-render.header.ts](../packages/core/src/internal/data-grid/render/data-grid-render.header.ts): 88
- [packages/core/src/internal/data-grid/render/data-grid-render.ts](../packages/core/src/internal/data-grid/render/data-grid-render.ts): 238, 790

### `sonarjs/deprecation` — 21 errors, 0 warnings

Mixed: 14 obsolete React ref type names (fixed here); 7 remaining browser APIs or deliberately supported deprecated grid props. Compatibility adapters need a different treatment from deprecated dependencies.

- [packages/core/src/common/browser-detect.ts](../packages/core/src/common/browser-detect.ts): 25
- [packages/core/src/common/resize-detector.ts](../packages/core/src/common/resize-detector.ts): 2, 42
- [packages/core/src/data-editor/data-editor.tsx](../packages/core/src/data-editor/data-editor.tsx): 914, 915, 916, 2833
- [packages/core/src/data-editor/use-autoscroll.ts](../packages/core/src/data-editor/use-autoscroll.ts): 9
- [packages/core/src/data-editor/use-initial-scroll-offset.ts](../packages/core/src/data-editor/use-initial-scroll-offset.ts): 11, 38
- [packages/core/src/docs/examples/server-side-data.stories.tsx](../packages/core/src/docs/examples/server-side-data.stories.tsx): 41
- [packages/core/src/internal/data-grid-dnd/data-grid-dnd.tsx](../packages/core/src/internal/data-grid-dnd/data-grid-dnd.tsx): 75
- [packages/core/src/internal/data-grid-search/data-grid-search.tsx](../packages/core/src/internal/data-grid-search/data-grid-search.tsx): 88
- [packages/core/src/internal/data-grid/data-grid.tsx](../packages/core/src/internal/data-grid/data-grid.tsx): 110, 112, 1398, 1428
- [packages/core/src/internal/data-grid/render/draw-grid-arg.ts](../packages/core/src/internal/data-grid/render/draw-grid-arg.ts): 70
- [packages/core/src/internal/scrolling-data-grid/infinite-scroller.tsx](../packages/core/src/internal/scrolling-data-grid/infinite-scroller.tsx): 26
- [packages/core/src/internal/scrolling-data-grid/scrolling-data-grid.tsx](../packages/core/src/internal/scrolling-data-grid/scrolling-data-grid.tsx): 20
- [packages/core/src/internal/scrolling-data-grid/use-kinetic-scroll.ts](../packages/core/src/internal/scrolling-data-grid/use-kinetic-scroll.ts): 6

### `@typescript-eslint/strict-boolean-expressions` — 16 errors, 0 warnings

Type accuracy/correctness candidates: object conditions assumed always true. Inspect real nullability and external inputs before removing defensive branches.

- [packages/core/src/data-editor/data-editor.tsx](../packages/core/src/data-editor/data-editor.tsx): 3492, 4319
- [packages/core/src/docs/examples/custom-event-target.stories.tsx](../packages/core/src/docs/examples/custom-event-target.stories.tsx): 142
- [packages/core/src/docs/examples/fill-handle.stories.tsx](../packages/core/src/docs/examples/fill-handle.stories.tsx): 106
- [packages/core/src/internal/data-grid-overlay-editor/private/drilldown-overlay-editor.tsx](../packages/core/src/internal/data-grid-overlay-editor/private/drilldown-overlay-editor.tsx): 56
- [packages/core/src/internal/data-grid-overlay-editor/private/image-overlay-editor.tsx](../packages/core/src/internal/data-grid-overlay-editor/private/image-overlay-editor.tsx): 45
- [packages/core/src/internal/data-grid-overlay-editor/private/markdown-overlay-editor.tsx](../packages/core/src/internal/data-grid-overlay-editor/private/markdown-overlay-editor.tsx): 55
- [packages/core/src/internal/data-grid-overlay-editor/private/uri-overlay-editor.tsx](../packages/core/src/internal/data-grid-overlay-editor/private/uri-overlay-editor.tsx): 43
- [packages/core/src/internal/data-grid-search/data-grid-search.tsx](../packages/core/src/internal/data-grid-search/data-grid-search.tsx): 447
- [packages/core/src/internal/data-grid/color-parser.ts](../packages/core/src/internal/data-grid/color-parser.ts): 28
- [packages/core/src/internal/data-grid/data-grid.tsx](../packages/core/src/internal/data-grid/data-grid.tsx): 1915, 1916
- [packages/core/src/internal/data-grid/render/data-grid-render.ts](../packages/core/src/internal/data-grid/render/data-grid-render.ts): 175
- [packages/core/src/internal/scrolling-data-grid/infinite-scroller.tsx](../packages/core/src/internal/scrolling-data-grid/infinite-scroller.tsx): 354, 355
- [packages/source/src/use-undo-redo.ts](../packages/source/src/use-undo-redo.ts): 181

### `sonarjs/function-return-type` — 9 errors, 0 warnings

Policy/API shape: intentional unions and callback contracts may return heterogeneous values. Validate contracts; avoid flattening them solely for lint.

- [packages/core/src/data-editor/data-editor.tsx](../packages/core/src/data-editor/data-editor.tsx): 988, 1069
- [packages/core/src/data-editor/row-grouping.ts](../packages/core/src/data-editor/row-grouping.ts): 270
- [packages/core/src/data-editor/use-cells-for-selection.ts](../packages/core/src/data-editor/use-cells-for-selection.ts): 15, 43
- [packages/core/src/docs/examples/validate-data.stories.tsx](../packages/core/src/docs/examples/validate-data.stories.tsx): 49
- [packages/core/src/internal/click-outside-container/click-outside-container.tsx](../packages/core/src/internal/click-outside-container/click-outside-container.tsx): 42
- [packages/core/src/internal/data-grid/render/data-grid-render.blit.ts](../packages/core/src/internal/data-grid/render/data-grid-render.blit.ts): 233
- [packages/core/src/stories/story-utils.tsx](../packages/core/src/stories/story-utils.tsx): 53

### `sonarjs/no-nested-assignment` — 8 errors, 0 warnings

Readability refactor candidate: split chained assignments while preserving evaluation order; separate follow-up batch.

- [packages/core/src/data-editor/stories/utils.tsx](../packages/core/src/data-editor/stories/utils.tsx): 428
- [packages/core/src/docs/examples/rapid-updates.stories.tsx](../packages/core/src/docs/examples/rapid-updates.stories.tsx): 30
- [packages/core/src/internal/data-grid/data-grid.stories.tsx](../packages/core/src/internal/data-grid/data-grid.stories.tsx): 117, 202, 294, 382
- [packages/core/src/internal/growing-entry/growing-entry.tsx](../packages/core/src/internal/growing-entry/growing-entry.tsx): 29
- [packages/core/src/internal/scrolling-data-grid/scrolling-data-grid.stories.tsx](../packages/core/src/internal/scrolling-data-grid/scrolling-data-grid.stories.tsx): 68

### `sonarjs/pseudo-random` — 8 errors, 0 warnings

Security-policy review: examples generate mock data; grid search also uses randomness. Determine whether any security boundary exists before replacing Math.random.

- [packages/core/src/data-editor/stories/data-editor.stories.tsx](../packages/core/src/data-editor/stories/data-editor.stories.tsx): 758
- [packages/core/src/data-editor/stories/utils.tsx](../packages/core/src/data-editor/stories/utils.tsx): 329, 662
- [packages/core/src/docs/04-streaming-data.stories.tsx](../packages/core/src/docs/04-streaming-data.stories.tsx): 325, 326, 337, 338
- [packages/core/src/internal/data-grid-search/data-grid-search.tsx](../packages/core/src/internal/data-grid-search/data-grid-search.tsx): 109

### `@typescript-eslint/no-empty-object-type` — 7 errors, 0 warnings

Mixed: core {} generic constraints/defaults mean non-nullish values, not necessarily objects; cells has two empty interfaces extending MenuProps<any>, suitable for equivalent aliases. Do not replace all {} with object/unknown.

- [packages/cells/src/cells/dropdown-cell.tsx](../packages/cells/src/cells/dropdown-cell.tsx): 16
- [packages/cells/src/cells/multi-select-cell.tsx](../packages/cells/src/cells/multi-select-cell.tsx): 123
- [packages/core/src/cells/cell-types.ts](../packages/core/src/cells/cell-types.ts): 50
- [packages/core/src/common/utils.tsx](../packages/core/src/common/utils.tsx): 230
- [packages/core/src/internal/data-grid/data-grid-types.ts](../packages/core/src/internal/data-grid/data-grid-types.ts): 440
- [packages/core/src/internal/data-grid/event-args.ts](../packages/core/src/internal/data-grid/event-args.ts): 104

### `react-hooks/immutability` — 6 errors, 0 warnings

Correctness candidates/mixed inference: writes to ref-held caches, canvas context, state-like values. Inspect ownership and render timing; a ref name can affect compiler inference, but renaming is not a correctness fix.

- [packages/core/src/data-editor/use-column-sizer.ts](../packages/core/src/data-editor/use-column-sizer.ts): 173, 184
- [packages/core/src/docs/examples/server-side-data.stories.tsx](../packages/core/src/docs/examples/server-side-data.stories.tsx): 43
- [packages/core/src/internal/data-grid/data-grid.tsx](../packages/core/src/internal/data-grid/data-grid.tsx): 1001
- [packages/core/src/internal/scrolling-data-grid/infinite-scroller.tsx](../packages/core/src/internal/scrolling-data-grid/infinite-scroller.tsx): 291
- [packages/source/src/use-async-data-source.ts](../packages/source/src/use-async-data-source.ts): 29

### `sonarjs/fixme-tag` — 5 errors, 0 warnings

Comment/task policy: existing FIXME comments require investigation; deleting the comments would not resolve the underlying work.

- [packages/core/src/cells/cell-types.ts](../packages/core/src/cells/cell-types.ts): 104
- [packages/core/src/data-editor/data-editor.tsx](../packages/core/src/data-editor/data-editor.tsx): 2784, 3860
- [packages/core/src/data-editor/row-grouping-api.ts](../packages/core/src/data-editor/row-grouping-api.ts): 45
- [packages/core/src/internal/data-grid/render/data-grid-lib.ts](../packages/core/src/internal/data-grid/render/data-grid-lib.ts): 63

### `sonarjs/no-commented-code` — 4 errors, 0 warnings

Comment/readability policy. Inspect retained explanations and disabled algorithms before removal.

- [packages/core/src/internal/data-grid/data-grid-types.ts](../packages/core/src/internal/data-grid/data-grid-types.ts): 211
- [packages/core/src/internal/data-grid/render/data-grid-lib.ts](../packages/core/src/internal/data-grid/render/data-grid-lib.ts): 683
- [packages/core/src/internal/data-grid/render/data-grid-render.blit.ts](../packages/core/src/internal/data-grid/render/data-grid-render.blit.ts): 207
- [packages/core/src/internal/data-grid/render/data-grid-render.cells.ts](../packages/core/src/internal/data-grid/render/data-grid-render.cells.ts): 186

### `sonarjs/no-unused-vars` — 4 errors, 0 warnings

Cleanup candidate; distinguish harmless unused bindings from missing use of a computed value.

- [packages/core/src/docs/examples/content-alignment.stories.tsx](../packages/core/src/docs/examples/content-alignment.stories.tsx): 39
- [packages/core/src/docs/examples/right-to-left.stories.tsx](../packages/core/src/docs/examples/right-to-left.stories.tsx): 46
- [packages/core/src/docs/examples/row-hover.stories.tsx](../packages/core/src/docs/examples/row-hover.stories.tsx): 41
- [packages/core/src/internal/data-grid/render/data-grid-render.blit.ts](../packages/core/src/internal/data-grid/render/data-grid-render.blit.ts): 278

### `sonarjs/public-static-readonly` — 4 errors, 0 warnings

Type/API policy: static singleton fields; adding readonly restricts consumers, so review public API compatibility.

- [packages/core/src/internal/data-grid/data-grid-types.ts](../packages/core/src/internal/data-grid/data-grid-types.ts): 596, 600, 604, 608

### `sonarjs/unused-import` — 4 errors, 0 warnings

Low-risk cleanup candidate; check type/value import and side-effect behavior.

- [packages/core/src/data-editor/stories/utils.tsx](../packages/core/src/data-editor/stories/utils.tsx): 17
- [packages/core/src/docs/examples/fill-handle.stories.tsx](../packages/core/src/docs/examples/fill-handle.stories.tsx): 13
- [packages/core/src/docs/examples/row-grouping.stories.tsx](../packages/core/src/docs/examples/row-grouping.stories.tsx): 14
- [packages/core/src/docs/examples/scroll-offset.stories.tsx](../packages/core/src/docs/examples/scroll-offset.stories.tsx): 11

### `sonarjs/void-use` — 3 errors, 0 warnings

The rule already permits promise-like operands. Two reports wrap synchronous void-returning clipboard helpers (fixed in batch two); the third wraps an optional appendRow promise. Preserve promise-discarding sites and review rejection handling separately.

- [packages/core/src/data-editor/data-editor-fns.ts](../packages/core/src/data-editor/data-editor-fns.ts): 209, 211
- [packages/core/src/docs/examples/append-row-handle.stories.tsx](../packages/core/src/docs/examples/append-row-handle.stories.tsx): 36

### `sonarjs/no-equals-in-for-termination` — 2 errors, 0 warnings

Correctness review: prove counter direction/bounds before changing termination conditions.

- [packages/core/src/internal/data-grid/render/data-grid-lib.ts](../packages/core/src/internal/data-grid/render/data-grid-lib.ts): 794, 863

### `sonarjs/no-misleading-character-class` — 2 errors, 0 warnings

Unicode correctness candidate: review grapheme regex semantics with dedicated Unicode cases before rewriting.

- [packages/core/src/common/utils.tsx](../packages/core/src/common/utils.tsx): 171

### `sonarjs/no-nested-functions` — 2 errors, 0 warnings

Complexity/readability policy in grid callbacks; not evidence by itself of incorrect behavior.

- [packages/core/src/internal/data-grid/data-grid.tsx](../packages/core/src/internal/data-grid/data-grid.tsx): 1818, 1836

### `sonarjs/redundant-type-aliases` — 2 errors, 0 warnings

Type readability/API policy; named aliases may document exported concepts.

- [packages/core/src/internal/data-grid/data-grid-types.ts](../packages/core/src/internal/data-grid/data-grid-types.ts): 36, 38

### `sonarjs/todo-tag` — 2 errors, 0 warnings

Warning/task policy; comments alone are not executable defects.

- [packages/core/src/data-editor/stories/utils.tsx](../packages/core/src/data-editor/stories/utils.tsx): 664
- [packages/core/src/data-editor/use-initial-scroll-offset.ts](../packages/core/src/data-editor/use-initial-scroll-offset.ts): 54

### `sonarjs/use-type-alias` — 2 errors, 0 warnings

Readability rule for repeated unions/intersections, rather than a general preference for type aliases over interfaces. Reuse existing domain aliases or introduce a small local alias; preserve the surrounding interface.

- [packages/core/src/docs/examples/input-blending.stories.tsx](../packages/core/src/docs/examples/input-blending.stories.tsx): 28
- [packages/core/src/internal/data-grid-overlay-editor/data-grid-overlay-editor.tsx](../packages/core/src/internal/data-grid-overlay-editor/data-grid-overlay-editor.tsx): 36

### `@typescript-eslint/no-floating-promises` — 1 errors, 0 warnings

Correctness candidate: SpriteManager image decode promise needs an explicit error/rejection policy.

- [packages/core/src/internal/data-grid/data-grid-sprites.ts](../packages/core/src/internal/data-grid/data-grid-sprites.ts): 87

### `@typescript-eslint/no-unused-expressions` — 1 errors, 0 warnings

Control-flow/readability candidate: preserve short-circuit call semantics when converting to if.

- [packages/core/src/internal/data-grid/render/data-grid.render.rings.ts](../packages/core/src/internal/data-grid/render/data-grid.render.rings.ts): 231

### `react-hooks/set-state-in-effect` — 1 errors, 0 warnings

Effect/state design review in undo/redo; cascading render warning is not justification to move updates into render or delete synchronization.

- [packages/source/src/use-undo-redo.ts](../packages/source/src/use-undo-redo.ts): 195

### `sonarjs/argument-type` — 1 errors, 0 warnings

Possible overload-analysis mismatch: text split call is flagged against the Symbol.split overload; verify actual argument and TypeScript overloads before changing code.

- [packages/core/src/cells/text-cell.tsx](../packages/core/src/cells/text-cell.tsx): 25

### `sonarjs/no-dead-store` — 1 errors, 0 warnings

Cleanup or latent bug: inspect why checkbox renderer initializes/replaces the value.

- [packages/core/src/internal/data-grid/render/draw-checkbox.ts](../packages/core/src/internal/data-grid/render/draw-checkbox.ts): 105

### `sonarjs/no-duplicate-in-composite` — 1 errors, 0 warnings

Type cleanup candidate; confirm union membership and exported type contract.

- [packages/core/src/data-editor/data-editor.tsx](../packages/core/src/data-editor/data-editor.tsx): 3591

### `sonarjs/no-globals-shadowing` — 1 errors, 0 warnings

Naming/style candidate; inspect scope before renaming.

- [packages/core/src/internal/data-grid/color-parser.ts](../packages/core/src/internal/data-grid/color-parser.ts): 50

### `sonarjs/no-undefined-argument` — 1 errors, 0 warnings

Call-shape policy: explicit undefined can preserve optional argument positions/behavior.

- [packages/core/src/data-editor/data-editor.tsx](../packages/core/src/data-editor/data-editor.tsx): 3704

### `sonarjs/prefer-read-only-props` — 1 errors, 0 warnings

Type/style policy in a story; readonly does not itself change runtime behavior.

- [packages/core/src/data-editor/stories/data-editor.stories.tsx](../packages/core/src/data-editor/stories/data-editor.stories.tsx): 354

### `sonarjs/reduce-initial-value` — 1 errors, 0 warnings

Correctness candidate: establish whether an empty collection is reachable before selecting an identity value.

- [packages/core/src/data-editor/data-editor.tsx](../packages/core/src/data-editor/data-editor.tsx): 3861

### `sonarjs/updated-loop-counter` — 1 errors, 0 warnings

Correctness candidate: renderer walk algorithm intentionally advances counters; inspect invariants and test boundaries.

- [packages/core/src/internal/data-grid/render/data-grid-render.walk.ts](../packages/core/src/internal/data-grid/render/data-grid-render.walk.ts): 123

### `(unused disable)` — 0 errors, 35 warnings

Warnings from obsolete eslint-disable comments. Remove only after verifying the associated rule remains enabled and clean.

- [packages/cells/src/cells/links-cell.tsx](../packages/cells/src/cells/links-cell.tsx): 130
- [packages/cells/src/cells/range-cell.tsx](../packages/cells/src/cells/range-cell.tsx): 120
- [packages/cells/src/cells/star-cell.tsx](../packages/cells/src/cells/star-cell.tsx): 98
- [packages/cells/src/cells/tags-cell.tsx](../packages/cells/src/cells/tags-cell.tsx): 130
- [packages/cells/src/cells/user-profile-cell.tsx](../packages/cells/src/cells/user-profile-cell.tsx): 1
- [packages/core/src/cells/bubble-cell.tsx](../packages/core/src/cells/bubble-cell.tsx): 1
- [packages/core/src/cells/drilldown-cell.tsx](../packages/core/src/cells/drilldown-cell.tsx): 1
- [packages/core/src/cells/image-cell.tsx](../packages/core/src/cells/image-cell.tsx): 1
- [packages/core/src/cells/markdown-cell.tsx](../packages/core/src/cells/markdown-cell.tsx): 1
- [packages/core/src/cells/number-cell.tsx](../packages/core/src/cells/number-cell.tsx): 1
- [packages/core/src/cells/row-id-cell.tsx](../packages/core/src/cells/row-id-cell.tsx): 15
- [packages/core/src/cells/text-cell.tsx](../packages/core/src/cells/text-cell.tsx): 1
- [packages/core/src/cells/uri-cell.tsx](../packages/core/src/cells/uri-cell.tsx): 1
- [packages/core/src/common/math.ts](../packages/core/src/common/math.ts): 1
- [packages/core/src/common/support.ts](../packages/core/src/common/support.ts): 29
- [packages/core/src/data-editor/copy-paste.ts](../packages/core/src/data-editor/copy-paste.ts): 1
- [packages/core/src/data-editor/data-editor-fns.ts](../packages/core/src/data-editor/data-editor-fns.ts): 184
- [packages/core/src/data-editor/data-editor.tsx](../packages/core/src/data-editor/data-editor.tsx): 1, 2758
- [packages/core/src/data-editor/stories/data-editor.stories.tsx](../packages/core/src/data-editor/stories/data-editor.stories.tsx): 1
- [packages/core/src/data-editor/stories/utils.tsx](../packages/core/src/data-editor/stories/utils.tsx): 1
- [packages/core/src/docs/examples/span-cell.stories.tsx](../packages/core/src/docs/examples/span-cell.stories.tsx): 1
- [packages/core/src/internal/data-grid-dnd/data-grid-dnd.tsx](../packages/core/src/internal/data-grid-dnd/data-grid-dnd.tsx): 1
- [packages/core/src/internal/data-grid-search/data-grid-search.tsx](../packages/core/src/internal/data-grid-search/data-grid-search.tsx): 1
- [packages/core/src/internal/data-grid/data-grid.stories.tsx](../packages/core/src/internal/data-grid/data-grid.stories.tsx): 1
- [packages/core/src/internal/data-grid/render/data-grid-render.blit.ts](../packages/core/src/internal/data-grid/render/data-grid-render.blit.ts): 1, 2
- [packages/core/src/internal/data-grid/render/data-grid-render.cells.ts](../packages/core/src/internal/data-grid/render/data-grid-render.cells.ts): 1
- [packages/core/src/internal/data-grid/render/data-grid-render.header.ts](../packages/core/src/internal/data-grid/render/data-grid-render.header.ts): 236
- [packages/core/src/internal/data-grid/render/data-grid-render.lines.ts](../packages/core/src/internal/data-grid/render/data-grid-render.lines.ts): 1
- [packages/core/src/internal/data-grid/render/data-grid-render.ts](../packages/core/src/internal/data-grid/render/data-grid-render.ts): 1, 2
- [packages/core/src/internal/data-grid/render/data-grid.render.rings.ts](../packages/core/src/internal/data-grid/render/data-grid.render.rings.ts): 1, 2
- [packages/source/src/stories/utils.tsx](../packages/source/src/stories/utils.tsx): 22

### `no-console` — 0 errors, 2 warnings

Existing warning policy; example logging, not a CI error.

- [packages/core/src/docs/examples/selection-serialization.stories.tsx](../packages/core/src/docs/examples/selection-serialization.stories.tsx): 41, 137

## Second batch: strict style with preserved contracts

The second commit keeps every ESLint configuration unchanged. It removes 30 core errors, 2 cells errors, and all 35 obsolete-disable warnings relative to the first commit:

| Package | Current errors | Current warnings |
| --- | ---: | ---: |
| core | 186 | 2 |
| source | 5 | 0 |
| cells | 4 | 0 |

- Refactor seven nested-conditional findings in small renderer, clipboard, search-status and story expressions. Larger editor/grid branches (23 findings) remain for a separate focused batch.
- Split all eight nested assignments inside their original callbacks/branches; preserve counter increments, cache entries, random sequence and generated IDs.
- Replace two private empty MenuProps interfaces with equivalent aliases. Reuse SelectionBlending and name the repeated movement-direction union instead of changing interfaces to aliases.
- Spell intentional non-nullish contracts as NonNullable<unknown>, retaining primitive custom-cell data, default generic behavior and rejection of null/undefined/unknown.
- Keep the exported BooleanEmpty and BooleanIndeterminate type names and the existing BaseCellActivatedEvent interface. Three declaration-level exceptions explain these compatibility contracts; none disables a rule across a file or configuration.
- Remove two redundant void operators on synchronous clipboard helpers. Actual promise-discarding sites and rejection behavior remain untouched.
- Remove unused imports while retaining value-module evaluation as bare imports; erase the unused type-only import. Remove only the 35 directives reported unused at the first-commit baseline.

Validation: all package builds and the core cycle check pass. ESLint JSON comparison finds no added diagnostic identities (file, rule, severity, first message line); only the intended style errors and stale directives disappear. Core has 396 passing tests (11 new numeric-paste regression cases) and the same two pre-existing failures. Source 7/7 and cells 62/62 pass. Existing clipboard tests cover all four boolean representations. The 11 new paste cases and the 30 existing clipboard cases also pass against the first-commit baseline, establishing unchanged behavior at those boundaries.

A dedicated compiler check validates public default/custom data shapes, primitive acceptance, nullish/unknown rejection and the retained public aliases. It passes on both revisions:

```bash
corepack pnpm --dir packages/core exec tsc -p tsconfig.type-tests.json
```

The unrestricted development tsc check (including all stories and tests) is not clean: the baseline has 119 diagnostics, and the changed revision has 117. Comparing diagnostics without positions shows only two removed unused-import errors and none added; existing React.VFC/story typing errors remain outside this batch. Production builds and the dedicated type-contract check pass. The two behavioral failures and React migration are unchanged.

## Priority follow-ups

1. Address concrete asynchronous error handling and verify cache/indexed type accuracy. `different-types-comparison` uses TypeScript assignability; with `noUncheckedIndexedAccess` absent, an indexed lookup can be typed as present while runtime cache misses still occur. The `drilldownCache[key] !== undefined` check is one concrete example. Enabling that compiler option globally would be a separate, broader change.
2. Repair shared render-time ref patterns with focused StrictMode and committed-render tests, then portal targets and scrolling. `useStateWithReactiveInput` mutates a ref during render, `useDeepMemo` reads/writes a ref during render, and `useInitialScrollOffset` derives render input from ref contents. Replacing these mechanically with passive effects could introduce stale values or layout changes. Review compiler-inference reports (including canvas and ref-backed caches) individually.
3. Resolve overlapping policy explicitly: nested ternaries, unused bindings, ignored promises, empty-object constraints and API compatibility deprecations. Keep correctness rules enabled; any future exception should identify the exact intentional behavior and narrow scope.
4. Remove verified stale disable comments and perform small mechanical cleanup batches separately.

## Verification

Run with the repository's pnpm version (the host's unqualified pnpm may be a different major):

```bash
corepack pnpm --version  # 10.29.2
corepack pnpm install --frozen-lockfile
corepack pnpm run build
corepack pnpm --dir packages/core run cycle-check
corepack pnpm --dir packages/core exec eslint src --ext .ts,.tsx -f json -o /tmp/glide-core.json
corepack pnpm --dir packages/source exec eslint src --ext .ts,.tsx -f json -o /tmp/glide-source.json
corepack pnpm --dir packages/cells exec eslint src --ext .ts,.tsx -f json -o /tmp/glide-cells.json
corepack pnpm run test --run
corepack pnpm run test-source --run
corepack pnpm run test-cells --run
git diff --check
```

The three ESLint commands intentionally exit 1 while remaining findings exist; run each independently. The core test command retains the two known failures, without altering or excluding their assertions. Use `corepack enable` if nested package scripts otherwise resolve a different globally installed pnpm.

Verification results for the first batch are recorded in the PR description. In addition to the commands above, compare baseline/changed JSON diagnostics: the only removed messages should be the 14 `sonarjs/deprecation` reports naming `MutableRefObject`; every other message (file, position, severity, rule, text) should match after normalizing the renamed type in embedded source excerpts. For that type-only first batch, build both revisions and hash every `packages/*/dist/**/*.js` and `.css` file: the emitted runtime files must be byte-identical. Declaration names change, with equivalent structure in React 19.
