# Design Philosophy And Creative Direction Survey: Research Question

[Back to index](../01-design-philosophy-survey.md)

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


## Key Findings

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


## Key Findings

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
