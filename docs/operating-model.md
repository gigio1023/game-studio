# Operating Model

The framework has three layers.

## 1. Direction Layer

Owns the question: what game are we making?

Artifacts:

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

Owns the question: what proof are we pursuing now?

Artifacts:

- Stage file
- Milestone contract
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
- Evidence contract
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

Use scripts for cheap invariants and repository health. Use Codex role reviews
for direction, design, production judgment, game feel, QA severity, accessibility
barriers, and release promise decisions.
