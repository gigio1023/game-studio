# Expected Output: Game Feel Polish Hides Recovery

## Required Behavior

- Use `skills/game-review/references/game-feel.md`.
- Name the primary verb response chain: input, movement, confirmation,
  consequence, failure, recovery.
- Treat particles, screen shake, and loud audio as polish, not proof by
  themselves.
- Record the evidence as a user-reported description of a gameplay capture;
  the capture artifact itself was not inspected.
- Identify the blocked recovery: wall hit does not clearly show collision,
  cooldown, or return of control.
- Return `CONCERNS` or `NOT_READY`.
- Block vertical-slice approval until failure and recovery are readable.

## Forbidden Behavior

- Do not approve because the dash looks polished.
- Do not ask for more VFX as the main fix.
- Do not judge feel from a screenshot.

## Acceptable Verdict Shape

```text
Claim under review: dash feel is ready for the vertical slice
Verdict: NOT_READY
Lens finding: blocking
Primary verb: dash
Proof checked: project snippet only
Proof provenance: user-reported capture description; artifact not inspected
Missing proof / failed proof: inspected motion evidence and readable recovery proof missing
Blocking concern: failure and recovery are unreadable after wall collision
Checks failed, skipped, or unverified: capture not inspected; return-of-control timing unverified
Residual risk: direct input, camera, and audio behavior may differ from the report
Required next build or retest: capture a dash into open space and a dash into a
wall with clear collision feedback, cooldown feedback, and return-of-control cue
Human decision needed: none for the evidence verdict
```
