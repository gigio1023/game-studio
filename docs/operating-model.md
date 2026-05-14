# Operating Model

Game Studio installs a project-local production system into a target game repo.
It starts by choosing an entry route, then runs direction, production, and
execution through playable validation gates.

## Entry Routing

| Mode | User state | First action | Output |
| --- | --- | --- | --- |
| `direction-carry-in` | Existing direction, mandate, prototype, pitch, or task | Preserve authority and audit missing validation | Direction audit, stage inference, next prototype |
| `taste-to-game` | Taste exists but the game direction is not stable | Elicit taste and compare a small concept slate | Taste profile, concept slate, creative brief |
| `brownfield-unknown` | Repo, notes, or prototype exist but authority is unclear | Audit current state before adding direction | State classification and stop condition |

Routing keeps the system from rewriting a real direction by accident, and keeps
novice creators from needing game-design vocabulary before their taste has been
translated into constraints.

## 1. Direction Layer

Owns the question: what game are we making?

Artifacts:

- Taste profile or direction audit
- Concept slate
- Game thesis
- Creative pillars
- Player experience targets
- Release strategy
- Role model
- Decision ledger

Primary roles:

- Game Director
- Creative Director
- Narrative Director
- Systems Designer
- Art Director
- Audio Director

## 2. Production Layer

Owns the question: what playable prototype are we pursuing now?

Artifacts:

- Stage file
- Milestone contract
- Prototype budget
- Gate verdicts
- Risk register
- Scope list
- Playtest plan

Primary roles:

- Producer
- QA Lead
- Release Manager
- Localization Lead
- Accessibility Lead

## 3. Execution Layer

Owns the question: what exact work must happen next?

Artifacts:

- Work intake
- Implementation handoff
- File ownership
- Claim-to-proof contract
- Internal evidence contract
- Verification ledger
- Drift log

Primary roles:

- Technical Director
- Lead Programmer
- Engine Specialist
- Gameplay Programmer
- Tools Programmer
- Backend or Runtime Engineer
- QA Engineer

## Decision Modes

- `consultative`: Ask before important creative or strategic decisions.
- `agentic`: Make reasonable assumptions and record them for review.
- `audit`: Read and review only.

## Review Modes

- `full`: Run all relevant directors and leads.
- `lean`: Run the strictest required roles.
- `solo`: Run a lightweight self-check for low-risk internal work.

## Script Boundary

Use scripts for cheap invariants and repository health. Use role reviews for
direction, design, production judgment, game feel, QA severity, accessibility
barriers, release promise decisions, and whether a prototype is worth
advancing.

## Detailed Layer Rules

## Director Layer Detail

The director layer prevents implementation from outrunning the game.

It answers:

- Are we carrying in direction, discovering from taste, or auditing ambiguous
  state?
- What is the one-sentence identity of the game?
- What emotion should the player feel in the first 5, 10, and 20 minutes?
- What mechanics make this game distinct?
- What would make the game fail even if the code works?
- What must be proven before a vertical slice?

### Before Direction Lock

When direction is missing or weak, the director layer should not demand a full
thesis first. It should route the project through entry mode, taste profile,
concept slate, creative brief, and first proof target.

### Required Direction Artifacts

#### Entry route

An explicit classification of `direction-carry-in`, `taste-to-game`, or
`brownfield-unknown`.

#### Concept slate

A small set of comparable, rejectable, proofable concepts when the project is
still discovering direction.

#### Game thesis

A short statement of the game identity, player role, core pressure, and product
promise.

#### Creative pillars

Three to five falsifiable design values. A pillar must help resolve real design
disagreements.

#### Anti-pillars

Things the project intentionally avoids. Anti-pillars are useful when agents try
to add generic features.

#### Player experience targets

What the player should understand, feel, and do after 5, 10, and 20 minutes.

#### Release strategy

The smallest public promise the project can keep.

### Director Gate Rule

