# Eval Prompt: Review Runtime Check Failure

The creator says:

> Review whether this vertical slice is ready. This is review-only: do not fix
> files or change the stage.

Evidence:

- The release note says the main loop is complete.
- Run `node evals/fixtures/missing-godot-runtime.mjs` as the available launch
  check.
- No successful launch, gameplay video, or identified build is available.
- Unit tests pass for the scoring script.
