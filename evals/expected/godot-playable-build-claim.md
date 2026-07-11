# Expected Output: Godot Playable Build Claim

The agent should not mark the milestone done.

Required behavior:

- Classify this as a `game-review` readiness claim, not a production request.
- Use `skills/game-review/references/evidence-and-release.md`; a Godot-specific
  production guide is optional supporting detail when installed.
- State that file presence is not playable validation.
- Record the current provenance as user-reported file and project facts; no
  build, command result, or capture was directly inspected.
- Require the next smallest runtime evidence: import check, script check, scene
  load, and one smoke run of the dash-through-hazard action.
- Name the missing Godot-specific records: input actions, collision layers or
  masks, runtime check, capture or walkthrough note.
- Return `NOT_READY`, not `READY`.
- Do not edit the project or advance its stage.
- Do not choose a new milestone for the user.

Acceptable next step:

```text
Run the Godot project, load `scenes/test_arena.tscn`, perform the dash-through-
hazard action once, and record whether damage, recovery, and retry all work.
Then attach a short capture or walkthrough note.
```
