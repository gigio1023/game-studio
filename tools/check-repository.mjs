#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const bannedText = [
  new RegExp(`${"D"}ream of One`, "i"),
  new RegExp(`${"d"}ream-of-one`, "i"),
  /\/Users\/user/i,
  new RegExp(`game-production-${"har"}${"ness"}`, "i"),
  new RegExp(`\\b${"har"}${"ness"}\\b`, "i"),
];
const textExtensions = new Set([".md", ".yaml", ".yml", ".json", ".mjs", ".snippet"]);

let failed = false;

walk(root);
checkJsonSchemas();

process.exit(failed ? 1 : 0);

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!textExtensions.has(path.extname(entry.name))) continue;
    checkTextFile(full);
  }
}

function checkTextFile(file) {
  const rel = path.relative(root, file);
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split("\n").length;
  if (/[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/u.test(text)) {
    fail(`NON_ENGLISH_TEXT ${rel}`);
  }
  for (const pattern of bannedText) {
    if (pattern.test(text) || pattern.test(rel)) {
      fail(`BANNED_TEXT ${rel} ${pattern}`);
    }
  }
  if (rel.endsWith("SKILL.md") && lines > 500) {
    fail(`SKILL_TOO_LONG ${rel} ${lines}`);
  }
  if (rel === "README.md" && lines > 120) {
    fail(`README_TOO_LONG ${lines}`);
  }
}

function checkJsonSchemas() {
  const schemaDir = path.join(root, "core", "schemas");
  for (const file of fs.readdirSync(schemaDir)) {
    if (!file.endsWith(".json")) continue;
    JSON.parse(fs.readFileSync(path.join(schemaDir, file), "utf8"));
  }
}

function fail(message) {
  console.error(message);
  failed = true;
}
