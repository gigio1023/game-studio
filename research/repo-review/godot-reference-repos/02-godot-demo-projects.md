# Godot Demo Projects

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

## What This Repo Is

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

## Findings

### 1. The Demos Are Indexed By Project Metadata

Most demos use `config/description`, `config/tags`, `run/main_scene`, and
renderer settings in `project.godot`. This gives agents a practical way to
search by feature before reading files.

Adoption:

- For brownfield Godot work, inspect `project.godot` first.
- For new prototypes, ask agents to define the main scene and input actions
  before they claim the prototype is runnable.
- Add project metadata to any original Game Studio Godot example.

### 2. Official Demos Are Better As Reference Tests Than Templates

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

### 3. Scene And Script Boundaries Are Visible

The simple demos keep the teaching target visible. For example,
`2d/dodge_the_creeps` has `main.gd`, `player.gd`, `mob.gd`, `hud.gd`, matching
scenes, and a direct loop: start, spawn, avoid, score, die. This is a good shape
for first playable examples because the player-facing action is easy to trace.

Adoption:

- A first playable should have a short scene map and action trace.
- If a prototype cannot name its player action, response, failure, and retry,
  it is not ready for milestone advancement.

### 4. Input, Accessibility, And Localization Are Not Late Extras

The demo catalog includes input mapping, accessibility, translation,
pseudolocalization, bidirectional text, and font demos. For Game Studio, this is
a warning against treating player access and language readiness as release-only
concerns.

Adoption:

- For public demos, require input method disclosure.
- If text is central to the game, add a localization risk note early.
- If UI is central, add an accessibility smoke check before demo candidate.

## What Not To Adopt

- Do not copy a whole demo just because it uses a needed node.
- Do not assume an official demo's renderer, folder structure, or input map is
  correct for the user's game.
- Do not call a feature demo a vertical slice.

## Game Studio Changes Suggested

- Add a Godot reference selector so agents know which demo family to inspect.
- Add input/accessibility/localization checks to Godot milestone contracts when
  they are relevant to the player experience.
- Add a warning that demo projects answer implementation questions, not product
  direction.
