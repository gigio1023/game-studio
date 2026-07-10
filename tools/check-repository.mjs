#!/usr/bin/env node
// Repository check for the Game Studio skill repo.
// Validates skill packaging (portable Agent Skills contract), path integrity,
// and text hygiene. Run from the repo root: node tools/check-repository.mjs

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..");
const errors = [];
const fail = (file, msg) => errors.push(`${file}: ${msg}`);

const SKIP_DIRS = new Set([".git", "node_modules"]);
const TEXT_EXT = /\.(md|mjs|json|ya?ml)$/;

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry) || entry === ".DS_Store") continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* walk(full);
    else yield full;
  }
}

// --- Text hygiene across the repo -------------------------------------------
const NON_ENGLISH = /[぀-ヿ㐀-鿿가-힯]/u;
const HOME_PATH = new RegExp("/Users/" + "[a-z]", "i");
const SELF = "tools/check-repository.mjs";
for (const file of walk(ROOT)) {
  if (!TEXT_EXT.test(file)) continue;
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8");
  if (rel !== SELF) {
    if (NON_ENGLISH.test(text)) fail(rel, "contains non-English text");
    if (HOME_PATH.test(text)) fail(rel, "contains an absolute personal path");
    if (text.includes(".game-studio/"))
      fail(rel, "references the retired .game-studio install layout");
  }
  const lines = text.split("\n").length;
  if (rel === "README.md" && lines > 120) fail(rel, `README has ${lines} lines (max 120)`);
  if (rel.endsWith("SKILL.md") && lines > 500) fail(rel, `SKILL.md has ${lines} lines (max 500)`);
  if (rel.endsWith(".md") && lines > 800) fail(rel, `${lines} lines (max 800); split the page`);
  if (rel.endsWith(".json")) {
    try {
      JSON.parse(text);
    } catch (e) {
      fail(rel, `invalid JSON: ${e.message}`);
    }
  }
}

// --- Skill packaging ----------------------------------------------------------
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const skillsDir = join(ROOT, "skills");
const skillDirs = readdirSync(skillsDir).filter((d) =>
  statSync(join(skillsDir, d)).isDirectory(),
);
if (skillDirs.length === 0) fail("skills/", "no skills found");

for (const dir of skillDirs) {
  const skillPath = join(skillsDir, dir, "SKILL.md");
  const relSkill = `skills/${dir}/SKILL.md`;
  if (!existsSync(skillPath)) {
    fail(relSkill, "missing SKILL.md");
    continue;
  }
  const text = readFileSync(skillPath, "utf8");

  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) {
    fail(relSkill, "missing frontmatter");
    continue;
  }
  const fmLines = fm[1].split("\n");
  const keys = fmLines.filter((l) => /^[a-zA-Z_-]+:/.test(l)).map((l) => l.split(":")[0]);
  for (const k of keys) {
    if (k !== "name" && k !== "description")
      fail(relSkill, `non-portable frontmatter key '${k}' (only name and description)`);
  }
  const name = fm[1].match(/^name:[ \t]*(\S+)[ \t]*$/m)?.[1];
  if (!name) fail(relSkill, "missing frontmatter name");
  else {
    if (name !== dir) fail(relSkill, `frontmatter name '${name}' does not match directory '${dir}'`);
    if (!NAME_RE.test(name) || name.length > 64) fail(relSkill, `invalid skill name '${name}'`);
    if (/anthropic|claude/i.test(name)) fail(relSkill, "name uses a reserved word");
  }
  const descIdx = fmLines.findIndex((l) => l.startsWith("description:"));
  let desc = "";
  if (descIdx >= 0) {
    desc = fmLines[descIdx].replace(/^description:[ \t]*>?[ \t]*/, "");
    for (let i = descIdx + 1; i < fmLines.length; i += 1) {
      if (/^[a-zA-Z_-]+:/.test(fmLines[i])) break;
      desc += ` ${fmLines[i].trim()}`;
    }
    desc = desc.trim();
  }
  if (!desc) fail(relSkill, "missing or empty description");
  if (desc.length > 1024) fail(relSkill, `description is ${desc.length} chars (max 1024)`);
  if (/<[a-z]+>/i.test(desc)) fail(relSkill, "description contains XML tags");

  // Every references/... mention in the body must exist inside this skill.
  for (const m of text.matchAll(/`(references\/[A-Za-z0-9._/-]+)`/g)) {
    if (!existsSync(join(skillsDir, dir, m[1]))) fail(relSkill, `referenced file missing: ${m[1]}`);
  }
  if (/\]\(\.\.\//.test(text) || /`\.\.\//.test(text))
    fail(relSkill, "references a path outside the skill folder; skills must be self-contained");

  // Reference hygiene: stay inside the skill, map long files.
  const refDir = join(skillsDir, dir, "references");
  if (existsSync(refDir)) {
    for (const ref of readdirSync(refDir)) {
      const refText = readFileSync(join(refDir, ref), "utf8");
      const relRef = `skills/${dir}/references/${ref}`;
      if (/\]\(\.\.\//.test(refText) || /`\.\.\//.test(refText))
        fail(relRef, "reference points outside the skill folder");
      const refLines = refText.split("\n").length;
      if (refLines > 100 && !/^## Contents$/m.test(refText))
        fail(relRef, `${refLines} lines but no '## Contents' map near the top`);
    }
  }
}

// --- Markdown link integrity ----------------------------------------------------
for (const file of walk(ROOT)) {
  if (!file.endsWith(".md")) continue;
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/\]\((?!https?:|#|mailto:)([^)#\s]+)/g)) {
    const target = resolve(dirname(file), m[1]);
    if (!existsSync(target)) fail(rel, `broken link: ${m[1]}`);
  }
}

// --- Eval fixture pairing ---------------------------------------------------------
const prompts = readdirSync(join(ROOT, "evals/prompts")).sort();
const expected = readdirSync(join(ROOT, "evals/expected")).sort();
if (prompts.join() !== expected.join())
  fail("evals/", `prompts and expected fixtures do not pair: [${prompts}] vs [${expected}]`);

// --- Report --------------------------------------------------------------------------
if (errors.length) {
  console.error(`check-repository: ${errors.length} problem(s)\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`check-repository: ok (${skillDirs.length} skills validated)`);
