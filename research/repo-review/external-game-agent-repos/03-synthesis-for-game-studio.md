# Synthesis For Game Studio

This synthesis turns the two external repo reviews into concrete Game Studio
changes.

## Core Judgment

Game Studio should not become a bigger skill bundle. Its value should be that it
turns taste, direction, or existing Godot work into the next playable build, then
judges that build with the right roles.

The external repos show two different strengths:

- Claude Code Game Studios is strong at role and phase structure.
- gstack-game is strong at sharp review voice and player-centered scoring.

Game Studio should combine neither wholesale. It should use both to make a
smaller production framework with stricter playable validation.

## Godot Finding

Neither repo includes a runnable Godot project. There is nothing worth copying as
example code. The right adoption is a Godot playable-build reference that tells
agents how to plan, implement, and verify a Godot prototype without pretending
that text inspection proves the game works.

## Changes Made From This Review

| Change | File |
| --- | --- |
| Added external repo analysis index | `research/repo-review/external-game-agent-repos/README.md` |
| Added CCGS review | `research/repo-review/external-game-agent-repos/01-claude-code-game-studios.md` |
| Added gstack-game review | `research/repo-review/external-game-agent-repos/02-gstack-game.md` |
| Added this synthesis | `research/repo-review/external-game-agent-repos/03-synthesis-for-game-studio.md` |
| Added Godot playable-build guide | `core/references/operational/godot-playable-build.md` |
| Strengthened Godot profile | `profiles/engines/godot.yaml` |
| Connected execution skill to Godot guide | `skills/game-execution/SKILL.md` |
| Added Godot eval fixture | `evals/prompts/godot-playable-build-claim.md` and expected output |

## Product-Level Lessons

### 1. Routing Is A Product Feature

The user should not need to know whether they need onboarding, director review,
execution handoff, or gate review. A navigator should pick the first step,
state the stop condition, and refuse human-owned decisions.

### 2. First Playable And Vertical Slice Need Different Contracts

A first playable proves one player action and response. A vertical slice proves
one complete loop at representative quality and gives a production-rate signal.
These should never share the same artifact template.

### 3. Godot Completion Requires Runtime Checks

For Godot, "files changed" is not enough. A claim needs at least one of:

- import or syntax check
- scene load or smoke script
- gameplay capture or walkthrough note
- playtest note tied to the proof target

If those are absent, the gate should ask for the next smallest runtime check.

### 4. Role Reviews Need A Player Consequence

A review finding should name the player-facing effect. Examples:

- "The player has no failure recovery after damage."
- "The first meaningful action arrives after 90 seconds."
- "The hit reaction has impact but no resolution beat."
- "The build shows movement and combat, but no spend path, so the loop does not close."

If a finding cannot name a player consequence, it is probably repository hygiene,
not game-quality review.

### 5. Generated Material Is Not Progress

Both external repos generate many documents. Game Studio must treat generated
material as a liability until it helps a playable decision. More docs are useful
only when they reduce uncertainty, preserve a decision, or enable a build check.

## Next Adoption Work

1. Add `skills/game-navigator/` so routing stops depending on memory.
2. Add a Godot first-playable example with small `.gd`, `.tscn`, and report files
   only if a real runnable sample is built and checked.
3. Add a brownfield Godot adoption example that infers systems from existing
   `.gd` and `.tscn` files.
4. Add a design-intent-survival section to implementation handoff review.
