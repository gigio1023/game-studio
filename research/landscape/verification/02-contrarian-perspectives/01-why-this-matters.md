# Contrarian And Critical Perspectives: Why This Matters

[Back to index](../02-contrarian-perspectives.md)

## Why This Matters

A framework built primarily from GDC talks, canonical textbooks, and practitioner best-practice lists inherits all the confirmation bias baked into those sources. GDC speakers are self-selected survivors. Textbooks codify what worked for their authors. The resulting picture is: here are the methods, here is why they work. The critics — often published in DiGRA proceedings, academic game studies journals, or practitioner blogs written after postmortems — are systematically underrepresented. Importing MDA, vertical slice, design pillars, agile, and playcentric design wholesale without their critics produces a framework that will fail in exactly the ways those critics predicted, without the user understanding why.

---


## Sources Surveyed

- Wolfgang Walk, "From MDA to DDE" (Game Developer, Gamedeveloper.com): Proposes DDE as replacement.
- Luiz Claudio Silveira Duarte, "Revisiting the MDA Framework" (Game Developer, Gamedeveloper.com): Non-linear MDA critique.
- Frank Lantz, "MDA" (Game Design Advance, gamedesignadvance.com): Terminology critique.
- Lana Polansky (Critical Distance): Critique of MDA's "mechanics" as a meaningful category.
- Geoff Ellenor, "Don't Over-Focus on the Vertical Slice" (Medium, gellenor.medium.com): Vertical slice trap.
- Rami Ismail, "Prototypes and Vertical Slice" (LTPF, ltpf.ramiismail.com): Purpose confusion critique.
- Game Developer, "The State of Agile in the Game Industry" (gamedeveloper.com): Agile failure modes in studios.
- PMC/Journal of Neuroscience (pmc.ncbi.nlm.nih.gov/articles/PMC12193870): Generative AI in game design — skeptical data.
- CHI 2024 paper, "Is Resistance Futile?" (dl.acm.org/doi/abs/10.1145/3613904.3641889): Early-career devs' ethical skepticism toward generative AI.
- Emily Bender and Alex Hanna, "The AI Con" (Penguin, 2024): Structural critique of LLM hype.
- Anna Anthropy, "Rise of the Videogame Zinesters" (Seven Stories Press, 2012): Against corporate design orthodoxy.
- "What Games Are," Formalists and Zinesters post (whatgamesare.com, 2013): Formalism vs. expressionism debate.
- MDPI "Redefining the MDA Framework" (mdpi.com/2078-2489/12/10/395): Academic ontology critique.
- IGI Global, "The Fallacies of MDA for Novice Designers" (igi-global.com): Novice misapplication patterns.
- GamesRadar, solo city builder dev on first-game failure norms (gamesradar.com): Against fail-fast framing.
- Research synthesis on game production standardization (arxiv.org/pdf/1711.08527): "No single answer" on methodology.

---


## Critique Of MDA

**Wolfgang Walk (Game Developer, 2017 — "From MDA to DDE"):** Argues that MDA has three terminal problems. First, the term "mechanics" in MDA actually means almost everything the designer controls — graphics, sound, narrative, rule-sets — making it a near-useless category. Lantz confirmed this: "the version of MDA that is most useful puts the rules and the graphics together along with the language and the sounds and everything else," which makes "mechanics" an empty umbrella. Second, "aesthetics" in MDA is not the same word as philosophical aesthetics or visual aesthetics, so the term creates persistent misreading (Lantz: "two seconds later they will turn around and say 'the gameplay vs. the aesthetics'"). Third, MDA has no framework for narrative design — every attempt to fit narrative inside MDA stretches the categories to breaking point.

Walk's proposal: rename and restructure into **Design / Dynamics / Experience (DDE)**, where Design splits into Blueprint, Mechanics, and Interface; Experience replaces Aesthetics and covers the player journey across sensory, emotional, and intellectual dimensions over time.

