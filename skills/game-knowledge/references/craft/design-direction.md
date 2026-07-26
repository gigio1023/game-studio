# Design Direction

- MDA's three layers, verbatim from the 2004 paper: **Mechanics** = "the particular components of the game, at the level of data representation and algorithms"; **Dynamics** = "the run-time behavior of the mechanics acting on player inputs and each other's outputs over time"; **Aesthetics** = "the desirable emotional responses evoked in the player".
- **Aesthetics means emotion, not art style.** The paper deliberately repurposes the word. Reading it as "visual direction" is the single most common misuse of the framework.
- The designer builds **M → D → A**; the player meets the game **A → D → M**. The paper reverses its own chapter order for that reason: "we begin our investigation with a discussion of Aesthetics… finishing with the underlying Mechanics."
- So **design from the target aesthetic backward**. The paper's own words for the payoff: "thinking about the player encourages experience-driven (as opposed to feature-driven) design."
- The **eight aesthetics** — Sensation, Fantasy, Narrative, Challenge, Fellowship, Discovery, Expression, Submission — are a starting vocabulary, explicitly "not limited to" that list. The paper itself uses "Competition" for Quake, a ninth label absent from its own eight.
- Real games pursue **several aesthetics in varying degrees**; the paper names four each for Charades, Quake, The Sims, and Final Fantasy, and states flatly that there is "no Grand Unified Theory of games or formula" for fun.
- Changing the target aesthetic **cascades downward into different mechanics** — including different AI requirements. That cascade is the working method, not a diagram.
- Dynamics can be modeled to predict failure before tuning. Monopoly's runaway-leader problem is a **feedback loop**: "as the leader… become increasingly wealthy, they can penalize players with increasing effectiveness."
- Known limits: **Dynamics is the weakest-defined layer**; the taxonomy is loosely grounded; MDA is gameplay-first and thin on narrative, UX, and technology (Winn, secondary); and its arrows assume a digital game where rules stay invisible (Duarte 2015).
- Successor **DDE** (Walk, Görlich, Barrett 2017) splits Design into Blueprint / Mechanics / Interface and separates intended from actual experience — **reconstructed from secondary sources; the chapter itself is paywalled.**

## Basics

### The chain, and which direction you walk it

MDA frames a game as an artifact whose "content is its *behavior* — not the media
that streams out of it towards the player". The three layers are causally
linked, and each is a lens on the same object:

| Layer | What it is | Who authors it | When the player meets it |
| --- | --- | --- | --- |
| Mechanics | Rules, data, algorithms | Authored directly | Last, inferred from play |
| Dynamics | Run-time behavior over time | Emerges, not authored | Second, observed as play unfolds |
| Aesthetics | Emotional response | Targeted by the designer, lived by the player | First |

The paper's examples make the emergence concrete: card mechanics (shuffling,
trick-taking, betting) produce **bluffing**; shooter mechanics (weapons, ammo,
spawn points) produce **camping and sniping**; golf mechanics produce **broken
and drowned clubs**. None of those dynamics were authored. They fell out.

### Writing pillars from the aesthetic side

A pillar written as a feature ("crafting system", "roguelike runs") names a
mechanic and leaves the experience unstated, so any implementation satisfies it.
A pillar written as a target aesthetic constrains the mechanics beneath it.

The paper's own competitive example works as a template: Charades and Quake
share a competitive aesthetic model, which "requires that players have
adversaries… and that all parties want to win", from which a concrete design
implication follows directly — "supporting adversarial play and clear feedback
about who is winning are essential… If the player doesn't see a clear winning
condition, or feels like they can't possibly win, the game is suddenly a lot
less interesting."

That is the shape to imitate: **target emotion → what it requires → what the
mechanics must therefore do.**

### The concept slate uses the taxonomy as a compass

When comparing candidate concepts, name each one's two or three target
aesthetics rather than its feature list. Concepts that name the same aesthetic
are genuine alternatives worth comparing; concepts that name different
aesthetics are different games and should not be scored against each other.

Do not treat the eight as a checklist to fill. The list disclaims its own
completeness, and the paper breaks it in its own worked example.

## Advanced

### Retargeting: one premise, three games

The paper's extended case study takes a single hide-and-seek premise and
re-aims it at three audiences, showing the cascade:

- **Ages 3–7, babysitting demo.** Target: Discovery, not Challenge. Dynamics:
  the AI expresses "surprise, fear, and anticipation" rather than competing.
  Mechanics: hard-coded hiding spots, simple verbs.
- **Ages 7–12, story-driven.** Target adds Challenge and Narrative. Dynamics:
  several characters tracked at once, time pressure, an emotional-state system.
  Mechanics: AI that picks its own hiding places and holds internal state.
