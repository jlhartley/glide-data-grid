# React 19 first-edit investigation

Base: jlhartley/glide-data-grid `d4c0f7632b2b0d3225959fc67e7e6b0a5568a21b`.
React/React DOM: 19.2.0. Node: 24.22.3. Date: 23 November 2026.

## Findings

The fork reproduces initial-character loss using native keyboard events and React's
real scheduler in jsdom. `act` alone masks Suspense reveal delays, so there are
separate immediate-focus and real-scheduler regression tests.

Single isolated runs, with a one-second idle period before editing and 75 ms
between keystrokes:

| Cell | Unchanged fork focus gap | Unchanged saved value | Patched focus gap | Patched saved value |
| --- | ---: | --- | ---: | --- |
| Text | 85.24 ms | `dited` | 14.88 ms | `edited` |
| Number | 97.69 ms | `2345` | 26.28 ms | `12345` |

These are diagnostic jsdom measurements, not production browser benchmarks or
latency guarantees. jsdom does not implement default text insertion; the fixture
inserts characters only into the focused input, using its native value setter.
The checked-in tests assert preserved content, not a timing threshold.

The upstream three-test first-edit file, run against unchanged fork source, had
one passing test and two failures: the Text editor was not immediately present,
and drawing Number cells did not preload its editor. The adapted tests also
verify subsequent typing and the final committed values.

## Correction

Adapted from [upstream PR #1203](https://github.com/glideapps/glide-data-grid/pull/1203)
by Jake Levirne (commit `75520e13b6835f0e6a6a67f19e3c1aa979d4132c`).

- Internal `preloadableLazy` caches the import promise and resolved component.
- `DataEditor` preloads its overlay in a mount effect.
- Drawing a Number cell preloads its editor. Text-only grids do not request it.
- A loaded component renders directly, avoiding an initial suspension.
- Each mounted instance pins its component type with state, preserving editor
  state across transition replay and subsequent parent updates.
- Preload rejection is consumed. A subsequent render retries the loader; a
  render-time failure reaches an error boundary in the usual way.
- Editing before preload completion shares the pending import and retains the
  existing Suspense behaviour. This change does **not** buffer early keystrokes
  while a chunk is still downloading; cold/slow network editing remains a limit.

No public interfaces, exports, dependencies, manifests or lockfiles change.
The rapid-Enter race in upstream #1201 is outside this change.

## Production build evidence

Built the same minimal Vite production consumer against the core package before
and after the patch:

| Emitted asset | Before | After |
| --- | ---: | ---: |
| Overlay editor chunk | 4.12 kB | 4.12 kB |
| Number editor chunk | 16.00 kB | 16.00 kB |
| Entry chunk | 517.41 kB | 517.74 kB |
| Entry gzip | 170.03 kB | 170.18 kB |

Vite rounded decimal sizes; editor chunks remain separate. The overlay is now
requested on grid mount, even if the grid is never edited. Number preloading
adds a cached function call per Number-cell draw. No large-grid throughput
benchmark was performed.

## Browser reproduction

Chromium launch was blocked by the execution environment's Unix socket policy
(`socket() failed: Operation not permitted`). Escalated execution is disabled.
**No local Playwright browser results are claimed.** Production browser and
cross-browser confirmation remain outstanding.

The browser check now uses the repository's `@playwright/test` development
dependency, root `playwright.config.ts`, and `pnpm test:browser` command. Install
the locked dependencies and Playwright's matching Chromium once:

```sh
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
```

Then run from the repository root:

```sh
pnpm test:browser
```

Playwright builds core and the Vite production fixture, starts a preview server
on port 4173, waits for readiness, runs the checks, and stops the server. Keep
that port free; an existing server is deliberately not reused, to avoid testing
stale assets. There is no separate server terminal, system Chromium path, or
Codex environment variable to configure.

The ten tests use a fresh browser context for each of five Text and five Number
trials. They wait for network idle, type at 75 ms per key, assert the complete
input, then wait before Enter so they do not exercise the separate rapid-Enter
issue. Saved content is checked with a bounded polling assertion. Focus gap,
saved value and React version are attached to each successful test result;
latency is diagnostic, with no performance threshold. Failed tests retain traces
under `test-results/`.

To see the browser or use Playwright's debugger:

```sh
pnpm test:browser --headed
pnpm test:browser --debug
```

If browser launch reports missing system libraries, install Playwright's browser
prerequisites with `pnpm exec playwright install --with-deps chromium` (this may
require administrator access). The default command uses Playwright's managed
Chromium, not a hardcoded `/usr/bin/chromium`. This suite is opt-in and does not
change the existing Build, Beta or Release workflow gates.

## Validation

- Final core suite: **496 tests passed** across 41 files.
- Cells: **66 tests passed**. Source: **12 tests passed**.
- New focused coverage: **14 tests passed**, including initial-character and
  committed-value preservation, pending preload, rejection/retry, render-time
  errors, StrictMode, and normal/transition component identity.
- Both real-scheduler content regressions fail against the unchanged base.
- All five TypeScript gates passed: core, cells, source, core type tests,
  and React 19 consumer compatibility.
- Core/cells/source package builds passed; production Vite consumer built.
- ESLint passed for all three changed production source files; whitespace
  validation passed. No dependency or lockfile changes are included.

Browser execution remains unverified for the environment reason above. The fix
was validated on the fork's pinned React 19.2.0, not a separately installed 19.3.0.
