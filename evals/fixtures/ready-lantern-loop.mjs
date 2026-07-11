const marker = "--script";
const index = process.argv.indexOf(marker);
const actions = index >= 0 ? (process.argv[index + 1] ?? "").split(",") : [];

if (actions.length === 0 || actions.some((action) => !["cross", "light"].includes(action))) {
  console.error("usage: node ready-lantern-loop.mjs --script cross,light,cross");
  process.exit(2);
}

let lanternLit = false;
let complete = false;

console.log("BUILD ready-lantern-loop-v1");
for (const action of actions) {
  if (action === "light") {
    lanternLit = true;
    console.log("LIGHT lantern lit; safe bridge revealed");
    continue;
  }

  if (!lanternLit) {
    console.log("FAIL darkness blocks the crossing");
    console.log("RECOVER returned to the near side; another choice is available");
    continue;
  }

  complete = true;
  console.log("SUCCESS crossed the revealed bridge");
}

if (!complete) {
  console.error("INCOMPLETE no successful crossing");
  process.exit(1);
}

console.log("LOOP_COMPLETE");
