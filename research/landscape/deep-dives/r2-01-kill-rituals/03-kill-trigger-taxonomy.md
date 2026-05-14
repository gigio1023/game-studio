# Studio Kill Rituals: Deep Dive: Kill Trigger Taxonomy

[Back to index](../r2-01-kill-rituals.md)

## Kill Trigger Taxonomy

| Trigger Name | Description | Source | Stage Typically Fires |
|---|---|---|---|
| Metric Gate Miss | Pre-set quantitative targets (retention, DAU, monetization) not met | Supercell | Soft-launch / beta |
| Colleague Flatness | Internal company playtest generates no enthusiasm | Supercell | Company-playable |
| Founder Apprehension | The founding cell itself doubts the concept's potential | Supercell | Prototype |
| Other-Game Feeling | Team members mentally inhabiting a better game they should make | Supercell (Dower) | Any stage |
| Genre Mismatch | Team lacks intrinsic motivation or expertise for the target genre | Supercell (Hay Day Pop) | Any stage |
| Deferred Identity | Core art/design decisions pushed forward indefinitely without resolution | Supercell (Clash Mini) | Late prototype / beta |
| Playtest Theory Failure | Theory of player experience fails to survive structured playtest | Riot Games | Prototype |
| Feasibility Collapse | Attempting the approach reveals it fundamentally will not work | Riot Games | Prototype |
| Pitch Gate Miss | Pitch fails debate/research/comparison review; does not advance to prototype | Riot Games | Incubation |
| Scope-to-Capacity Mismatch | Concept exceeds team size or build capacity for the intended output | Pope / solo devs | Pre-production |
| Mutual Resonance Absent | Two-person team cannot align on shared excitement for a prototype | Subset Games | Early prototype |
| Explainability Failure | Team cannot answer "what do you do in it?" after repeated attempts | TOEM / Something We Made | Mid-development |
| Design Thrashing | Major design changes repeatedly during active development | Game Outcomes Project | Any stage |
| Mid-Development Assumption Kill | Core design assumption (not whole concept) found false mid-build | Pope (Obra Dinn) | Mid-production |

---


## Aftermath Patterns

**Same-week (kill day):**
- Supercell: informal social gathering (sauna, beers) where the kill decision is finalized
  collaboratively; company-wide email sent by the team announcing the decision.
- Solo devs: no documented same-day event. The kill is often a quiet decision to stop
  opening a project folder.

**Same-week (kill week):**
- Supercell: Friday all-hands presentation by the killed-project team; champagne toast
  with the full company.
- TOEM: consulting work taken on by both co-developers to maintain financial stability
  while the project was on hold.

**First month:**
- Supercell: formal lesson extraction. The Smash Land, Hay Day Pop, and Clash Mini
  lessons were each condensed into named principles presented to ~800 employees.
  The company treats killed-game presentations as required professional development.
- Supercell: team members rotate to other cells. No penalty structure documented.

**Formalized learning:**
- Supercell encodes lessons into named heuristics. Examples from Hay Day Pop and
  Clash Mini: "Will we be proud?" (over "Will it work?"), "Constraints enable ambition,"
  "Intrinsic motivation matters." These circulate as internal operating principles.
- Riot does not publicly describe its post-kill learning extraction process.
- TOEM: no formal kill retrospective; the two developers pursued other income, then
  returned to reassess with fresh eyes approximately 6-9 months later.

---


## Relevance to Game Studio Framework

### Changes warranted in `docs/improvement/value-review/11-production-failure-protocols.md`

The current Concept Death Protocol (Ritual 1) is structurally correct but too abstract
for replication. Specific additions based on this research:

1. **Name the three kill gates explicitly** rather than listing generic triggers. The
   Supercell model maps cleanly: (a) founding-team gate (internal doubt), (b) lean-council
   gate (does the council want to keep playing it?), (c) pre-beta metric gate (do
   pre-set targets hold at soft-proof?). The framework currently has no equivalent of
   the metric-gate — it has proof verdicts but no pre-committed quantitative targets.

