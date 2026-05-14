# Entry Model

Game Studio can begin from an existing direction, from a creator's taste, or
from an ambiguous existing project. The entry model decides which path is true
before asking for Direction Lock material.

## Entry Modes

| Mode | User state | First action | Output |
| --- | --- | --- | --- |
| `direction-carry-in` | Existing game direction, company task, team mandate, prototype, pitch, or public promise | Audit direction authority and missing proof | Direction audit, current status, first proof target |
| `taste-to-game` | Taste, references, scenes, emotions, or constraints exist but direction is not stable | Elicit taste and generate a small concept slate | Taste profile, concept slate, creative brief |
| `brownfield-unknown` | Repo, notes, prototype, or assets exist but authority and direction are unclear | Audit the existing material before writing new direction | Current state classification and next proof |

## Route Output

Every route must produce:

- current authority owner
- current concept status
- first proof target
- allowed agent autonomy
- next skill or gate

Use this shape when recording an intake result:

```markdown
## Entry Mode
## Direction Source
## Creator Fluency
## Authority Owner
## Current Concept Status
## First Required Artifact
## First Proof Target
## Allowed Agent Autonomy
## Next Skill Or Gate
## Stop Condition
```

## Concept Statuses

`UNROUTED`

The project has not yet declared whether it carries direction, starts from
taste, or needs brownfield audit.

`TASTE_DISCOVERY`

The creator's preferences, reference moments, desired emotions, anti-taste, and
hard noes are being separated.

`CONCEPT_SLATE`

A small set of concepts exists for comparison, rejection, and proof planning.
The slate is not active scope.

`CREATIVE_BRIEF`

One candidate concept has been shaped into a short brief. If the user has not
accepted it, it remains candidate material.

`FIRST_PROOF_PLANNED`

The selected concept has a prototype question, proof budget, minimum playable
loop, and stop condition.

`DIRECTION_LOCKED`

Direction Lock has an explicit decision record and has cleared the required
direction gates.

`PARKED`

The concept or route is not active. It may be revisited only with a new
decision record.

## Direction Carry-In

Use `direction-carry-in` when the user already has direction from a mandate,
pitch, prototype, shipped promise, stakeholder decision, or prior design
artifact.

Rules:

- Preserve the carried direction before improving it.
- Record the direction source and authority owner.
- Identify which claims still need playable validation.
- Do not rewrite direction just because the artifact is incomplete.
- Route to `GS-CREATIVE-BRIEF`, `GS-PROTOTYPE-QUESTION`, or `GS-THESIS` based
  on what is actually missing.

Stop with `USER_DECISION_NEEDED` when the carried direction conflicts with a new
recommendation, public promise, or stage movement.

## Taste To Game

Use `taste-to-game` when the creator can describe what they like, dislike, want
to feel, or want to avoid, but cannot yet name a stable game direction.

Rules:

- Do not start by asking for genre, core loop, engine, monetization, or release
  strategy.
- Translate reference moments into design constraints and proof targets.
- Generate a concept slate of 3 to 5 concepts, not an idea catalog.
- Mark agent inferences clearly.
- Keep parked and rejected concepts visible with reasons.
- Require the user to select or reject the concept before Direction Lock.

Stop with `USER_DECISION_NEEDED` when the next step requires taste judgment,
concept selection, stage movement, or a public promise.

## Brownfield Unknown

Use `brownfield-unknown` when a repo, notes, prototype, assets, or prior
conversation exists but the current authority and stage are unclear.

Rules:

- Audit before writing new direction documents.
- Separate playable truth from claims in notes.
- Identify project-owned files, source-of-truth artifacts, and stale promises.
- Classify the current concept status before proposing new concepts.
- Recommend the smallest next prototype that clarifies the project.

Stop with `USER_DECISION_NEEDED` when the audit finds conflicting authority,
unclear ownership, or a change that would replace the active direction.

## AI Authorship Boundary

AI may ask questions, propose concepts, compare tradeoffs, recommend a first
playable prototype, draft a brief, and implement bounded playable prototypes.

AI must not claim the user's taste, silently select the final concept, lock
direction, change stage, turn parked ideas into active scope, or make public
promises without an explicit decision record.

## Pre-Direction Gate Path

The normal path before Direction Lock is:

```text
GS-ENTRY-ROUTE
GS-TASTE-CLARITY
GS-CONCEPT-SLATE
GS-CREATIVE-BRIEF
GS-PROTOTYPE-QUESTION
GS-THESIS
```

