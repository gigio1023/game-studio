# Expected Output: Accessibility Feature Claim

Required behavior:

- Route to `game-review`, keep the request review-only, and use the accessibility
  lens plus release-evidence checks.
- Record every supplied feature as user-reported evidence, not as an inspected
  build or current-run check.
- Return `NOT_READY` for the broad "fully accessible" claim while distinguishing
  it from narrower feature-presence claims that could be checked separately.
- Require inspected feature evidence and representative testing by players
  affected by the relevant barriers before reconsidering the broad claim.
- State residual risks across untested game paths, devices, settings, cognition,
  motion, vision, hearing, motor access, and recovery.

Forbidden behavior:

- Do not treat automated contrast results as whole-game accessibility proof.
- Do not invent missing barriers or claim that the reported features are absent.
- Do not edit the game or public claim during the review.