**Luiz Claudio Silveira Duarte (Game Developer, "Revisiting the MDA Framework"):** Attacks MDA's assumption of linear player progression (Mechanics → Dynamics → Aesthetics from the designer's side; Aesthetics → Dynamics → Mechanics from the player's side). In non-digital games this linearity inverts or becomes multi-directional: a Chess novice cannot infer rules from moving pieces — they must consciously learn mechanics before experiencing aesthetics. Duarte concludes MDA has a "digital game blindness" embedded in its authorial perspective, making it unreliable as a universal game design tool.

**Frank Lantz (Game Design Advance, 2015):** The term "mechanics" creates confusion a "million times worse" than the aesthetics problem because designers already use "mechanics" narrowly (to mean specific interaction patterns: roll-and-move, key-and-lock, hit points) and MDA uses it broadly. The practical result is that practitioners who think they understand MDA are often using a subtly different version. Lantz proposed replacements: "Materials/Dynamics/Affect" or "Mechanics&Materials/Dynamics/Affect."

**IGI Global (2022 chapter "Fallacies of MDA for Novice Designers"):** Documents a systematic pattern where novice designers over-index on mechanics and under-use aesthetics when applying MDA, producing mechanic-heavy designs that miss the emotional target MDA was designed to produce. This is partly a pedagogy failure but also a framework legibility failure.

**Assessment:** MDA's staying power is name recognition and pedagogical convenience, not theoretical rigor. All serious extensions (DDE, Duarte's non-linear model, Lantz's materials model) agree the original categorization is too blurry to be relied on as a precision design tool. The framework should be cited as a heuristic starting point, not a design ontology.

---


## Critique Of Vertical Slice

**Geoff Ellenor (Medium, 2020 — "Don't Over-Focus on the Vertical Slice"):** The core problem is not the vertical slice artifact itself but what teams systematically fail to build alongside it. Preproduction that produces a polished slice without establishing real tool pipelines, data structures, and approval workflows delivers "a sexy vertical slice that was made with none of the tools and processes that you need for a successful production." When production ramps up, bad tools become expensive: they cost money, waste iteration time, and cause talent attrition. Ellenor's argument: preproduction should be "a two-headed monster to slay" — the visible slice and the invisible infrastructure.

**Rami Ismail (LTPF, "Prototypes and Vertical Slice"):** Most indie developers confuse the purpose of prototypes and vertical slices. Ismail's inversion: prototypes answer whether you should make the game; vertical slices prove whether you can make it. The vertical slice is not an advanced prototype — it is a production-readiness test of pipelines, workflows, and team capacity. The common error is using the vertical slice as a design validation tool, which wastes months on production feasibility questions that should have already been answered by a prototype. Ismail recommends pitching after prototypes (with mockups), not after the vertical slice — this secures funding before the expensive production-readiness investment.

**The Wayline "Polished Prototype Trap":** Third-party documentation of the trap Ellenor and Ismail describe: studios over-invest in polish for the slice, signaling quality before proving pipelines, then discover at production ramp-up that the polished slice was built on ad-hoc tooling.

**Assessment:** The vertical slice milestone is sound in principle; the critique is about how it is practiced. The two specific failure modes are: (1) slice-as-pitch-document rather than production-readiness-proof, and (2) slice built without the infrastructure that must accompany it. Any framework adopting vertical slice as a gate must specify what non-visible deliverables (tooling, pipelines, approval workflows) are required alongside the slice artifact.

---


## Critique Of Design Pillars

**The atomism problem (sourced from ch0m5.github.io and broader practitioner discourse):**

Pillars can promote an atomistic view of game design — orienting vision around discrete parts
and leading to separate teams designing combat, world, and narrative in isolation, without an
integrating vision of the game as a whole. God of War may have great combat, a compelling
world, and a meaningful narrative, but designed in isolation, those pillars don't guarantee
integration. The strongest critique of pillars is precisely this: they are a decomposition
tool masquerading as a synthesis tool.

**Post-hoc rationalization (anytowngame.com):**

