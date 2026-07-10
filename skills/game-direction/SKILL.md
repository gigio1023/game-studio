---
name: game-direction
description: >
  Use when game work starts without a stable direction: interviewing a creator
  about the game they want, turning taste or references into a concept and
  creative brief, adopting an existing direction or pitch, or auditing an
  ambiguous game repo, prototype, or notes. Trigger on "what game should I
  make", "interview me about my game", "define my game", "game direction",
  "concept slate", "creative brief", and new or unclear game projects. NOT for
  milestone planning or implementation (use game-production) and NOT for
  reviewing builds or readiness claims (use game-review).
---

# Game Direction

Turn creator intent into a direction the creator recognizes as theirs: a short
creative brief plus one named first playable proof. Direction becomes stable
through play, not through longer prose, so every route here ends with a
playable proof target, never with documentation alone.

## Route First

Classify the entry before doing direction work:

| Mode | When | First move |
| --- | --- | --- |
| `direction-carry-in` | A thesis, pitch, mandate, prototype, or public promise already exists | Preserve it. Audit what is still unproven. Do not rewrite direction because an artifact is incomplete. |
| `taste-to-game` | The creator has taste, references, desired feelings, or hard noes, but no stable direction | Elicit taste, then build a small concept slate. Read `references/taste-to-game.md`. |
| `brownfield-unknown` | A repo, notes, or assets exist but authority and direction are unclear | Audit before writing anything new: separate playable truth from claims in notes, record who owns direction, then reroute to one of the modes above. |

Two deeper tools:

- When the creator needs a real conversation — philosophy, player role,
  whole-game frame, first proof — run the interview in
  `references/creator-interview.md`.
- When judging whether a thesis, pillars, player-experience target, or concept
  slate is solid, use the checklists in `references/direction-review.md`.

## Authority

The human owns taste, concept selection, Direction Lock (the explicit decision
that fixes direction), and public promises. You may ask, propose, compare,
recommend rejection, draft candidate briefs, and plan the first proof. When the
next step needs one of the human-owned calls, stop and return
`USER_DECISION_NEEDED` with the exact decision required — do not choose for
them, and do not present your own inference as their taste.

## Concept Status

Track where the project is with one status:
`UNROUTED`, `TASTE_DISCOVERY`, `CONCEPT_SLATE`, `CREATIVE_BRIEF`,
`FIRST_PROOF_PLANNED`, `DIRECTION_LOCKED`, or `PARKED`. A concept slate or
candidate brief is not active scope until the creator selects it; parked and
rejected concepts keep their reasons.

## Output

End a routing or discovery pass with:

```text
Entry mode:
Direction source:
Authority owner:
Concept status:
Creative brief or candidate brief:
First playable proof:
Safe assumptions made:
Human decision needed:
Next step:
```

Tag load-bearing facts by source: user fact, repo fact, safe assumption, or
blocker. Do not close direction work while a blocker remains.

## Gotchas

- Do not ask a novice creator for genre, core loop, engine, or monetization
  before taste has been elicited; ask for remembered moments and desired
  feelings first.
- Do not generate idea catalogs. Three to five comparable, rejectable concepts
  beat twenty.
- Do not smooth away contradictions in the creator's taste too early; surface
  one contradiction at a time.
- Do not turn discovery into documentation work: if the session produces prose
  but no named playable proof, the route is not done.
- If the first playable proof cannot be named in one sentence (one player
  action, one visible consequence), the concept is not ready for Direction
  Lock.
