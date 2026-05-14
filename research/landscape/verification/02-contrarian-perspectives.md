# Contrarian And Critical Perspectives

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

## Critique Of Playcentric / Taste-Driven Design

**Anna Anthropy, "Rise of the Videogame Zinesters" (2012):** Anthropy's critique runs perpendicular to Fullerton's: Anthropy argues that the playcentric tradition remains inside a commercial design logic — optimize the player experience, test iteratively, ship the best-feeling product — that is itself the problem. Games should be personal creative expressions first, player-pleasing experiences second. The zinester critique of playcentric design is that it keeps the author invisible and the consumer sovereign.

**The formalism counter-position (What Games Are, 2013):** Formalists argue that starting from desired emotion or player experience (as Fullerton advocates) produces design that is manipulative rather than honest — engineering player response rather than building coherent systems from which experience emerges. The formalist position: strong games emerge from rigorous system design, not from iterating toward a target emotional state. This is not an anti-design position; it is a competing design epistemology.

**Jonathan Blow** is the most prominent working practitioner of this approach. His design process for Braid and The Witness was driven by finding systems that expressed specific ideas, with emotional impact emerging from that search rather than being specified as a target.

**Assessment:** Playcentric design's strength is its empiricism — test, observe, iterate. Its weakness is that it can produce games optimized for the emotion the designer already expected, which is circular. The formalist critique is that the most surprising and original games come from following system logic to unexpected places, not from iterating toward a pre-specified aesthetic.

---

## Critique Of AI Co-Creative Hype

**PMC/MDPI study on generative AI in game design (2025):** Over 60% of surveyed designers agreed that generative AI "might reduce the originality of game design." One designer: "A big worry is that AI might take away some of the human creativity that's at the heart of game design." AI-generated narratives "often lack the emotional depth and character development found in human-written stories." Approximately two-thirds expressed concern about ethical implications — copyright, attribution, training data provenance. Integration into team workflows remains difficult due to unresolved attribution conventions.

**CHI 2024, "Is Resistance Futile?" — Early-Career Developers and Ethical Skepticism:** Academic study documenting that early-career game developers express structured ethical objections to generative AI adoption, not simply unfamiliarity or fear. Specific objections include displacement of junior roles (exactly the roles through which craft knowledge is transmitted), homogenization of visual output, and opacity of training data.

**Emily Bender and Alex Hanna, "The AI Con" (2024):** Bender's core argument applies directly to AI creative tools: LLM outputs are statistically probable token sequences, not understanding. "When [LLM] output is correct, that is just by chance." For game development, this means AI-generated design proposals, narrative, or dialogue are the statistical center of mass of existing games and narrative forms — structurally biased toward the familiar and against the novel.

**Karen Hao, "Empire of AI" (2025):** Documents how OpenAI's marketing inflated capability claims systematically. This has direct implications for evaluating AI co-creative tool claims: the institutional incentive structure rewards exaggeration.

**Assessment:** The "AI as creative collaborator" framing should be evaluated with the same skepticism applied to any vendor claim. The specific risk for a game framework is importing AI tools at the point where they replace judgment (design decisions, narrative structure) rather than augment capacity (asset generation, playtesting automation). The evidence suggests AI tools add more value in the latter than the former.

---

## Critique Of "Fail Fast" In Indie Solo Context

**Ziva.sh, "Solo Game Development in 2026":** Documents that fail-fast pressure systematically mismatch solo developer reality. Solo development is described as "a burnout machine" precisely because the solo dev cannot rapidly context-switch between failing and starting fresh — they carry full project context, emotional investment, and opportunity cost from every abandoned project. The "fail fast" frame emerged from startup and lean methodology contexts where teams can pivot without the accumulated psychological cost of solo work.

**GamesRadar / solo city builder developer:** Argues that first games always fail commercially, but the correct lesson is not "fail fast and move on" — it is "fail and accumulate craft." The developer argues that the industry needs to give solo developers "more room for failure" because the 10th game may be the breakthrough, and that framing early failure as something to be executed quickly misunderstands how craft develops over a career.

**Stardew Valley counter-example:** ConcernedApe built Stardew Valley solo over 4.5 years. A fail-fast framework would have killed it at the 18-month mark when nothing shippable existed. Long-form solo commitment to a single coherent vision is a legitimate production mode that is structurally invisible in most game development methodology writing.

**Assessment:** "Fail fast" is useful advice for concepts that can be tested cheaply. It is harmful advice when applied to solo work requiring accumulated craft, long development timelines, or personal artistic vision that only coheres over extended iteration. The framework should distinguish between concept validation (fail fast appropriate) and craft development (sustained commitment appropriate).

---

## Critique Of Aesthetics Taxonomies

