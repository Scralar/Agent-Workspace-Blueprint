// Fail when a relative markdown link points at a file that does not exist.
// Links inside fenced code blocks are not checked.
// Run from the repo root: node scripts/check-links.mjs [root]
import { readFileSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { listFiles } from "./lib-files.mjs";

/** Returns the relative link targets in markdown text, ignoring code fences, URLs and anchors. */
export function relativeLinks(text) {
  const prose = text.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
  return [...prose.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)]
    .map((m) => m[1])
    .filter((t) => !/^(https?:|mailto:|#)/.test(t));
}

export function checkLinks(root) {
  const errors = [];
  const files = listFiles(root, [".md", ".mdc"]);
  for (const file of files) {
    for (const target of relativeLinks(readFileSync(join(root, file), "utf8"))) {
      if (!existsSync(resolve(join(root, dirname(file)), target.split("#")[0]))) {
        errors.push(`${file}: broken link ${target}`);
      }
    }
  }
  return { errors, count: files.length };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { errors, count } = checkLinks(resolve(process.argv[2] ?? "."));
  if (errors.length) {
    console.error(errors.join("\n"));
    console.error(`\n${errors.length} broken link(s) in ${count} markdown files.`);
    process.exit(1);
  }
  console.log(`OK: ${count} markdown files, all relative links resolve.`);
}
