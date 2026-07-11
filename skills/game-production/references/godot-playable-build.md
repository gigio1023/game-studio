# Godot Playable Build Guide

Use this guide when a Game Studio milestone, prototype, or implementation
handoff targets Godot 4.

This is not a general Godot tutorial. It is the minimum operating guide for
agents that must help a creator get from design intent to a checked playable
build.

## Contents

- Start By Classifying The Godot Work
- Godot Project Checks
- Reference Pattern Selection
- Scene And Script Defaults
- First Playable Proof
- Genre-Specific Smoke Checks
- Runtime Check Ladder
- Godot Handoff Additions
- Design Intent Survival
- Brownfield Godot Adoption
- Stop Conditions

## Start By Classifying The Godot Work

| Work type | Main question | Minimum output |
| --- | --- | --- |
| First playable proof | Does one player action produce the intended visible consequence? If failure is part of the proof, is recovery legible? | Runnable scene, motion capture or walkthrough note, report. |
| Mechanic prototype | Does this one mechanic carry the target feeling or decision? | Isolated prototype scene and tuning notes. |
| Vertical slice | Can one full loop be built at representative quality and pace? | 3-5 minute loop, representative-quality criteria, playtest note. |
| Brownfield adoption | What systems already exist, and what is missing for Game Studio to use them? | Systems index, adoption audit, next build or retest. |

Do not call a Godot prototype a vertical slice unless it shows one complete loop
at representative quality.

## Godot Project Checks

Before claiming a Godot build is usable, inspect:

- `project.godot`
- engine version
- renderer and target platform
- input map
- autoloads
- main scene
- addon list
- export presets when release or demo work is involved

If any are missing, record the gap. Do not silently fill engine or platform
decisions for the user.

## Reference Pattern Selection

Prefer the current project's established pattern. When an external demo or
starter kit is needed, use the separately routed reference catalog to choose
the smallest matching pattern. Record its source and version, the pattern
borrowed, what was not copied, license handling, and the runtime check. Do not
vendor an external repo unless the user explicitly accepts the third-party
code, license, and maintenance cost.

## Scene And Script Defaults

Prefer:

- scenes as authoring units
- scripts as behavior
- custom `Resource` files for reusable game data
- signals across ownership boundaries
- direct method calls inside tight parent-child ownership
- typed GDScript for gameplay and UI
- C# or GDExtension only when profiling or project constraints justify it

Avoid:

- deep inheritance for gameplay variants
- global autoloads for ordinary scene state
- long `get_node()` paths in hot code
- untyped GDScript in new files
- connecting signals every frame
- hardcoded gameplay values when tuning is expected

## First Playable Proof

A Godot first playable proof must define:

- player action under test
- expected visual, audio, UI, and gameplay response
- success state, plus failure and recovery when the active proof includes them
- minimum scene list
- input method
- tuning values that matter to feel
- what is intentionally fake, placeholder, or cut
- check command or manual check
- capture or walkthrough record

The build does not need menus, save data, final art, or full architecture unless
those are part of the proof target.

## Genre-Specific Smoke Checks

| Work | Minimum smoke check |
| --- | --- |
| Movement or platformer | Move, jump or primary motion, land or collide, fail or fall, recover or retry, and verify camera readability. |
| FPS or ranged action | Capture mouse, look, fire, miss, hit, observe cooldown, switch weapon, exit mouse capture. |
| Builder or placement game | Preview, place, rotate, remove, save, load, and confirm the player-visible state survives the round trip. |
| Input remapping | Rebind one action, restart or reload settings, confirm the new event works and old event behavior is understood. |
| Accessibility-heavy UI | Keyboard traversal, focus visibility, labels for custom controls, and readable text scaling. |
| Localization-heavy UI | Language switch, text expansion, font coverage, image/audio remap if used, and pseudolocalization when available. |

## Runtime Check Ladder

Use the narrowest check that can support the claim.

1. **Import check**: the project opens and imports without blocking errors.
2. **Script check**: changed scripts parse under the pinned Godot version.
3. **Scene load check**: the target scene loads without missing resources.
4. **Smoke run**: the player can perform the target action once.
5. **Static capture**: a screenshot supports layout or visible state, not
   motion, timing, control feel, or audio.
6. **Motion capture**: a short video shows the target action and response.
7. **Playtest note**: someone plays the loop and records confusion, failure, and
   next-choice observations.
8. **Export check**: demo or release candidate exports for the target platform.

Do not skip from script check to release claim.

When a Godot issue blocks progress, reduce it to a minimal reproduction scene or
project:

```text
Target scene:
Steps:
Expected:
Actual:
Godot version:
Renderer:
Input actions:
Collision layers or masks:
```

## Godot Handoff Additions

Add these fields to implementation handoffs for Godot work:

```text
Godot version:
Renderer:
Target platform:
Main scene:
Input actions:
Autoloads touched:
Scenes changed:
Scripts changed:
Resources changed:
Reference pattern used:
Exported tuning values:
Runtime check:
Capture or walkthrough:
```

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

Report the proof as `failed` or `blocked`, without claiming completion, when:

- no Godot version is known
- the main scene cannot be identified
- the target action is not defined
- the runtime check has not been run
- the claim depends on a capture or playtest note that does not exist

Report `USER_DECISION_NEEDED` when:

- engine version or renderer choice must change
- a direction, genre, or scope decision is required
- a Godot limitation forces a feature cut or engine switch
- a public demo or release promise would change
