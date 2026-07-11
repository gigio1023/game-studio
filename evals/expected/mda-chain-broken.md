# Expected Output: MDA Chain Broken

## Required Behavior

- Use `skills/game-review/references/mda.md`.
- Identify the mechanic: rotating a room once.
- Identify the claimed dynamic: cautious prediction, discovery, or observation
  before acting.
- Identify the observed dynamic: immediate rotation and exit with no prediction,
  failure, or recovery.
- Record the evidence as a user-reported description of a browser capture; the
  capture artifact itself was not inspected.
- Return `CONCERNS` or `NOT_READY`.
- Explain that the mechanic exists but does not yet prove the intended player
  experience.
- Require a next build or retest that creates a reason to observe before
  rotating and captures recovery after a bad rotation.

## Forbidden Behavior

- Do not approve because the build exists.
- Do not say "mystery" is proven without observed player behavior.
- Do not request a vertical slice, more rooms, or final art as the next step.

## Acceptable Verdict Shape

```text
Claim under review: room rotation proves cautious curiosity
Verdict: CONCERNS
Mechanic-dynamic-experience chain state: weak
Proof checked: project snippet only
Proof provenance: user-reported browser-capture description; artifact not inspected
Missing validation: observed prediction, blocked path, recovery choice
Checks failed, skipped, or unverified: capture not inspected; player comprehension unverified
Residual risk: actual play may reveal a different dynamic than the report
Required next build or retest: one room where rotating can close a path, open
another, and let the player recover after noticing the consequence
Human decision needed: none for the evidence verdict
```
