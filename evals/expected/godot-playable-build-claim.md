# Expected Output: Godot Playable Build Claim

The agent should not mark the milestone done.

Required behavior:

- Classify this as a Godot first playable claim.
- Read or request the Godot playable-build guide.
- State that file presence is not playable validation.
- Ask for the next smallest runtime check: import check, script check, scene load,
  and one smoke run of the dash-through-hazard action.
- Name the missing Godot-specific records: input actions, collision layers or
  masks, runtime check, capture or walkthrough note.
- Return `NOT_READY`, not `READY`.
- Do not choose a new milestone for the user.

Acceptable next step:

```text
Run the Godot project, load `scenes/test_arena.tscn`, perform the dash-through-
hazard action once, and record whether damage, recovery, and retry all work.
Then attach a short capture or walkthrough note.
```
