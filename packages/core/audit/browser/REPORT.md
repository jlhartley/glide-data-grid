# Ref lifecycle fixes: browser verification

The nine issues found in the audit are fixed. All **25 current-version Chromium
checks pass**, with no incomplete scenarios or uncaught page errors. The final 51-run comparison
has 44 PASS and 7 FAIL: all seven failures belong to historical builds (six
pre-PR bugs and the initial PR portal bug); none belong to the fixed build.
The comparison command deliberately exits 1 for those historical failures; the
current-only regression run exits 0. The earlier
portal-ref retargeting fix remains intact.

## Before and after

| Issue | Before fixes | After fixes |
| --- | --- | --- |
| Descendant layout event | Calls old handler (0) | Calls committed handler (1) |
| Descendant layout input update | Returns 10 | Returns 11 |
| Descendant layout viewport measurement | Derived row 1 overwrites row 88 | Keeps measured row 88 |
| Grid event-boundary switch | Both native cell clicks ignored | Both clicks received on the new boundary |
| ResizeObserver node replacement | Reports old width 260 for a 600px panel | Reports 600 |
| Outside-click target replacement | New boundary ignored, old boundary active | New boundary closes the popover; old boundary ignored |
| Header drag during pending transition | Invokes uncommitted dataset B | Invokes displayed dataset A |
| Root development Strict Mode accessibility | No grid cells after scrolling | Accessibility DOM exposes rows 20–32 |
| Root development Strict Mode async sizing | Both requests abort; grid stays unloaded | First request cancels; replayed request succeeds |

The first three are controlled component diagnostics. The following six use actual
grid/DOM interactions; the last two failures were specific to root development
Strict Mode. The reactive-input helper currently has no production caller.

Ordinary editing/saving, wheel scrolling, controlled scrolling, final-page
clamping, simultaneous offset/size changes, resizing, portal replacement and
positive controls also pass. The portal workflow replaces `.current` on an
unchanged ref, removes the original host, then saves the preserved edit.

## Mechanisms and regression coverage

- A private commit bridge publishes values in `useInsertionEffect`, before any
  descendant layout effect/ref attachment. It performs no DOM access or state
  update, retains callback identity, and cannot publish suspended renders. This
  narrowly scoped library use preserves the React `^19.0.0` peer range.
- Subscriptions resolve DOM targets after attachment, compare actual targets and
  options, and clean up the target originally subscribed. Resize observation uses
  a stable attachment callback and rejects queued reports from detached nodes.
- Debounced work cancels/reschedules across cleanup/replay. A stable controller
  provider creates live request generations; async column sizing ignores cancelled
  results and handles abort rejection without retaining an aborted controller.

All nine original reproductions now pass in the normal regression suites.
Additional tests cover subscription identity/options/cleanup, stale observer
notifications, debounce dependencies/delay/cancellation, callback identity,
suspended renders and real root Strict Mode replay. Pending native fetch is also
exercised in Chromium.

## Validation and limits

- Core **476**, source **12**, cells **62** tests pass: **550 total**.
- Core, source and cells ESM/CJS/declaration builds pass; core cycle check and all
  five unchanged ESLint integration tests pass locally.
- Core direct ESLint retains **0 refs findings**, **10 unrelated errors and 2
  warnings**, with no new diagnostic categories/messages.
- Full core TypeScript check retains the same **108** baseline story/fixture
  diagnostics. Production TypeScript checks pass.
- The production render comparator still passes all **27 scenarios**, counting
  every tracked component in mount and ten-update phases. Counts match baseline
  everywhere except the ordinary overlay mount, which improves from 2 to 1.

The browser harness uses actual built packages, React 19.2, headless Chromium
153.0.8010.0, Playwright 1.62.1 and SwiftShader on Linux. Canvas, events, observers,
RAF, fetch and AbortSignal are native. This is Chromium functional coverage,
not cross-browser coverage, a screen-reader session, or an FPS/CPU benchmark.
Driver scenario durations include deliberate waits and are not latency measures.
No additional component renders were measured; effect/dependency overhead remains.

See [reproduction instructions](README.md), [the pre-fix audit](BEFORE.md),
[pre-fix observations](observations-before.json), and
[the final comparison observations](observations-after.json), and
[the passing current-only run](observations-current.json).
