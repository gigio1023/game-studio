# Godot Reference Repo Review

This folder records the Godot repositories reviewed for Game Studio's Godot
operating guidance.

## Reviewed Repos

| Repo | Source | Commit reviewed | Role in Game Studio |
| --- | --- | --- | --- |
| `godotengine/godot` | [repo](https://github.com/godotengine/godot) | [`9a33066`](https://github.com/godotengine/godot/tree/9a33066a27d70c6d4f74cae44c1ce023d8082a59) | Engine governance, documentation, test discipline, minimal reproduction practice. |
| `godotengine/godot-demo-projects` | [repo](https://github.com/godotengine/godot-demo-projects) | [`c9f5852`](https://github.com/godotengine/godot-demo-projects/tree/c9f5852130ffab4b9d57488c18cd310708c6acf0) | Official pattern catalog for Godot features, importable demos, and project metadata. |
| `KenneyNL/Starter-Kit-3D-Platformer` | [repo](https://github.com/KenneyNL/Starter-Kit-3D-Platformer) | [`3fa8a04`](https://github.com/KenneyNL/Starter-Kit-3D-Platformer/tree/3fa8a04b1c01ab23db43123d4ce814a34c3fc7f0) | Small 3D platformer baseline with movement, camera, collectibles, and feedback. |
| `KenneyNL/Starter-Kit-FPS` | [repo](https://github.com/KenneyNL/Starter-Kit-FPS) | [`185fd23`](https://github.com/KenneyNL/Starter-Kit-FPS/tree/185fd2326d74a5cf858cffc616f87cf9696f9cc0) | FPS baseline with mouse capture, raycast weapons, data-backed weapon tuning, and enemies. |
| `KenneyNL/Starter-Kit-City-Builder` | [repo](https://github.com/KenneyNL/Starter-Kit-City-Builder) | [`4535092`](https://github.com/KenneyNL/Starter-Kit-City-Builder/tree/4535092b740b378b700efd9df9e27a631815b84a) | Builder baseline with grid placement, custom resources, dynamic `MeshLibrary`, and save/load. |

The repositories were cloned outside this repo to avoid vendoring large engine
and asset histories. The useful material is captured as repo notes and as
operational guidance under `core/references/operational/`.

## Report Sections

- Godot Engine
- Godot Demo Projects
- Kenney Starter Kit 3D Platformer
- Kenney Starter Kit FPS
- Kenney Starter Kit City Builder
- Synthesis For Game Studio

## Adoption Decision

Do not copy these repos wholesale into Game Studio.

Reasons:

- `godotengine/godot` is an engine codebase, not a game template.
- `godot-demo-projects` contains 137 separate demos and would make this repo
  hard to read.
- Kenney starter kits include complete CC0 assets, but copying them would create
  a maintenance burden and make Game Studio look like an asset pack.
- The more useful adoption is pattern-level: project contract, scene boundaries,
  input map, resource-backed tuning, runtime checks, and a reference selector.

If a later example needs runnable Godot files, add a small original sample that
uses the patterns documented here and credits the reference repos as influence.

## Godot Engine

Repo: `godotengine/godot`
Source URL: https://github.com/godotengine/godot
Commit reviewed: `9a33066` from 2026-05-13
Commit URL: https://github.com/godotengine/godot/tree/9a33066a27d70c6d4f74cae44c1ce023d8082a59
License: MIT

Useful upstream pages:

- Contributing guide: https://github.com/godotengine/godot/blob/master/CONTRIBUTING.md
- Class reference source: https://github.com/godotengine/godot/tree/master/doc/classes
- Engine tests: https://github.com/godotengine/godot/tree/master/tests
- Godot docs: https://docs.godotengine.org/

### What This Repo Is

Godot is a full game engine and editor. For Game Studio, it is not a starter
project. It is the source of engine-level discipline: how to report bugs, how to
separate proposals from bug reports, how to document engine-facing changes, and
how to define checks that increase trust.

The codebase has clear ownership layers:

- `core/`: core data, math, objects, config, I/O, variants.
- `scene/`: runtime scene and node systems.
- `servers/`: rendering, physics, audio, text, navigation, display services.
- `modules/`: optional engine modules and integrations.
- `platform/`: target platform implementations.
- `editor/`: editor UI, import/export, project manager, inspector, plugins.
- `tests/`: C++ unit tests, compatibility tests, builders, test data.
- `doc/classes/`: class reference XML shipped with the editor/docs.

### Findings

#### 1. Minimal Reproduction Is A Core Operating Habit

Godot asks bug reporters to provide a Minimal Reproduction Project. This matters
for Game Studio because a playable validation claim should also be reducible to
a small scene, action, and expected response.

Adoption:

- Treat each Godot milestone as a small reproduction of the design claim.
- When a prototype fails, ask for the smallest scene that reproduces the failure.
- Do not let a whole project hide the broken interaction.

#### 2. Proposals And Bugs Are Separate Workflows

Godot does not use the main issue tracker for feature proposals. This is a good
model for AI-assisted game work: implementation bugs, design changes, and public
promise changes should not share one lane.

Adoption:

- Implementation handoffs record bugs and scene issues.
- Direction changes require a decision record.
- Public copy changes require release-promise review.

#### 3. Documentation Is Part Of The Change

Godot requires class reference updates when scripting APIs change. For Game
Studio, the analog is: if a milestone changes how an agent should use a project,
update the template, role playbook, or operational guide in the same work item.

Adoption:

- Godot project adoption notes should name new scripts, scenes, autoloads,
  input actions, resources, and runtime checks.
- Agent skills should avoid undocumented local conventions.

#### 4. Tests Exist At The Engine Boundary

Godot has extensive C++ tests under `tests/`, including core data structures,
I/O, scene nodes, navigation, rendering helpers, builders, and compatibility
checks. This is not directly transferable to a small game prototype, but the
principle is transferable: the deeper a feature sits in shared runtime logic,
the more it needs automated checks.

Adoption:

- Prototype scenes can rely on manual smoke checks and capture.
- Shared gameplay services, save/load, procedural placement, and input remap
  logic deserve script-level or scene-load checks.
- Export or release work needs a stronger check ladder than first playable work.

#### 5. Godot's Own Docs Are Engine-Integrated

The `doc/classes/` reference is part of the source tree, and the editor exposes
class documentation. Agents working on Godot should consult class docs for
version-sensitive APIs instead of writing from memory.

Adoption:

- If the user asks for latest Godot behavior, verify against official docs or
  the engine docs snapshot before giving API-specific guidance.
- When a project pins Godot 4.6, do not apply stale Godot 3.x patterns.

### What Not To Adopt

- Do not imitate engine-scale process for a solo prototype.
- Do not require C++ unit-test discipline for first playable work.
- Do not make Game Studio a Godot engine contribution guide.
- Do not confuse engine governance with game production judgment.

### Game Studio Changes Suggested

- Add Minimal Reproduction Project language to the Godot playable-build guide.
- Add a separate decision lane for engine choice, renderer choice, and public
  promise changes.
- Add stronger guidance for runtime checks when Godot work touches save/load,
  procedural generation, or reusable input systems.

## Godot Demo Projects

Repo: `godotengine/godot-demo-projects`
Source URL: https://github.com/godotengine/godot-demo-projects
Commit reviewed: `c9f5852` from 2026-05-06
Commit URL: https://github.com/godotengine/godot-demo-projects/tree/c9f5852130ffab4b9d57488c18cd310708c6acf0
License: MIT

Useful upstream pages:

- Browser-playable demos: https://godotengine.github.io/godot-demo-projects/
- 2D demos: https://github.com/godotengine/godot-demo-projects/tree/master/2d
- 3D demos: https://github.com/godotengine/godot-demo-projects/tree/master/3d
- GUI demos: https://github.com/godotengine/godot-demo-projects/tree/master/gui
- Loading demos: https://github.com/godotengine/godot-demo-projects/tree/master/loading

### What This Repo Is

This is the official Godot pattern catalog. It contains 137 separate Godot
projects, each with its own `project.godot`. It is not one game and not one
architecture. Its value is breadth: when a Godot feature is relevant to a
milestone, the repo often has a small importable project that demonstrates that
feature in context.

Project count by category:

| Category | Projects |
| --- | ---: |
| `2d` | 26 |
| `3d` | 32 |
| `audio` | 9 |
| `compute` | 3 |
| `gui` | 14 |
| `loading` | 6 |
| `misc` | 12 |
| `mobile` | 4 |
| `mono` | 6 |
| `networking` | 7 |
| `plugins` | 1 |
| `viewport` | 7 |
| `xr` | 10 |

### Findings

#### 1. The Demos Are Indexed By Project Metadata

Most demos use `config/description`, `config/tags`, `run/main_scene`, and
renderer settings in `project.godot`. This gives agents a practical way to
search by feature before reading files.

Adoption:

- For brownfield Godot work, inspect `project.godot` first.
- For new prototypes, ask agents to define the main scene and input actions
  before they claim the prototype is runnable.
- Add project metadata to any original Game Studio Godot example.

#### 2. Official Demos Are Better As Reference Tests Than Templates

Examples like `2d/dodge_the_creeps`, `3d/kinematic_character`,
`gui/input_mapping`, `gui/accessibility`, `gui/translation`, and
`loading/runtime_save_load` are focused enough to answer one implementation
question each.

Adoption:

- Use the official demo repo as a search index:
  - movement: [`2d/kinematic_character`](https://github.com/godotengine/godot-demo-projects/tree/master/2d/kinematic_character), [`3d/kinematic_character`](https://github.com/godotengine/godot-demo-projects/tree/master/3d/kinematic_character), [`3d/platformer`](https://github.com/godotengine/godot-demo-projects/tree/master/3d/platformer)
  - small complete game loop: [`2d/dodge_the_creeps`](https://github.com/godotengine/godot-demo-projects/tree/master/2d/dodge_the_creeps), [`2d/pong`](https://github.com/godotengine/godot-demo-projects/tree/master/2d/pong)
  - input remapping: [`gui/input_mapping`](https://github.com/godotengine/godot-demo-projects/tree/master/gui/input_mapping)
  - accessibility: [`gui/accessibility`](https://github.com/godotengine/godot-demo-projects/tree/master/gui/accessibility)
  - localization: [`gui/translation`](https://github.com/godotengine/godot-demo-projects/tree/master/gui/translation), [`gui/pseudolocalization`](https://github.com/godotengine/godot-demo-projects/tree/master/gui/pseudolocalization),
    `gui/bidi_and_font_features`
  - runtime file handling: [`loading/runtime_save_load`](https://github.com/godotengine/godot-demo-projects/tree/master/loading/runtime_save_load), [`loading/serialization`](https://github.com/godotengine/godot-demo-projects/tree/master/loading/serialization)
  - multiplayer: `networking/*`
  - XR: `xr/*`

#### 3. Scene And Script Boundaries Are Visible

The simple demos keep the teaching target visible. For example,
`2d/dodge_the_creeps` has `main.gd`, `player.gd`, `mob.gd`, `hud.gd`, matching
scenes, and a direct loop: start, spawn, avoid, score, die. This is a good shape
for first playable examples because the player-facing action is easy to trace.

Adoption:

- A first playable should have a short scene map and action trace.
- If a prototype cannot name its player action, response, failure, and retry,
  it is not ready for milestone advancement.

#### 4. Input, Accessibility, And Localization Are Not Late Extras

The demo catalog includes input mapping, accessibility, translation,
pseudolocalization, bidirectional text, and font demos. For Game Studio, this is
a warning against treating player access and language readiness as release-only
concerns.

Adoption:

- For public demos, require input method disclosure.
- If text is central to the game, add a localization risk note early.
- If UI is central, add an accessibility smoke check before demo candidate.

### What Not To Adopt

- Do not copy a whole demo just because it uses a needed node.
- Do not assume an official demo's renderer, folder structure, or input map is
  correct for the user's game.
- Do not call a feature demo a vertical slice.

### Game Studio Changes Suggested

- Add a Godot reference selector so agents know which demo family to inspect.
- Add input/accessibility/localization checks to Godot milestone contracts when
  they are relevant to the player experience.
- Add a warning that demo projects answer implementation questions, not product
  direction.

## Kenney Starter Kit 3D Platformer

Repo: `KenneyNL/Starter-Kit-3D-Platformer`
Source URL: https://github.com/KenneyNL/Starter-Kit-3D-Platformer
Commit reviewed: `3fa8a04` from 2026-03-12
Commit URL: https://github.com/KenneyNL/Starter-Kit-3D-Platformer/tree/3fa8a04b1c01ab23db43123d4ce814a34c3fc7f0
License: MIT for code, CC0 for included assets
Godot version: 4.6

Useful upstream pages:

- Player script: https://github.com/KenneyNL/Starter-Kit-3D-Platformer/blob/main/scripts/player.gd
- Camera script: https://github.com/KenneyNL/Starter-Kit-3D-Platformer/blob/main/scripts/view.gd
- Main scene: https://github.com/KenneyNL/Starter-Kit-3D-Platformer/blob/main/scenes/main.tscn
- Project settings: https://github.com/KenneyNL/Starter-Kit-3D-Platformer/blob/main/project.godot

### What This Repo Is

This is a compact 3D platformer starter project. It includes a main scene,
player scene, camera controller, coin collection, falling platforms, simple HUD,
audio helper, CC0 models, sprites, and sound effects.

Useful project shape:

- `project.godot` defines main scene, input actions, `Audio` autoload,
  Forward Plus, Jolt Physics, and physics interpolation.
- `scenes/main.tscn` owns the playable layout.
- `objects/*.tscn` are reusable scene units.
- `scripts/player.gd`, `scripts/view.gd`, `scripts/hud.gd`,
  `scripts/main.gd`, and `scripts/audio.gd` hold behavior.
- Assets are separated into `models/`, `sprites/`, `sounds/`, and `fonts/`.

### Findings

#### 1. The First Playable Is One Clear Chain

The platformer proves a small loop: move, jump, double jump, land, collect,
fall, respawn. The code supports that chain with direct feedback:

- landing squash and sound
- footstep sound and trail particles tied to speed
- coin signal to HUD
- fall reset by scene reload
- camera orbit and zoom as a separate node

Adoption:

- Godot first playable contracts should name one input-to-feedback chain this
  explicitly.
- Capture should show both success and failure or recovery, not only traversal.

#### 2. Exported Variables Make Tuning Visible

The player exposes `movement_speed`, `jump_strength`, and a `view` reference.
The camera exposes zoom and rotation values. This is a good starter-kit habit:
values that change game feel belong in the Inspector while the prototype is
being tuned.

Adoption:

- Ask Godot agents to list exported tuning values in handoffs.
- Review whether the current values match the intended feel.

#### 3. Camera Is A First-Class Gameplay Component

The camera is not incidental. The `view.gd` controller follows the target,
rotates, zooms, clamps angles, and shapes how the jump reads. A platformer
prototype that ignores camera is usually not a playable validation of movement.

Adoption:

- Movement prototypes need camera proof.
- Review movement, camera, collision, and animation as one chain.

#### 4. The Project Is Simple Enough To Learn From

The code favors readable direct logic over framework abstraction. That is good
for beginners and for AI agents. The limitation is that direct scene reload,
path-based node access, and untyped variables may need strengthening in a real
project.

### What Not To Copy Blindly

- Do not copy the whole project into Game Studio.
- Do not copy its exact movement math without validating target feel.
- Do not treat its autoload audio helper as mandatory architecture.
- Do not ignore platform/input differences when adapting camera controls.

### Game Studio Changes Suggested

- Add a "movement proof chain" section to Godot operational guidance.
- Add exported tuning values to Godot implementation handoff fields.
- Add camera and control-feel checks before movement milestones can advance.

## Kenney Starter Kit FPS

Repo: `KenneyNL/Starter-Kit-FPS`
Source URL: https://github.com/KenneyNL/Starter-Kit-FPS
Commit reviewed: `185fd23` from 2026-03-12
Commit URL: https://github.com/KenneyNL/Starter-Kit-FPS/tree/185fd2326d74a5cf858cffc616f87cf9696f9cc0
License: MIT for code, CC0 for included assets
Godot version: 4.6

Useful upstream pages:

- Player script: https://github.com/KenneyNL/Starter-Kit-FPS/blob/main/objects/player.gd
- Weapon resource script: https://github.com/KenneyNL/Starter-Kit-FPS/blob/main/scripts/weapon.gd
- Enemy script: https://github.com/KenneyNL/Starter-Kit-FPS/blob/main/objects/enemy.gd
- Weapon resources: https://github.com/KenneyNL/Starter-Kit-FPS/tree/main/weapons
- Project settings: https://github.com/KenneyNL/Starter-Kit-FPS/blob/main/project.godot

### What This Repo Is

This is a compact Godot FPS starter. It includes first-person movement, mouse
capture, weapon switching, raycast shooting, enemies, HUD health updates,
weapon resources, 3D models, sprites, and sounds.

Useful project shape:

- `project.godot` defines mouse, gamepad, movement, shooting, weapon-toggle,
  and mouse-capture actions.
- `objects/player.tscn` and `objects/player.gd` hold the playable character.
- `scripts/weapon.gd` defines `class_name Weapon`, a custom `Resource`.
- `weapons/*.tres` store weapon data.
- `objects/enemy.gd` exposes a minimal damage/destroy target.

### Findings

#### 1. Weapon Feel Is Data-Backed

The `Weapon` resource stores model, position, rotation, muzzle position,
cooldown, max distance, damage, spread, shot count, knockback, sounds, and
crosshair. This is the strongest pattern in the repo.

Adoption:

- For Godot prototypes with tunable equipment, powers, enemies, or build pieces,
  prefer custom resources over hardcoded variants.
- In a review, ask whether tuning data is visible without editing code.

#### 2. The FPS Loop Has A Strong Check Contract

The minimum playable chain is:

1. capture mouse
2. move and look
3. fire
4. raycast hits or misses
5. enemy takes damage
6. muzzle, sound, recoil, impact, and cooldown respond
7. player can switch weapon

Adoption:

- A Godot FPS milestone should not be accepted from "gun script exists."
- Smoke checks must include hit, miss, cooldown, weapon switch, and recovery
  from mouse-capture exit.

#### 3. The Repo Shows Both Good And Risky Simplicity

Good:

- Resources keep weapon variants understandable.
- Signals update HUD health.
- Mouse and controller input are both present.
- Feedback is immediate: muzzle, sound, impact, recoil.

Risk:

- Player script carries movement, camera, weapon state, damage, and feedback.
- Some values are untyped.
- Runtime checks are not included.
- Direct `has_method("damage")` is readable but weak as a long-term contract.

Adoption:

- For first playable, readable direct logic is fine.
- For vertical slice, split responsibility and add checks around damage,
  weapon selection, and player state.

### What Not To Copy Blindly

- Do not assume raycast shooting fits every action game.
- Do not let one player script grow unchecked past prototype stage.
- Do not hide weapon tuning in code after the design starts comparing weapons.

### Game Studio Changes Suggested

- Add resource-backed tuning as a recommended Godot pattern.
- Add FPS-specific smoke checks to the Godot reference pattern guide.
- Add "hit, miss, cooldown, recovery" as a review phrase for ranged-action
  milestones.

## Kenney Starter Kit City Builder

Repo: `KenneyNL/Starter-Kit-City-Builder`
Source URL: https://github.com/KenneyNL/Starter-Kit-City-Builder
Commit reviewed: `4535092` from 2026-03-12
Commit URL: https://github.com/KenneyNL/Starter-Kit-City-Builder/tree/4535092b740b378b700efd9df9e27a631815b84a
License: MIT for code, CC0 for included assets
Godot version: 4.6

Useful upstream pages:

- Builder script: https://github.com/KenneyNL/Starter-Kit-City-Builder/blob/main/scripts/builder.gd
- Structure resource script: https://github.com/KenneyNL/Starter-Kit-City-Builder/blob/main/scripts/structure.gd
- Data map resource script: https://github.com/KenneyNL/Starter-Kit-City-Builder/blob/main/scripts/data_map.gd
- Structure resources: https://github.com/KenneyNL/Starter-Kit-City-Builder/tree/main/structures
- Project settings: https://github.com/KenneyNL/Starter-Kit-City-Builder/blob/main/project.godot

### What This Repo Is

This is a compact city-builder starter. It includes camera controls, grid
placement, demolition, rotation, structure selection, dynamic `MeshLibrary`
creation, save/load via resources, a sample map, models, sprites, and sounds.

Useful project shape:

- `project.godot` defines build, demolish, rotate, camera, save, load, and
  structure-selection actions.
- `scripts/structure.gd` defines `class_name Structure`, a custom resource.
- `structures/*.tres` stores buildable item data.
- `scripts/data_map.gd` and `scripts/data_structure.gd` store saved city data.
- `scripts/builder.gd` handles GridMap interaction and resource save/load.

### Findings

#### 1. Builder Games Need Data Contracts Early

The starter kit makes the buildable object list explicit through `Structure`
resources and the saved map explicit through `DataMap` and `DataStructure`
resources. This matters more than the visual polish because builder games fail
quickly when placement, rotation, persistence, and economy are implicit.

Adoption:

- Grid/tile/building prototypes should define saved data shape early.
- First playable for builder games should include place, rotate, remove, save,
  load, and affordability if economy is part of the claim.

#### 2. Placement Preview Is Part Of The Mechanic

The `selector` and `selector_container` give the player a preview before
placing. This is not just UI. It is the readability layer for grid placement.

Adoption:

- Placement games need preview, legality, feedback, and undo/removal checks.
- A playable claim should show how the player knows what will happen before
  committing an action.

#### 3. Dynamic MeshLibrary Is Useful But Easy To Overuse

The starter dynamically creates a `MeshLibrary` from structure scenes. This is a
good example of making assets authorable as scenes while still using GridMap.
It is also a place where agents can accidentally build hidden runtime complexity.

Adoption:

- For early prototypes, dynamic library creation is acceptable if documented.
- For larger projects, decide whether library generation happens at runtime,
  editor time, or build time.

#### 4. Save/Load Changes The Milestone Meaning

Unlike the platformer and FPS kits, this starter includes persistence. That
means the validation bar is different: a build action is not complete unless it
survives a save/load round trip.

Adoption:

- Any milestone involving save/load needs a round-trip check.
- Handoffs should name `user://` files and resource classes touched.

### What Not To Copy Blindly

- Do not treat "can place one tile" as sufficient for a builder proof.
- Do not skip save/load checks when persistence is part of the design.
- Do not leave temporary scene files or editor-only paths in polished examples.

### Game Studio Changes Suggested

- Add a builder-game smoke checklist.
- Add resource round-trip checks to the Godot runtime ladder.
- Add "preview, place, rotate, remove, save, load" as the minimum builder proof
  when persistence is in scope.

## Synthesis For Game Studio

The Godot repos point to a practical upgrade: Game Studio should not merely say
"use Godot best practices." It should teach agents how to choose a reference
project, extract the relevant pattern, adapt it to the user's milestone, and
verify the playable result.

### Strategic Judgment

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

### The Main Pattern To Adopt

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

### Reference Selector

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

### What Should Change In This Repo

1. Add a Godot reference pattern guide under `core/references/operational/`.
2. Strengthen `profiles/engines/godot.yaml` with starter-kit and official-demo
   checks.
3. Link the reference pattern guide from `skills/game-execution`.
4. Add an eval that catches a bad agent response: blindly copying a starter kit
   or claiming a Godot milestone from file presence.
5. Keep external repos out of this repo unless an original minimal sample is
   created.

### Decision

Do not vendor the cloned repos. Add links, pattern notes, and validation
requirements. If Game Studio later ships Godot examples, they should be small
original projects designed around Game Studio's milestone contracts, not copies
of the reference repos.
