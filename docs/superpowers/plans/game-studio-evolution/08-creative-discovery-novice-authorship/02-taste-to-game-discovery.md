# 08 Creative Discovery And Novice Authorship: Taste-To-Game Discovery

[Back to index](../08-creative-discovery-novice-authorship.md)

## Taste-To-Game Discovery

- [ ] Create `docs/beginner-taste-to-game.md`.

Purpose:

```text
Translate loose taste into game concepts without forcing novice creators to
already know game-design language.
```

The interview should ask for:

- games, scenes, moments, or media the creator remembers
- what felt good
- what felt boring, stressful, unfair, or tedious
- desired emotional texture
- session length tolerance
- complexity tolerance
- preferred interaction density
- hard noes
- platform comfort
- art/audio/narrative appetite
- whether the creator wants learning, finishing, sharing, commercial polish, or
  personal expression

Do not start with:

- "What is your core loop?"
- "What is your genre?"
- "What engine do you want?"
- "What is your monetization model?"

Those can appear later after taste has been translated into design constraints.


## Taste Profile Template

- [ ] Create `core/templates/direction/taste-profile.md`.

Required headings:

```markdown
# Taste Profile


## Creator Intent

## Reference Moments

## Desired Emotions

## Undesired Friction

## Player Motivation Signals

## Complexity Tolerance

## Session Shape

## Interaction Preferences

## Hard Noes

## Open Questions
```

Rules:

- Reference games are not genre assignments.
- A reference moment should name what the creator liked, not only the title.
- If the agent infers motivation, mark it as an inference.
- The profile should preserve contradictions instead of smoothing them away too
  early.


## Concept Slate

- [ ] Create `core/templates/direction/concept-card.md`.

Required fields:

```markdown
# Concept Card


## Name

## One Sentence

## Target Player

## Player Fantasy

## Core Verb

## Intended Emotion

## Mechanic -> Dynamic -> Experience

## Distinctive Bet

## First Playable Proof

## Proof Budget

## Likely Cut

## Main Risk

## Why This Might Be Wrong

## Why This Should Be Rejected
```

- [ ] Create `core/templates/direction/concept-portfolio.md`.

The concept slate should usually contain 3 to 5 cards:

- closest fit to stated taste
- sharper identity
- smallest playable build
- risky original option
- optional commercial-aware option

Do not generate large idea catalogs. More ideas are not better if the user
cannot compare, reject, or select them.


## Concept Comparison

- [ ] Create `skills/game-concept-portfolio/references/concept-comparison.md`.

Compare concepts by:

- taste fit
- player fantasy clarity
- first verb clarity
- distinctive bet
- proofability
- production risk
- accessibility risk
- content burden
- implementation path
- reason to reject

Output shape:

```markdown

## Recommended Concept

## Why This One

## What It Gives Up

## Main Risk

## First Proof

## Parked Concepts

## Rejected Concepts
