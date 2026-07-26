# Teaching-Through-Play: The Four-Step Level and Playtest-Driven Flow

How level design teaches mechanics without tutorial text — two complementary bodies of practice: Nintendo's four-step level structure (a named, repeatable formula) and Valve's playtest-driven iterative process (a named production method for arriving at good teaching sequences empirically rather than by formula).

---

## The four-step level (Nintendo / Koichi Hayashida)

### Source

Koichi Hayashida, director of *Super Mario 3D Land* (2011) and *Super Mario 3D World* (2013), described this methodology directly in press interviews around 3D Land's release. Coverage: "The secret to Mario level design," *Game Developer*, https://www.gamedeveloper.com/design/the-secret-to-i-mario-i-level-design ; "Video: Nintendo's Four Step Stage Design Is Why You Love Super Mario Games So Much," *Nintendo Life*, https://www.nintendolife.com/news/2015/03/video_nintendos_four_step_stage_design_is_why_you_love_super_mario_games_so_much ; "The Structure of Fun: Learning from Super Mario 3D Land's Director," *Game Developer*, https://www.gamedeveloper.com/design/the-structure-of-fun-learning-from-i-super-mario-3d-land-i-s-director.

This structure was later widely popularized and formalized for a broader design audience by **Mark Brown's Game Maker's Toolkit** (YouTube series, from 2014) and by **Anna Anthropy**'s level-design writing (her essay on *Super Mario Bros.* 1-1 is one of the earliest close readings of Nintendo's introductory-stage design and predates the GMTK formalization; see her *A Game Design Vocabulary*, co-written with Naomi Clark). Hayashida himself named the connection: he has explicitly described the four-step method as modeled on **kishōtenketsu**, the four-act non-conflict narrative structure covered in `narrative-techniques-and-theory.md` — this is a direct, named cross-pollination from narrative structure into level structure, not a design-blog analogy invented after the fact.

### The four steps

1. **Introduction** — the player encounters a new mechanic (an enemy type, a terrain feature, a power-up behavior) in the *safest possible context*: no other threats present, obvious affordances, low or no failure cost. The level's only job here is to get the player to perform the mechanic once, ideally by accident or by the environment's shape making the "correct" action the only legible action.
2. **Development** — the mechanic is presented again, now in a slightly more demanding configuration — combined with one other known element, or requiring more precise execution. This step confirms the player generalized the lesson from step 1 rather than having gotten lucky.
3. **Twist** — the mechanic is recontextualized: used in an unexpected way, combined with a hazard that inverts its usual value, or applied to solve a problem the player didn't expect it to solve. Hayashida's own description (paraphrased from interview coverage): "something crazy happens that makes you think about it in a way you weren't expecting." This is the step that produces the "aha" and the one most formulaic tutorials skip entirely.
4. **Conclusion** — a final test that requires full, confident mastery of everything taught in steps 1–3, without further hand-holding — the payoff beat that proves (to the player, experientially, not via a checkmark) that they've learned the mechanic.

### Why this maps onto kishōtenketsu

Ki (introduce) → Shō (develop) → Ten (twist) → Ketsu (conclude) is a **direct structural match**, and Hayashida's choice of source material is not incidental: like kishōtenketsu, the four-step level doesn't need an "antagonist" logic of escalating opposition — the twist step isn't a harder version of the same challenge, it's a *reframing* of what the mechanic means, and the conclusion resolves that reframing rather than simply raising difficulty further. This is why four-step levels feel satisfying rather than merely harder as they progress: the shape of the lesson, not just its intensity, changes.

### Applying it beyond Mario

The pattern generalizes to any game that wants to teach a mechanic diegetically rather than via an explicit tutorial pop-up: introduce in a context where the correct action is nearly unavoidable, develop to confirm generalization, twist to force genuine understanding rather than pattern-matching, conclude with an unassisted test. It composes — a whole game can be a four-step arc at the macro scale (first world = introduction, mid-game = development, an unusual late-game world = twist, final challenges = conclusion) while individual levels repeat the same shape at micro scale for each new mechanic introduced within them.

---

## Teach–Test–Twist (Valve's beat-level formalization)

### Source

*The Level Design Book*, "Pacing" chapter, https://book.leveldesignbook.com/process/preproduction/pacing — a community-maintained but widely-cited practitioner reference; this chapter's account draws on Valve's own postmortem material for *Portal* and the *Half-Life 2* episodes.

Valve's internal name for essentially the same three-beat progression as steps 1–3 above (minus a distinct fourth "conclusion" step — test and twist are treated as compressed into a tighter two-part cycle): **Teach → Test → Twist.**
1. **Teach**: introduce an activity/mechanic.
2. **Test**: have the player recognize and repeat it, typically still with some prompting or an obvious affordance.
3. **Twist**: present a variation that requires *recall without prompting* — the player must recognize this is the same underlying mechanic in new clothing.

**Canonical example:** *Portal*'s test chambers escalate their "fling" mechanic (using momentum through linked portals) from a simple single-fling puzzle to compound, multi-fling sequences — each chamber a fresh Teach-Test-Twist cycle building on the last chamber's mastery, so the whole game is a chain of nested four-step arcs.

---

## Valve's playtest-driven design process ("The Cabal")

### Source

Ken Birdwell, "The Cabal: Valve's Design Process for Creating Half-Life," *Game Developer* (originally *Gamasutra*), https://www.gamedeveloper.com/design/the-cabal-valve-s-design-process-for-creating-i-half-life-i- ; follow-up coverage of the *Half-Life 2* "Overwatch Cabal" process, https://www.gamedeveloper.com/design/classic-postmortem-the-making-of-i-half-life-2-i- and https://www.gamedevs.org/uploads/valve-design-process-for-creating-half-life2.ppt.

This is a **production methodology**, not a structural pattern — it's how Valve arrived at the well-taught, well-paced levels that the "flow" reputation of *Half-Life* and its sequels rests on. It's included here because good four-step/teach-test-twist sequencing in practice is discovered through this process, not designed correctly on the first pass from a formula.

### The method

- **The Cabal**: a small cross-disciplinary group (level designers, writers, programmers) assembled specifically to produce one integrated design document covering every level, specifying exactly when and how each monster, weapon, and NPC would be introduced, what skills the player was assumed to have by that point, and how the level itself would teach those skills without text.
- **Small, independent iteration**: individual levels were developed by small teams working with a good degree of independence, rather than as slices of one monolithic level-design pass — this let teams iterate fast on their own section without waiting on the whole game's pipeline.
- **Frequent playtesting as the actual arbiter of quality**, not the design document: the Cabal process explicitly prioritized playtest feedback over the original plan, using it to *drive* further production rather than merely validate it after the fact. For *Half-Life 2*, an "Overwatch Cabal" — one representative from each design team plus art/sound/animation — reviewed global product-level quality at each milestone (Alpha, etc.) and fed high/low findings back to every team.
- **Playtests after every art pass**, specifically to verify that a level whose gameplay had already been validated *still* played correctly once art and polish were added — a check against the common failure mode where visual/audio polish silently breaks a previously-working teaching sequence (obscuring an affordance, changing a sightline, etc.).

### Why this belongs next to the four-step formula

The four-step/teach-test-twist shape is the *target*; Valve's Cabal process is *how you reliably hit that target in production*. A four-step level designed once and never playtested tends to fail in one of two predictable ways: the "introduction" step isn't actually safe (players die before learning anything), or the "twist" step is either too obvious (no aha) or too obscure (players don't recognize it as the same mechanic). Both failure modes are only reliably caught by watching real players attempt the level cold — which is the entire premise of the Cabal's playtest-driven iteration.
