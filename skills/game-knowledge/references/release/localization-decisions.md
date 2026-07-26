# Localization Decisions

- One sourced priority order exists: **Simplified Chinese → Japanese → Korean → FIGS** (French, Italian, German, Spanish), per Chris Zukowski, GDC 2024.
- That ordering rests on a **summary-based recap of one talk**, not a primary transcript or a dataset. There is no per-language ROI data in this corpus.
- Zukowski's stated rationale — that Simplified Chinese has overtaken English as the most-spoken language on Steam and that translation cost there is "worth every penny" — is **his claim, unverified** against platform data here.
- Language and price are **separate levers**. Steam sets prices in **37 currencies across 4 region groups**; shipping a language does not adjust price, and adjusting regional price does not require a translation.
- Steam's regional price recommendations "haven't been updated since 2022" — emerging-market prices are the cheaper, better-documented lever than a speculative translation.
- **New & Trending** uses an undisclosed earnings threshold that "varies by country/language" (community reverse-engineering, not Valve-published).
- Steam added **language-based review filtering** in **August 2025**, so reviews in a newly supported language surface to that audience.
- Store-page localization is a smaller, cheaper commitment than full in-game localization; the corpus does not price either.

## Basics

### What is actually known

This is the thinnest area in the corpus, and the honest summary is short: one
practitioner priority order, one platform-mechanics fact set, and no ROI data.
Treat any confident per-language revenue projection you encounter elsewhere as
unsourced until checked.

**The one sourced priority order** (Source: Chris Zukowski, GDC 2024, "The
Steam Secrets Nobody Tells You... Until Now" — summary-based on third-party
recaps, **not a primary transcript**):

1. **Simplified Chinese** — first, and by a distance. His stated reason: it
   has overtaken English as the most-spoken language on Steam, and translation
   cost there is "worth every penny."
2. **Japanese**
3. **Korean**
4. **FIGS** — French, Italian, German, Spanish, treated as a bundle.

**Confidence.** The ordering is a named practitioner's stated
recommendation from a specific dated talk, which makes it usable. The
*justification* — the claim about Simplified Chinese overtaking English on
Steam — was **not independently verified** against platform data in this
corpus. Use the order; don't repeat the market-share claim as fact.

### Language and price are different levers

A common conflation worth separating before spending money.

**Price** is set in **37 currencies across 4 region groups**, with three
optional conversion methods (exchange rate; purchasing power; multi-variable
combining local purchasing power, comparable entertainment-goods cost, and
exchange rate). Pricing is entirely the developer's choice — Valve's tools are
suggestions (Source: Steamworks "Pricing," fetched 2026-07-26).

**Language** is a content decision with its own cost and its own quality risk.

You can reach a market on price without translating, and you can translate
without adjusting price. They are separately configurable, and the price lever
is cheaper and better documented. Steam's own regional recommendations
"haven't been updated since 2022," and shared currency buckets combine markets
with very different purchasing power — a cited ~70% purchasing-power gap
between Argentina and Bolivia sits inside one USD_LATAM bucket (Hushcrasher,
2025-11-14). Fixing that is a config change; a translation is a project. Full
detail in [pricing.md](pricing.md).

### Platform mechanics that touch language

- **New & Trending** is gated by an undisclosed earnings threshold that
  "varies by country/language" (community reverse-engineering via How To
  Market A Game, 2023-09-04; **not Valve-published**). This is the one
  documented hint that language support interacts with algorithmic surfaces
  rather than only with player comprehension.
- **Review language filtering** was added in **August 2025** — Steam filters
  displayed reviews for regional relevance (Wikipedia, "Steam (service)"
  changelog, fetched 2026-07-26). Practical consequence: reviews written in a
  newly supported language surface to that audience, so a translation's
  reception compounds separately per language rather than pooling into one
  visible score.

## Advanced

### What this corpus does not contain

State these gaps out loud rather than filling them with plausible-sounding
numbers:

- **No per-language ROI, revenue-lift, or wishlist-lift data.** Nothing in the
  corpus quantifies what adding Simplified Chinese, Japanese, or FIGS returns.
- **No translation cost benchmarks** — no per-word rates, no vendor
  comparisons, no solo-dev cost cases.
- **No store-page-only versus full-game localization comparison**, despite
  that being the first real decision most solo developers face.
- **No LQA (localization QA) practice**, no text-expansion or font-coverage
  guidance, no advice on handling languages that break a UI built for English.
- **No machine-translation quality threshold** or documented case of MT
  backfiring.

If a localization decision needs any of the above, that is a research task,
not a lookup. Say so rather than inferring.

### The decision that is actually defensible

Given what is sourced, the defensible sequencing is:

