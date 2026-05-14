# Landscape Research Index

External research conducted to inform Game Studio improvement plans. All
findings sit alongside the existing reading list at
[Game Craft Reference Index](../../core/references/game-craft-reference-index.md) but
go further: they survey live practice, contrarian voices, and adjacent
agentic-AI work that the craft reference index does not yet cover.

Five rounds. Round 1 mapped the territory. Round 2 went deep on the most
operational findings. Round 3 verified specific claims against primary
sources and identified critical perspectives. Round 4 expanded the research
area into studio operation, beginner pedagogy, player operations,
AI co-creation, and quality critique. Round 5 translated and verified those
findings.

## Round 1: Broad Mapping

| File | Focus |
| --- | --- |
| [Design Philosophy Survey](philosophy/01-design-philosophy-survey.md) | Creative direction, taste-to-design translation literature, pillar/anti-pillar lineage. |
| [Studio Practices Survey](studio-operations/01-studio-practices-survey.md) | How successful indie and mid-size studios run production, ship, and kill projects. |
| [LLM Game Dev State](ai-game-dev/01-llm-game-dev-state.md) | Current state of LLM and agentic AI in game development, including failure modes. |
| [Production Frameworks](operating-frameworks/01-production-frameworks.md) | Documented production methodologies, with explicit pre-direction-lock and crisis coverage flagged. |
| [Additional Canon](textbook-canon/01-additional-canon.md) | Foundational texts the craft reference index currently misses, with framework-gap mapping. |

## Round 2: Deep Dives

| File | Focus |
| --- | --- |
| [Kill Rituals](deep-dives/r2-01-kill-rituals.md) | Operational mechanics of studio project death — kill criteria, decision authority, ceremony, aftermath. |
| [Gate Templates](deep-dives/r2-02-gate-templates.md) | Verbatim production gate templates from Riot, Rami Ismail, CSA, and Game Outcomes Project. |
| [Agentic Frameworks](deep-dives/r2-03-agentic-frameworks.md) | BMAD Method, DSPy, LangGraph, AutoGen, and Anthropic Claude Code patterns to import. |
| [Cross-Field Translation](deep-dives/r2-04-cross-field-translation.md) | Reference-to-design translation methods from architecture, film, music, fashion. |
| [Reflection And Memory](deep-dives/r2-05-reflection-and-memory.md) | Park et al. and adjacent memory architectures for agent review roles. |

## Round 3: Verification And Critique

| File | Focus |
| --- | --- |
| [Claim Verification](verification/01-claim-verification.md) | Primary-source verification of high-impact claims from rounds 1-2. |
| [Contrarian Perspectives](verification/02-contrarian-perspectives.md) | Critical voices on MDA, vertical slice, pillars, agile, taste-driven design, AI co-creative claims, fail-fast, aesthetics taxonomies, production frameworks generally. |
| [Recent Adjacent Work](verification/03-recent-adjacent-work.md) | 2024-2026 emerging work — competitors, communities, infrastructure shifts. |

## Round 4: Expanded Research

| File | Focus |
| --- | --- |
| [Studio Operating Lessons](round4-studio-operations/01-studio-operating-lessons.md) | Studio operating practices, kill gates, prototype review, team health, and what not to copy. |
| [Teaching And Curriculum](round4-design-pedagogy/01-teaching-and-curriculum.md) | Textbook-grade design pedagogy and beginner craft exercises. |
| [Player Operations](round4-liveops-community/01-player-operations.md) | Live ops, feedback, public exposure, release promises, accessibility, localization, and support. |
| [Agentic Co-Creation](round4-ai-co-creation/01-agentic-co-creation.md) | AI-assisted game development, agent skills, engine assistants, and taste-to-prototype guidance differentiation. |
| [Contrarian Quality](round4-critique/01-contrarian-quality.md) | Anti-slop quality, false precision, process harm, authorship, and provenance. |

## Round 5: Verification And Translation

| File | Focus |
| --- | --- |
| [Round 4 Claim Check](round5-verification/01-round4-claim-check.md) | Source-risk checks and repo-safe wording for Round 4 claims. |
| [Template And Schema Translation](round5-implementation/01-template-and-schema-translation.md) | Concrete templates, schemas, gates, skills, examples, and index changes to implement. |
| [Positioning And Market Gap](round5-positioning/01-positioning-and-market-gap.md) | Comparator map and product positioning: AI-assisted game production framework with milestone contracts. |

## Synthesis

| File | Focus |
| --- | --- |
| [Synthesis](synthesis.md) | Consolidated findings across rounds, with verifications and critique hedges. Read this for the conclusions without the source dives. |
| [Round 4-5 Synthesis](round4-5-synthesis.md) | Later synthesis covering game-design-review positioning, pedagogy, player operations, anti-slop quality, and implementation priorities. |

## Reading Order

If reviewing for the first time, start with [Synthesis](synthesis.md). If
auditing a specific claim, find the original round's file via the table
above. The verification verdicts in
[01-claim-verification.md](verification/01-claim-verification.md) mark
which round-1 and round-2 claims are SUPPORTED, PARTIALLY_SUPPORTED, or
OVERSTATED — consult before importing any specific finding into framework
documents.

## Improvement Plans

Research findings applied to repo changes are written up in the value-review plan:
[Research Findings To Changes](../../docs/improvement/value-review/15-research-findings-to-changes.md)
and [Playable Validation Positioning](../../docs/improvement/value-review/16-playable-validation-positioning.md).

## Method Notes

- Conducted via parallel research agents using web search and source reads.
- Each round informed the next: Round 2 deepened Round 1 surfacings, Round 3
  verified and critiqued Rounds 1-2, Round 4 expanded the search scope, and
  Round 5 verified and translated Round 4.
- Sources favored: primary author writings, published GDC talks, peer-reviewed
  papers, named-author postmortems.
- Sources discounted: marketing copy, generic listicles, secondhand
  paraphrases.
- All files English-only — the repo `tools/check-repository.mjs` blocks CJK
  characters.

## Update Discipline

- Do not edit the round files in place after they were
  produced. They are research snapshots.
- New rounds go in new directories or with incremented file prefixes
  (`02-`, `03-`).
- Synthesis can be revised, but mark major updates with a date line at the
  top of the synthesis.
