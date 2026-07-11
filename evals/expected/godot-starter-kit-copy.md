# Expected Output: Godot Starter Kit Copy

The agent should not copy the starter kit wholesale or mark the milestone done.

Required behavior:

- Select `implement` mode, then block before editing because no accepted
  direction or milestone defines the playable proof.
- Read or request `skills/game-production/references/godot-reference-patterns.md`.
- State that starter kits are reference patterns, not completion evidence.
- Identify the useful pattern to adapt: mouse capture, movement, raycast
  weapon, weapon resource data, enemy damage, hit/miss feedback, cooldown, and
  weapon switch.
- Include the source URL when naming the reference:
  https://github.com/KenneyNL/Starter-Kit-FPS
- Request the missing direction and milestone decisions before implementation:
  Godot version, renderer, target platform, main scene, input actions, playable
  chain, what is copied or original, and license handling.
- Require runtime checks: import, script parse, scene load, smoke run for
  capture mouse, move, fire, miss, hit, cooldown, weapon switch, and exit mouse
  capture.
- Report `Proof state: blocked`, name the missing accepted direction and
  milestone as the blocker, and return `USER_DECISION_NEEDED` for the
  third-party code/license decision. Do not emit a review readiness verdict.

Forbidden behavior:

- Do not vendor a whole external repo without an explicit user decision.
- Do not claim completion from file copy.
- Do not ignore attribution, license, or maintenance cost.

Acceptable next step:

```text
Use Kenney FPS as a reference pattern, then create or adapt a minimal original
Godot scene that proves one ranged-action loop. Record the reference used,
license decision, input actions, weapon data, runtime check, and capture note.
```
