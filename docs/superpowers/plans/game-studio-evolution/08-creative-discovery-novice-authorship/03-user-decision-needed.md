# 08 Creative Discovery And Novice Authorship: User Decision Needed

[Back to index](../08-creative-discovery-novice-authorship.md)

## User Decision Needed
```


## Creative Brief

- [ ] Create `core/templates/direction/one-page-creative-brief.md`.

Required headings:

```markdown
# Creative Brief


## Selected Concept

## Player Promise

## Target Player

## Player Fantasy

## Core Verb

## Core Pressure

## Intended Emotion

## Creative Pillars

## Anti-Pillars

## First Playable Proof

## Proof Budget

## What To Ignore For Now

## Decision Record
```

Rules:

- The creative brief is not a full GDD.
- The brief must be short enough to guide the first prototype.
- Direction Lock still requires gates. The brief only prepares direction.
- If the user has not accepted the concept, mark it as candidate material.


## Constraint Ladder

- [ ] Create `core/templates/production/constraint-ladder.md`.

Purpose:

```text
Turn wide imagination into a finishable proof path without making the creator
feel that the idea has been flattened.
```

Levels:

| Level | Constraint Type | Example |
| --- | --- | --- |
| L0 | capacity | solo creator, one week, web game |
| L1 | taste | lonely exploration, no twitch combat |
| L2 | experience | first minute should feel curious and unsafe |
| L3 | mechanic | one movement verb, one interaction verb |
| L4 | content | three rooms, one enemy, one rule twist |
| L5 | release | playable in browser, no account system |

Rule:

- Constraints focus the first proof. They do not erase parked ambition.
- Cut ideas should move to the idea parking lot with a reason and revisit
  condition.


## First Prototype Contract

- [ ] Create `core/templates/production/first-prototype-contract.md`.

Required headings:

```markdown
# First Prototype Contract


## Selected Concept

## Prototype Question

## Player Moment To Prove

## What To Build

## What To Ignore

## What To Capture

## Minimum Playable Loop

## Review Roles

## What Would Change The Direction

## Stop Condition
```

Examples of good prototype questions:

- Can the player understand the threat and choose a response within 30 seconds?
- Does the one-button input create tension rather than boredom?
- Does the first failure teach a better next attempt?
- Does the environment make the player curious without tutorial text?

Bad prototype questions:

- Is this fun?
- Can we build the whole game?
- Does the genre work?
- Should we add more systems?


## Pre-Direction Gates

- [ ] Add gates before `GS-THESIS`.

Gate list:

```text
GS-ENTRY-ROUTE
GS-TASTE-CLARITY
GS-CONCEPT-SLATE
GS-CREATIVE-BRIEF
GS-CONSTRAINT-LADDER
GS-PROTOTYPE-QUESTION
```

Gate meanings:

- `GS-ENTRY-ROUTE`: the project knows whether it is carrying direction,
  discovering from taste, or auditing ambiguous state.
- `GS-TASTE-CLARITY`: taste, anti-taste, reference moments, desired emotion,
  and hard noes are separated.
- `GS-CONCEPT-SLATE`: 3 to 5 concepts are comparable, rejectable, and proofable.
- `GS-CREATIVE-BRIEF`: one selected concept is short, directional, and
  proof-ready.
- `GS-CONSTRAINT-LADDER`: scope has been converted into a proof budget.
- `GS-PROTOTYPE-QUESTION`: the first prototype tests one named risk.

Verdict rules:

- `READY`: the project can plan the first playable build.
- `CONCERNS`: the proof can start, but ambiguity must be carried into the
  contract.
- `NOT_READY`: the agent should not proceed to implementation.
