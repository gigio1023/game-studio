---
name: game-production
description: >
  Use when planning game milestones, prototypes, vertical slices, demo or
  release scope; when implementing an approved piece of game work; when running
  long or autonomous game-development sessions; or when taking Godot work from
  an approved milestone to a checked playable build. NOT for discovering or
  defining direction (use game-direction), judging finished work or readiness
  claims (use game-review), or engine-only debugging, upgrades, and maintenance
  detached from a playable production proof.
---

# Game Production

Turn an accepted direction into playable progress, one proof at a time. A
milestone is a product hypothesis with a playable proof, not a task list: plan
the smallest build that retires the biggest uncertainty, implement it without
drifting from the brief, and verify it in play before claiming it.

If direction is missing, weak, or disputed, route through game-direction when
available or return `USER_DECISION_NEEDED` with the smallest decision required.
Do not use a production assumption to choose the concept, player promise,
stage, or public scope. Safe assumptions are limited to reversible production
details inside already accepted intent.

## Route By Request

| Mode | Authority | Done state |
| --- | --- | --- |
| `plan` | Inspect the project and return the milestone, roadmap, or work packages. Do not implement unless the request also asks for changes. | The plan names its proof, cuts, fallback, and next decision. |
| `implement` | Make requested reversible local changes inside the accepted brief and milestone, then run relevant non-destructive checks. | The active proof is checked or a real blocker is named. |
| `long-run` | Use the implementation authority plus the checkpoint contract in `references/long-run-control.md`. | The proof or fallback is checked, or work stops on an evidence-backed blocker. |

## Game Studio Proof Ladder

Projects earn stages through played proof, in roughly this order: first
prototype (answers one named question) → first playable proof (one action, one
visible consequence) → core loop (repeatable with readable success, failure,
and recovery) → presentation proof (the chosen format earns its cost) →
vertical slice (short section at representative shipped quality) → demo →
release. Skipping is fine only when the skipped proof already exists. Never
call a prototype a vertical slice, and never let a stage advance on prose
alone. This proof ladder complements rather than replaces lifecycle labels such
as alpha, beta, and release candidate.

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
The core guard: activity is not progress. Classify material checkpoints as
playable, proof, support, or blocked. Two consecutive support-only checkpoints
trigger a re-anchor before more support work; prefer the next playable change,
real play check, or blocker report.

## Grounded Claims

Before reporting progress or completion, audit each claim against a check you
actually ran in this session — a launched build, an executed command, an
inspected artifact. If tests fail or a check was skipped, say so plainly.
File changes and passing scripts are not playable proof by themselves.

## Authority

Within an accepted brief and milestone, an implementation request authorizes
reversible local edits, refactors, placeholder cuts, and non-destructive checks;
record assumptions with their reversal cost. The human owns direction changes,
stage advancement, public promises, and release scope: when the next step would
change any of those, stop and return `USER_DECISION_NEEDED` with the exact
decision required. Destructive or irreversible actions, external writes or
uploads, spend-bearing actions, secret handling, and material scope expansion
need explicit approval. Create commits, branches, tags, or pushes only when the
user requests them.

## Output

End a production pass with:

```text
Mode: plan | implement | long-run
Active milestone or proof:
Player-visible change or planned change:
Artifacts changed:
Evidence checked and result:
Proof state: planned | checked | failed | blocked
Checks failed, skipped, or unverified:
Safe assumptions and cuts:
Blocker:
Human decision needed:
Next proof:
```

Completion means the active proof is supported by current evidence. It does
not advance the project stage or expand a public promise.

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
