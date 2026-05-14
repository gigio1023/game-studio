# 01 Product Boundary And Project State: Objective

[Back to index](../01-product-boundary-state.md)

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
