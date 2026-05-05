# Value Review Improvement Plan

This plan converts the value review into small, maintainable work surfaces.
The goal is to make Game Studio more useful as a project-local operating system
for Codex, Claude Code, and human creators building games.

## Central Judgment

Game Studio already has a strong thesis:

```text
Taste or Direction -> Concept -> Proof -> Review -> Gate -> Next Proof
```

The next improvement wave should prove that this thesis changes agent behavior
in real projects. The repository should become less like a set of plausible
documents and more like a repeatable production system that routes, constrains,
reviews, and learns from playable proof.

## Plan Map

| Page | Decision It Supports |
| --- | --- |
| [Value Assessment](01-value-assessment.md) | Decide what value Game Studio should maximize and how to score it. |
| [Product Thesis](02-product-thesis.md) | Keep positioning, public language, and product boundaries sharp. |
| [Skill Routing](03-skill-routing.md) | Make agents choose the right skill, gate, and stop condition. |
| [Entry Mode Proofs](04-entry-mode-proofs.md) | Prove all three entry paths with examples and adoption trails. |
| [Role Review Depth](05-role-review-depth.md) | Make role playbooks produce real judgment, not role-shaped notes. |
| [Proof Artifacts And Evals](06-proof-artifacts-and-evals.md) | Define the artifacts and eval prompts that show the system works. |
| [Adapters And Distribution](07-adapters-and-distribution.md) | Package the framework cleanly for Codex and Claude Code projects. |
| [Judgment Rubric](09-judgment-rubric.md) | Score the framework by judgment dimensions, not only by surface area. |
| [Stress Scenarios](10-stress-scenarios.md) | Test framework fit against four canonical user states. |
| [Production Dark Rituals](11-production-dark-rituals.md) | Add concept death, scope crisis, parallel risk, and deadline mode. |
| [LLM-Native Leverage](12-llm-native-leverage.md) | Use AI for what AI is uniquely good at, not only as a disciplined producer. |
| [Curriculum From Source Map](13-curriculum-from-source-map.md) | Convert the canon into operational guides with worked examples. |
| [Anti-Additions](14-anti-additions.md) | Refuse plausible additions that lower value-per-effort. |
| [Research-Grounded Improvements](15-research-grounded-improvements.md) | Apply external research findings: verified adoptions, hedged adoptions, dropped misattributions, strategic positioning. |
| [Craft Coach Positioning](16-craft-coach-positioning.md) | Reposition Game Studio as a proof-gated craft coach with production rails. |
| [Beginner Craft Pedagogy](17-beginner-craft-pedagogy.md) | Turn beginner taste into exercises, artifacts, and playable proof questions. |
| [Player Operations And Public Proof](18-player-operations-public-proof.md) | Add public exposure, feedback, support, accessibility, localization, and release-promise planning. |
| [Anti-Slop Quality And Provenance](19-anti-slop-quality-provenance.md) | Define quality, provenance, false precision, and generated-material proof rules. |
| [Implementation Map From Rounds 4-5](20-implementation-map-round4-5.md) | Sequence the new research into small repo implementation waves. |
| [Roadmap](08-roadmap.md) | Sequence the work into reviewable implementation waves. |

## Non-Goals

- Do not add a standalone CLI as the default path.
- Do not make scripts the main game-quality story.
- Do not promise automatic finished games.
- Do not replace human taste, concept selection, Direction Lock, stage
  movement, or public promises.
- Do not hide unfinished product work inside contributor-only notes.

## Success Standard

This plan succeeds when a new agent can enter a target game repo, classify the
entry path, preserve or discover direction, propose a bounded playable proof,
write the right artifacts, stop for human-owned decisions, and produce a review
that makes the next proof clearer.
