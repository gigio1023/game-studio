---
name: game-production
description: >
  Use when planning game milestones, prototypes, vertical slices, demo or
  release scope; when implementing an approved piece of game work; when running
  long or autonomous game-development sessions; or when doing Godot build work.
  Trigger on "milestone", "production plan", "roadmap", "implement this",
  "vertical slice", "keep working on the game", and "long run". NOT for
  discovering or defining direction (use game-direction) and NOT for judging
  finished work or readiness claims (use game-review).
---

# Game Production

Turn an accepted direction into playable progress, one proof at a time. A
milestone is a product hypothesis with a playable proof, not a task list: plan
the smallest build that retires the biggest uncertainty, implement it without
drifting from the brief, and verify it in play before claiming it.

If direction is missing, weak, or disputed, route through the game-direction
skill (or say the direction assumption you are making and why it is safe)
before planning milestones.

## Stage Ladder

Projects earn stages through played proof, in roughly this order: first
prototype (answers one named question) → first playable (one action, one
visible consequence) → core loop (repeatable with readable success, failure,
and recovery) → presentation value (the chosen format earns its cost) →
vertical slice (short section at representative shipped quality) → demo →
release. Skipping is fine only when the skipped proof already exists. Never
call a prototype a vertical slice, and never let a stage advance on prose
alone.

## Planning

Read `references/milestone-planning.md` for the planning flow, red flags, and
output shape. The non-negotiables:

- every milestone names its hypothesis, smallest useful proof, cut candidates,
  and fallback proof;
- a milestone that only succeeds if everything works is a plan to fail;
- public promises must match the current build, not the roadmap.

## Implementation

- Preserve design intent: before claiming player-facing work complete, name
  which player action and feedback changed, which pillar the change preserves,
  and which playable check showed the intended behavior.
- Parallel implementation is an optimization, not a requirement. When you do
  split work, give each stream disjoint write scopes and a handoff; review may
  cross boundaries, editing may not. Sequential execution is always valid.
- For Godot projects, read `references/godot-playable-build.md` before build
  or milestone work, and `references/godot-reference-patterns.md` before
  implementing a mechanic that matches a known demo or starter-kit pattern.

## Long Runs

For long autonomous sessions, read `references/long-run-control.md`.
The core guard: activity is not progress. Classify each step as playable,
proof, support, or blocked; after two support-only steps, the next step must
be playable work, a real play check, or a blocker report.

## Grounded Claims

Before reporting progress or completion, audit each claim against a check you
actually ran in this session — a launched build, an executed command, an
inspected artifact. If tests fail or a check was skipped, say so plainly.
File changes and passing scripts are not playable proof by themselves.

## Authority

Within an accepted brief and milestone, implement, refactor, cut placeholder
scope, and run non-destructive checks freely, recording assumptions with their
reversal cost. The human owns direction changes, stage advancement, public
promises, and release scope: when the next step would change any of those, stop and
return `USER_DECISION_NEEDED` with the exact decision required.

## Gotchas

- Do not hide the proof inside implementation details; the milestone claim
  must be player-facing and checkable.
- Do not expand the release promise during implementation, and do not let
  implementation silently change direction.
- Do not claim a playable build from file presence alone; run the narrowest
  real check (launch, scene load, smoke run, capture) that supports the claim.
- Do not copy a starter kit or demo blindly; name the pattern, the adaptation,
  the license decision, and the runtime check.
- Do not keep generating documents, tests, or helper tooling when the next
  thing that must happen is a playable change, a human taste call, or an
  outside decision.
