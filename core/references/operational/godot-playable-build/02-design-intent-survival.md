# Godot Playable Build Guide: Design Intent Survival

[Back to index](../godot-playable-build.md)

## Design Intent Survival

When reviewing Godot implementation, check that the player's experience survived
the scene setup, not just the script logic.

Look for:

- exported values that drift from the design record
- collision layers or masks that make an interaction impossible
- animation timing that changes control feel
- input actions missing from `project.godot`
- UI nodes that only work at one resolution
- scene-tree ownership that hides dependencies
- autoload state that leaks across test runs
- copied starter-kit structure that was not adapted to the milestone

If the design says "fast recovery" but the scene leaves the player stuck in an
animation for 1.5 seconds, the implementation missed the design even if tests
pass.


## Brownfield Godot Adoption

For an existing Godot repo, infer systems from:

- scene folders
- script class names
- autoload names
- input actions
- resource types
- test folders
- export presets

Then separate:

- existing runnable behavior
- existing design notes
- missing production records
- missing validation records
- human-owned direction decisions

Never replace the user's existing docs just to match a template. Add the minimum
index or decision record that lets later skills work.


## Stop Conditions

Return `NOT_READY` when:

- no Godot version is known
- the main scene cannot be identified
- the target action is not defined
- the runtime check has not been run
- the claim depends on a capture or playtest note that does not exist

Return `USER_DECISION_NEEDED` when:

- engine version or renderer choice must change
- a direction, genre, or scope decision is required
- a Godot limitation forces a feature cut or engine switch
- a public demo or release promise would change
