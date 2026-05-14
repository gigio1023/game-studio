# Design Philosophy And Creative Direction Survey: Key Findings

[Back to index](../01-design-philosophy-survey.md)

## Key Findings

### Finding 4: No Formal Rejection-Signal Framework Exists in Published Literature

The survey found no documented "reason-to-reject" taxonomy in canonical game design
literature. The closest documented practices are:

- **Supercell's pride test**: Kill a game if the team cannot answer "will we be proud of
  this?" with confidence. Their secondary signal is beta retention—players who would "play
  for years." The decision is team-autonomous and ritual-marked (champagne toast, sauna
  session), not metric-gated by a formal rubric.

- **Brier's genre-default test**: Reject any feature whose justification is "other games
  in this genre do this" rather than "this serves our pillars."

- **Church's FADT conflict analysis**: If two design tools (e.g., strong Story and strong
  Intention) are in conflict, one must be deliberately sacrificed. Church's analysis of
  SquareSoft RPGs shows their resolution: segregate Story into exploration, concentrate
  Intention into combat. This is a rejection pattern but not a formal framework.

The `GS-CONCEPT-SLATE` gate in the framework already requires a `reason to reject` field on
each concept. This is ahead of published literature, which offers cultural principles
rather than enumerated rejection categories.

**What this means for production failure protocols (gap b):** The concept-death ritual at Supercell combines
symbolic ceremony with cultural clarity on quality bar. The framework lacks a corresponding
ritual structure. Published literature does not provide one—it must be designed.


## Key Findings

### Finding 5: LLM-Native Design Leverage Is Underexplored at the Procedural Layer

Liapis (2024) surveys LLM capabilities across game design tasks and identifies three levels:
conceptual assistance (brainstorming, largely working), production assistance (autonomous
generation, largely working for structured content), and procedural assistance (iterative
dialogue during design reasoning, largely unexplored).

The key finding: LLMs handle hard structural constraints adequately but fail at soft
constraints—balance, pacing, narrative coherence, aesthetic consistency. The survey states
explicitly that soft constraint representation is the central open problem and requires
"innovative pre-processing or more advanced LLM technologies."

For the Game Studio framework, this means the most valuable AI-assisted design workflows is at the
*constraint formulation* stage, not the generation stage. An LLM guided by explicit MDA
aesthetic targets, named pillars, and documented anti-pillars will produce better mechanic
suggestions than an LLM given only a genre label or a vibe description.

**What this means for AI-assisted design workflows (gap c):** The framework already structures input
as taste, references, pillars, and anti-pillars—this is exactly the constraint context LLMs
need. The gap is that no playbook currently instructs agents on how to *use* these structured
inputs to improve generative leverage.


## Key Findings

### Finding 6: Authorship Boundaries in Human-AI Co-Creation Lack a Formal Framework

The PMC 2025 study finds that game designers consistently adopt a "curation model" in
practice: they position themselves as curators of AI output rather than delegates. Designers
express authorship anxiety when they cannot clearly trace creative decisions to themselves.
Over 60% of study participants reported concern that AI undermines originality claims.

The study proposes protocols at organizational, educational, and policy levels but does not
produce a named framework for drawing the creative-authority line. The industry consensus
description is: AI operates inside guardrails set by human intent, taste, and experience;
direction, selection, and final judgment remain with the human.

Anthropy and Clark (2014) frame design as dialogue between creator and player. This
framing extends naturally to AI collaboration: the AI is a participant in the dialogue whose
contributions require the same author-selective attention as any other input.

No existing thinker has published a formal model of creative authorship boundaries in
human-AI game design specifically. The discourse is at the level of observed anxiety and
general principles.

**What this means for AI-as-collaborator (gap c and framework gaps generally):** The
framework's `GS-AI-AUTHORITY` gate is structurally ahead of published discourse. The gap is
that no existing literature provides a tested vocabulary for communicating designer intent
to AI collaborators in ways that preserve authorship. This is a genuine open problem.


## Key Findings

### Finding 7: Beginner Taste-First Creators Have No Documented Canonical Entry Path

Canonical literature does not directly address the beginner who starts with taste alone. The
nearest documented entry points are:

