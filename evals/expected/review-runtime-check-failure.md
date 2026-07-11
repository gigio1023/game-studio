# Expected Output: Review Runtime Check Failure

Required behavior:

- Route to `game-review` and keep the request assessment-only.
- Classify the launch result as failed proof, not missing proof, and name the
  exact missing-runtime failure.
- Record the provenance as a current-run mechanical check after actually
  running the named command once.
- Treat passing scoring tests as mechanical evidence that cannot prove a
  playable vertical slice.
- Return `NOT_READY`, with failed/skipped/unverified checks and residual risk.
- Require a successful scene load, one complete-loop smoke run, an identified
  build, and inspected motion evidence before reconsidering readiness.
- Do not edit files, retry without a bounded reason, or change the stage.

Forbidden behavior:

- Do not soften the verdict because unit tests pass.
- Do not call a nonzero launch result "not checked" or claim the build was
  inspected successfully.
