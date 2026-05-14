# Game Studio Evolution Plan Index

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evolve Game Studio into a repo-local system for AI-assisted, playable-validation AI game production.

**Architecture:** Keep `core/` as the stable creative-production substrate; put engine, genre, release, and runtime specificity into profiles, packs, and adapters; keep player-facing judgment in playable builds and role-led review.

**Tech Stack:** Markdown skills and templates, JSON Schema 2020-12, Node.js ESM advisory tools, Codex and Claude adapters, project-local `.game-studio/` state.

---

## How To Read This Plan

This plan is intentionally split across focused files. The old single long plan was hard to review and too easy to treat as one giant implementation pass.

| File | Purpose |
| --- | --- |
| [00-research-synthesis.md](00-research-synthesis.md) | Current repo, local source systems, web research, and core insight synthesis. |
| [01-product-boundary-state.md](01-product-boundary-state.md) | Product boundary, source adoption policy, and project-local state ledgers. |
| [02-review-routing-evidence.md](02-review-routing-evidence.md) | Review protocol, completion statuses, stage navigation, and diff-scope routing. |
| [03-game-craft-production-release.md](03-game-craft-production-release.md) | Game craft, QA, accessibility, production, release, credits, and post-release artifacts. |
| [04-adapters-install-contribution.md](04-adapters-install-contribution.md) | Adapter hooks, install/upgrade areas, manifest checks, and contributor-only hygiene. |
| [05-readme-public-docs.md](05-readme-public-docs.md) | README, diagrams, public visual presentation, and OSS reference patterns from major repositories. |
| [06-implementation-roadmap.md](06-implementation-roadmap.md) | Ordered tasks, commit slices, verification expectations, and risk controls. |
| [07-deep-source-notes.md](07-deep-source-notes.md) | Deeper source sweep across local reference projects, cloned OSS repos, and game-production methods. |
| [08-creative-discovery-novice-authorship.md](08-creative-discovery-novice-authorship.md) | Entry routing, taste-to-game discovery, concept slates, proof budgets, and novice authorship control. |

## North Star

Game Studio should not become a giant skill pack, a Claude-only template, a simulated studio with as many roles as possible, or a one-click game vending machine.

The target identity:

> Game Studio is an AI-assisted game production framework for playable validation.

It helps Codex, Claude Code, and human creators turn either an existing game
direction or a player's taste profile into playable builds, then uses review
and gates to move toward a finishable game.

Public language should use `proof`, `playable build`, `milestone-gated playable validation`, and
`validation`. The word `evidence` is still useful as an internal data-model
term for ledgers, schemas, captures, playtest notes, QA results, and release
claim checks, but it should not carry the product identity.

It should own:

- entry routing for existing direction, blank ideas, and ambiguous brownfield projects
- taste-to-game discovery for novice creators
- concept slates and creative briefs
- proof budgets and constraint ladders
- durable project-local state
- stage and milestone contracts
- proof ledgers
- role authority and activation rules
- evidence standards
- from the craft reference index game craft methods
- adapter-specific install and runtime mapping

It should not own:

- every possible agent persona
- agent-runtime launchers
- autonomous rewriting of game direction
- ownership of the user's taste or final creative authority
- cloud telemetry or product analytics
- engine-version facts inside platform-neutral core files
- a promise that one prompt can generate a finished game without playable build

## Important Correction From User Feedback

`node tools/check-repository.mjs` and related repository checks are not the product's main verification story.

They belong in contributor and maintainer workflows:

- `CONTRIBUTING.md`
- internal release checks
- local CI or pre-PR hygiene
- schema and documentation sanity checks

They should not dominate `README.md`, user-facing onboarding, or Game Studio's definition of readiness. The main user-facing story is playable build, role-led review, gate verdicts, and claim-to-proof mapping.

## Execution Model

Implement in small PR-sized slices:

1. Creative discovery and entry routing.
2. Product boundary and state model.
3. Review proof standard and routing.
4. Game craft and QA/release depth.
5. Adapter/install/contribution areas.
6. README and public visual presentation.
7. Example project and final handoff.

Each slice should leave the repo coherent if work stops there.

## Required Outcome

After implementation, a target game repo should be able to answer:

- Are we carrying in an existing direction, discovering one from taste, or auditing an ambiguous project?
- What taste, constraints, references, and non-goals shape the game?
- Which concepts were considered, selected, parked, or rejected?
- What game are we making?
- What stage are we in?
- What proof is the current milestone pursuing?
- What playable build exists?
- What internal evidence is stale, missing, or insufficient?
- Which roles should review this?
- What public promises are safe to make?
- What should happen next?
