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
- Identify which claims still need playable proof.
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
- Recommend the smallest next proof that clarifies the project.

Stop with `USER_DECISION_NEEDED` when the audit finds conflicting authority,
unclear ownership, or a change that would replace the active direction.

## AI Authorship Boundary

AI may ask questions, propose concepts, compare tradeoffs, recommend a first
proof, draft a brief, and implement bounded playable proofs.

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
