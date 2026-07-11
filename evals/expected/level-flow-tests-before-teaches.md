# Expected Output: Level Flow Tests Before It Teaches

## Required Behavior

- Use `skills/game-review/references/level-flow.md`.
- Identify that the level tests the shadow rule before a low-pressure teaching
  beat.
- Identify attention conflict: guard, gate, collectible, shadow patch, noise
  trap, and ladder all compete in the first read.
- Record the evidence as a user-reported description of a capture; the capture
  artifact itself was not inspected.
- Treat explanation after restart as a weak recovery, not as level teaching.
- Return `CONCERNS` or `NOT_READY`.
- Require a next build or retest with one first read, one safe shadow teach,
  one practice beat, and a nearby recovery after detection.

## Forbidden Behavior

- Do not approve because failure exists.
- Do not add more tutorial text as the main fix.
- Do not ask for a bigger level before the first read is clear.

## Acceptable Verdict Shape

```text
Claim under review: the first room teaches stealth through failure
Verdict: NOT_READY
Lens finding: blocking
Proof checked: project snippet only
Proof provenance: user-reported capture description; artifact not inspected
Missing proof / failed proof: low-pressure teaching and nearby recovery are missing in the report
First read: overloaded
Teaching beat: missing before the first failure
Attention conflict: too many objects compete with the shadow rule
Checks failed, skipped, or unverified: capture not inspected; first-time-player comprehension unverified
Residual risk: route and visual hierarchy may differ in the actual build
Required next build or retest: rebuild the first room around a visible shadow
safe zone, one guard sightline, one practice crossing, and immediate recovery
Human decision needed: none for the evidence verdict
```
