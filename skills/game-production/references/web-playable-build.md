# Web Playable Build Guide

Use this guide when a Game Studio milestone, prototype, or implementation
handoff targets a browser game — Three.js, Babylon, Phaser, PixiJS, or
hand-written canvas and WebGL.

This is not a JavaScript tutorial. It is the minimum operating guide for
agents that must help a creator get from design intent to a checked playable
build that runs in a browser.

## Contents

- What The Browser Gives You And What It Charges
- Start By Classifying The Web Work
- Project Checks
- Runtime Check Ladder
- Deterministic Review States
- First Playable Build In A Browser
- Console Health Is Part Of The Build
- Touch Is A Default Device, Not A Port
- Frame And Asset Budget
- Web Handoff Additions
- Stop Conditions

## What The Browser Gives You And What It Charges

The browser is not the easy engine. It is a different bill.

Cheap in a browser:

- **Verification.** A dev server, a page, a screenshot, and a console log put
  the build, the play, and the failure in one loop the agent can run itself.
- **Distribution.** A playtester needs a URL, not an install, a platform
  build, or a signed binary. The playtest-recruiting problem gets smaller.
- **Iteration.** Module reload removes the export step between a change and
  the played result.

Expensive in a browser:

- **Everything an engine ships.** Scene tree, inspector, animation state
  machines, physics and collision, tilemaps, navigation, audio mixing, input
  mapping, save serialization, asset import, and a game profiler are yours to
  build, glue, or do without.

The planning consequence: a browser milestone that adds a system an engine
would have supplied — a camera rig, save and migration, audio priority, a
particle pool — is a real milestone with a real hypothesis, not setup work to
be hidden inside another task. Name it in the plan and give it its own
playable build.

## Start By Classifying The Web Work

| Class | Examples | What the milestone owes |
| --- | --- | --- |
| Gameplay-facing | player verb, enemy behavior, encounter, HUD state, reward | A played action and its visible consequence |
| Engine substitute | camera rig, save/load, audio bus, input map, pooling | The same played evidence — the system exists to change what a player experiences |
| Harness | dev server config, bundler, deploy pipeline, fixtures | Support work; it must name the playable change it unblocks |
| Asset pipeline | model import, texture budget, atlas, audio encoding | The build still loads and plays inside budget |

Engine-substitute work is the class most often misreported as done. A camera
rig that compiles is not a camera rig that reads.

## Project Checks

Establish these before claiming anything about the project:

1. Package manager and lockfile; install completes.
2. The dev-server command and its port (Vite, webpack, a framework dev server,
   or a plain static server).
3. The production build command and its output directory.
4. The entry HTML, the canvas mount, and module type.
5. Renderer and library versions actually installed, not the ones the README
   claims.
6. Existing tests, lint, and typecheck commands.

Report the exact commands used. "The project builds" without the command and
its result is not a check.

## Runtime Check Ladder

Report the highest rung actually reached, and never a rung above it:

1. **Static** — typecheck and lint pass.
2. **Build** — the production build completes without errors.
3. **Load** — the page is served, opened, and reaches an interactive state
   with no uncaught console error.
4. **Input to consequence** — the player action is performed and the intended
   visible consequence is observed.
5. **Capture** — a screenshot, recording, or state dump tied to the specific
   claim under review.

Rungs 1 and 2 are the ones that most often get reported as playable evidence.
They are not. A green build says the code compiled, not that the game plays.

## Deterministic Review States

Grinding to a state is luck, not verification. Provide direct entry to the
states a review needs:

- seedable runs, so a failure can be replayed;
- query parameters or debug routes for boss phase, low health, empty
  inventory, tutorial step, and error states;
- a save-migration entry that starts from an old save shape;
- a first-run versus returning-player entry.

Keep these routes review-only, name them in the handoff, and make sure they
cannot be reached by a player in a shipped build.

## First Playable Build In A Browser

A browser first playable build must define:

- the entry URL and the exact steps that reach the moment;
- the input surface it expects — keyboard, mouse, pointer, touch;
- one player action and one visible consequence;
- failure and recovery when the claim depends on them;
- the console state that counts as clean;
- the capture that proves it.

Anything that needs a specific browser, flag, or local file is not yet a
shareable playable build; say so rather than implying a tester could open it.

## Console Health Is Part Of The Build

Treat these as build failures, not cosmetic noise:

- uncaught exceptions and unhandled promise rejections during play;
- 404s for models, textures, audio, or fonts — a missing asset usually means a
  silent visual fallback, not a crash;
- WebGL context loss, shader compile errors, and texture-size warnings;
- exceptions thrown once per frame, which will read as a frame-rate problem.

Inspect the console during the played check, not only at load.

## Touch Is A Default Device, Not A Port

A shared URL gets opened on a phone. Before calling a build shareable:

- check at least one touch viewport, portrait and landscape if both are
  reachable;
- confirm the primary verb is performable without a keyboard, or say plainly
  that the build is desktop-only;
- check safe areas and that HUD controls are not under browser chrome;
- respect the reduced-motion preference for camera shake and screen effects.

## Frame And Asset Budget

No engine default protects a browser game from its own asset list. Watch:

- draw calls and material count in the representative encounter, not the empty
  scene;
- texture memory and total transfer size on first load;
- per-frame allocation, which shows up as periodic garbage-collection stutter
  rather than a low average frame rate;
- object churn for projectiles, effects, and enemies — pool them before
  measuring anything else.

Measure on a representative scene under load. An empty menu at 120 fps is not
performance evidence.

## Web Handoff Additions

Alongside the standard production output, a browser handoff carries:

- the URL and the commit or build identifier it came from;
- the dev-server or preview command needed to reproduce it locally;
- the deterministic route or seed used for the check;
- the browser and viewport the check ran in;
- the console state observed;
- any asset that is still a placeholder or a missing fallback.

## Stop Conditions

Stop and return the decision needed when:

- the check requires a paid host, a domain, a store submission, or any other
  spend or public exposure;
- the build depends on a secret, key, or account the session does not own;
- making the moment playable would require changing the accepted direction or
  expanding the release promise;
- the only path to the state under review is a destructive change to saved
  player data.
