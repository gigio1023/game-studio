# 01 Product Boundary And Project State

## Objective

Define Game Studio's product boundary, source adoption rules, and project-local state model before adding more roles, skills, tools, or visual presentation.

## Files

- Create: `docs/product-boundary.md`
- Create: `docs/source-adoption-policy.md`
- Create: `docs/entry-model.md`
- Create: `core/references/agent-operating-ethos.md`
- Create: `core/references/project-state-model.md`
- Create: `core/templates/intake/project-intake.md`
- Create: `core/templates/intake/direction-carry-in-audit.md`
- Create: `core/templates/intake/beginner-taste-interview.md`
- Create: `core/templates/production/project-state.md`
- Create: `core/templates/production/proof-ledger.md`
- Create: `core/templates/production/review-log-entry.md`
- Create: `core/templates/production/drift-log.md`
- Create: `core/templates/production/waiver-record.md`
- Create: `core/schemas/project-state.schema.json`
- Create: `core/schemas/proof-ledger.schema.json`
- Create: `core/schemas/review-log-entry.schema.json`
- Modify: `README.md`
- Modify: `docs/philosophy.md`
- Modify: `docs/operating-model.md`
- Modify: `adapters/claude/bootstrap.md`
- Modify: `adapters/codex/bootstrap.md`

## Product Boundary

- [ ] Create `docs/product-boundary.md`.

Required sections:

```markdown
# Product Boundary

Game Studio is an AI-assisted game production framework for playable validation.

## Core
## Profiles
## Adapters
## Packs
## Entry Modes
## Non-Goals
## Ownership Rule
```

Key rules:

- `core/` contains portable production logic.
- `profiles/` tune by engine, genre, scope, platform, and release target.
- `adapters/` map core behavior into Codex, Claude Code, and future runtimes.
- `packs/` add optional depth.
- Runtime-specific behavior must not redefine core stage semantics.
- Engine facts must live in profiles or packs, not in platform-neutral core.
- Public-facing product language uses proof, playable build, milestone-gated playable validation, and
  validation. Internal schemas may use evidence for concrete artifacts and
  observations.
- Scope is an output of discovery and proof planning, not a prerequisite that
  novice users must already understand.

- [ ] Add `docs/entry-model.md`.

Required entry modes:

```text
direction-carry-in      existing team/company/project direction
taste-to-game           novice or exploratory creator with taste but no direction
brownfield-unknown      existing repo or notes with unclear authority
```

Each route must produce:

- current authority owner
- current concept status
- first proof target
- allowed agent autonomy
- next skill or gate

- [ ] Create `docs/source-adoption-policy.md`.

Required decision record:

```markdown
## Adoption Decision

- Source:
- Concept adopted:
- Concept rejected:
- Target files:
- Maintenance owner:
- Staleness risk:
- Review date:
```

Default rejection criteria:

- role-name review
- hidden global state
- command sprawl
- platform lock-in
- false precision
- automated direction rewrites
- AI ownership of the user's taste
- concept spam without proof planning

## Entry And Concept Authority

- [ ] Add pre-direction state rules to `core/references/project-state-model.md`.

Concept statuses:

- `UNROUTED`
- `TASTE_DISCOVERY`
- `CONCEPT_SLATE`
- `CREATIVE_BRIEF`
- `FIRST_PROOF_PLANNED`
- `DIRECTION_LOCKED`
- `PARKED`

Rules:

- Direction Lock is not the first step for every project.
- If no stable direction exists, route to Creative Discovery before asking for
  a thesis, pillars, or release strategy.
- AI may propose concepts, compare concepts, and recommend a first proof.
- AI must not claim the user's taste, lock direction, change project stage, or
  make public promises without a decision record.
- Prose-only direction lock is not enough. At minimum, a selected concept must
  include target player, core verb, intended emotion, distinctive bet, main
  risk, and first playable build.

## Stage Authority

- [ ] Add explicit stage transition rules to `core/references/project-state-model.md`.

Rules:

- The project state file is the authority for current stage.
- The project state file also records `entryMode`, `conceptStatus`, and
  `directionSource` so resumed sessions know whether the project is still
  discovering, carrying in, or producing.
- Agents may recommend a stage transition but must not advance the stage without
  an explicit decision record.
- A gate verdict can block, clear with concerns, or recommend next proof; it is
  not by itself a stage mutation.
- Non-blocking concerns must be carried into the next milestone, risk register,
  waiver record, or drift log.

Terminal outcomes:

- `DONE`
- `DONE_WITH_CONCERNS`
- `BLOCKED`
- `NEEDS_CONTEXT`
- `FAILED`
- `USER_DECISION_NEEDED`

Every terminal outcome records:

- evidence checked
- missing evidence
- next proof
- owner or deciding role
- whether stage state changed

## Agent Ethos

- [ ] Create `core/references/agent-operating-ethos.md`.

Use concise maxims:

- Director first.
- Evidence over optimism.
- Play is final evidence.
- Milestones are proofs.
- Smaller finished beats larger vague.
- Search before building.
- Boil lakes, flag oceans.
- User sovereignty.

- [ ] Link this file from:

```text
docs/philosophy.md
adapters/claude/CLAUDE.md.snippet
adapters/codex/AGENTS.md.snippet
skills/game-studio/SKILL.md
```

## Project State Model

- [ ] Create `core/references/project-state-model.md`.

State model:

```text
.game-studio/project-state.md    hot pointer file
.game-studio/project-intake.md   entry route and authority
.game-studio/concept-slate.md    proposed, rejected, and parked concepts
.game-studio/creative-brief.md   selected concept and first proof
.game-studio/proof-ledger.md     claim-to-evidence map
.game-studio/review-log.md       append-only review history
.game-studio/drift-log.md        agentic assumption ledger
.game-studio/waivers.md          accepted risk ledger
```

Rules:

- Keep hot state small.
- Put detail in ledgers.
- Link evidence instead of pasting long reports.
- Do not overwrite project-owned ledgers during install or upgrade.
- Treat idea seeds and concept slates as hypotheses until a user decision record
  selects them.

## Templates

- [ ] Create `core/templates/production/project-state.md`.

Required headings:

```markdown
# Project State

## Entry Mode
## Concept Status
## Direction Source
## Game Development Fluency
## Explanation Mode
## Active Stage
## Active Milestone
## Selected Profiles
## Decision Mode
## Review Mode
## Current Proof
## Open Blockers
## Read Before Acting
## Last Updated
```

- [ ] Create `core/templates/production/proof-ledger.md`.

Required table:

```markdown
| Claim | Stage | Milestone | Evidence Path | Evidence Class | Build ID | Reviewer | Verdict | What This Does Not Prove |
```

- [ ] Create review, drift, and waiver templates with concrete headings.

## Schemas

- [ ] Create `core/schemas/project-state.schema.json`.

Required fields:

```json
["entryMode", "conceptStatus", "directionSource", "activeStage", "selectedProfiles", "decisionMode", "reviewMode", "currentProof"]
```

- [ ] Create `core/schemas/proof-ledger.schema.json`.

Each claim requires:

```json
["claim", "stage", "evidencePath", "evidenceClass", "verdict"]
```

- [ ] Create `core/schemas/review-log-entry.schema.json`.

Required fields:

```json
["timestamp", "stage", "role", "centralClaim", "evidenceChecked", "verdict", "nextProof"]
```

## Acceptance

- Product boundary is clear enough to reject out-of-scope imports.
- Adapter docs distinguish core behavior from runtime-specific helpers.
- Target repo state is project-local and install-safe.
- README uses the new product identity without expanding into contributor tool details.
