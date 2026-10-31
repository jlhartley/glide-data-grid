# Ref lifecycle render comparison

Compare production React 19.2 **component-function executions**, including render
retries and commit-triggered corrective renders. The baseline is `4515994`
(before PR #13); the original PR is `7f4dcf5` (the same tree as local `bf6406c`).
Build each checkout with its locked dependencies, then run from the adjusted checkout:

```sh
node config/bench/ref-render-counts.cjs /path/to/base /path/to/original-pr
```

The optional third argument is the adjusted checkout (defaults to this repository).
The runner bundles the built ESM packages with production React, instruments
DataEditor, GridScroller, InfiniteScroller, DataGridDnd and DataGrid plus the
overlay and hook harnesses, and prints JSON. Every tracked component is asserted
to render no more often than the baseline in both the mount and update phases.
It also verifies that a replaced custom portal target is actually followed.

Canvas and element dimensions are controlled using jsdom and the existing canvas
mock dependency. Resize events are represented by explicit dimension changes.
Animation frames do not run; native timers are not drained. Counts cover synchronous
mount/update work and its React effect cascades, not delayed browser work, paint,
FPS, Strict Mode's development replay or arbitrary application callbacks. Separate
regression tests exercise suspension, observer/RAF cleanup, momentum, validation,
scroll clamping, functional updates and Strict Mode.

## Results

Each row reports the named component/hook's mount count and its total count over
**ten updates** as `mount / updates`. Other tracked grid components also pass the
baseline assertions. The default overlay mount is the only lower count; all other
adjusted counts equal the baseline.

| Scenario                                | Before PR | Original PR | Adjusted |
| --------------------------------------- | --------: | ----------: | -------: |
| 15 listeners, stable callbacks          |    1 / 10 |      1 / 10 |   1 / 10 |
| 15 listeners, fresh callbacks           |    1 / 10 |      1 / 10 |   1 / 10 |
| Animation hook, stable draw             |    1 / 10 |      1 / 10 |   1 / 10 |
| Animation hook, fresh draw              |    1 / 10 |      1 / 10 |   1 / 10 |
| Reactive input, unchanged               |    1 / 10 |      1 / 10 |   1 / 10 |
| Reactive input, changed                 |    1 / 10 |      1 / 20 |   1 / 10 |
| Reactive input, explicit updates        |    1 / 10 |      1 / 10 |   1 / 10 |
| Default keybindings                     |    1 / 10 |      1 / 10 |   1 / 10 |
| Fresh equivalent keybindings            |    1 / 10 |      1 / 10 |   1 / 10 |
| Changed keybindings                     |    1 / 10 |      1 / 20 |   1 / 10 |
| Unchanged offsets                       |    1 / 10 |      1 / 10 |   1 / 10 |
| Horizontal offsets                      |    1 / 10 |      1 / 10 |   1 / 10 |
| Vertical offsets                        |    1 / 10 |      1 / 20 |   1 / 10 |
| Changed row heights at a nonzero offset |    1 / 10 |      1 / 20 |   1 / 10 |
| Offset A -> B -> A                      |    1 / 10 |      1 / 20 |   1 / 10 |
| Clamped offsets                         |    2 / 20 |      2 / 30 |   2 / 20 |
| Observed scroll updates                 |    1 / 10 |      1 / 10 |   1 / 10 |
| Scroller, kinetic workaround disabled   |    1 / 10 |      2 / 10 |   1 / 10 |
| Scroller, kinetic workaround enabled    |    1 / 10 |      2 / 10 |   1 / 10 |
| Scroller resize                         |    1 / 10 |      2 / 10 |   1 / 10 |
| Scroller initially zero sized           |    1 / 10 |      1 / 11 |   1 / 10 |
| Overlay, default portal                 |    2 / 10 |      3 / 10 |   1 / 10 |
| Overlay, custom portal                  |    2 / 10 |      3 / 10 |   2 / 10 |
| Overlay, retarget the same custom ref   |    2 / 20 |    3 / 10\* |   2 / 20 |
| Full DataEditor, unchanged options      |    1 / 10 |      1 / 10 |   1 / 10 |
| Full DataEditor, changed offsets        |    1 / 10 |      1 / 20 |   1 / 10 |
| Full DataEditor, changed keybindings    |    1 / 10 |      1 / 20 |   1 / 10 |

\* The original PR's low retarget count was a bug: it did not follow `.current`
changes when the ref object's identity stayed the same. The baseline and adjusted
versions pass the actual target-placement check. Matching counts are not accepted
as evidence of preserved behaviour without that check.

## Implementation

- Derive offset/input overrides from state and an immutable command token; stable
  event callbacks consume the committed command. No render-phase ref access or
  corrective state update is required.
- Memoize keybindings using their primitive options, replacing the generic deep
  cache and its retry. Equivalent options preserve realized callback dependencies.
- Resolve kinetic subscription targets inside effects, without putting the DOM
  element in state. Keep a subscription until its target or enabled status changes.
- Observe overlay positioning directly from its ref callback. Only actual offset
  corrections use state. Initialize the ordinary portal by DOM ID, and resolve
  custom ref targets after commit. Together these avoid the additional overlay
  renders while preserving portal DOM structure and replacement behaviour.

These comparisons eliminate the measured **extra rendering**. They do not prove
zero CPU or allocation overhead: layout-effect publication and dependency checks
remain, and end-to-end browser performance is a separate measurement.
