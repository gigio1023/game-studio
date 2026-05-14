# Kenney Starter Kit 3D Platformer

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

## What This Repo Is

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

## Findings

### 1. The First Playable Is One Clear Chain

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

### 2. Exported Variables Make Tuning Visible

The player exposes `movement_speed`, `jump_strength`, and a `view` reference.
The camera exposes zoom and rotation values. This is a good starter-kit habit:
values that change game feel belong in the Inspector while the prototype is
being tuned.

Adoption:

- Ask Godot agents to list exported tuning values in handoffs.
- Review whether the current values match the intended feel.

### 3. Camera Is A First-Class Gameplay Component

The camera is not incidental. The `view.gd` controller follows the target,
rotates, zooms, clamps angles, and shapes how the jump reads. A platformer
prototype that ignores camera is usually not a playable validation of movement.

Adoption:

- Movement prototypes need camera proof.
- Review movement, camera, collision, and animation as one chain.

### 4. The Project Is Simple Enough To Learn From

The code favors readable direct logic over framework abstraction. That is good
for beginners and for AI agents. The limitation is that direct scene reload,
path-based node access, and untyped variables may need strengthening in a real
project.

## What Not To Copy Blindly

- Do not copy the whole project into Game Studio.
- Do not copy its exact movement math without validating target feel.
- Do not treat its autoload audio helper as mandatory architecture.
- Do not ignore platform/input differences when adapting camera controls.

## Game Studio Changes Suggested

- Add a "movement proof chain" section to Godot operational guidance.
- Add exported tuning values to Godot implementation handoff fields.
- Add camera and control-feel checks before movement milestones can advance.
