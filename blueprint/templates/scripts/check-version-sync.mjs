// One home for the version. Fails when any copy differs; --write copies the source version into every target.
// Config (default version-sync.json in the repo root):
// {
//   "source": { "file": "package.json", "key": "version" },
//   "targets": [
//     { "file": "src-tauri/tauri.conf.json", "key": "version" },
//     { "file": "src-tauri/Cargo.toml", "pattern": "^version = \"([^\"]+)\"" }
//   ]
// }
// "key" is a dotted path into a JSON file. "pattern" is a regex (multiline) whose first group is the version.
// Run: node scripts/check-version-sync.mjs [--write] [--config path]
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, join, dirname } from "node:path";
import { pathToFileURL } from "node:url";

function readAt(root, target) {
  const text = readFileSync(join(root, target.file), "utf8");
  if (target.key) {
    let value = JSON.parse(text);
    for (const part of target.key.split(".")) value = value?.[part];
    return { text, value };
  }
  const m = new RegExp(target.pattern, "m").exec(text);
  return { text, value: m?.[1], match: m };
}

function writeAt(root, target, version, current) {
  let next;
  if (target.key) {
    const data = JSON.parse(current.text);
    const parts = target.key.split(".");
    let obj = data;
    for (const part of parts.slice(0, -1)) obj = obj[part];
    obj[parts.at(-1)] = version;
    const indent = /^( +|\t)"/m.exec(current.text)?.[1] ?? "  ";
    next = JSON.stringify(data, null, indent) + (current.text.endsWith("\n") ? "\n" : "");
  } else {
    if (!current.match) throw new Error(`${target.file}: pattern not found`);
    const [whole, old] = current.match;
    next = current.text.replace(whole, whole.replace(old, version));
  }
  writeFileSync(join(root, target.file), next);
}

/** Returns { version, errors }. With write: true, fixes the targets instead of reporting them. */
export function checkVersionSync(root, config, { write = false } = {}) {
  const version = readAt(root, config.source).value;
  const errors = [];
  if (!version) return { version, errors: [`${config.source.file}: no version found`] };
  for (const target of config.targets) {
    const current = readAt(root, target);
    if (current.value === version) continue;
    if (write) writeAt(root, target, version, current);
    else errors.push(`${target.file}: ${current.value ?? "missing"} (expected ${version} from ${config.source.file})`);
  }
  return { version, errors };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  const configPath = resolve(args.includes("--config") ? args[args.indexOf("--config") + 1] : "version-sync.json");
  const config = JSON.parse(readFileSync(configPath, "utf8"));
  const { version, errors } = checkVersionSync(dirname(configPath), config, { write: args.includes("--write") });
  if (errors.length) {
    console.error(errors.join("\n"));
    console.error("\nRun with --write to sync, then commit the changed files.");
    process.exit(1);
  }
  console.log(`OK: version ${version} in ${config.targets.length + 1} files.`);
}