**The "arbitrary list" problem:**

MDA's 8 aesthetics — Sensation, Fantasy, Narrative, Challenge, Fellowship, Discovery,
Expression, Submission — comprise what the original authors acknowledged is "not a definitive
list." Critics describe it as "a rather arbitrary list of emotional targets which lack
fundamentals." There is no principled derivation: the list reflects the play experiences the
2004 authors happened to value and happened to have encountered.

**The overlap and completeness problem:**

The categories are not mutually exclusive:

- Challenge and Discovery overlap substantially (exploration games involve both)
- Narrative and Fantasy overlap substantially (world-building games invoke both)
- Expression and Fellowship overlap in multiplayer creative games

And the list is not jointly exhaustive:

- Horror is absent despite being central to Resident Evil, Silent Hill, Amnesia, Dread X
- Disgust / Transgression is absent despite being central to games like Doki Doki Literature
  Club and Disco Elysium
- Awe / Sublimity is absent despite being central to Shadow of the Colossus and Journey
- Confusion / Uncertainty is absent despite being a deliberate affect in many puzzle games

**The taxonomy-shaped opinion problem:**

The 8 aesthetics read as a taxonomy but function as an opinion about what games are for. The
absence of horror is not a neutral omission; it reflects a particular view of games as
entertainment rather than art-form. Lana Polansky and Frank Lantz both identified this
structural problem: MDA's aesthetic categories encode values rather than describe a complete
possibility space. A designer using the list to specify experience goals will systematically
omit exactly the affects that define the most artistically distinctive games.

**Gnome Stew / "Eight Types of Fun" recontextualization:**

Various tabletop designers have expanded MDA's list (to 12, 14, or more categories) precisely
because the original 8 are insufficient for tabletop design contexts. This is indirect
evidence that even practitioners who accept MDA's framework find the taxonomy incomplete.

**Assessment:**

The 8 aesthetics are useful for teaching design intent to beginners who need a vocabulary to
start with. They are not a reliable tool for rigorous experience design targeting. Any
framework using the list prescriptively will produce blind spots in the categories the list
omits — and those omitted categories contain some of the most commercially and artistically
successful games of the past two decades.

---

## Critique Of Production Frameworks Generally

**The "every game is unique" argument:** Academic review of game production methodologies (arxiv.org, 2016 systematic review) finds: "There is no standardized development method... there has not been any agreement or standardization of game software process design for its efficacy." A subsequent survey: "Good games cannot be conceived through a factory-style line production process." The creativity-standardization tension is structural, not incidental.

**Requirements engineering failure (Callele et al., research cited in production literature):** Game requirements are fundamentally different from software requirements because they are experience requirements, not functional requirements. A function either works or it doesn't; an experience either engages or it doesn't. This makes the entire requirements-management component of software-derived production frameworks unreliable for games.

**The complexity diversity argument:** Game production involves simultaneous management of software engineering, visual art, animation, audio, narrative, UX, and QA — disciplines with incompatible production cadences. Agile sprints that work for engineering conflict with the quality-gate model of art production. Production frameworks imported from software engineering resolve this tension by pretending it does not exist.

**The counterargument:** Large studios (EA, Ubisoft, Nintendo) do successfully run standardized production pipelines on major titles. The resolution is that frameworks can work when (a) the game genre is sufficiently established that uncertainty is manageable, (b) team size is large enough that specialization allows incompatible cadences to run in parallel, and (c) the framework is adapted rather than adopted wholesale. These conditions do not hold for solo or small-team development.

---

## Patterns In Critical Perspectives

Across all nine investigation areas, four systematic challenges repeat:

1. **Terminology drift:** MDA, agile, and design pillars all suffer from practitioners using the same words to mean different things (mechanics, sprint, pillar). This produces false consensus and real misapplication.

2. **Scale mismatch:** Most canonical frameworks were developed at or for medium-to-large team production contexts. Applied to solo or small-team development, they produce overhead without benefit (agile ceremonies, pillar alignment meetings, vertical slice infrastructure investment).

3. **Advocacy selection bias:** GDC speakers, textbook authors, and methodology consultants are survival-selected. The frameworks they promote helped them specifically; critics are working in different contexts where the same methods failed.

4. **Static taxonomies in dynamic domains:** MDA's 8 aesthetics, Fullerton's playcentric emotion targets, and production milestone gates all encode the game landscape as it existed when they were written. The fastest-growing critical practice areas (horror games, games as personal expression, experimental narrative) fall outside or at the edges of these frameworks.

---

## Implications For Game Studio

Specific claims the framework is considering that need hedging based on this research:

1. **MDA as design vocabulary:** Use DDE or Lantz's Materials/Dynamics/Affect as a replacement. If MDA is cited, note that its core terms are contested and that the 8 aesthetics are illustrative, not exhaustive.

