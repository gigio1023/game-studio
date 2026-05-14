# Design Philosophy And Creative Direction Survey

## Research Question

This round investigated five questions about game design philosophy where the Game Studio
framework is currently shallow:

1. Is there a formal documented methodology for translating "I like this scene/moment from
   another game" into design constraints? Who are the named authors and what are their
   specific moves?
2. What does canonical literature say about creators who start from taste alone, with no
   genre, loop, or engine yet?
3. What pillar and anti-pillar traditions exist beyond Doug Church's FADT? What is the
   lineage and what are recent developments?
4. Are there documented "rejection-signal" or "reason-to-reject" frameworks for concept
   selection?
5. What thinkers write explicitly about creative authorship boundaries between collaborators,
   in ways relevant to AI-as-collaborator?

---

## Sources Surveyed

- **Doug Church, "Formal Abstract Design Tools" (gamedeveloper.com, 1999)**: Foundational
  primary source. Church proposes that the industry's lack of shared vocabulary is the
  primary barrier to design evolution. Authoritative; the originating text for all pillar
  discourse.

- **Robin Hunicke, Marc LeBlanc, Robert Zubek, "MDA: A Formal Approach to Game Design and
  Game Research" (AAAI Workshop, 2004)**: Peer-reviewed academic framework defining
  Mechanics, Dynamics, Aesthetics and an 8-category aesthetics taxonomy. The most cited
  formal game design methodology. Authoritative.

- **Max Pears, "Design Pillars: The Core of Your Game" (gamedeveloper.com)**: Practitioner
  article demonstrating pillar extraction by reverse-engineering The Last of Us and Breath
  of the Wild. Named author; industry practitioner at CD Projekt Red. Moderate authority.

- **Wren Brier, "Unpacking the Design Pillars of a Chill Puzzle Game" (gamedeveloper.com,
  2021)**: Primary source from Witch Beam on how Unpacking's three pillars (contemplation,
  discovery, expression) were formed. Named author; first-person account. High authority
  for process detail.

- **Anna Anthropy and Naomi Clark, "A Game Design Vocabulary" (Addison-Wesley, 2014)**:
  Introduces accessible vocabulary (verbs, objects, scenes, resistance) and frames design
  as dialogue between creator and player. Liz England review and First Person Scholar
  analysis consulted. Moderate-to-high authority; widely taught.

- **Antonios Liapis, "Large Language Models and Games: A Survey and Roadmap" (2024)**:
  Peer-reviewed survey of LLM capabilities in game design and content generation. Most
  current academic source on AI-assisted design workflows. High authority on empirical claims.

- **Supercell, "Quality is Worth Killing For" (GDC 2016, gamedeveloper.com write-up)**:
  Studio documentation on game concept rejection rituals. Named studio with documented
  cultural process. Limited methodology specificity; primarily cultural framing.

- **Lucas Pope, Gamedeveloper.com interview and dukope.com devlogs**: Primary source on
  constraint-as-creativity methodology. Named author; Obra Dinn and Papers Please
  designer. High authority for solo-developer design process.

- **PMC Research, "Generative AI in Game Design: Enhancing Creativity or Constraining
  Innovation?" (2025)**: Peer-reviewed study on human-AI co-creation dynamics and
  authorship. High authority on empirical claims about designer behavior.

- **NYU Game Center, Game Design I course page**: Institutional curriculum description.
  Low specificity on methodology; primarily confirms frame not content.

---

## Key Findings

### Finding 1: Church's FADT Is a Vocabulary Proposal, Not a Translation Methodology

Church (1999) argues the field lacks precise shared vocabulary and proposes "formal abstract
design tools" as a fix. His three tools—Intention (player forms their own plan), Perceivable
Consequence (the world reacts clearly to player action), and Story (a narrative thread
binding events)—are extracted by analyzing what works in Super Mario 64.

