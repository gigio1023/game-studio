# Claim Verification: Trustworthy Claims For Adoption

[Back to index](../01-claim-verification.md)

## Trustworthy Claims For Adoption

The following claims match their primary sources and can be imported without further
verification, subject to the caveats noted above:

- **Claim 3 (Rami Ismail prototype/vertical slice):** Exact match to the LTPF article.
  Both definitions and the second-iteration velocity method are confirmed.
- **Claim 6 (Game Outcomes Project 0.57 / <0.2):** Both correlation figures appear in
  the primary Game Developer article. The directional finding is robust; methodological
  limits should accompany any citation.
- **Claim 7 (CSA 5/5/5):** Template structure, cadence, and authorship all confirmed.
- **Claim 8 (Ubisoft Ghostwriter pairwise):** Confirmed in Ubisoft's own announcement.
  Scope limitation (barks only) should be noted when adopted.

---


## Claims Requiring Local Adaptation

- **Claim 1 (Supercell three-gate / 7-of-10):** Reframe as "Supercell reports killing
  ~7 of 10 games at prototype stage, with an overall 90% kill rate; the three-stage
  distribution (prototype, soft launch, global) is an observation from public reporting,
  not a named gate framework." Drop the label "three-gate model."
- **Claim 2 (Riot six-component thesis / 90% rejection):** Replace the six-component
  label with the actual Riot terminology (Opportunity, Thesis, Audience) or acknowledge
  the synthesis explicitly. The 90% figure should be scoped to incubation-to-prototype,
  not the full lifecycle.
- **Claim 4 (Park 2023 retrieval formula):** Correct the formula: linear combination with
  equal weights, not multiplicative. Note that "top-5 insights" is a prompt default, not
  a hard architecture constraint.
- **Claim 5 (Park 2024 85% accuracy):** Replace with "83-86% across data source
  conditions (interviews, surveys, combined), compared to a 74% demographics-only
  baseline, on held-out General Social Survey items."

---


## Open Questions

1. Does Supercell publish a formal gate framework anywhere (internal blogs, GDC talks
   post-2018) that names and specifies criteria for each stage? The current evidence
   suggests not, but a GDC talk search was not exhaustive.
2. Are there Riot R&D blog posts or GDC talks (Cadwell or others) that enumerate more
   than three thesis components, potentially yielding something closer to six? The blog
   series is ongoing; later posts may have expanded the framework.
3. For Park et al. 2023, what is the exact mathematical form of the retrieval score
   combination — is it a simple arithmetic mean of three normalized scores, or a weighted
   sum with explicitly stated equal weights? The full paper PDF was not parseable; this
   should be confirmed against the UIST proceedings version.
4. Has Ghostwriter's pairwise pattern been updated or extended since the 2023
   announcement, particularly in Ubisoft's larger narrative AI toolchain?

---


## Citations

- Ismail, R. (2022, September 26). "Prototypes & Vertical Slice." *Levelling The Playing
  Field*. https://ltpf.ramiismail.com/prototypes-and-vertical-slice/
- Game Developer staff. (n.d.). "Quality is worth killing for: Supercell's ruthless
  approach to production." *Game Developer*.
  https://www.gamedeveloper.com/business/quality-is-worth-killing-for-supercell-s-ruthless-approach-to-production
- Paananen, I. (n.d.). Supercell founder lecture at BAFTA. Transcript via Scrivner, D.
  https://www.danielscrivner.com/supercell-founder-ilkka-paananen-game-design-lecture-at-bafta/
- McArdle, P. (n.d.). "R&D Foundations: Opportunity, Thesis, and Audience." *Riot Games*.
  https://www.riotgames.com/en/news/r-d-foundations-opportunity-thesis-and-audience
- Riot R&D. "Incubation: Exploration With a Plan."
  https://www.riotgames.com/en/r-and-d-office/incubation-exploration-with-a-plan
- Cadwell, T. "Prototype: Building a Game's Substance." *Riot Games R&D Office*.
  https://www.riotgames.com/en/r-and-d-office/prototype-building-a-games-game quality
- Park, J.S., O'Brien, J., Cai, C.J., Morris, M.R., Liang, P., & Bernstein, M.S. (2023).
  "Generative Agents: Interactive Simulacra of Human Behavior." *UIST '23*.
  https://arxiv.org/abs/2304.03442
- Park, J.S. et al. (2024). "Generative Agent Simulations of 1,000 People."
  https://arxiv.org/abs/2411.10109
- Tozour, P. (2015, January). "The Game Outcomes Project, Part 3: Game Development
  Factors." *Game Developer*.
  https://www.gamedeveloper.com/business/the-game-outcomes-project-part-3-game-development-factors
- Hamann, W. (2003, July 17). "Goodbye Postmortems, Hello Critical Stage Analysis."
  *Game Developer*.
  https://www.gamedeveloper.com/production/goodbye-postmortems-hello-critical-stage-analysis
- Swanson, B. / Ubisoft La Forge. (2023, March). "The Convergence of AI and Creativity:
  Introducing Ghostwriter." *Ubisoft News*.
  https://news.ubisoft.com/en-us/article/7Cm07zbBGy4Xml6WgYi25d/the-convergence-of-ai-and-creativity-introducing-ghostwriter