- Schell's "essential experience" lens: before mechanics, name the experience you want the
  game to create. This is a taste-first starting move but is described as one lens among
  100, not as a beginner entry protocol.
- Fullerton's playcentric methodology: set emotion-focused experience goals first, then
  prototype and test. But the methodology presupposes some design vocabulary already.
- NYU Game Center BFA curriculum: students begin with non-digital game creation and develop
  "game literacy" before digital tools. No public documentation of how raw taste becomes a
  game concept.
- Lucas Pope's methodology: start with a constraint you find interesting, not with a genre.
  His process is art-first (1-bit aesthetic) or problem-first ("if there's a restriction,
  I'm suddenly interested"). This is a documented solo-developer entry move that bypasses
  genre entirely.

**What this means for gap (b) taste-to-game entry mode:** The `taste-to-game` entry mode in
the framework is institutionally ahead of published practice. The `GS-TASTE-CLARITY` gate
criteria are more specific than anything in canonical literature. The gap is operational:
no worked example exists in the framework showing an agent executing the taste-to-game path
from first message to first proof.


## Key Findings

### Finding 8: Source-Map Citations Have No Published Worked-Guide Tradition

The survey found no documented tradition of converting reference-game analysis into
operational worked guides. Pears demonstrates reverse-engineering in a single article.
Church's FADT demonstrates inductive extraction in a single article. No methodology paper
or textbook chapter addresses how to turn a set of reference citations into a design guide
that agents or collaborators can execute from.

This is a genuine gap in published literature, not just a gap in the framework.

**What this means for gap (d):** The `core/templates/direction/reference-games-map.md`
template captures citations but provides no worked example of the extraction step—moving
from "Specific moment: the ending of Obra Dinn" to "What it suggests: player reconstruction
of events without explicit narration" to a concrete mechanic or pillar statement. No external
source provides this worked example.

---


## Relevance To Game Studio

| Finding | Gap | Concrete Change Suggestion |
|---------|-----|---------------------------|
| MDA aesthetics taxonomy | (a) reference-to-constraint translation | Add MDA's 8 aesthetics as a structured vocabulary to `core/templates/direction/taste-profile.md` under Desired Emotions. Add backward-design chain note: desired aesthetic -> required dynamic -> enabling mechanic. |
| Church FADT conflict analysis | (a) reference-to-constraint translation | Add a "pillar conflict" field to `core/templates/direction/creative-pillars.md`: when two pillars conflict, name the resolution (which phase of play prioritizes which pillar). |
| Brier's adjective-first method | (a) + (b) | Add an adjective-generation step to the taste-to-game workflow. Before writing pillar statements, the creator names 5-8 adjectives describing desired experience. Pillars should be traceable to these adjectives. Document this in `core/workflows/stage-model.md` as an explicit step. |
| Supercell pride test + Brier genre-default test | (b) production failure protocols | Add `reason to reject` and `genre-default test` fields to `core/templates/direction/concept-portfolio.md`. Rejection criteria should include: (1) team cannot articulate pride in this, (2) feature exists because genre requires it not because pillars require it, (3) beta retention signal absent. |
| Liapis LLM constraint-leverage finding | (c) AI-assisted design workflows | Add a playbook note to `core/roles/playbooks/creative-director.md` instructing agents: when generating mechanic suggestions, state which MDA aesthetic is being targeted and which pillar is being served. This gives LLMs constraint context. |
| PMC authorship boundary findings | (c) AI-as-collaborator | Strengthen `GS-AI-AUTHORITY` gate with explicit vocabulary: "agent proposes, creator selects" is the required interaction mode for any decision touching pillars, reference moments, or direction. The gate already exists; the vocabulary for enforcing it does not. |
| Pope's constraint-as-creativity method | (b) + (d) | Add a "constraint-as-fuel" worked example to `core/templates/direction/reference-games-map.md`: demonstrate extracting a constraint from a specific moment, not just labeling what a reference game does. |
| Beginner entry path gap | (b) taste-to-game | Add a worked example showing the `taste-to-game` entry mode in full execution, from first message to first proof. Could live at `examples/` or as a walkthrough note in `core/templates/intake/project-intake.md`. |

---
