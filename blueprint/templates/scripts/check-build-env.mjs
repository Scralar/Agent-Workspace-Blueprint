// Run before a release build. Fails when a forbidden variable is set or a required one is missing,
// then prints the names (never the values) that may be baked into the build.
// Config (default build-env.json in the repo root):
// {
//   "required": ["PUBLIC_CLIENT_ID"],
//   "allowed": ["PUBLIC_API_URL"],
//   "forbidden": ["OPENAI_API_KEY", "SIGNING_PRIVATE_KEY", "AWS_SECRET_ACCESS_KEY"]
// }
// Your build must read baked values only through the list this script approves (see bakeable()).
// Run: node scripts/check-build-env.mjs [--config path]
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

/** Returns { errors, bakeable } where bakeable lists the names that are set and allowed. */
export function checkBuildEnv(config, env = process.env) {
  const isSet = (name) => String(env[name] ?? "").trim() !== "";
  const errors = [];
  for (const name of config.forbidden ?? []) {
    if (isSet(name)) errors.push(`${name} is set but must never be baked into a build. Unset it for release builds.`);
  }
  for (const name of config.required ?? []) {
    if (!isSet(name)) errors.push(`${name} is required for a release build and is not set.`);
  }
  const forbidden = new Set(config.forbidden ?? []);
  const bakeable = [...(config.required ?? []), ...(config.allowed ?? [])].filter((n) => isSet(n) && !forbidden.has(n));
  return { errors, bakeable };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  const configPath = resolve(args.includes("--config") ? args[args.indexOf("--config") + 1] : "build-env.json");
  const { errors, bakeable } = checkBuildEnv(JSON.parse(readFileSync(configPath, "utf8")));
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exit(1);
  }
  console.log(`OK: may bake ${bakeable.length ? bakeable.join(", ") : "nothing"}.`);
}
