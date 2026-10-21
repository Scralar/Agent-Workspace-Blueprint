# British English and punctuation

Up: [../README.md](../README.md).

**Default:** British English (en-GB) in chat and in work (docs, commits, comments, UI text you write), unless the project or product locale differs by design. Checked by [../templates/scripts/check-en-gb.mjs](../templates/scripts/check-en-gb.mjs).

- Prefer -ise and -isation (organise, authorisation), -our (behaviour, colour in prose), -re (centre in prose), licence as a noun and license as a verb.
- Keep upstream spelling for code, config keys, API names, vendor UI labels and quoted text (`color` in CSS, `Customize` in Cursor).

## Punctuation

No em dashes and no en dashes, anywhere. Use a comma, colon, parentheses or a full stop; write ranges as "5 to 10". Hyphens in compound words and markdown `---` rules are fine. Checked by [../templates/scripts/check-punctuation.mjs](../templates/scripts/check-punctuation.mjs).
