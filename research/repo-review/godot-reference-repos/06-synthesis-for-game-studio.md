# Synthesis For Game Studio

The Godot repos point to a practical upgrade: Game Studio should not merely say
"use Godot best practices." It should teach agents how to choose a reference
project, extract the relevant pattern, adapt it to the user's milestone, and
verify the playable result.

## Strategic Judgment

For a solo creator who does not know game development deeply, these repos are
valuable because they reduce the gap between a design statement and an engine
task. But they do not solve product direction. They solve implementation shape.

Game Studio should use them this way:

- [Godot engine repo](https://github.com/godotengine/godot): quality discipline
  and reproduction practice.
- [Godot demo projects](https://github.com/godotengine/godot-demo-projects):
  feature reference library.
- [Kenney starter kits](https://github.com/KenneyNL): small genre baselines and
  beginner-readable project structure.

This improves Game Studio's value because it gives agents concrete examples
without turning the framework into a tutorial dump.

## The Main Pattern To Adopt

Every Godot milestone should carry five records:

1. **Project contract**: Godot version, renderer, main scene, input actions,
   autoloads, target platform.
2. **Playable chain**: player action, response, failure or recovery, next
   choice.
3. **Scene map**: scenes, scripts, resources, assets, and ownership boundaries.
4. **Runtime check**: import, script parse, scene load, smoke run, capture,
   playtest note, or export check.
5. **Reference selector**: which official demo or starter kit pattern was used,
   and what was intentionally not copied.

## Reference Selector

| User goal | Inspect first | Why |
| --- | --- | --- |
| 2D movement or small arcade loop | [`2d/dodge_the_creeps`](https://github.com/godotengine/godot-demo-projects/tree/master/2d/dodge_the_creeps), [`2d/pong`](https://github.com/godotengine/godot-demo-projects/tree/master/2d/pong), [`2d/kinematic_character`](https://github.com/godotengine/godot-demo-projects/tree/master/2d/kinematic_character) | Small action-response loop with visible scene/script boundaries. |
| 3D character movement | [`3d/kinematic_character`](https://github.com/godotengine/godot-demo-projects/tree/master/3d/kinematic_character), [Kenney 3D Platformer](https://github.com/KenneyNL/Starter-Kit-3D-Platformer) | Camera-relative movement, jump, reset, feedback, and camera behavior. |
| FPS or ranged action | [Kenney FPS](https://github.com/KenneyNL/Starter-Kit-FPS) | Mouse capture, raycast weapon, hit/miss, cooldown, weapon resources. |
| Builder, grid, or placement game | [Kenney City Builder](https://github.com/KenneyNL/Starter-Kit-City-Builder), [`3d/platformer`](https://github.com/godotengine/godot-demo-projects/tree/master/3d/platformer) for GridMap basics | Placement preview, `GridMap`, custom resources, persistence. |
| Input remapping | [`gui/input_mapping`](https://github.com/godotengine/godot-demo-projects/tree/master/gui/input_mapping) | `InputMap`, `FileAccess`, and persistence of remaps. |
| Save/load or runtime files | [Kenney City Builder](https://github.com/KenneyNL/Starter-Kit-City-Builder), [`loading/runtime_save_load`](https://github.com/godotengine/godot-demo-projects/tree/master/loading/runtime_save_load) | `ResourceSaver`, `ResourceLoader`, `FileAccess`, runtime asset handling. |
| Accessibility or UI readiness | [`gui/accessibility`](https://github.com/godotengine/godot-demo-projects/tree/master/gui/accessibility) | Custom controls and accessibility metadata. |
| Localization risk | [`gui/translation`](https://github.com/godotengine/godot-demo-projects/tree/master/gui/translation), [`gui/pseudolocalization`](https://github.com/godotengine/godot-demo-projects/tree/master/gui/pseudolocalization) | Translation resources, remaps, and font/language handling. |

## What Should Change In This Repo

1. Add a Godot reference pattern guide under `core/references/operational/`.
2. Strengthen `profiles/engines/godot.yaml` with starter-kit and official-demo
   checks.
3. Link the reference pattern guide from `skills/game-execution`.
4. Add an eval that catches a bad agent response: blindly copying a starter kit
   or claiming a Godot milestone from file presence.
5. Keep external repos out of this repo unless an original minimal sample is
   created.

## Decision

Do not vendor the cloned repos. Add links, pattern notes, and validation
requirements. If Game Studio later ships Godot examples, they should be small
original projects designed around Game Studio's milestone contracts, not copies
of the reference repos.
