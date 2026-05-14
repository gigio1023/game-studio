# 08 Creative Discovery And Novice Authorship

## Objective

Add a explicit entry layer for users who do not already have a stable game
direction. Game Studio should support both existing team direction and
taste-to-game discovery without becoming a one-click game vending machine.

Public product phrase:

```text
AI-assisted game production framework for playable validation.
```

Meaning:

- discovery-driven: the system can start from taste, references, scenes,
  desired emotions, disliked friction, or an existing direction
- milestone-gated playable validation: ideas advance through playable build, review, and explicit
  decisions rather than persuasive prose
- AI game production: Codex and Claude Code can propose, plan, implement,
  review, and continue work within the user's authority boundaries

Terminology:

- Use `proof`, `playable build`, `proof target`, `proof budget`, and
  `validation` in public-facing product language.
- Use `evidence` for internal artifact classes: captures, builds, playtest
  notes, QA results, decision records, telemetry, screenshots, videos, and
  release claim checks.
- Do not use locked-evidence phrasing as the product phrase.

## Files

- Create: `docs/entry-model.md`
- Create: `docs/beginner-taste-to-game.md`
- Create: `docs/concept-development-method.md`
- Create: `docs/plain-language-game-design-glossary.md`
- Create: `skills/game-onboarding/SKILL.md`
- Create: `skills/game-onboarding/references/entry-routing.md`
- Create: `skills/game-taste-interviewer/SKILL.md`
- Create: `skills/game-taste-interviewer/references/taste-elicitation.md`
- Create: `skills/game-concept-guide/SKILL.md`
- Create: `skills/game-concept-guide/references/concept-generation.md`
- Create: `skills/game-concept-portfolio/SKILL.md`
- Create: `skills/game-concept-portfolio/references/concept-comparison.md`
- Create: `skills/game-direction-crystallizer/SKILL.md`
- Create: `skills/game-direction-crystallizer/references/brief-to-direction.md`
- Create: `skills/game-scope-shaper/SKILL.md`
- Create: `skills/game-scope-shaper/references/constraint-ladder.md`
- Create: `skills/game-prototype-planner/SKILL.md`
- Create: `skills/game-prototype-planner/references/prototype-path.md`
- Create: `core/templates/intake/project-intake.md`
- Create: `core/templates/intake/direction-carry-in-audit.md`
- Create: `core/templates/intake/beginner-taste-interview.md`
- Create: `core/templates/direction/taste-profile.md`
- Create: `core/templates/direction/reference-games-map.md`
- Create: `core/templates/direction/concept-card.md`
- Create: `core/templates/direction/concept-portfolio.md`
- Create: `core/templates/direction/one-page-creative-brief.md`
- Create: `core/templates/direction/direction-decision-record.md`
- Create: `core/templates/production/constraint-ladder.md`
- Create: `core/templates/production/first-prototype-contract.md`
- Create: `core/templates/production/idea-parking-lot.md`
- Create: `core/schemas/entry-intake.schema.json`
- Create: `core/schemas/taste-profile.schema.json`
- Create: `core/schemas/concept-card.schema.json`
- Create: `core/schemas/concept-portfolio.schema.json`
- Create: `core/schemas/creative-brief.schema.json`
- Create: `core/schemas/constraint-ladder.schema.json`
- Create: `core/schemas/prototype-path.schema.json`
- Modify: `README.md`
- Modify: `docs/philosophy.md`
- Modify: `docs/operating-model.md`
- Modify: `core/workflows/stage-model.md`
- Modify: `core/workflows/workflow-catalog.yaml`
- Modify: `core/gates/direction.md`
- Modify: `core/rubrics/direction-quality-rubric.md`
- Modify: `adapters/codex/bootstrap.md`
- Modify: `adapters/claude/bootstrap.md`

## Product Position

Game Studio has two legitimate beginnings:

1. A team already has a direction, mandate, prototype, pitch, or task.
2. A creator has taste, references, curiosity, scenes, emotions, or constraints
   but no stable direction.