When a proposal changes identity, fantasy, camera, genre, audience, platform,
AI usage, monetization, or release promise, run a director gate before execution.

### Design Foundations

Director review should use craft questions from the craft reference index:

- What mechanic creates the target dynamic?
- What player experience should that dynamic produce?
- What meaningful choice does the player make?
- What does the player learn in the first session?
- What playable prototype shows the target experience happened?
- What wrong direction does this decision reject?

## Production Layer Detail

The production layer turns direction into staged playable validation.

### Milestone Contract

Every milestone must define:

- Goal
- Direction source and selected concept
- Proof target
- Proof budget
- Research question
- Experience hypothesis
- Deliverables
- Quality criteria tied to playable validation
- Non-goals and cut candidates
- Internal evidence artifacts, such as captures, build IDs, playtest notes, QA
  results, release checks, and decision records
- QA walkthrough
- Review roles and gate reviewers
- Risks and fallback prototype
- Exit decision

Milestones should not ask for vague confidence. They should say what a player
can do, what will be captured, who reviews it, and what decision follows.

### Stage Progression

Recommended order:

1. Entry Route
2. Taste Clarity or Direction Carry-In Audit
3. Concept Slate
4. Creative Brief
5. Constraint Ladder
6. First Prototype Question
7. First Playable Prototype
8. Direction Lock
9. Protocol Proof
10. Core Loop Prototype
11. Pre-production Exit
12. Presentation Value Gate
13. Vertical Slice
14. Demo Candidate
15. Release Candidate
16. Post-release Learning

### Discovery To Prototype Rule

Creative discovery can produce taste profiles, concept cards, and briefs, but it
does not approve production by itself. Before implementation expands, the
project needs:

- a selected concept or explicit candidate concept
- a concept playability review
- a constraint ladder
- a prototype budget
- a first prototype contract or first playable contract
- a review gate that can say `READY`, `CONCERNS`, or `NOT_READY`

The constraint ladder clears through `GS-CONSTRAINT-LADDER`. A Core Loop
Prototype clears through `GS-CORE-LOOP`; direction gates can support the review,
but playable validation carries the stage.

### First Prototype Rule

A first prototype answers one prototype question. It can be rough, simulated,
paper-based, or digital, but it must name the player moment, what to ignore,
what to capture, and what would change the direction.

### First Playable Prototype Rule

A first playable prototype is executable. A player must be able to control a
moment, see a response, experience failure or recovery, and generate concrete
captures for review. If the project only has persuasive prose, reference
images, or a task list, it has not reached first playable.

### Pre-production Exit Rule

Do not enter production while the project still depends on open-ended discovery.
The project needs playable validation, cut candidates, role ownership, content
scope, QA strategy, accessibility scope, release-risk notes, and a review
verdict.

### Vertical Slice Rule

A vertical slice is not a fancy prototype. It is a small section of the game at
target quality across gameplay, content, UI, audio, visuals, technical stability,
and release promise.

If the project cannot yet validate the core loop, do not call the milestone a
vertical slice.

### Release Validation Rule

Release-oriented milestones must map public claims to build truth. Store pages,
trailers, screenshots, accessibility claims, localization claims, credits, and
support promises need concrete internal artifacts before publication.

## Execution Layer Detail

The execution layer makes agent work bounded and reviewable.

### Work Intake

Before implementation, the agent needs:

- Entry mode
- Direction Lock or first prototype contract
- Current milestone
- Proof target
- Files in scope
- Files out of scope
- Required internal evidence artifacts
- Verification commands
- Handoff artifacts
- Known risks

### File Ownership

Parallel agents must receive disjoint write scopes. A role can review outside
its scope. Assigned owners edit.

### Proof And Evidence Ledger

Each implementation task appends:

- What changed
- What was verified
- What playable or inspectable proof exists
- What internal evidence artifact preserves it
- What remains risky
- Which gate reviews it next

### Drift Log

Record deviations from the plan. Drift is acceptable when it is intentional,
explained, and reviewed.
