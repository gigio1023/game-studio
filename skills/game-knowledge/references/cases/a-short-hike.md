# A Short Hike — Adam Robinson-Yu

- Solo. Production window reported as 3 months (GDC recap) and 4 months (research pass); treat as roughly one quarter.
- The deadline was external — Humble Original finishing funds — and used deliberately as a finishing forcing-function.
- Core game was scoped to be fun and playable on its own; everything else was declared a stretch goal before production started.
- Secret areas, tools, items and quests missed the initial release and shipped later as free post-launch updates.
- Remaining work was re-estimated weekly and daily ("a simplified version of the scrum process", run alone).
- Verification: real GDC 2020 postmortem, but digested from a detailed third-party recap, not a transcript.

## Basics

This is the most directly transferable production template in the corpus for a
true solo developer, because every element of it is cheap and none of it needs
a team.

**The cut line was drawn before production, not during it.** The core game had
to stand alone as a complete, fun experience. Everything beyond that was
labelled a stretch goal in advance. That meant late cuts were pre-authorized
rather than negotiated under deadline pressure — the scope "naturally scaled to
the rate at which work was actually being done." Several planned features
(secret areas, tools, items, quests) simply did not make the initial release
and were added afterwards.

**Weekly and daily re-estimation replaced scrum ceremony.** Robinson-Yu
re-estimated the remaining work continuously, which kept visibility on whether
a given feature was still feasible in the time left. On a team, that check
comes from other people. Solo, it has to be a habit, and the habit is a
five-minute one, not a process.

**The deadline came from outside.** The 3-month window was tied to landing
Humble Original "finishing funds," not chosen for discipline's sake. His own
framing: it "helped keep me really focused on finishing something rather than
trying to make something perfect."

**The art style was partly a resource constraint.** He reused tools and assets
from previous personal projects, and the distinctive low-poly-pixelated 3D look
is presented as partly a byproduct of that reuse rather than a style chosen from
a blank slate.

## Advanced

**Where the numbers disagree.** The GDC recap digested in
`../corpus/gdc-postmortems/postmortems-platformer-indie.md` states a 3-month
production window tied to the Humble Original deadline. The external research
pass recorded "built in 4 months after abandoning a larger project." Neither
figure comes from a primary transcript. Do not quote a precise duration; say
"about a quarter" and cite the range.

**How to substitute an external deadline when you do not have one.** The
mechanism that matters is not the funding — it is that someone else owns the
date. Derek Yu makes the same argument independently: competitions and
festivals force scheduling realism and hard cut decisions that self-imposed
deadlines do not reliably force
(`../corpus/gdc-postmortems/design-talks.md`). Usable substitutes with a date
someone else controls: a Steam Next Fest edition, a jam or festival submission
deadline, a publicly announced demo date.

**The abandoned larger project is part of the case, not a footnote.** A Short
Hike exists because a bigger project was dropped first. The transferable move is
the trade: give up the ambitious project's scope, keep its lessons and tools,
ship the small one.

**What this case does not prove.** One quarter is not a general scoping
constant. It worked here because the core was small, the aesthetic absorbed
reused assets, and the developer had prior projects to harvest. A first-ever
project with none of those inputs should expect the same discipline to produce a
longer timeline, not the same one.

## Cases

- [undertale.md](./undertale.md) — the same scope-discipline rule stated
  generally, with its sourcing problem flagged.
- [cave-story.md](./cave-story.md) — the control case: no external deadline,
  five years, one full restart.
- [animal-well.md](./animal-well.md) — what a 2/3 content cut rate looks like
  when it is executed over years instead of a quarter.
- [studio-practices.md](./studio-practices.md) — milestone cadence at
  small-studio scale.

## Checklist

- [ ] Is there a version of this project that is fun and playable with the
      stretch content removed? Name it.
- [ ] Is the cut list written down *before* production, with each item marked
      core or stretch?
- [ ] Does someone other than you own the ship date? If not, what date are you
      substituting, and who else knows about it?
- [ ] Are you re-estimating remaining work at least weekly, on paper?
- [ ] What existing tools or assets can you harvest instead of building? What
      does the aesthetic look like if you commit to them?

## Sources

- Adam Robinson-Yu, *Crafting a Tiny Open World: 'A Short Hike' Postmortem*,
  GDC 2020. https://gdcvault.com/play/1026613/Independent-Games-Summit-Crafting-A
  — accessed 2026-07-26.
- Game Developer, *Finding smart shortcuts in A Short Hike* (Unlocking the Vault
  series). https://www.gamedeveloper.com/design/finding-smart-shortcuts-in-a-short-hike-postmortem-unlocking-the-vault-4
  — accessed 2026-07-26. This is the source actually digested; the talk itself
  was not transcribed.
- Derek Yu, *Finishing a Game* (2010; expanded in *Spelunky*, Boss Fight Books
  #11, 2016). Original page returned 404 on 2026-07-26; digested from a
  third-party paraphrase — see `../corpus/gdc-postmortems/design-talks.md`.
  Marked unverified against the primary text.
- Corpus digest: `../corpus/gdc-postmortems/postmortems-platformer-indie.md`.
