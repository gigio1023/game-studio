# 05 README And Public Visual Design: Visual System

[Back to index](../05-readme-public-docs.md)

## Visual System

- [ ] Replace the current single system map with a README-optimized hero map.

The hero map should show:

```text
Target Game Repo
  -> entry mode: existing direction / taste-to-game / brownfield unknown
  -> .game-studio state
  -> taste / concept / direction / milestone / proof
  -> role review
  -> gate verdict
  -> next proof
```

- [ ] Keep detailed architecture diagrams in docs, not the README hero.

- [ ] Add a compact "operating loop" visual.

Suggested text diagram:

```text
Taste or Direction -> Concept Brief -> First Playable -> Role-Led Game Review -> Milestone Decision -> Next Build
```

- [ ] Add a "what you get" table with five rows.

Rows:

- Entry routing
- Creative discovery
- Project-local state
- Stage model
- Evidence contracts
- Role-led reviews
- Adapter skills

Suggested table:

| Layer | What it gives a game repo | Primary proof |
| --- | --- | --- |
| Entry | Existing direction, taste-to-game, or ambiguous brownfield route | selected entry mode |
| Discovery | Taste profile, concept slate, creative brief, proof budget | first playable validation contract |
| State | Direction, milestone, proof, review, and drift ledgers | durable project context |
| Stages | Direction lock through release candidate | current stage and next gate |
| Evidence | claim-to-proof contracts | playable capture or structured observation |
| Reviews | role-led findings and verdicts | severity, confidence, next proof |
| Adapters | Codex and Claude entry points | project-local skills and snippets |

- [ ] Add a "repository vs installed framework" section.

Required distinction:

| Area | Purpose | Owned by |
| --- | --- | --- |
| Source repository | Framework docs, templates, adapters, schemas, contributor checks | Game Studio maintainers |
| Installed state | Direction, milestones, evidence, reviews, drift, waivers | Target game project |
| Adapter examples | Codex and Claude bootstraps plus optional runtime helpers | Runtime adapter layer |

- [ ] Add a compact public README routing table.

Suggested table:

| Need | Go to |
| --- | --- |
| Understand the loop | Operating Loop |
| Install into a game repo | `docs/install-and-upgrade.md` |
| Start from project type | `docs/starter-paths.md` |
| Contribute to Game Studio | `CONTRIBUTING.md` |
| Report a security concern | `SECURITY.md` |
| Ask a usage question | discussions or support channel |

- [ ] Add a capability map.

Suggested table:

| Capability | What it gives a game team | Where it lives |
| --- | --- | --- |
| Creative discovery | turns taste and references into concept candidates | intake and direction templates |
| Concept shaping | compares, rejects, parks, and selects game seeds | concept slate and creative brief |
| Project state | durable direction and evidence memory | `.game-studio/` |
| Milestones | staged proof order | core docs and templates |
| Evidence gates | playable validation before claims | gate docs |
| Role reviews | targeted critique, not all roles every time | role docs |
| Adapters | agent-specific operating instructions | `adapters/` |

- [ ] Add a "what this does not do" table.

Rows:

- Does not promise one-prompt finished games.
- Does not own the user's taste or final creative authority.
- Does not make scripts judge game quality.
- Does not require every role every time.
- Does not replace playtesting.
- Does not make public promises without build evidence.

Also add a "what it can automate" table:

- can propose concept candidates from taste and references
- can turn a selected concept into a creative brief and first proof
- can plan and implement bounded playable builds and validation notes in Codex or Claude Code
- can route reviews, missing proof, and next actions
- can help move from prototype to release candidate when gates keep passing


## Public Docs And Release Copy

- [ ] Create `docs/public-docs-and-release-copy.md`.

Rules:

- Keep README under the existing repository length target.
- Use one hero image.
- Keep badges limited to license, agent support, docs, and review model.
- Use tables for scanability.
- Avoid a wall of role names.
- Link out to docs for depth.
- Put contributor commands in `CONTRIBUTING.md`, not the README.
- Use `milestone-gated playable validation`, `playable validation`, `validation`, and `claim-to-proof`
  language in public copy.
- Use `evidence` only when naming internal schemas, ledgers, or artifact classes.


## README Proposed Outline

```markdown
# Game Studio

AI-assisted game production framework for playable validation.

One supporting sentence that says Game Studio helps Codex and Claude Code turn
either existing direction or a player's taste profile into playable, reviewed,
finishable game projects.

Hero image.


## Why It Exists

## Operating Loop

## Start From Taste Or Direction

## What You Get

## What It Can Automate

## What It Does Not Do

## Quick Start

## Install Path

## Milestone Order

## Repository Map

## Start Here

## Community
```
