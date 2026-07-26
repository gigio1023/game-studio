# Genre Wisdom: Walking Sim / Narrative, Horror, Deckbuilder Economy, and Multiplayer Scope for Solo Devs

Four smaller topics grouped together: two content genres (walking sim, horror), one systemic sub-topic that didn't get full treatment in the roguelike file (deckbuilder card-acquisition economy), and one cross-cutting production-scope warning (why multiplayer is usually the wrong bet for a solo developer).

---

## Walking sim / narrative exploration

### Core promise

A first-person (occasionally third-person) narrative-exploration game that deliberately strips out most traditional mechanical challenge — no fail states, minimal or no combat, movement and looking as the primary verbs — betting that **environmental storytelling and atmosphere alone can carry the full weight of engagement**, without a challenge layer propping it up. This genre is, not coincidentally, the clearest real-world proving ground for the environmental-storytelling techniques covered in `narrative-techniques-and-theory.md` and frequently for the non-conflict kishōtenketsu structure covered in the same file — walking sims are disproportionately likely to be contemplative or slice-of-life rather than conflict-driven.

### Source

"'Dear Esther' at 10, and the rise and fall of the walking simulator," *NME*, https://www.nme.com/features/gaming-features/dear-esther-at-10-and-the-rise-and-fall-of-the-walking-simulator-3161240 ; genre-definition overview, https://dinogame.gg/blog/what-is-a-walking-simulator/.

### Lineage and internal genre debate

- ***Dear Esther*** (The Chinese Room; 2008 Source-engine mod, 2012 standalone commercial release) is the genre's seed game. Its narrative — explicitly inspired by William S. Burroughs' cut-up, fragmentary prose style — deliberately avoids a coherent, resolvable plot in favor of thematic and poetic ambiguity; there is no discoverable "solution" to what actually happened.
- ***Gone Home*** (The Fullbright Company, 2013) and later ***Tacoma*** and ***Firewatch*** represent a reintroduction of **tangible objects, direct player interaction, and a comparatively plot-driven, resolvable mystery** — a deliberate move away from Dear Esther's ambiguity. *Gone Home* specifically is cited as tying player action more closely to the story being uncovered than *Dear Esther* does (the player physically picks up, reads, and handles diegetic objects that construct the plot), which is cited as the reason it "holds up better" critically.

This is a real internal genre fork worth carrying forward distinctly: **ambiguous/poetic** (Dear Esther lineage) vs. **discoverable/resolvable mystery** (Gone Home lineage) are both valid executions of "walking sim," and they make different promises to the player about whether exploration will eventually cohere into a legible answer.

### Critical reception, as a design-relevant fact

The term "walking simulator" originated as a **dismissive** label — coined to imply these games lack "real" gameplay, merely simulating the act of walking. It has since been reclaimed by developers and critics. This is worth preserving as more than trivia: the genre's central design bet (atmosphere and narrative alone, no challenge layer) is precisely the bet that provoked the dismissive coinage in the first place — before *Dear Esther* and *Gone Home*, the prevailing assumption was that a game *needed* challenge to justify calling itself a game. Walking sims are the genre that tested, and substantially won, the argument that interactive narrative alone can be sufficient.

### Failure mode

A walking sim with weak environmental storytelling has nothing left to fall back on — because the genre has deliberately removed the challenge layer that other genres can lean on when narrative execution is uneven, execution quality on environmental storytelling and pacing (see `narrative-techniques-and-theory.md` and `pacing-and-difficulty-curves.md`) is not a "nice to have" polish layer here; it is close to the entire game.

---

## Horror: the safety-tension cycle

### Core promise

Horror design is fundamentally about **managing dread as a metered resource across a session**, not about maximizing scares — a game that is uniformly terrifying throughout stops being frightening, because fear requires a contrast state (safety) to be perceptible as fear at all.

### Source

Coverage of the *Resident Evil* franchise's design approach, https://www.cgmagonline.com/articles/how-resident-evil-requiem-tension ; "Constrained and Afraid: The Use of Limitations in Resident Evil for Building Horror," https://medium.com/@liamborhaven/constrained-and-afraid-the-use-of-limitations-in-resident-evil-for-building-horror-d50c5170cc43 ; "Multi-Tiered Horror Design With Resident Evil Remastered," https://www.gamedeveloper.com/design/multi-tiered-horror-design-with-resident-evil-remastered.

### The mechanism