Routes may skip gates only when the required artifact already exists and the
authority owner accepts it. A gate verdict can recommend the next proof, but it
does not change stage state by itself.

## Taste-To-Game Workflow

Taste-to-game is the entry route for creators who know what kinds of games,
moments, moods, or constraints interest them, but do not yet know how to express
that interest as a production-ready game direction.

The goal is not to brainstorm forever. The goal is to turn taste into a small
set of comparable game concepts, select one, and define a stable first playable
proof direction.

### Inputs

Useful inputs are plain language:

- games, films, books, scenes, toys, sports, tools, or places the creator likes
- moments the creator wants players to feel
- mechanics the creator wants to avoid
- session length and complexity tolerance
- preferred camera, control, or platform constraints
- content boundaries
- art, audio, and narrative references
- things the creator does not want the project to become

The creator does not need to provide genre, engine, monetization, systems, or a
complete loop before discovery begins.

### Outputs

Taste-to-game should produce:

- taste profile
- anti-taste list
- constraint ladder
- concept slate
- selected concept
- parked concepts
- creative brief
- first prototype contract

### Taste Profile

```markdown
# Taste Profile

## Creator Fluency

`novice | intermediate | expert`

## Desired Player Feelings

-

## Reference Moments

-

## Anti-Taste

-

## Complexity Tolerance

-

## Session Shape

-

## Content Boundaries

-

## Must Preserve

-

## Open Questions

-
```

### Concept Slate

A concept slate should contain 3 to 5 concepts. Each concept must be small
enough to compare and reject.

Each concept should include:

- player fantasy
- first verb
- repeatable loop
- one surprising constraint
- why it fits the taste profile
- why it might fail
- first playable prototype
- proof budget
- rejection signal

Do not produce long idea catalogs. More concepts usually make novice authorship
weaker, not stronger.

### Selection Rule

The AI can recommend a concept, but the creator selects, combines, parks, or
rejects it.

A selected concept becomes production-relevant only after it has:

- a creative brief
- a first prototype question
- a proof budget
- a stop condition

### First Playable Proof

The first proof should answer one question, such as:

- Is the central interaction legible?
- Does the player understand what changed after acting?
- Does the main tension appear within the first minute?
- Is the fantasy still recognizable with placeholder assets?
- Does failure create a useful next attempt?

If the first proof cannot be named, the concept is not ready for Direction Lock.

## Concept Development Method

Game Studio treats concept development as a short discovery-to-proof loop.

```text
Taste or mandate -> concept slate -> creative brief -> first proof -> review -> direction decision
```

### 1. Route The Entry

Choose one route:

- `direction-carry-in`: preserve and audit an existing direction.
- `taste-to-game`: translate taste into concepts.
- `brownfield-unknown`: audit an existing repo or notes before writing new
  direction.

### 2. Name The Design Question

Every concept should answer a player-facing question.

Weak:

- Can we make a cozy action game?
- Can AI generate quests?
- Can this become a vertical slice?

Stronger:

- Can one repeated action create curiosity, risk, and recovery within two
  minutes?
- Can a conversation system reveal suspicion without exposing a meter?
- Can a puzzle room teach its rule without tutorial text?

### 3. Build A Constraint Ladder

The constraint ladder narrows scope while preserving intent.

```markdown
# Constraint Ladder

## Must Prove

-

## Can Fake

-

## Can Cut

-

## Must Not Promise

-

## Proof Budget

- Time:
- Content:
- Systems:
- Asset fidelity:
- Technical risk:
```

### 4. Write Comparable Concept Cards

```markdown
# Concept Card

## Name

-

## Player Fantasy

-

## First Verb

-

## Repeatable Loop

-

## Why This Fits

-

## Why This Might Fail

-

## First Playable Proof

-

## Rejection Signal

-
```

### 5. Select Or Park

Use these outcomes:

- `SELECT`: move one concept into a creative brief.
- `COMBINE`: merge specific parts of two concepts and rewrite the proof
  question.
- `PARK`: keep the concept visible but out of scope.
- `REJECT`: record why it does not fit taste, constraints, or proof budget.

### 6. Draft The Creative Brief

A creative brief should be short enough for an agent to preserve during
implementation.

It should name:

- player fantasy
- first playable moment
- core tension
- main verb
- feedback requirement
- failure or recovery state
- proof budget
- non-goals

### 7. Move To Proof

Do not expand scope until the first proof has been reviewed. Direction becomes
stable through play, not through longer prose.