The critical observation is that Church's method is *inductive and post-hoc*: he observes a
finished game, abstracts what makes it work, and names the abstraction. He does not supply a
forward-direction procedure for going from "I like this moment" to "therefore this mechanic
constraint." The FADT article is a call for a shared vocabulary, not a move-set for using one.

**What this means for reference-moment translation (gap a):** FADT gives names to things that
already work. It does not tell designers how to use a reference to derive a new mechanic.
The vocabulary is useful once you have a game; it does not generate the game.

### Finding 2: MDA Provides the Clearest Backward-Design Chain Available

Hunicke, LeBlanc, and Zubek (2004) establish that designers work mechanics -> dynamics ->
aesthetics while players experience aesthetics -> dynamics -> mechanics. This directional
asymmetry is the most formally documented justification for starting design from desired
emotional experience and working backwards to mechanic constraint.

Their aesthetics taxonomy gives eight named categories: Sensation, Fantasy, Narrative,
Challenge, Fellowship, Discovery, Expression, Submission. These function as a controlled
vocabulary for the emotional side of design—a designer can say "I want Discovery as the
dominant aesthetic" and then reason backward: what dynamic produces Discovery? What
mechanic produces that dynamic?

The framework does not, however, provide a move-set for translating a specific reference
moment ("the satisfaction of the last island in Celeste's B-Side") into mechanic constraint.
It provides the vocabulary layer; the translation step itself remains undocumented in
canonical literature.

**What this means for reference-moment translation (gap a):** MDA's backward-design chain
(desired aesthetic -> required dynamic -> enabling mechanic) is the closest thing canonical
literature offers to a formal translation method. The framework's aesthetics taxonomy should
be wired directly into the `core/templates/direction/taste-profile.md` file as a structured
vocabulary for desired emotions.

### Finding 3: Pillar Traditions Are Practitioner-Oral, Not Formally Documented

The design pillar tradition is almost entirely practitioner-oral. Church (1999) named the
problem; the pillar practice that followed is documented only in short industry articles and
GDC talks, not in any referenced methodology paper.

Pears (gamedeveloper.com) demonstrates pillar extraction by reverse-engineering existing
games: identify the 3-5 emotions or behaviors the game most consistently produces, name
them, then use them as decision filters. His rejection criterion: "Does this mechanic serve
one of these pillars? If no, remove it."

Brier's Unpacking case (2021) shows a subtraction method: start with adjectives describing
desired player experience, iterate down to pillars, then use subtractive design—"Does my
game really need this feature, or am I including it because other games in the genre have it?"
This is the clearest documented anti-pillar move set found in the survey: reject genre
defaults that don't serve the adjectives.

The anti-pillar concept exists in practice but is documented only as "name what your game is
not" with no formal enumeration of candidate rejection categories.

**What this means for gap (b) and pillar traditions (gap a):** The framework's
`core/templates/direction/creative-pillars.md` already has `What it rejects` and
`Anti-pillars` fields—this is ahead of canonical practice. The gap is that no existing
literature provides a generation procedure for pillar statements. The closest is Brier's
adjective-first method.

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

## Open Questions

1. **The translation move set does not exist in published form.** The survey confirms that
   no canonical source provides a step-by-step procedure for translating a specific
   reference moment into a design constraint. The closest is MDA's backward-design chain
   (aesthetic -> dynamic -> mechanic) combined with Church's extraction technique
   (observe what works, abstract the underlying tool). The framework needs to synthesize
   these into a first-principles worked procedure.
   Search query that failed to find a resolution:
   `game design "reference moment" "extract constraint" formal procedure methodology`

2. **Anti-pillar enumeration.** No source provides a taxonomy of candidate anti-pillars or
   a generation procedure. The best available practice is Brier's "reject genre defaults."
   A richer enumeration (e.g., reject complexity defaults, reject reward defaults, reject
   narrative defaults) does not exist in published literature.
   Search query that failed: `game design anti-pillars taxonomy enumeration 2020 2024`

