---
name: game-creator-interview
description: >
  Use when interviewing a creator to define game philosophy, desired player
  experience, whole-game frame, non-goals, first playable proof, or acceptance
  criteria before implementation. Trigger on "interview me", "define my game",
  "game philosophy", "what do I want", "turn my taste into a game", and
  "goal prompt from my intent".
version: 0.1.0
tags:
  - game-development
  - interview
  - direction
  - discovery
---

# Game Creator Interview

## Purpose

Turn creator intent into a game frame and first playable proof without forcing
formal game-design vocabulary too early.

## Quick Start

1. Read `docs/creator-interview-model.md`.
2. Read `references/game-definition-interview.md`.
3. Check whether the target project already has `.game-studio/project-state.md`
   or direction docs.
4. Separate source classes: user fact, repo fact, safe assumption, blocker.
5. Ask only the questions needed to close the next required field.
6. Stop at `USER_DECISION_NEEDED` for taste, concept selection, Direction Lock,
   stage movement, public promise, budget, or credential authority.
7. Write the result into the target project's project-local state and next
   proof artifact.

## Gotchas

- Do not ask for genre, core loop, engine, monetization, or release plan before
  reference moments and player experience are clear.
- Do not turn the interview into documentation work with no playable proof.
- Do not silently select the final concept for the creator.
- Do not treat safe assumptions as user taste.
- Do not keep asking broad questions when one specific blocker remains.

## Output

```text
Status:
Creator philosophy:
Player role:
Whole-game frame:
Reference moments:
Anti-references:
First playable proof:
Acceptance criteria:
Non-goals:
Source classes:
Human-owned decisions:
Next skill or gate:
Terminal outcome:
```