- **Dread as a doled-out resource.** The cited framing treats tension itself as something the designer meters deliberately across a session, rather than something generated purely by monster encounters — "the way it is doled out matters just as much as the monster at the end of the hall." This is directly the same intensity-graph logic covered in `pacing-and-difficulty-curves.md` (alternate highs and lows, don't sustain either extreme), specialized to a genre where the "high" state specifically needs to be *dread*, not generic excitement.
- **Safety must be temporary, not permanent.** Once a player has fully explored a location and memorized enemy patterns, that space naturally becomes "safe" in their mental model — the design technique is to refuse to let that safety become permanent, by feeding new material (a new enemy, a changed patrol route, a returning threat) into the memorized-safe space in measured doses, so familiarity is never allowed to fully resolve into total security.
- **Resource scarcity as a tension mechanism, distinct from difficulty tuning.** *Resident Evil*'s tight inventory space and scarce healing items don't primarily make individual encounters harder — they make **every encounter a resource-allocation decision with downstream consequences**: killing an enemy costs ammo/herbs that might be needed later, so each engagement carries risk beyond its immediate mechanical difficulty. A commonly cited pattern is **tiered ammo scarcity** — plentiful basic-weapon ammo, moderate "bread and butter" weapon ammo, and rare boss-killer ammo — which forces players to actively choose which threats are worth spending their best resources on rather than uniformly engaging everything.
- **Saving as a resource, historically.** Early *Resident Evil* titles famously made *save points themselves* a limited resource (typewriter ribbons) — extending the same scarcity-as-tension logic to the meta-level act of securing progress, not just to in-fiction combat resources.

### Design takeaway

The empowerment/fear balance is explicitly named in the sources as a tuning target, not a fixed point: later *Resident Evil* titles (4, 7, *Village*) are cited as providing players "just enough resources to feel empowered but never fully safe" — meaning the genre's core tension is a **dial**, not a binary (either resourced-and-safe or resourceless-and-helpless), and different games in the genre choose different settings on that dial deliberately as a genre-identity decision (survival horror vs. action horror sit at different points on the same underlying dial).

---

## Deckbuilder: the economy of card acquisition

This topic is introduced from the roguelike-deckbuilder angle in `genre-roguelike.md` (Slay the Spire's specific model); this section generalizes the underlying design question, since card-acquisition economy is a genre-defining choice independent of whether the game is also a roguelike.

### Source

*Dominion* (Donald X. Vaccarino, 2008, tabletop) is credited as the genre's originating design — the game that invented "deckbuilder" as a mechanical category, where the deck itself, not a board position or a hand of pre-set cards, is the object being built and optimized across a session. Coverage: https://medium.com/@novak.max/building-a-deck-for-a-deck-builder-1ec26c787ee4 ; https://www.gamedeveloper.com/design/designing-for-deck-building-in-video-games.

### The core design axis: gated vs. free acquisition

- **Dominion's model:** card acquisition is gated by an in-game resource economy — players spend in-game currency (itself represented as cards in the deck) to buy new cards from a shared, limited supply. Acquisition is a resource-management decision embedded in the same system being built.
- **Slay the Spire's model (see `genre-roguelike.md` for full treatment):** acquisition is **free but choice-limited** — a set of options (commonly three) offered after specific triggers (combat victories), with no in-game currency cost, so the constraining resource is *choice itself* rather than *currency*.

### Why this axis matters as a genre-defining decision

The two models produce different pacing and different sources of tension: a currency-gated economy (Dominion) makes *when* you can afford a powerful card part of the strategic puzzle, layering an economic optimization problem on top of deck construction; a free-but-limited-choice economy (Slay the Spire) removes the economic layer entirely and makes *which of these three specific options* the only decision point, which is faster to resolve per-choice and better suited to a run-based structure with many short decision points rather than a session-long economic build-up.

### Convergent design norms across the genre

Despite differing acquisition models, several parameters have converged across major deckbuilders regardless of lineage: roughly **10 cards** is cited as a common baseline starting-deck size, and roughly **5 cards** as a common hand size, across titles as different in acquisition model as *Dominion*, *Slay the Spire*, and *Cobalt Core* — suggesting these particular numbers reflect a converged-on sweet spot for decision-space-per-turn rather than being tied to any specific acquisition economy.

---

## Multiplayer-lite: why most solo developers shouldn't

### The core warning

This is included as a **scope-discipline** topic rather than a design-craft topic — the lesson here is almost entirely about production risk, not about design theory.

### Source

Coverage on solo-developer scope management via itch.io devlog community discussion (aggregate, not single-author) and technical netcode-cost coverage: "How Much Does It Cost to Build and Run an Online Multiplayer Game?," https://www.kinematicsoup.com/blog/self-hosted-vs-managed-multiplayer-cost ; "Choosing the right network model for your multiplayer game," https://mas-bandwidth.com/choosing-the-right-network-model-for-your-multiplayer-game/.

### Why multiplayer specifically breaks solo-dev scope

- **Netcode is a second, largely orthogonal discipline.** Even a "lightweight" multiplayer implementation requires choosing and correctly implementing a network model (peer-to-peer lockstep, relay-based, authoritative-server, rollback) — each with materially different bandwidth, latency-hiding, and cheat-resistance tradeoffs, and each requiring domain knowledge substantially disjoint from single-player game or content design. Rollback netcode specifically (the model competitive-feeling real-time games increasingly need to meet player expectations) is cited as adding real CPU cost (clients must re-simulate multiple frames) on top of its implementation complexity — it is not a minor bolt-on.
- **Infrastructure has an ongoing operating cost with no single-player analog.** Fully self-hosted authoritative-server setups carry monthly infrastructure costs that persist regardless of whether the game is actively earning revenue; even the cheapest relay-only models still carry recurring cost, unlike a single-player build which, once shipped, has no comparable ongoing operational burden.
- **Testing multiplayer requires multiple simultaneous testers/instances**, structurally increasing QA cost and complexity relative to single-player, where one person can playtest thoroughly alone.
- **It compounds with, rather than replaces, existing scope risk.** The broader solo-dev scope-management lesson (documented recurrently in solo-dev postmortems) is that **scope creep is cited as an "insidious killer"** of solo projects generally — ambitious features (the cited examples include crafting and building systems) are routinely cut during prototyping specifically because a single person cannot sustain the workload. Multiplayer is a *particularly* dangerous instance of this general pattern because, unlike a single-player feature that can be cut cleanly if it's not working, multiplayer support is frequently an architectural decision made early (client-server structure, state synchronization patterns) that is expensive or impossible to remove later if abandoned partway through — it isn't a feature that can be safely descoped after the fact the way a crafting system can.

### Design takeaway

The recommendation implicit across sources is not "multiplayer is bad" but "multiplayer is a second full discipline with its own ongoing costs, layered onto a production model (solo development) that is already scope-constrained by definition" — a solo developer choosing multiplayer should treat that choice as comparable in weight to choosing the game's entire genre or core mechanic, not as an additive feature decided late.
