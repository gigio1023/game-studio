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

## Index

- [Godot Engine](01-godot-engine.md)
- [Godot Demo Projects](02-godot-demo-projects.md)
- [Kenney 3D Platformer Starter Kit](03-kenney-platformer.md)
- [Kenney FPS Starter Kit](04-kenney-fps.md)
- [Kenney City Builder Starter Kit](05-kenney-city-builder.md)
- [Synthesis For Game Studio](06-synthesis-for-game-studio.md)

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
