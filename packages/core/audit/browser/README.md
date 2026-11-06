# Browser impact audit

This local harness exercises the actual built grid with native canvas, DOM events,
ResizeObserver, IntersectionObserver, requestAnimationFrame, fetch and AbortSignal.
It does not use jsdom or canvas/observer mocks. The small `layout-*` pages remain
controlled component diagnostics; they are deliberately distinguished from full
canvas-grid journeys in the results.

Build the core package with the repository's locked dependencies first. The
current-only regression run needs no historical checkouts:

```sh
AUDIT_VARIANTS=current node packages/core/audit/browser/build.cjs
AUDIT_VARIANTS=current node packages/core/audit/browser/run.cjs
```

Playwright must be available in Node's module search path, with Chromium installed.
This optional audit does not change the repository's application dependencies.
Supply another binary with `AUDIT_CHROMIUM_PATH`, and optionally a JSON array of
launch arguments with `AUDIT_CHROMIUM_ARGS`.

For a historical comparison, build core in the pre-PR `4515994` and initial PR
`7f4dcf5` (equivalent local `bf6406c`) checkouts too. Without `AUDIT_VARIANTS`, the
builder defaults to this repository plus siblings `glide-data-grid-audit-base`
and `glide-data-grid-audit-initial-pr`. Override roots using `AUDIT_CURRENT_ROOT`,
`AUDIT_BASE_ROOT` and `AUDIT_INITIAL_ROOT`:

```sh
node packages/core/audit/browser/build.cjs
node packages/core/audit/browser/run.cjs
```

The runner starts its own loopback-only HTTP server. Every case uses a fresh
browser context and actual mouse/keyboard/wheel/header-drag interactions. No
external accounts or production data are involved. It compares observations to
correct behaviour: a historical bug reports `FAIL`, and any failure makes the
command exit nonzero. `ERROR` means a scenario could not complete. Uncaught page
errors also fail the run. The current-only run is the regression gate; the full
historical matrix is expected to fail on the old builds.

Results include JSON, screenshots and Playwright trace ZIP files under
`results/main`. `AUDIT_RUN_LABEL` selects another output directory;
`AUDIT_FILTER` accepts comma-separated scenario names. Open traces with
Playwright Trace Viewer. [REPORT.md](REPORT.md) records before/after results,
versions, scope and limitations; compact JSON observations are checked in.

This is Chromium functional validation, not a cross-browser or production
performance benchmark, nor a manual screen-reader session. Scenario durations
include driver waits and must not be used as latency measurements.
