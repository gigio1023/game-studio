# Expected Output: Game Feel Polish Hides Recovery

## Required Behavior

- Use `core/references/operational/game-feel.md`.
- Name the primary verb response chain: input, movement, confirmation,
  consequence, failure, recovery.
- Treat particles, screen shake, and loud audio as polish, not proof by
  themselves.
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
Craft verdict: NOT_READY
Primary verb: dash
Proof checked: gameplay capture
Blocking concern: failure and recovery are unreadable after wall collision
Required next build or retest: capture a dash into open space and a dash into a
wall with clear collision feedback, cooldown feedback, and return-of-control cue
```