1. **Regional pricing first.** It is a configuration change, the mechanics are
   primary-sourced, and Steam's defaults are stale enough that reviewing them
   is likely to be worth more than a speculative translation.
2. **Store page before the game.** A localized store page is bounded in scope
   (a page of text, not a codebase of strings) and directly serves the
   discovery surfaces. The corpus does not price this, but the scope
   difference is structural, not an estimate.
3. **Simplified Chinese if translating at all**, per the one sourced
   recommendation.
4. **Defer the rest until you have evidence** — your own regional sales and
   wishlist split after launch is better data than any general benchmark, and
   it is data you will have and nobody else does.

### Localization is not accessibility, but they share a surface

Related material lives in the feel/UX lane rather than here, and the two get
conflated in planning. Accessibility guidance in the corpus covers subtitle
pacing and reading speed appropriate to the target age group, simple and clear
language, readable default font sizes and clear text formatting, and a
sign-language video option at the advanced tier
([../corpus/feel-ux-audio-art/accessibility-guidelines.md](../corpus/feel-ux-audio-art/accessibility-guidelines.md)).

The overlap that matters practically: text written to be simple and clearly
formatted for accessibility is also cheaper and less error-prone to translate,
and a UI that already handles variable subtitle lengths will survive text
expansion better. Doing the accessibility work first makes localization
cheaper. That relationship is a reasoned observation, not a sourced claim.

## Cases

The corpus contains **no localization case studies** — no named title with a
documented per-language outcome. That absence is itself the finding.

The nearest adjacent material:

- **Zukowski's GDC 2024 talk** as the single practitioner source for the
  priority order, alongside his broader "make Valve earn their 30%" thesis
  ([../corpus/gdc-postmortems/pitch-and-marketing-talks.md](../corpus/gdc-postmortems/pitch-and-marketing-talks.md)).
- **Steam regional pricing mechanics and their documented problems**, including
  the Brazil PPP worked example and the EU single-euro constraint
  ([../corpus/production-business-live/pricing-and-discount-rules.md](../corpus/production-business-live/pricing-and-discount-rules.md)).

Practitioner cases on recognizing when a solo developer needs outside help —
the category localization usually falls into:
[../cases/README.md](../cases/README.md),
[../cases/animal-well.md](../cases/animal-well.md).

## Checklist

- [ ] Regional pricing has been reviewed before any translation budget is
      committed — it is the cheaper, better-documented lever.
- [ ] Store-page localization is scoped separately from in-game localization,
      and priced separately.
- [ ] If translating at all, **Simplified Chinese is first**, per the one
      sourced recommendation.
- [ ] Nobody is quoting a per-language revenue lift — no such figure exists in
      this corpus.
- [ ] Text and UI can survive expansion (variable string lengths, font
      coverage) *before* strings are sent out for translation.
- [ ] Accessibility text work (clear language, readable formatting, subtitle
      pacing) is done first, since it lowers translation cost.
- [ ] Post-launch regional sales and wishlist splits are being recorded — that
      is the evidence that should drive language two and beyond.
- [ ] Any claim about Steam language market share is attributed, not asserted.

## Sources

- Chris Zukowski, GDC 2024, "The Steam Secrets Nobody Tells You... Until Now" — localization priority order stated explicitly; **summary-based on third-party recaps** (gamedeveloper.com, gamesradar.com), not a primary transcript. Accessed 2026-07-26.
- Steamworks Documentation, "Pricing." https://partner.steamgames.com/doc/store/pricing — 37 currencies, 4 region groups, three conversion methods; live, fetched 2026-07-26.
- Hushcrasher newsletter (Antoine Mayerowitz & Julie Belzanne), "We fixed Steam regional pricing recommendations" (2025-11-14) — stale-since-2022 recommendations, shared-currency-bucket problems. Accessed 2026-07-26.
- Chris Zukowski (How To Market A Game), "Killing the myths behind Steam's visibility" (2023-09-04) — New & Trending "varies by country/language"; community reverse-engineering, **not Valve-confirmed**. Accessed 2026-07-26.
- Wikipedia, "Steam (service)" — August 2025 language-based review filtering; fetched 2026-07-26.

**Marked unverified in this document:** the claim that Simplified Chinese has
overtaken English as the most-spoken language on Steam (Zukowski's stated
rationale, not independently verified); the New & Trending country/language
variation (community reverse-engineering). **Explicitly absent from this
corpus:** per-language ROI data, translation cost benchmarks, store-page-versus
full-game comparisons, LQA practice, text-expansion and font-coverage guidance,
machine-translation quality thresholds, and any named localization case study.
The sequencing recommendation in Advanced and the accessibility-lowers-cost
observation are reasoned from the sourced material, not sourced claims
themselves. `partner.steamgames.com` pages show no visible publish date;
"fetched" dates are given instead.
