// Fail when common US spellings appear in markdown prose (code spans and fences are skipped).
// Run from the repo root: node scripts/check-en-gb.mjs [root]
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { listFiles } from "./lib-files.mjs";

export const RULES = [
  { re: /\bminimiz\w*/gi, note: "use minimise" },
  { re: /\bmaximiz\w*/gi, note: "use maximise" },
  { re: /\boptimiz\w*/gi, note: "use optimise" },
  { re: /\bbehavior\w*/gi, note: "use behaviour" },
  { re: /\bauthoriz\w*/gi, note: "use authorise or authorisation" },
  { re: /\borganiz\w*/gi, note: "use organise or organisation" },
  { re: /\bfavorite\w*/gi, note: "use favourite" },
  { re: /\blabeled\b/gi, note: "use labelled" },
  { re: /\butiliz\w*/gi, note: "use utilise (or just use)" },
  { re: /\brecogniz\w*/gi, note: "use recognise" },
  { re: /\banalyz\w*/gi, note: "use analyse" },
  { re: /\bcatalog\b/gi, note: "use catalogue" },
  { re: /\bdefense\b/gi, note: "use defence" },
  { re: /\bgray\b/gi, note: "use grey in prose" },
];

/** Returns [{ line, word, note }] for US spellings in markdown prose. */
export function findUsSpellings(text) {
  const prose = text.replace(/```[\s\S]*?```/g, (block) => block.replace(/[^\n]/g, "")).replace(/`[^`\n]*`/g, "");
  const hits = [];
  prose.split(/\r?\n/).forEach((line, i) => {
    for (const { re, note } of RULES) {
      for (const m of line.matchAll(re)) hits.push({ line: i + 1, word: m[0], note });
    }
  });
  return hits;
}

export function checkEnGb(root) {
  const errors = [];
  const files = listFiles(root, [".md", ".mdc"]);
  for (const file of files) {
    for (const hit of findUsSpellings(readFileSync(join(root, file), "utf8"))) {
      errors.push(`${file}:${hit.line}: "${hit.word}": ${hit.note}`);
    }
  }
  return { errors, count: files.length };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { errors, count } = checkEnGb(resolve(process.argv[2] ?? "."));
  if (errors.length) {
    console.error(errors.join("\n"));
    console.error(`\n${errors.length} US spelling(s) in ${count} markdown files.`);
    process.exit(1);
  }
  console.log(`OK: ${count} markdown files, en-GB spelling.`);
}
