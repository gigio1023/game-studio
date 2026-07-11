# Evidence And Release Checks

How to verify that a claim is backed by real play, and how to compare public
promises with build truth.

## Proof Categories

Classify what the available evidence actually proves, from weakest to
strongest for a player-facing claim:

- **Mechanical**: the build runs, loads, imports, or saves. Proves the project
  is alive, nothing more.
- **Playable**: a player performs the intended action and sees the result.
- **Comprehension**: a player understands goal, affordance, state, risk, and
  feedback without outside explanation.
- **Feel**: input, camera, animation, and audio response support the verb —
  requires video or direct play, not a screenshot.
- **Release**: public claims map to observed build behavior, or are removed.

Do not let a lower category stand in for a higher claim. "Files exist" is not
a playable build; run the narrowest real check that supports the claim —
launch, scene load, smoke run, capture — or name it as missing proof.

## Evidence Provenance

Name how the reviewer received each artifact:

- **Direct play**: the reviewer performed the action in the build.
- **Inspected video**: the reviewer watched the supplied motion and audio.
- **Inspected screenshot**: the reviewer saw one static state; useful for
  layout or visible state, not timing, control, camera motion, or audio.
- **User-reported description**: the user described a build or capture that the
  reviewer did not inspect. Treat it as a claim with lower confidence.
- **Mechanical check**: a command or test verified a technical condition.

Do not write "capture checked" when only a description was supplied. State the
provenance and the residual risk from evidence you could not inspect.

## Verification Flow

1. List the claim and the proof artifacts it requires.
2. Record each artifact's provenance; inspect or run it yourself when available.
3. Separate missing proof (was never produced) from failed proof (was run and
   contradicts the claim).
4. Note weak evidence explicitly: playtest notes without a build identifier,
   reported captures that were not inspected, screenshots standing in for
   motion, tests standing in for feel.
5. Record residual risk — what the checked proof still cannot show.

`NOT_READY` when proof is missing for the central claim; `CONCERNS` when proof
exists but leaves a bounded, nameable risk.

## Release Claims Versus Build Truth

Before public pages, trailers, screenshots, demos, credits, or support
promises change:

- What public claim is being made, and which build or capture proves it?
- Do store copy, README, trailer, and demo behavior match the build — not the
  roadmap?
- Are accessibility, localization, and controller-support claims accurate?
- Are credits, licenses, and asset attributions present?
- What known limitation must be disclosed, and what should be removed rather
  than promised?
- Do known defects have severity, owner, and support impact?

Blocking: store copy promising unsupported features; trailer or screenshots
showing behavior absent from the build; overstated accessibility or
localization support; missing credits or licenses; unclear support
expectations.

## Output

```text
Claim:
Proof checked:
Missing proof:
Failed proof:
Weak evidence noted:
Residual risk:
Claim change required (release reviews):
```
