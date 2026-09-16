// Verify: common US spellings do not appear in markdown prose (en-GB kit default).
// Run from repo root: node scripts/check-en-gb.mjs
import { readdirSync, readFileSync } from "node:fs";
import { join, resolve, sep } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const SKIP_DIRS = new Set([".git", ".cursor", "node_modules", ".screenshots"]);

/** @type {{ re: RegExp; note: string }[]} */
const RULES = [
  { re: /\bminimize\w*\b/gi, note: "use minimise" },
  { re: /\bmaximize\w*\b/gi, note: "use maximise" },
  { re: /\boptimize\w*\b/gi, note: "use optimise" },
  { re: /\bbehavior\w*\b/gi, note: "use behaviour" },
  { re: /\bauthoriz\w*\b/gi, note: "use authorise / authorisation" },
  { re: /\borganiz\w*\b/gi, note: "use organise / organisation" },
  { re: /\bfavorite\w*\b/gi, note: "use favourite" },
  { re: /\blabeled\b/gi, note: "use labelled" },
  { re: /\butiliz\w*\b/gi, note: "use utilise" },
  { re: /\brecogniz\w*\b/gi, note: "use recognise" },
  { re: /\banalyz\w*\b/gi, note: "use analyse" },
  { re: /\bdefense\b/gi, note: "use defence" },
  { re: /\bgray\b/gi, note: "use grey in prose (keep color in code)" },
];

function mdFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    if (e.isDirectory()) return SKIP_DIRS.has(e.name) ? [] : mdFiles(join(dir, e.name));
    return e.name.endsWith(".md") ? [join(dir, e.name)] : [];
  });
}

function stripForScan(text) {
  return text.replace(/```[\s\S]*?```/g, "").replace(/`[^`]*`/g, "");
}

function lineExempt(line) {
  return /Customize\s*→/.test(line) || /\[Customize\]/i.test(line) || /customize-cursor/i.test(line);
}

const errors = [];
const files = mdFiles(ROOT);

for (const file of files) {
  const rel = file.slice(ROOT.length + 1).split(sep).join("/");
  const lines = stripForScan(readFileSync(file, "utf8")).split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (lineExempt(line)) continue;
    for (const { re, note } of RULES) {
      re.lastIndex = 0;
      const hit = re.exec(line);
      if (hit) {
        errors.push(`${rel}:${i + 1}: "${hit[0]}" — ${note}`);
      }
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} en-GB problem(s) in ${files.length} markdown files.`);
  console.error("See blueprint/reference/locale-en-gb.md");
  process.exit(1);
}

console.log(`OK: ${files.length} markdown files, no common US spellings in prose.`);
