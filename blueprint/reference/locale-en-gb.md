# Reference F: British English (en-GB)

Shared by all repo shapes. Up: [../README.md](../README.md)

Trigger: writing or editing publishable docs, kit text, commit messages, agent chat for this repo, or reviewing agent output.

## Default

**British English (en-GB)** in chat replies and in work (docs, commits, UI copy you author, comments) unless intake recorded another locale or the **product** locale differs by design.

This GitHub repository and the kit it publishes follow en-GB. Maintainers run `node scripts/check-en-gb.mjs` after markdown edits (with link check).

## Keep upstream spelling

Do not “fix” text you do not own:

| Keep as-is | Examples |
|------------|----------|
| Vendor UI labels | `Customize → Rules`, API field names |
| Code, config, identifiers | `color` in CSS/JSON, library API names |
| Proper nouns and trade marks | GitHub, Cursor, `LICENSE` filename |
| Quoted user or spec text | Intake quotes, error messages from tools |

When pointing at a US-spelled menu, use the **exact** label in backticks and optional British prose around it: open **Customize → Rules** (Cursor UI spelling).

## Spelling habits (agents)

Prefer **-ise** / **-isation** (organise, authorisation), **-our** (behaviour, colour in prose you write), **-re** where British uses it (centre in prose you write). Use **licence** (noun) and **license** (verb) in British style: “MIT Licence”, “licensed under”.

Avoid US-only forms in kit prose (see `check-en-gb.mjs`): e.g. `minimize`, `optimize`, `behavior`, `authorization`, `organize`, `favorite`, `gray` as a colour word, `labeled`.

**Punctuation:** no em dashes (—) as clause breaks; no en dashes as clause breaks. Use a comma, colon, parentheses, or a full stop. Hyphens in compounds (`git-config`) and markdown `---` separators are fine.

## Consumer repos

Record locale at intake ([bootstrap.md](../public/bootstrap.md)). If the team chooses en-US or another locale, follow that consistently; do not mix spellings in one doc set.
