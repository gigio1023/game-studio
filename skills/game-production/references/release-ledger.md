# Release Ledger

Use this guide when a game ships an update to players and someone must say
what changed, or when the in-game version, the store or web page, and the
build that players are actually running stop agreeing.

A changelog is a release record, not a decorative modal. It is the only place
a player, a reviewer, or a future maintainer can learn what shipped and when.

## Contents

- One Version Per Shipped Release
- One Source Of Truth
- Reconstructing History Without Inventing It
- Prove The Live Build
- What Players Get Told
- Checklist
- Stop Conditions

## One Version Per Shipped Release

A version identifies a release players received. It does not identify a
commit, a branch, a local build, or a plan.

- Do not bump for local commits, drafts, failed builds, or artifacts that were
  built but never published.
- Combine everything shipped in one deployment into one version with several
  notes.
- Give a separately shipped hotfix its own version.
- Do not publish a version number the players cannot yet be running.

Keep an established scheme when the project already has one. For a pre-1.0
game with no scheme, increment the patch once per shipped release and reserve
a minor or major bump for a named product milestone — a stage on the milestone
ladder, not a large diff.

## One Source Of Truth

Keep entries in structured data with one entry per shipped release:

- version;
- release date;
- a short title;
- one or more player-facing notes;
- the build, deployment, or store identifier when one exists;
- the exact source revision when one exists.

Derive every displayed version — title screen, pause menu, settings, page
footer, package metadata — from the newest ledger entry. A second
hand-maintained version constant is the defect that produces a build claiming
one version while the ledger claims another.

Keep source revisions and deployment identifiers in metadata. Player-facing
notes describe what changed for the player, in the player's words.

## Reconstructing History Without Inventing It

When a ledger is being backfilled after the fact:

1. List the releases that actually reached players, oldest first.
2. Attach each to its date and its shipped revision or build identifier.
3. Diff each shipped revision against the previous shipped revision.
4. Summarize only the player-visible differences.
5. Fold pre-tracking work into the earliest baseline entry rather than
   inventing versions for it.
6. Verify ordering, uniqueness, and that no version number is skipped.

Where the evidence is missing, record the provenance as unknown or stop and
ask. A tidy invented history is worse than an honest gap: it will be cited
later as though it were a record.

## Prove The Live Build

A release is finished when the thing players can reach reports what the ledger
says, not when the local build succeeds.

- Verify the deployed or published build loads and reports the expected
  version.
- Verify the newest note and the oldest baseline both render.
- Verify no runtime error appeared in the released build specifically.
- Record the rollback target before, not after.

Report the deployed state separately from local readiness. "Built and pushed"
is not "players are running it".

## What Players Get Told

Notes are read by players deciding whether to reinstall, reviewers deciding
whether to re-evaluate, and testers deciding whether their bug is fixed.

- Lead with what the player can now do, see, or stop suffering.
- Name fixed defects that testers reported, so they know to retest.
- Do not expose commit hashes, internal ticket numbers, or deployment IDs.
- Do not promise the next release inside the current one's notes.

On storefronts the update post is also a discovery mechanism with its own
timing rules — see the release knowledge in the `game-knowledge` skill before
deciding when to publish rather than treating the post as an afterthought.

## Checklist

Before calling a release done:

- versions are unique, contiguous, and newest-first in the rendered history;
- the displayed version derives from the ledger's newest entry;
- every entry has a date, a title, and at least one player-facing note;
- the shipped revision is recorded or explicitly marked pending;
- the live build reports the expected version;
- the rollback target is recorded;
- public claims elsewhere — store copy, page, trailer — still match this
  build, not the roadmap.

## Stop Conditions

Stop and return the decision needed when:

- publishing would make a public promise the current build does not support;
- the version scheme change implies a product milestone the human has not
  approved;
- the deployment sequence and the ledger disagree and the difference cannot be
  resolved from evidence;
- a release would require spend, store submission, or any other irreversible
  external action.
