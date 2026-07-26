# GDC Talks & Postmortems Corpus — Manifest

**Date compiled:** 2026-07-26
**Scope:** Named GDC talks and classic postmortems, digested in enough
detail to apply (actual parameter advice, numbers, process steps) — not
one-sentence summaries. This lane owns the talk/postmortem as the unit;
underlying theory books, feel/UX theory, production/business practice,
and narrative/genre theory are owned by sibling lanes in this corpus
project.

## Files

| File | Talks covered | Lines (approx) |
| --- | --- | --- |
| `feel-talks.md` | Juice It or Lose It (Jonasson/Purho); The Art of Screenshake (Nijman/Vlambeer); Scroll Back: Cameras in Side-Scrollers (Keren); Math for Game Programmers: Juicing Your Cameras With Math (Eiserloh) | ~330 |
| `design-talks.md` | Interesting Decisions (Sid Meier); Truth in Game Design (Jonathan Blow); Mark Cerny's "Method" (D.I.C.E. 2002); Choice, Consequence and Complicity (Alexis Kennedy); Finishing a Game (Derek Yu essay) | ~290 |
| `pitch-and-marketing-talks.md` | Thirty Things I Hate About Your Game Pitch (Brian Upton); No Time, No Budget, No Problem: Finishing 'The First Tree' (David Wehle); Chris Zukowski's Steam marketing/wishlist talk cluster | ~220 |
| `postmortems-roguelike-strategy.md` | Slay the Spire: Metrics Driven Design and Balance (Giovannetti); Into the Breach Design Postmortem (Davis); Hades early access process (Kasavin/Korb, Supergiant) | ~240 |
| `postmortems-platformer-indie.md` | A Short Hike postmortem (Robinson-Yu); Celeste level design (Thorson) + Chapter 9 deep dive; **gap: Vampire Survivors**; **gap: Stardew Valley** | ~200 |

5 files, 15 talks/essays fully digested + 2 explicit gaps, covering all
scope items named in the assignment.

## Speaker verification resolved

- **"30 Things I Hate About Your Game Pitch"** — brief flagged uncertainty
  ("Brent Fox? Ed Fries?"). Confirmed via GDC Vault listing + official
  slide filename + three independent secondary sources: the speaker is
  **Brian Upton**, GDC 2017, at the time affiliated with publisher "Game
  On The Rails."
- **Mark Cerny's "Method"** — brief called it "the D.I.C.E. talk." Confirmed
  and flagged explicitly in the digest: this is a **D.I.C.E. Summit 2002**
  talk, not a GDC talk. Kept in scope per the brief's own description but
  labeled clearly so it isn't mistaken for a GDC session in downstream use.
- **"Failbetter's storylets" talk** — brief asked for this as a GDC talk.
  No such talk was found. The closest verified GDC session is Alexis
  Kennedy's "Choice, Consequence and Complicity" (GDC 2016 Narrative
  Summit), which is about narrative choice design generally, not a
  storylet-mechanics deep dive. The actual primary source for the
  storylet/quality-based-narrative system is **Emily Short's blog**
  (non-GDC, essay form) — flagged in `design-talks.md` and noted as
  probably belonging to the narrative/genre-theory lane rather than this
  one.

## Verification status summary

| Status | Count | Entries |
| --- | --- | --- |
| Transcript read (primary source) | 2 | Math for Game Programmers: Juicing Cameras (full text archive); Scroll Back cameras (author's own written adaptation) |
| Summary-based on detailed third-party recap | 9 | Juice It or Lose It; Art of Screenshake; Interesting Decisions; Truth in Game Design; Mark Cerny's Method; Thirty Things I Hate About Your Game Pitch; The First Tree; Chris Zukowski cluster; A Short Hike |
| Summary-only, thin (flagged as priority follow-up) | 2 | Slay the Spire metrics talk (no granular numbers recovered — GDC Vault paywalled, no transcript); Into the Breach postmortem (slide PDF 403'd, no transcript, thinnest entry in corpus) |
| Primary source for a sub-topic, summary for the rest | 2 | Celeste (GDC talk summary-only, but Chapter 9 deep-dive is the studio's own blog — primary); Hades early access (three bundled secondary sources, decent corroboration) |
| Essay (not a talk), summary-read | 1 | Derek Yu, "Finishing a Game" (original hosted page 404'd; sourced from a detailed third-party paraphrase — a primary copy exists in the Boss Fight Books *Spelunky* text if needed later) |
| Firm gap, marked unverified | 2 | Vampire Survivors (no GDC talk found, only GDCA 2023 nomination + press interviews); Stardew Valley (no GDC postmortem talk found, only press interviews, one held at GDC but not a session) |

## Gaps / gaps worth a follow-up pass

1. **Into the Breach Design Postmortem** — weakest-verified real talk in
   the corpus. Primary slide PDF exists at a stable S3 URL but returns
   403 to automated fetch; YouTube has no accessible transcript. The
   "UI-guided design" and "how much RNG" threads are exactly the kind of
   concrete content this corpus wants and weren't recovered in depth.
   Priority target if browser or GDC Vault access becomes available.
2. **Slay the Spire metrics talk** — design philosophy is solid, but zero
   concrete metric values (win rates, pick rates, specific balance
   changes) were recoverable. Same access barriers as above.
3. **Mark Cerny's Method** — the specific "myths" about planning,
   technology, and milestones are named but not unpacked individually;
   exact pre-production budget/time percentages weren't recoverable from
   accessible mirrors of the slide deck.
4. **Chris Zukowski's "two Steam stores" claim** — referenced in coverage
   of the GDC 2024 talk without explanation of what the two stores
   actually are.
5. **Vampire Survivors and Stardew Valley** — both explicit gaps; no
   fabricated content was recorded in their place, per the assignment's
   verification requirement.
6. **Martin Jonasson additional "polish" talks** — the brief asked for
   these as a separate item from "Juice It or Lose It." Searched
   specifically; no second distinct GDC talk by Jonasson on polish/game
   feel was found beyond the one covered. Not written up as a separate
   gap entry since it folds into the Juice It or Lose It digest, but
   noting here that the brief's implied second source doesn't appear to
   exist as a named GDC talk.

## Scope notes for the corpus lead

- All five files stayed within the "talk/postmortem as the unit" mandate;
  where a brief item turned out to be an essay (Derek Yu) or a blog
  framework (Emily Short's storylet writing) rather than a talk, that's
  flagged explicitly in the relevant file rather than silently treated as
  equivalent.
- `game-studio/` was not touched, per instructions.