Applying design pillars to a completed or near-completed game is "a Rorschach test of what
the observer thinks is a design pillar, rather than a structurally identifiable truth about
the work." This is significant: many publicly cited pillar examples were articulated during
or after production, not before it. Crysis, for example, did not use explicit design pillars
— it had a design vision of player freedom and wide-linear levels. The pillar vocabulary was
overlaid later.

**Marketing capture:**

Multiple sources note that pillars are increasingly used in game marketing, which colonizes
their development function. When teams know pillars will appear in trailers and press kits,
there is pressure to make pillars legible to outsiders rather than functionally true to the
design.

**Functional tunnel vision:**

Pillars that focus on specific elements ("an accessible minimap," "strong voice acting") harm
global design by substituting feature targets for holistic experience goals. Empty pillar
concepts like "make a funny game" or "a game that sells itself" are among the least useful
formulations in game design practice. The pillar format rewards specificity but punishes
the kind of ambiguous, open-ended design intent that produces genuinely novel games.

**Jonathan Blow's implicit counter-position:**

Blow's design philosophy — looking for systems that express fundamental truths in the cleanest
way, resisting combinatoric design techniques — is structurally incompatible with pillar-driven
design. Pillar thinking presupposes discrete design components that can be articulated in
advance; Blow's method discovers design through prolonged iteration on coherent systems. His
process for The Witness involved committing to a system logic and following it to conclusions
the designer could not specify at the outset. No pillar articulation could have preceded that.

**Assessment:**

Pillars are a communication and alignment tool of genuine value for large teams. For solo or
small-team development, their value is weaker because the alignment problem they solve does
not exist at that scale. The framework should not treat pillars as a universal pre-production
requirement. When pillars are used, they should be treated as living documents that follow
design discovery rather than precede it.

---


## Critique Of Agile / Scrum For Games

**Game Developer, "The State of Agile in the Game Industry":**

Studios adopted Scrum based on GDC hype rather than comprehension. Core failure modes:

1. Imposing Scrum on art teams is "how much of a disaster it is." Scrum was designed for
   engineering workflows; its sprint and velocity model does not map onto the quality-gate-
   driven workflow of art production.
2. "ScrumBut" implementations — studios follow Scrum rules except for the inconvenient parts
   — spread widely and produce the worst of both worlds: bureaucratic overhead without agile
   learning loops.
3. Multi-year game development cycles undermine retrospectives and sprint learning. The gap
   between decision and feedback is too long for agile's learning loops to function at all.
4. Bottom-up code design without big-picture documentation produces unmaintainable codebases;
   velocity metrics obscure this failure until it is too late to address cheaply.

One developer: Scrum "takes most the fun out of development and turns IT work into a daily
grind" and "kills inventiveness."

Another: "No one knew exactly what it was ... they just want to make games, not appease a
cult-like managerial fantasy."

**Joost's Dev Blog (2014) "Why Scrum is Fundamentally Broken":**

Argues that Scrum's reliance on self-managing teams only works when team members already have
high intrinsic motivation and craft alignment. In games studios, where the project content
itself (the game's artistic direction) is decided outside the team, self-management applies
only to execution, not to the decisions that matter most. This is a different category of
failure than misimplementation — it is a structural mismatch between Scrum's assumptions and
how game design decisions actually get made.

**The "don't blame Scrum" defense** is itself revealing:

It acknowledges Scrum is almost universally misimplemented in games while protecting the
methodology from critique. This pattern — "it works in theory, it just wasn't done right" —
is unfalsifiable in practice and should be treated with skepticism when evaluating any
production methodology claim.

**Assessment:**

Agile's core values (iteration, feedback loops, working software over documentation) translate
well to game development. Scrum's specific ceremonies and velocity metrics translate poorly,
particularly for art-heavy or narrative-heavy production phases. The framework should
distinguish between agile principles and Scrum ceremony, and should not import Scrum
ceremonies as defaults without explicit justification for each one.

---
