# Kenney Starter Kit City Builder

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

## What This Repo Is

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

## Findings

### 1. Builder Games Need Data Contracts Early

The starter kit makes the buildable object list explicit through `Structure`
resources and the saved map explicit through `DataMap` and `DataStructure`
resources. This matters more than the visual polish because builder games fail
quickly when placement, rotation, persistence, and economy are implicit.

Adoption:

- Grid/tile/building prototypes should define saved data shape early.
- First playable for builder games should include place, rotate, remove, save,
  load, and affordability if economy is part of the claim.

### 2. Placement Preview Is Part Of The Mechanic

The `selector` and `selector_container` give the player a preview before
placing. This is not just UI. It is the readability layer for grid placement.

Adoption:

- Placement games need preview, legality, feedback, and undo/removal checks.
- A playable claim should show how the player knows what will happen before
  committing an action.

### 3. Dynamic MeshLibrary Is Useful But Easy To Overuse

The starter dynamically creates a `MeshLibrary` from structure scenes. This is a
good example of making assets authorable as scenes while still using GridMap.
It is also a place where agents can accidentally build hidden runtime complexity.

Adoption:

- For early prototypes, dynamic library creation is acceptable if documented.
- For larger projects, decide whether library generation happens at runtime,
  editor time, or build time.

### 4. Save/Load Changes The Milestone Meaning

Unlike the platformer and FPS kits, this starter includes persistence. That
means the validation bar is different: a build action is not complete unless it
survives a save/load round trip.

Adoption:

- Any milestone involving save/load needs a round-trip check.
- Handoffs should name `user://` files and resource classes touched.

## What Not To Copy Blindly

- Do not treat "can place one tile" as sufficient for a builder proof.
- Do not skip save/load checks when persistence is part of the design.
- Do not leave temporary scene files or editor-only paths in polished examples.

## Game Studio Changes Suggested

- Add a builder-game smoke checklist.
- Add resource round-trip checks to the Godot runtime ladder.
- Add "preview, place, rotate, remove, save, load" as the minimum builder proof
  when persistence is in scope.