The current plan is strong after direction exists. This extension makes the
pre-direction path explicit.

Public README language should say:

```text
Game Studio helps Codex and Claude Code turn either an existing game direction
or a player's taste profile into a playable, reviewed, finishable game project.
It is not a one-click game vending machine; it is a creative production
autopilot with human authorship control.
```

Avoid:

- standalone defensive disclaimers about not generating games
- implying that scripts or schemas judge game quality
- implying that AI owns taste, direction, stage advancement, or public promises
- audit-heavy evidence language as the first-screen product phrase

## Entry Model

- [ ] Create `docs/entry-model.md`.

Entry modes:

| Mode | User state | First action | Output |
| --- | --- | --- | --- |
| `direction-carry-in` | Existing game direction, company task, team mandate, prototype, pitch, or public promise | audit direction authority and missing proof | direction audit, stage inference, missing proof |
| `taste-to-game` | Taste and interest exist, but game-development vocabulary is weak | elicit taste and generate a small concept slate | taste profile, concept slate, creative brief |
| `brownfield-unknown` | Repo, notes, or prototype exist, but authority and direction are unclear | adoption audit plus entry routing | current state classification and next proof |

Required route output:

```markdown
## Entry Mode
## Direction Source
## Creator Fluency
## Authority Owner
## Current Concept Status
## First Required Artifact
## Next Skill Or Gate
## Stop Condition
```

Routing rules:

- If a direction already exists, preserve it before improving it.
- If only taste exists, do not ask for a full thesis first.
- If the repo is ambiguous, audit before writing new direction documents.
- If the next step requires user taste, direction selection, stage movement, or
  a public promise, return `USER_DECISION_NEEDED`.

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

## Novice Explanation UX

- [ ] Create `docs/plain-language-game-design-glossary.md`.

Explanation format:

```text
What you said -> Game Studio term -> Why it matters -> First proof
```

Examples:

- "I like feeling lost but safe" -> exploration tension -> level structure must
  create curiosity without punishing confusion -> first proof tests one room
  transition and one reversible risk.
- "I hate grinding" -> low repetition tolerance -> progression must avoid
  repeated filler actions -> first proof tests whether one loop is meaningful
  without upgrades.

Rules:

- Explain only the term needed for the next decision.
- Do not teach a full game-design course during onboarding.
- Prefer choices with consequences over open-ended lectures.
- Let the user stay at novice fluency while the artifacts become professional.

## AI Authorship Control

AI can:

- ask taste questions
- propose concepts
- compare tradeoffs
- recommend rejection
- draft a creative brief
- plan the first prototype
- implement bounded playable builds
- review the result
- recommend next proof

AI must not:

- own the user's taste
- silently select the final concept
- lock direction without a decision record
- change stage without a decision record
- make public promises
- claim a concept is original, marketable, or fun without proof
- turn a parked idea into active scope without approval

Decision records are required for:

- selected concept
- Direction Lock
- stage advancement
- public promise changes
- major scope expansion
- replacement of the core player fantasy

## Adapter Behavior

- [ ] Update `adapters/codex/bootstrap.md`.
- [ ] Update `adapters/claude/bootstrap.md`.

Both adapters should begin with:

```text
Are we adopting an existing game direction, turning taste/references into a game
direction, or auditing an ambiguous existing project?
```

Codex behavior:

- prefer explicit project intake before file changes
- propose concise concept slates when in `taste-to-game`
- require first prototype contract before implementation
- stop at user decision points

Claude behavior:

- read `.game-studio/project-state.md` and `entryMode` at session start
- preserve concept slate and creative brief across compaction
- use optional hooks only for continuity warnings
- do not let hook output replace review gates

## Acceptance

- The framework can start from blank taste without forcing a thesis first.
- The framework can also preserve an existing team direction without rewriting
  it.
- Public copy says milestone-gated playable validation, not audit-heavy.
- Concept generation outputs a small, comparable slate, not idea spam.
- Every selected concept has a first playable build.
- AI authorship boundaries are explicit.
- Direction Lock remains a gate, not a persuasive document.
