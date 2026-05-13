# Product Boundary

Game Studio is a discovery-driven AI game production system for playable
validation.

It helps Codex, Claude Code, and human creators turn either an existing game
direction or a player's taste profile into a sequence of playable prototypes,
reviews, gates, and production decisions.

## What It Owns

- Entry routing for existing direction, taste-to-game discovery, and ambiguous
  brownfield projects.
- Concept slates, creative briefs, prototype budgets, and constraint ladders.
- Project-local state for direction, stage, validation, review, risk, and
  decisions.
- Stage and milestone contracts that keep work tied to playable validation.
- Role-led review prompts for creative, production, QA, accessibility,
  narrative, UX, art, audio, and release judgment.
- Adapter guidance for installing the framework into a target repository.
- Internal evidence records for builds, captures, playtest notes, QA results,
  decision records, and release claim checks.

## What It Does Not Own

- The user's taste, final creative authority, or willingness to continue.
- A promise that one prompt can generate a finished game.
- Runtime-specific launchers, cloud services, telemetry products, or engine
  facts that belong in profiles or target projects.
- Autonomous stage advancement without a decision record.
- Rewriting a game direction that the user has already locked without explicit
  approval.

## Public Language

Use public product language that names the user-facing work:

- `playable prototype`
- `first playable`
- `vertical slice`
- `playable validation`

Use internal framework terms when naming the gate machinery:

- `proof target`
- `proof budget`
- `claim-to-proof`

Use `evidence` only when the artifact is an internal record, schema, ledger, or
concrete validation material. Good examples are evidence contracts, build captures,
playtest reports, QA notes, and release promise audits.

Do not use `evidence` as a public synonym for quality, fun, readiness, or
product identity.

## Entry Modes

### `direction-carry-in`

The user already has a game direction. Game Studio should preserve it, identify
what is still ambiguous, and move toward the next playable prototype.

### `taste-to-game`

The user does not yet have a game direction but can describe taste, references,
constraints, dislikes, and desired player feelings. Game Studio should help form
a small concept slate, compare concepts, and turn a selected concept into a
creative brief and first prototype contract.

### `brownfield-unknown`

The target repository already contains work, but its direction and validation
state are unclear. Game Studio should audit existing artifacts before proposing
a route.

## Concept Authority

AI agents may:

- ask taste and constraint questions
- propose concept slates
- compare concepts against constraints
- recommend the smallest next playable prototype
- name risks, rejected concepts, and parked ideas

AI agents must not:

- claim to know the user's taste better than the user
- lock direction without a user-accepted decision record
- present a concept list as production approval
- advance stage based on prose alone
- change public promises without release validation

## Readiness Story

The product readiness story is not repository hygiene. It is:

```text
taste or direction -> concept -> playable prototype -> role review -> gate verdict -> next prototype
```

Repository scripts are maintainer checks. They help catch broken schemas,
unexpected text, and documentation drift, but they do not prove that a game is
good, playable, coherent, or release-ready.
