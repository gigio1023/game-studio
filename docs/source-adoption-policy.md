# Source Adoption Policy

Game Studio is built from research, reference repositories, agent workflows, and
game-production practice. Source material should improve the operating system,
not create a pile of copied advice.

## Adoption Levels

### Core

Adopt into `core/` when the idea is stable across engines and genres.

Examples:

- milestone contracts
- gate verdict shape
- proof budgets
- project state ledgers
- role authority rules

### Profile

Adopt into `profiles/` when the idea depends on engine, genre, team size, or
release shape.

Examples:

- Unity, Godot, Unreal, or generic engine constraints
- horror, puzzle, simulation, narrative AI, or action-adventure emphasis
- solo, small-team, or studio scope assumptions

### Adapter

Adopt into `adapters/` when the idea depends on Codex, Claude Code, or another
agent runtime.

Examples:

- install instructions
- project-local skill placement
- agent memory or instruction snippets
- hook or command recommendations

### Skill

Adopt into `skills/` when the idea changes an agent's active workflow.

Examples:

- onboarding and entry routing
- director review
- milestone planning
- gate review
- work handoff

### Research

Keep in `research/` when the idea is useful context but not ready to become a
stable rule.

### Rejected

Record as rejected when the idea is attractive but conflicts with the product
boundary.

## Adoption Questions

Before moving any external idea into the framework, answer:

- What decision does this improve?
- What proof or internal evidence does it ask for?
- Which user or role benefits?
- Which target projects should not use it?
- Does it belong in core, a profile, an adapter, a skill, research, or nowhere?
- Can the idea be represented as a template, gate, role rule, or workflow?

## Rejection Reasons

Reject ideas when they:

- promise automatic finished games without playable validation
- replace user taste with AI taste
- add roles without authority or decision value
- make scripts the main game-quality story
- copy engine-specific facts into platform-neutral core files
- make a public claim that the framework cannot validate

## Recording Decisions

Use `core/templates/production/decision-record.md` for durable source adoption
decisions. Include:

- source
- adopted idea
- target location
- reason
- proof or internal evidence required
- rejected alternatives
- revisit trigger