3. **Formal creative-authority model for AI collaborators.** The PMC study describes the
   observed problem (authorship anxiety, curation model) but does not produce a formal
   model. No such model exists in published game design literature.
   Search query that failed:
   `game design formal model AI authorship boundary "creative director" human AI 2024`

4. **Worked craft-reference-index guides.** No tradition of converting reference citations into
   operational worked guides exists in published game design literature. This is a genuine
   contribution opportunity for this framework.
   Search query that confirmed gap:
   `game design "worked example" "craft reference index" "design citation" reference to constraint tutorial`

---

## Citations

1. Doug Church, "Formal Abstract Design Tools," Gamasutra / Game Developer, July 1999.
   https://www.gamedeveloper.com/design/formal-abstract-design-tools

2. Robin Hunicke, Marc LeBlanc, Robert Zubek, "MDA: A Formal Approach to Game Design and
   Game Research," AAAI Workshop on Challenges in Game AI, 2004.
   https://users.cs.northwestern.edu/~hunicke/MDA.pdf (direct PDF)
   https://aaai.org/papers/ws04-04-001-mda-a-formal-approach-to-game-design-and-game-research/

3. Max Pears, "Design Pillars: The Core of Your Game," Game Developer.
   https://www.gamedeveloper.com/design/design-pillars-the-core-of-your-game

4. Wren Brier, "Unpacking the Design Pillars of a Chill Puzzle Game," Game Developer.
   https://www.gamedeveloper.com/design/unpacking-the-design-pillars-of-a-chill-puzzle-game

5. Anna Anthropy and Naomi Clark, "A Game Design Vocabulary," Addison-Wesley, 2014.
   Publisher page: https://books.google.com/books?id=sZTlAgAAQBAJ
   First Person Scholar review: https://www.firstpersonscholar.com/a-game-design-vocabulary/

6. Tracy Fullerton, "Game Design Workshop: A Playcentric Approach to Creating Innovative
   Games," 5th edition, Routledge, 2024.
   https://www.routledge.com/Game-Design-Workshop-A-Playcentric-Approach-to-Creating-Innovative-Games/Fullerton/p/book/9781032607009

7. Jesse Schell, "The Art of Game Design: A Book of Lenses," 3rd edition, CRC Press, 2019.
   https://schellgames.com/art-of-game-design

8. Greg Costikyan, "I Have No Words and I Must Design," Interactive Fantasy No. 2, 1994.
   https://www.interactivedramas.info/papers/nowordscostikyan.pdf

9. Antonios Liapis, "Large Language Models and Games: A Survey and Roadmap," 2024.
   https://antoniosliapis.com/articles/llm_and_games.php

10. Supercell, "Quality is Worth Killing For," GDC 2016.
    Article: https://www.gamedeveloper.com/business/quality-is-worth-killing-for-supercell-s-ruthless-approach-to-production
    GDC Vault (paywall): https://gdcvault.com/play/1023583/Quality-is-Worth-Killing

11. Supercell, "What We've Learned from Failures."
    https://supercell.com/en/news/learning-from-failures/

12. Lucas Pope, interview "For Lucas Pope, Return of the Obra Dinn was a bunch of appealing
    design problems," Game Developer.
    https://www.gamedeveloper.com/design/for-lucas-pope-i-return-of-the-obra-dinn-i-was-a-bunch-of-appealing-design-problems

13. Lucas Pope, "Development Logs for Return of the Obra Dinn."
    https://dukope.com/devlogs/obra-dinn/

14. Generative AI in Game Design research, PMC, 2025.
    https://pmc.ncbi.nlm.nih.gov/articles/PMC12193870/

15. MDA Framework summary and aesthetics taxonomy.
    https://en.wikipedia.org/wiki/MDA_framework

16. Charlie Cleveland, "Game Pillars and Values."
    https://www.charliecleveland.com/game-pillars/
