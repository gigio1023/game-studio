# Value Review Improvement Plan

This plan converts the value review into small, maintainable work areas.
The goal is to make Game Studio more useful as a project-local production framework
for Codex, Claude Code, and human creators building games.

## Central Judgment

Game Studio already has a strong thesis:

```text
Taste or Direction -> Concept Brief -> First Playable -> Role-Led Game Review -> Milestone Decision -> Next Build
```

The next improvement wave should prove that this thesis changes agent behavior
in real projects. The repository should become less like a set of plausible
documents and more like a repeatable production system that routes, constrains,
reviews, and learns from playable builds.

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
| [Value Judgment Method](09-value-judgment-method.md) | Score the framework by judgment dimensions and stress-test it against canonical user states. |
| [Production Failure Protocols](11-production-failure-protocols.md) | Add concept death, scope crisis, parallel risk, and deadline mode. |
| [AI-Assisted Design Workflows](12-ai-assisted-design-workflows.md) | Use AI for what AI is uniquely good at, not only as a disciplined producer. |
| [Craft Curriculum And Beginner Pedagogy](13-craft-curriculum-and-beginner-pedagogy.md) | Convert the canon and beginner teaching path into operational guides with worked examples. |
| [Anti-Additions](14-anti-additions.md) | Refuse plausible additions that lower value-per-effort. |
| [Research Findings To Changes](15-research-findings-to-changes.md) | Apply research findings, positioning, player operations, quality rules, and implementation waves. |
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
