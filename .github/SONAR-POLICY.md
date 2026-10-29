# SonarJS policy

Core uses the explicit allowlist in `config/sonar-rules.mjs`, not SonarJS's
recommended preset. A plugin upgrade must not silently change the project's
rule policy. Source and cells do not use SonarJS and are unchanged.

The selected rules remain errors. Selection is based on useful diagnostics for
this TypeScript/React canvas grid, not on whether today's code passes them.

## Retained checks

- Concrete control-flow/value mistakes: duplicate conditions and expressions,
  collection-size mistakes, overwritten/unused values, ignored results and
  error objects, incorrect loop increments, array deletion and special-global
  shadowing. Keep unused-variable checks: TypeScript's unused-variable rule is
  independently disabled in this repository.
- Regex matching correctness: anchor precedence, empty alternatives/repetition,
  invalid expressions, misleading Unicode character classes, missing Unicode
  mode, invalid replacement groups and stateful expressions.
- Promise and React mistakes: asynchronous constructors, state setters in the
  component body, setters receiving their current value and unstable JSX keys.
- Deliberately retained readability rules: nested conditionals, nested
  assignments, deeply nested functions, inverted boolean checks and commented
  code. Refactors must preserve evaluation order and lazy branches.

The allowlist is intentionally narrower than all rules labelled `problem` by
SonarJS. That label also covers generic security-review prompts, which are not
necessarily defects. Conversely, several useful dead-code checks are labelled
`suggestion`. Neither metadata label determines project policy.

## Intentionally not enabled

| Rules or category | Reason |
| --- | --- |
| `different-types-comparison` | Produces misleading loose-equality advice for defensive checks against incomplete cache/index types. Keep strict equality and TypeScript checks; address type accuracy separately. |
| `argument-type` | Overlapping type inference adds limited value over TypeScript for this project. |
| `pseudo-random` and generic security-review prompts | A request to review `Math.random`, regex usage, networking or similar APIs is not evidence of a vulnerability. This allowlist is not a security audit. |
| `deprecation` | Mixes deliberate compatibility adapters with deprecated browser APIs. Review API migrations explicitly rather than blocking every adapter use. |
| `function-return-type`, `public-static-readonly`, `prefer-read-only-props` | Intentional union returns and public compatibility contracts should not be redesigned solely for generic style policy. |
| `todo-tag`, `fixme-tag` | Tracked technical-debt comments are allowed. Removing a comment does not resolve its underlying issue. |
| `void-use`, `no-undefined-argument` | Intentional promise discards/argument positions already receive relevant TypeScript checks. Keep `no-floating-promises` and `no-misused-promises`. |
| `reduce-initial-value` | An initial value is not required for a deliberately non-empty reduction. Review empty-input behaviour where relevant. |
| `no-equals-in-for-termination`, `updated-loop-counter` | Blanket loop-shape bans reject deliberate traversal/skipping patterns; retain checks for concretely incorrect increment directions. |
| Complexity quotas and remaining generic style rules | Do not impose them indirectly through a vendor preset. Existing ESLint, TypeScript, React and Unicorn policy remains unchanged. |

`unicode-aware-regex` is explicitly selected even though the installed
recommended preset did not enable it. All remaining selected rules were already
active. `no-built-in-override` was evaluated and excluded: it reports a local
`const isNaN` boolean as overriding the global, despite no global mutation. No rule is selected dynamically from the
plugin's metadata or future recommended configuration.

## Validation

Compare resolved ESLint configurations to verify every non-Sonar rule and
setting is unchanged. Run core ESLint against the same source revision before
and after the policy change, compare individual diagnostics, and verify retained
rules still report representative bad examples. No executable production or test code is changed. Remove only the two obsolete
`redundant-type-aliases` suppression comments from the public cell type aliases;
the aliases themselves stay unchanged.

Measured on main `85faec99e1e444403f36eb8065e42c7167c7edb7` (Node 24.22.1,
pnpm 10.29.2): core lint falls from 186 errors / 2 warnings to 94 errors /
2 warnings. Diagnostic comparison finds exactly 92 removed errors and no new
diagnostics. All retained diagnostics remain; no non-Sonar resolved rules or
settings change (plugin registration order is immaterial).

Smoke checks through the actual core ESLint configuration still detect duplicate
conditions, nested conditionals and misleading Unicode character classes; random
example generation and TODO comments no longer produce Sonar findings. Strict
`eqeqeq` still reports loose equality. The public-contract TypeScript check,
configuration syntax and whitespace checks pass. Full lint intentionally remains
red on the selected checks and existing React/TypeScript findings. Source and
cells retain their existing 5 and 4 errors respectively.
