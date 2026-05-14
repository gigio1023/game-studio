# 01 Product Boundary And Project State: Stage Authority

[Back to index](../01-product-boundary-state.md)

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
