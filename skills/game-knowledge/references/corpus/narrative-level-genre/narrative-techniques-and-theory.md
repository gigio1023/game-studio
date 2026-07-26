# Environmental Storytelling, Ludonarrative (Dis)Harmony, and Non-Conflict Structure

Three narrative-theory concepts that operate above the level of any single structural pattern — they're lenses for judging whether a game's *story* and its *systems* are pulling in the same direction, and for widening what counts as "story structure" beyond Western conflict-driven plotting.

---

## Environmental storytelling

### Source

The foundational academic source is Henry Jenkins, "Game Design as Narrative Architecture," in Noah Wardrip-Fruin and Pat Harrigan (eds.), *First Person: New Media as Story, Performance, and Game* (MIT Press, 2004). **Note — reconstruction flag:** the original MIT-hosted text could not be retrieved directly in this pass (link redirects to a dead page); the framing below is reconstructed from secondary sources and should be verified against the original chapter before being treated as a direct quote. Jenkins' essay is the paper that industry practitioners are, whether they know it or not, restating when they talk about "environmental storytelling" — he proposed spatial design functions as a form of narrative architecture with (per widely-cited summaries) categories along the lines of *evocative spaces* (environments that evoke a pre-existing narrative, e.g. a licensed IP world), *enacting stories* (spaces built to stage a specific plot event), *embedded narrative* (backstory or plot information distributed as discoverable environmental detail), and *emergent narrative* (spaces built to generate player-authored stories through systemic interaction, closer to a sandbox).

Practitioner-facing treatments: "Environmental Storytelling in Video Games," gamedesignskills.com; "What You Give Is What You Get: Environmental Storytelling in Games," https://remptongames.com/2018/11/24/what-you-give-is-what-you-get-environmental-storytelling-in-games/.

### The technique

Environmental storytelling is the practice of arranging objects, architecture, lighting, and spatial layout so that a player *infers* a story from the environment rather than being told it directly — the narrative equivalent of "show, don't tell," except the "showing" is entirely diegetic set-dressing rather than a cutscene or dialogue.

**Named sub-techniques, by example:**
- **Narrative stratigraphy** — layering cultural/historical/emotional information into physical space the way geological strata layer time, so that exploring *deeper* into a space (physically or attentionally) surfaces *older* or more hidden story information. Used explicitly to describe *Dark Souls*, where item descriptions carry nearly the entire plot and lore rather than any cutscene or dialogue tree — the world's ruined, interconnected architecture itself encodes the setting's history through scale and decay.
- **Object placement as narrative residue** — *Half-Life 2*'s City 17 environments (newspapers, personal belongings, graffiti) function as fragments of a "once-thriving society" the player reconstructs through exploration rather than exposition.
- **Guided discovery** — level designers use lighting, sound, and composition to steer attention toward story-relevant details without forcing the player to see them (this overlaps directly with the *wayfinding* techniques in `spatial-and-architecture-theory.md` — environmental storytelling and spatial wayfinding use the same compositional toolkit for different ends: one guides *movement*, the other guides *inference*).

**What it buys:** environmental storytelling rewards player curiosity, reinforces exploration as a core loop, and supports nonlinear worldbuilding — a player can piece together lore in whatever order they discover it, without the designer needing to author a specific sequence (this is structurally similar to the "no fixed order" property of QBN/floating-modules narrative — see `storylets-and-qbn.md`).

---

## Ludonarrative dissonance (and harmony)

### Source

Clint Hocking (then Creative Director at Ubisoft, previously LucasArts), "Ludonarrative Dissonance in Bioshock: The problem of what the game is about," blog post, October 2007. https://en.wikipedia.org/wiki/Ludonarrative_dissonance (secondary summary; original post is widely mirrored/cited but the primary blog is defunct).

### The concept

**Ludonarrative dissonance** names the gap between the story a game's *narrative layer* (cutscenes, dialogue, scripted events) tells and the story its *mechanics* actually let — or force — the player to enact. Hocking's founding case study is *BioShock* (2007): the game's narrative theme is Objectivism, free will, and the critique of coercive ideology, and its early mechanics reinforce this by offering a real choice (harvest or rescue Little Sisters, self-interest vs. altruism). But as the plot resolves, the game removes that agency and funnels the player down one fixed narrative path — undermining, at the mechanical level, the very theme of free will the story is *about*. The dissonance isn't "the story is bad" or "the gameplay is bad" in isolation — it's that the two layers are making contradictory arguments to the player simultaneously.

