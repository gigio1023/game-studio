# Taste To Game

Use this route when the creator can describe what they like, dislike, want to
feel, or want to avoid, but cannot yet name a stable game direction. The goal
is not to brainstorm forever: turn taste into a small set of comparable
concepts, help the creator select one, and define a first playable proof.

## Contents

- Useful inputs
- Taste profile
- Design questions
- Constraint ladder
- Concept slate
- Selection
- Creative brief
- First playable proof

## Useful Inputs

Plain language is enough: games, films, scenes, toys, or places the creator
likes; moments they want players to feel; mechanics they want to avoid; session
length and complexity tolerance; content boundaries; things the project must
not become. The creator does not need genre, engine, monetization, or a
complete loop before discovery begins.

## Taste Profile

```markdown
# Taste Profile

## Desired Player Feelings
## Reference Moments
## Anti-Taste
## Complexity Tolerance
## Session Shape
## Content Boundaries
## Must Preserve
## Open Questions
```

Reference moments must name what mattered in the moment, not just titles. Keep
taste and anti-taste separated, keep hard noes explicit, and mark agent
inferences as inferences.

## Design Questions

Every concept should answer a player-facing question.

Weak: "Can we make a cozy action game?" / "Can AI generate quests?"

Stronger:

- Can one repeated action create curiosity, risk, and recovery within two
  minutes?
- Can a conversation system reveal suspicion without exposing a meter?
- Can a puzzle room teach its rule without tutorial text?

## Constraint Ladder

Bound ambition into a finishable proof path before comparing concepts:

```markdown
# Constraint Ladder

## Must Prove
## Can Fake
## Can Cut
## Must Not Promise

## Proof Budget
- Time:
- Content:
- Systems:
- Asset fidelity:
- Technical risk:
```

## Concept Slate

Build 3 to 5 concepts, each small enough to compare and reject:

```markdown
# Concept Card

## Name
## Player Fantasy
## First Verb
## Repeatable Loop
## Why This Fits
## Why This Might Fail
## First Playable Proof
## Rejection Signal
```

More concepts usually make novice authorship weaker, not stronger. Compare by
taste fit, cost and speed of proving the idea, production risk, and content
burden.

## Selection

The agent can recommend at most one concept and one next proof; the creator
selects, combines, parks, or rejects.

- `SELECT`: move one concept into a creative brief.
- `COMBINE`: merge specific parts of two concepts and rewrite the proof
  question.
- `PARK`: keep the concept visible but out of scope, with a reason.
- `REJECT`: record why it does not fit taste, constraints, or proof budget.

## Creative Brief

Short enough for an agent to preserve during implementation. Name:

- player fantasy
- first playable moment
- core tension and main verb
- feedback requirement
- failure or recovery state
- proof budget
- non-goals

If the creator has not accepted the concept, mark the brief as candidate
material; Direction Lock waits for an explicit decision.

## First Playable Proof

The first proof answers one question, such as: Is the central interaction
legible? Does the player understand what changed after acting? Does the main
tension appear within the first minute? Does failure create a useful next
attempt?

If the first proof cannot be named, the concept is not ready for Direction
Lock.