2. **Add the "other-game feeling" as a named qualitative trigger.** The current protocol's
   triggers are all proof-failure signals. The Dower trigger ("you've already killed your
   game when you feel the pull toward the better one") is a leading indicator that fires
   before proof failure. It belongs in the trigger list.

3. **Require pre-committed targets before entering any proof phase**, not just at
   soft-launch. Supercell's practice of setting numeric targets *before* beta starts,
   and treating post-hoc renegotiation as illegitimate, would strengthen the framework's
   current lean-gate logic.

4. **The kill ceremony is missing entirely.** The protocol describes steps 1-5 for
   recording a kill but names no ceremony or social acknowledgment. A one-sentence
   ceremony requirement — the team names the concept dead together, in a shared session
   rather than a solo document edit — changes the psychological meaning of the action.

5. **"Explainability failure" is a strong early kill signal** (from TOEM) that the
   framework does not name. If the team cannot answer "what do you do in it?" after
   two attempts, that is structurally equivalent to the current trigger "a required
   reference moment cannot be reproduced after two attempts" but fires earlier and
   requires no build artifact.

### Changes warranted when `core/templates/production/concept-death-record.md` is created

The template should include:

- **Pre-committed targets field:** the numeric targets that were set *before* the
  last proof phase, not reconstructed after the kill.
- **Kill trigger field (named):** must reference one of the taxonomy triggers above,
  not a free-text reason. This enforces cross-concept comparability.
- **"Other-game description" field:** a one-sentence description of what the team
  would rather be making. This areas implicit redirection before it becomes
  a performance or morale problem.
- **Team ceremony record:** who was present, what was said, and what the shared
  acknowledgment was. Even a two-person team should record this.
- **Learning extraction fields:** three named heuristics or constraints the kill
  taught, in the format Supercell uses ("Intrinsic motivation matters"; "Deferred
  identity kills projects"). These become reusable vocabulary across the studio.
- **Artifact disposition:** current protocol says move to `direction/killed/` archive.
  Add a field for which specific artifacts (mechanics, art, audio) are candidates for
  Frankenstein carry-forward into future concepts, following Derek Yu's practice.

---


## Open Questions

1. **Riot's "Game Over, Good Game!" article content** — the title suggests operational
   detail on pausing, pivoting, and cancelling, but it was access-restricted during
   research. It may contain the most specific Riot kill criteria available.

2. **Supercell's exact metric targets at soft-launch** — retention and DAU benchmarks
   are referenced but never quantified in public sources. Internal target values (e.g.,
   D1/D7/D30 retention thresholds) would make the metric-gate model directly usable.

3. **Documented solo developer kill ceremonies** — none found. Whether the absence
   reflects that they do not exist, or that they exist but are never written about,
   is unresolved. A survey of itch.io devlogs may area informal examples.

4. **Post-kill team mental health patterns** — Supercell describes teams "regrounding
   with fire in their hearts" but this is marketing language. The Game Outcomes Project
   excluded cancelled projects from its dataset, so there is no quantitative baseline
   for team health after kills.

5. **Whether Riot's 90% kill rate applies at prototype or at incubation** — the two
   articles slightly contradict each other on where the 90% applies. The Prototype
   article implies "most ideas won't work out" at prototype; the Incubation article
   pins the 10% number to the incubation-to-prototype gate.

---


## Citations

1. https://www.gamedeveloper.com/production/postmortem-toem
2. https://www.pocketgamer.biz/5-lessons-from-ilkka-paananens-bafta-games-lecture/
3. https://www.danielscrivner.com/supercell-founder-ilkka-paananen-game-design-lecture-at-bafta/
4. https://www.gamedeveloper.com/business/quality-is-worth-killing-for-supercell-s-ruthless-approach-to-production
5. https://www.gamedeveloper.com/design/maybe-it-s-time-to-kill-your-game-and-move-on-supercell-on-cutting-its-losses
6. https://supercell.com/en/news/learning-from-failures/
7. https://www.corporate-rebels.com/blog/failure-sessions-supercell
8. https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-game quality
9. https://www.riotgames.com/en/r-and-d-office/incubation-exploration-with-a-plan
10. https://intelligenceengine.blogspot.com/2015/01/the-game-outcomes-project-part-3-game.html
11. https://www.gamedeveloper.com/business/the-game-outcomes-project-part-1-the-best-and-the-rest
12. https://www.gamedeveloper.com/design/for-lucas-pope-i-return-of-the-obra-dinn-i-was-a-bunch-of-appealing-design-problems
13. https://www.gamedeveloper.com/design/road-to-the-igf-lucas-pope-s-i-papers-please-i-
14. https://www.vice.com/en/article/why-it-took-subset-games-so-long-to-make-a-game-after-ftl/
15. https://nielsthooft.com/derek-yu
