# widget-parts

Twelve small parts for chat widgets, drawn from JSON. The look comes from the host page's CSS variables (`--surface-2`, `--text-primary`, `--border`, ...) and Tabler outline icons, so a part matches the chat it sits in, light or dark.

```html
<script src="https://cdn.jsdelivr.net/gh/workflowcat/widget-parts@1.1.0/wp.min.js"></script>
<script>WP([{"p":"answer","icon":"circle-check","tone":"ok","text":"Fixed and live."}])</script>
```

`WP(specs)` draws where the script stands; `WP(specs, 'id')` draws into an element.

| `p` | For | Data |
|---|---|---|
| `answer` | the one-line answer | `icon, tone, text, more, points` |
| `note` | a few sentences and points | `title, icon, text, points` |
| `facts` | label and value rows | `rows: [[icon, label, value, tone]]` |
| `diff` | before and after | `rows`: `"same"`, `[old, new]`, `[old, null]`, `[null, new]` |
| `gate` | yes or no against a checklist | `checks: [[icon, text, 1/0/-1]], verdict` |
| `duel` | A against B | `a, b: {name, icon}, axes: [[label, a, b]]` (0-5) |
| `route` | ways to a goal | `paths: [{name, steps, band:[lo,hi]}], unit` |
| `tree` | what unlocks what | `nodes: [{id, name, icon, s: done/open/locked, need}]` |
| `blast` | what a change touches | `center: {name, icon}, hits: [{name, icon, ring 1-3}]` |
| `plan` | steps and who waits | `steps: [[text, done/now/next/wait/block, "icon:who"]]` |
| `changed` | before and now, for users | `items: [{area, areaIcon, icon, before, now}]` |
| `band` | estimates as ranges | `items: [[label, lo, hi, likely]], unit` |

Every card part also takes `title`, `icon`, `text` (paragraphs split by a blank line; `**bold**` and `` `code` ``), `points` (`[[icon, tone, text]]`) and `act` (`[[label, prompt, icon, hold]]`). Buttons call `sendPrompt(prompt)` when the host has it. `hold: 1` asks for a 0.9 s press. Tones: `ok`, `warn`, `bad`, `info`, `pro`, `mute`, `sub`.

Samples for every part: `examples/gallery.json`. Preview: serve the folder and open `examples/preview.html` (`#dark` for dark).

MIT licence.