- **Ages 14–35, stealth sim.** Target shifts to Fantasy plus Challenge nearing
  Submission. Dynamics: equipment economies, stealth and evasion. Mechanics:
  skill trees, multiple enemy types, sound propagation, navigation.

The takeaway the paper draws: "there are no 'AI mechanics' as such — intelligence
or coherence comes from the interaction of AI logic with gameplay logic." The
same holds for most systems a solo developer is tempted to spec in isolation.

### Dynamic models catch balance failures before tuning

Monopoly's diagnosis is the canonical worked example: a positive feedback loop
concentrates wealth, "poorer players become increasingly poor… As the gap
widens, only a few (and sometimes only one) of the players is really invested.
Dramatic tension and agency are lost."

The fixes the paper proposes are all at the mechanics layer — subsidies for
trailing players, taxes on leaders, or time pressure that shortens the
runaway window. If a game snowballs, look for the loop rather than adjusting
numbers at the surface.

### Where the framework runs out

- **Dynamics carries too much.** It covers run-time behavior, emergent patterns,
  and the gap between intended and actual experience without distinguishing
  them. DDE was built specifically to split that last one out.
- **The taxonomy is loosely grounded.** Eight categories with no stated
  principle for membership, and the source contradicts itself by using a ninth.
- **Gameplay-first scope.** Its worked examples are Charades, Quake, Monopoly,
  and a stealth prototype — all rules-forward. It has no native vocabulary for
  narrative authorship or interface design as first-class objects. *(Attributed
  to Brian Winn via secondary summary, not verified against his text.)*
- **The arrows are medium-specific.** Duarte argues the A→D→M player path
  assumes software enforcing invisible rules: "It is impossible for a Chess
  novice to learn its rules simply by moving the men around the board." A
  tabletop player reads mechanics first. His fix is non-linear interaction
  between the planes rather than discarding the model.

## Cases

- **Quake / Charades** — the paper's paired example of one shared aesthetic
  (competition) reached through completely different mechanics.
- **The Sims** — Discovery, Fantasy, Expression, Narrative; a demonstration that
  a game can target four aesthetics with none of them being Challenge.
- **Monopoly** — the feedback-loop diagnosis, and the reason "it drags at the
  end" is a mechanics problem rather than a length problem.

## Checklist

- [ ] Does each pillar name a target emotion rather than a feature?
- [ ] For each pillar: what does that emotion require, and what must the
      mechanics therefore do?
- [ ] Have you walked the chain backward — from the intended experience to the
      dynamics that would produce it to the mechanics you actually have?
- [ ] Are competing concepts on the slate aimed at the same aesthetic, so the
      comparison is meaningful?
- [ ] Is "aesthetics" being used for emotion, not art style, everywhere in the
      brief?
- [ ] For any balance complaint, has a feedback loop been named before numbers
      are tuned?
- [ ] Are unauthored dynamics — the bluffing, the camping, the snowball —
      written down as things the design must answer for?

The per-claim review procedure for this chain lives in the game-review skill's
MDA lens; this page is the source material behind it.

## Sources

- Hunicke, R., LeBlanc, M., Zubek, R. (2004). "MDA: A Formal Approach to Game
  Design and Game Research." AAAI Workshop Papers WS-04-04. All quoted text
  above is from this paper.
  https://cdn.aaai.org/Workshops/2004/WS-04-04/WS04-04-001.pdf
  The framework predates the paper: it was taught at the GDC Game Design and
  Tuning Workshop, San Jose, 2001–2004.
- Duarte, L.C.S. (2015-02-03). "Revisiting the MDA Framework." Game Developer —
  the digital-medium assumption and the non-linear proposal.
  https://www.gamedeveloper.com/design/revisiting-the-mda-framework
- Walk, W., Görlich, D., Barrett, M. (2017). "Design, Dynamics, Experience
  (DDE)." In *Game Dynamics*, Springer. DOI 10.1007/978-3-319-53088-8_3 —
  **paywalled; the description here is reconstructed from Semantic Scholar,
  ResearchGate, and a secondary summary, so treat the Blueprint / Mechanics /
  Interface split as good-confidence, not primary-verified.**
- Jesse Schell, *The Art of Game Design: A Book of Lenses* — lenses as focused
  review questions rather than opinion prompts.
- Tracy Fullerton, *Game Design Workshop* — playcentric iteration: state the
  player-experience goal, prototype, playtest, revise.
- Raph Koster, *A Theory of Fun* — fun as pattern learning, which is why a
  concept that cannot be learned in play cannot be judged in a document.

Unverified or negative results carried forward from the corpus: "Abnegation" as
an alias for Submission does not appear in the 2004 text; no citable "MDA2" or
games-specific "FDD" framework was found to exist; Brian Winn's DPE framework is
named from general knowledge and was not source-verified.

Corpus source for this page: `references/corpus/design-theory/mda-and-successors.md`
(accessed 2026-07-26).
