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
