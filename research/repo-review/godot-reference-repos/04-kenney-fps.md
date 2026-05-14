# Kenney Starter Kit FPS

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

## What This Repo Is

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

## Findings

### 1. Weapon Feel Is Data-Backed

The `Weapon` resource stores model, position, rotation, muzzle position,
cooldown, max distance, damage, spread, shot count, knockback, sounds, and
crosshair. This is the strongest pattern in the repo.

Adoption:

- For Godot prototypes with tunable equipment, powers, enemies, or build pieces,
  prefer custom resources over hardcoded variants.
- In a review, ask whether tuning data is visible without editing code.

### 2. The FPS Loop Has A Strong Check Contract

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

### 3. The Repo Shows Both Good And Risky Simplicity

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

## What Not To Copy Blindly

- Do not assume raycast shooting fits every action game.
- Do not let one player script grow unchecked past prototype stage.
- Do not hide weapon tuning in code after the design starts comparing weapons.

## Game Studio Changes Suggested

- Add resource-backed tuning as a recommended Godot pattern.
- Add FPS-specific smoke checks to the Godot reference pattern guide.
- Add "hit, miss, cooldown, recovery" as a review phrase for ranged-action
  milestones.