2. **Vertical slice as milestone gate:** Gate definition must explicitly include infrastructure deliverables (tooling, pipelines, approval workflows), not only the playable slice artifact. Without this, the gate incentivizes exactly the polished-prototype trap Ellenor identifies.

3. **Design pillars as pre-production requirement:** Make pillars optional or scale-conditional. For solo work, pillar articulation should follow discovery iteration, not precede it. Flag the post-hoc rationalization risk.

4. **Agile/Scrum as production backbone:** Adopt agile principles; avoid Scrum ceremony as written. Art and design production cadences require separate handling from engineering sprints. Retrospectives only function when feedback loops are shorter than the sprint.

5. **Playcentric design as primary method:** Present alongside, not instead of, the systems-first or formalist alternative. Players are not the only valid design authority; some games require sustained commitment to a vision the player has not yet encountered.

6. **AI co-creative tools as creative collaborators:** AI tools are useful for asset generation and automation; they are unreliable for design judgment, narrative structure, and originality. Claims about AI as creative partner should be treated as vendor positioning unless independently verified.

7. **"Fail fast" as universal indie advice:** Gate this advice explicitly to concept-validation contexts. For craft-development contexts and long-form solo work, sustained commitment is a legitimate production mode, not a failure of methodology.

---

## Open Questions

- Is there a production framework specifically designed for solo developers that has been empirically evaluated? Current literature shows a gap.
- What is the failure rate of games built explicitly using MDA as a design tool versus games that cite MDA post-hoc? No dataset found.
- Do design pillars correlate with commercial or critical success, or is the correlation entirely anecdotal? No controlled study found.
- How does the formalism vs. playcentric split map onto game genre? Some genres (puzzle games, systemic sandboxes) may favor formalist methods; others (narrative games, emotional experiences) may favor playcentric methods.
- What is the specific evidence that AI co-creative tools improve or degrade final game quality, measured independently of developer satisfaction surveys?

---

## Citations

- Hunicke R, LeBlanc M, Zubek R. MDA: A Formal Approach to Game Design and Game Research. AAAI 2004. https://aaai.org/papers/ws04-04-001-mda-a-formal-approach-to-game-design-and-game-research/
- Walk W. From MDA to DDE. Game Developer, 2017. https://www.gamedeveloper.com/design/from-mda-to-dde
- Duarte LCS. Revisiting the MDA Framework. Game Developer. https://www.gamedeveloper.com/design/revisiting-the-mda-framework
- Lantz F. MDA (discussion). Game Design Advance. https://gamedesignadvance.com/?p=2995
- Walk W et al. Design, Dynamics, Experience (DDE). Springer, 2017. https://link.springer.com/chapter/10.1007/978-3-319-53088-8_3
- MDPI Information. Redefining the MDA Framework. 2021. https://www.mdpi.com/2078-2489/12/10/395
- IGI Global. The Fallacies of MDA for Novice Designers. https://www.igi-global.com/chapter/the-fallacies-of-mda-for-novice-designers/315537
- Ellenor G. Don't Over-Focus on the Vertical Slice. Medium, 2020. https://gellenor.medium.com/dont-over-focus-on-the-vertical-slice-c304964ed747
- Ismail R. Prototypes and Vertical Slice. LTPF. https://ltpf.ramiismail.com/prototypes-and-vertical-slice/
- Game Developer. The State of Agile in the Game Industry. https://www.gamedeveloper.com/business/the-state-of-agile-in-the-game-industry
- Joost's Dev Blog. Why Scrum is Fundamentally Broken. 2014. http://joostdevblog.blogspot.com/2014/03/why-scrum-is-fundamentally-broken-but.html
- Anthropy A. Rise of the Videogame Zinesters. Seven Stories Press, 2012.
- MDPI Journal of Neuroscience. Generative AI in Game Design: Enhancing Creativity or Constraining Innovation? 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12193870/
- CHI 2024. Is Resistance Futile? Early Career Game Developers, Generative AI, and Ethical Skepticism. https://dl.acm.org/doi/abs/10.1145/3613904.3641889
- Bender EM, Hanna A. The AI Con. Penguin, 2024.
- Hao K. Empire of AI. 2025.
- GamesRadar. Solo indie dev behind hit city builder. https://www.gamesradar.com/games/city-builder/solo-indie-dev-behind-hit-city-builder-says-devs-should-have-more-room-for-failure/
- Ziva.sh. Solo Game Development in 2026: What Actually Works. https://ziva.sh/blogs/solo-game-development
- arxiv.org. Game Development Software Engineering Process Life Cycle: A Systematic Review. 2016. https://arxiv.org/pdf/1711.08527
