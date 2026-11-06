# Browser impact audit before the follow-up fixes

Executed locally in headless Chromium 153.0.8010.0, with Playwright 1.62.1, React 19.2 and SwiftShader on Linux. The actual built grid, native canvas, DOM events, ResizeObserver, IntersectionObserver, RAF, fetch and AbortSignal were used; no jsdom or canvas/observer mocks.

The retained comparison contains **87 browser runs: 52 PASS, 35 FAIL, 0 incomplete scenarios and 0 uncaught page errors**. These are repeated checks of known behaviours across versions/modes, not 35 distinct bugs. The primary matrix has 51 runs; two independent native-interaction repeat batches contribute 34, and a two-case verification confirms the runner exits 1 for a failing correctness assertion. All 34 repeat outcomes match the primary matrix.

## Versions

- Baseline: 4515994, before PR #13.
- Initial PR: 7f4dcf5 / equivalent local commit bf6406c.
- Current PR: e99f577 / equivalent local commit 54fbf47.
- Application source remained unchanged throughout this audit; the browser fixtures are local audit assets.

## Ordinary grid journeys

Both baseline and current PR pass native editing and saving, wheel scrolling, controlled scrolling to row 100, browser-clamped scrolling to the final page, simultaneous offset/size changes, normal resizing, and custom portal replacement followed by editing/saving. For example, scrollTop 3200 renders/clicks row 100; scrollTop 6400 with a simultaneous resize renders/clicks row 200. A request beyond the final row settles at scrollTop 31636 (the actual browser maximum), with first visible row 989.

These checks examine the settled viewport. They do not rule out every transient frame or arbitrary custom editor behaviour.

## Browser-visible failures that predate the PR

| Issue                                  | Actual browser observation                                                                                           | Positive control                                                                                                                                           |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Grid event-boundary retargeting        | Two native cell clicks after the boundary switch produce zero click callbacks, including a second click after 400ms. | Mounting the grid on that same isolated inner boundary accepts clicks. The propagation guard itself does not make the test invalid.                        |
| Resize observer retargeting            | The selected panel is 600px wide after a real viewport resize; reported width remains 260px from the old panel.      | ResizeObserver on the original node follows a native style change to 310px.                                                                                |
| Outside-click retargeting              | Clicking outside through newly selected boundary B leaves the popover open; clicking old boundary A closes it.       | Actual buttons/native pointer events are used. Listener retention on unmount was established by the earlier unit reproduction, not by a browser heap test. |
| Reordering during a pending transition | A real header drag runs dataset B's callback while dataset A remains the committed, displayed grid.                  | The same header drag without a pending transition runs A's callback. No imperative direct invocation of the reorder hook was needed.                       |

The four rows above reproduce in production bundles on both baseline and current PR, and their native-interaction checks repeat consistently. These are conditional paths (retargeted boundaries/nodes or a pending transition), not failures of every ordinary grid.

## Root development Strict Mode

Two additional older bugs reproduce in the real grid with Strict Mode at the React root:

- The canvas scrolls to row 20 but the accessibility DOM has no grid cells. Development without Strict Mode and production with Strict Mode both expose the expected rows 20–32. This is an accessibility-DOM check, not a manual screen-reader session.
- A fetch-backed grid remains unloaded. The initial native fetch is aborted during cleanup; the replay starts with an already-aborted signal and also aborts. Both recorded requests end with AbortError. Development without Strict Mode and production with Strict Mode both load successfully.

Thus these two failures are tied to development Strict Mode replay, not ordinary production Strict Mode operation.

## Regressions introduced by the current PR

All three still reproduce in real Chromium, with the same expected/actual results as the new failing unit tests:

| Controlled diagnostic                                                    | Baseline              | Current PR                |
| ------------------------------------------------------------------------ | --------------------- | ------------------------- |
| Child layout effect dispatches an event after updating the owner handler | New handler / value 1 | Old handler / value 0     |
| Input becomes 10 and a child layout effect increments it                 | 11                    | 10                        |
| Child layout reports measured viewport row 88 during an offset change    | 88                    | Derived row 1 replaces it |

These are deliberately controlled browser component pages, not claims that everyday wheel scrolling or editing is broken. The reactive-input helper has no current production caller. The ordinary, controlled, clamped and combined scroll/resize journeys above did not reproduce an incorrect final grid viewport. The commit-ordering compatibility failures remain unresolved and should be fixed before merging PR #13.

## Original portal regression

The same native workflow is tested against all three versions: open an editor, type a value, replace .current on the unchanged portal ref, rerender, then remove the old host. Baseline and current PR move the editor to B, preserve its value and save it. The initial PR leaves it in A; removing A makes the editor disappear and the value cannot be saved through the workflow. This confirms that the portal regression itself is fixed.

## Evidence

[Retained observations for all 87 pre-fix runs](observations-before.json).
Screenshots and Playwright traces are generated locally under `results/`.
