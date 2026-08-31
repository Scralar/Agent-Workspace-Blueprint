# Security

This repository is a documentation kit. There is no production service and no user data store.

## What to report

- Secrets accidentally committed to this repository
- Instructions in the kit that would cause agents to leak credentials or to disable safety checks
- A compromised GitHub Action or dependency in `.github/workflows/`

Do **not** open a public issue for an active secret. Use [GitHub private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability) on this repository if it is enabled, or open an issue that says only "please enable private reporting" without the secret.

## What we will not treat as a vulnerability

- An agent following the kit badly in some other project
- Missing features in the tooling catalogue
- Style disagreements

## Secrets in clones

Never commit `.env`, tokens, or `mcp.json` values inline. The kit tells consumer projects to use environment references. This repository's `.gitignore` already excludes `.cursor/` and `.env`.
