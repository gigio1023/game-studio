# Craft Coach Positioning

This page updates the product thesis after Rounds 4 and 5 of research. Read it
with [Product Thesis](02-product-thesis.md) and
[Research-Grounded Improvements](15-research-grounded-improvements.md).

## Decision

Game Studio should be positioned as:

```text
A proof-gated craft coach for AI-assisted game development,
with production-system rails.
```

The front door is craft coaching. The rails are production contracts. The
distribution format is agent skills. The learning path is curriculum. Only the
first phrase should carry the public category.

Source:
[Positioning And Market Gap](../../../research/landscape/round5-positioning/01-positioning-and-market-gap.md).

## Why This Is Higher Value

The market already has many artifact accelerators:

- coding agents and background agents
- engine assistants
- game idea generators
- asset pipelines
- NPC and runtime AI platforms
- courses and communities
- market or trend tools

They optimize for speed, output volume, execution context, or learning content.
They do not reliably own craft judgment under AI abundance.

Game Studio's defensible value is the chain:

```text
human taste -> playable question -> smallest proof -> role review ->
gate decision -> next proof or stop condition
```

## Public Language

Use:

- proof-gated craft coach
- AI-assisted game development
- human creative authority
- playable proof
- claim-to-proof
- proof budget
- role-led craft review
- generated material is not proof
- make less, prove more

Avoid:

- AI game designer
- autonomous studio
- complete game generator
- AI co-author
- agent workforce for games
- market score for fun
- curriculum platform
- skill marketplace

## Product Boundary Update

The system may:

- structure the creator's taste into questions and constraints
- propose options and tradeoffs
- inspect artifacts and role-review them
- request player, implementation, accessibility, release, or production proof
- block stage movement when proof or human authority is missing

The system must not:

- choose taste, selected concept, Direction Lock, kill/pivot, stage movement,
  public promises, or release claims for the human
- treat generated concepts, assets, barks, scenes, NPC output, or code as proof
  without a claim-to-proof mapping
- sell a polished plan as settled design before playable proof exists

## Files To Change

- `README.md`: add the short public positioning phrase.
- `docs/product-boundary.md`: add "craft coach" as the product category.
- `docs/philosophy.md`: add the anti-volume principle: make less, prove more.
- `docs/source-adoption-policy.md`: explain that external tools are subordinate
  to proof targets.
- `docs/improvement/value-review/02-product-thesis.md`: align language with
  this page.

## Proof Of Improvement

A new reader should be able to answer:

- This is not a game generator.
- This is not only a PM framework.
- This is not only a course.
- This is not only a skill bundle.
- This helps humans make better game decisions with AI by requiring playable
  proof and preserving human authority.