**Widely cited recurring examples** (per general critical consensus, not all from Hocking's original piece): *Call of Duty 4* letting players injure a narratively-important AI partner without consequence; the *Uncharted* series maintaining a likable-rogue tone for a protagonist who mechanically kills hundreds of people; *Mass Effect*'s Paragon/Renegade Shepard receiving hero status regardless of playstyle; *The Last of Us Part II*'s narrative critique of the cycle of violence sitting alongside gameplay that is mechanically about performing violence.

### Counter-arguments and "ludonarrative harmony"

The term is contested, and citing it uncritically is itself a known critical weakness — treat it as a **diagnostic question to ask**, not an automatic flaw:
- *Spec Ops: The Line* writer Walt Williams has argued the dissonance in that game is *deliberate* — the mismatch between "you are playing a heroic military shooter" and "the story reveals your character as a self-deceiving war criminal" is the point, designed to implicate the player in the protagonist's rationalizations rather than to fail at coherence.
- *Papers, Please* (Lucas Pope) is frequently cited as the positive case — **ludonarrative harmony** — where the tedious, morally-compromising bureaucratic mechanics directly *are* the narrative argument about authoritarian systems, rather than sitting in tension with it.

**Design takeaway:** the useful move isn't "avoid ludonarrative dissonance," it's "know whether your mechanics and your narrative are making the same argument, and if they're not, decide whether that's a bug or the whole point."

---

## Kishōtenketsu and non-conflict narrative structure

### Source

Kishōtenketsu is a four-act structure with roots in classical Chinese, Korean, and Japanese narrative forms (four-panel comics, some poetry forms). General overviews: https://artofnarrative.com/2020/07/08/kishotenketsu-exploring-the-four-act-story-structure/ ; https://mythicscribes.com/plot/kishotenketsu/. Its game-design application is most directly attributable to Nintendo level designer **Koichi Hayashida** (director, *Super Mario 3D Land* / *3D World*), who has described his level-design methodology in interviews as explicitly modeled on kishōtenketsu — this crossover is covered in depth in `level-teaching-sequences.md`, since Hayashida applied the structure to level *design*, not to plot writing. This file covers kishōtenketsu as a **narrative** (not spatial) structure.

### The four acts

**Ki** (introduction) → **Shō** (development — the idea is expanded, not complicated by conflict) → **Ten** (twist — an unexpected turn, reveal, or reframing) → **Ketsu** (conclusion — the twist is resolved or integrated, often by showing how it recontextualizes Ki and Shō).

### Why it matters as an alternative to Western structure

Western dramatic structure (three-act, Freytag's pyramid — both cited in `pacing-and-difficulty-curves.md` as the dominant model for intensity-curve pacing) is built around **escalating conflict**: a protagonist wants something, faces opposition, and the drama is the friction between want and obstacle. Kishōtenketsu does not require an antagonist or opposition at all — tension in the Ten (twist) act comes from **discovery, reframing, or juxtaposition**, not confrontation. A kishōtenketsu story can be entirely "slice of life" and still have genuine narrative propulsion, because the reader/player's engagement is driven by curiosity about the reframe, not by anxiety about whether the protagonist will overcome an obstacle.

**Design relevance beyond plot:** because the twist (Ten) in this structure is about *recontextualizing what came before* rather than *escalating stakes*, it maps unusually well onto puzzle and mechanical reveals — this is precisely the structural logic Hayashida borrowed for level design (introduce a mechanic safely, develop it, twist it into an unexpected use, conclude by testing mastery) and it is also visible in "aha" puzzle design more broadly (see `genre-puzzle.md` for Baba Is You and The Witness, both of which are essentially kishōtenketsu at the scale of a single puzzle: here's a rule, here's how it behaves, here's the twist reveal about how it *actually* behaves, here's the resolution once you've internalized it).

### Practical use

Reach for kishōtenketsu, or at least ask whether conflict is load-bearing, when:
- The intended tone is contemplative, exploratory, or slice-of-life (much of the walking-sim genre — see `genre-narrative-horror-and-scope.md` — implicitly uses non-conflict structure even when it isn't named as kishōtenketsu).
- The "story" you want to tell is really a *reveal about how something works* — which is also, not coincidentally, the shape of a well-designed puzzle or a well-taught game mechanic.
- You want twist/surprise to come from *reframing existing information* rather than from introducing a new obstacle or villain, which keeps the twist feeling earned rather than arbitrary.
