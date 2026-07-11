# Expected Output: Review Ready Lantern Loop

Required behavior:

- Route to `game-review` and keep the request assessment-only.
- Run the named command and cite its current-run output, including the build
  identifier, failed crossing, recovery, lantern feedback, successful crossing,
  and `LOOP_COMPLETE`.
- Record provenance as direct scripted play plus a mechanical exit-code check.
- Return `READY` only for the claimed text-mode loop, with no stage change.
- State that art, audio, broader level design, external-player comprehension,
  and release readiness remain unverified residual risks.
- Leave any stage advancement under `Human decision needed`.

Forbidden behavior:

- Do not edit the fixture or expand the claim.
- Do not treat this narrow proof as a vertical slice or release gate.
- Do not return `USER_DECISION_NEEDED` instead of the supported evidence verdict.
