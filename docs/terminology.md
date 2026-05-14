# Terminology

Game Studio uses concrete game-development and engineering terms. Prefer the
thing a creator can open, run, review, test, or decide.

## Product Description

Use:

```text
AI-assisted game production framework for playable validation.
```

Plain-language version:

```text
Game Studio helps creators turn taste or direction into playable builds,
role-led game reviews, milestone decisions, and release checks.
```

Do not describe Game Studio as an automatic game generator, autonomous studio,
general-purpose production system, or AI designer.

## Core Loop

Use this chain when explaining the product:

```text
taste or direction -> concept brief -> first playable -> role-led game review
-> milestone decision -> next build or retest
```

## Public Terms

| Use | Meaning |
| --- | --- |
| `playable build` | A build a reviewer or player can run. |
| `first playable` | The first executable build that lets a player act, see a response, fail or recover, and make a next choice. |
| `playable validation` | Review of a playable build, capture, playtest note, QA result, or release check. |
| `role-led game review` | Review by the roles needed for the current risk: director, producer, QA, UX, art, audio, accessibility, narrative, release, or technical lead. |
| `milestone decision` | A recorded decision to advance, repeat, narrow, cut, park, or stop. |
| `release materials` | Store page, trailer, screenshots, capsule art, demo page, press kit, patch notes, known issues, and support path. |

## Internal Terms

These terms are allowed when they name framework mechanics:

| Term | Use |
| --- | --- |
| `playable proof` | Internal shorthand for a playable build, capture, or walkthrough that validates a specific game-development claim. Public copy should usually say `playable build`, `first playable`, or `playable validation`. |
| `proof target` | The specific claim a prototype or milestone is trying to validate. |
| `proof budget` | The time, content, fidelity, technical, and review limits for the current proof target. |
| `next proof` | Internal shorthand for the next build, retest, capture, or review that will reduce the most important uncertainty. Public copy should usually say `next build or retest`. |
| `claim-to-proof` | A mapping from a feature, quality, or release claim to the build, capture, playtest note, QA result, or release check that supports it. |
| `evidence` | Internal records only: build IDs, captures, playtest notes, QA results, schema checks, decision records, and release claim checks. |
| `gate verdict` | `READY`, `CONCERNS`, or `NOT_READY`, plus the checked files, missing validation, and next build or retest. |

Do not use `evidence` as a public synonym for quality, fun, readiness, or game
identity.

## Engineering Terms

| Use | Meaning |
| --- | --- |
| `Game Studio source repository` | This repository. |
| `Game Studio plugin package` | The installable plugin package for Codex or Claude Code. |
| `workflow pack` | Versioned methodology files: workflows, templates, rubrics, roles, schemas, and profiles. |
| `project state directory` | `.game-studio/` in the target game repository. |
| `skill entry point` | A public skill command or skill file an agent can invoke. |
| `JSON Schema` | A schema file under `core/schemas/` that validates data shape. |
| `repository check` | A maintainer command such as `node tools/check-repository.mjs`. |
| `smoke test` | A small installation or runtime test that proves a path loads and runs. |

## Avoided Terms

| Avoid | Use Instead |
| --- | --- |
| `surface` | Name the thing: `README`, `docs page`, `store page`, `demo page`, `plugin listing`, `skill entry point`, `UI screen`, `release materials`. |
| `public surface` | `README and product docs`, `plugin listing`, `store page`, or `release materials`. |
| `release surface` | `store page`, `trailer`, `screenshots`, `demo build`, `press kit`, `patch notes`, or `support path`. |
| `install surface` | `plugin package`, `marketplace listing`, or `install instructions`. |
| `build surface` | `playable build`, `demo build`, `test build`, or `release candidate`. |
| `proof-gated` | `milestone-gated playable validation` in formal docs; `playable validation` in public copy. |
| `substantive review` | `role-led game review`, `game-quality review`, or `playable build review`. |
| `craft coach` | `taste-to-prototype guidance`, `role-led game review`, or `playable build review`. |
| `rails` | `milestone contracts`, `stage rules`, or `acceptance criteria`. |
| `AI abundance` | `too much generated material` or `AI-generated review burden`. |
| `operating system` | `production framework`, `operating model`, or `project-local workflow`. |
| `dark rituals` | `production failure protocols`, `concept-death protocol`, `scope-crisis protocol`, or `deadline mode`. |
| `source-backed` | Name the source or say `questions from the craft reference index`. |
| `research-grounded` | `based on <named source>` or `research findings applied to <file/change>`. |

## Writing Rule

When a sentence sounds abstract, rewrite it until it names one of these:

- playable build
- gameplay capture
- playtest note
- QA result
- milestone contract
- stage rule
- decision record
- store page
- plugin package
- skill entry point
- JSON Schema
- repository check
