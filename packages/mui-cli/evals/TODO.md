# Evals: with vs without the CLI

Each eval gives the same theming brief to two agents in identical fresh projects (Vite + React 19 + `@mui/material` at the pinned version):

- **with CLI:** must use `mui` and follow `skill/SKILL.md`.
- **without CLI:** may not use `mui`, the skill or this repo; the MUI source in `node_modules`, Playwright and screenshots are allowed.

Both deliver `src/theme.ts` (theme only: no `sx`, no wrappers). A **neutral judge** then scores each theme. The judge is a Playwright script that doesn't use the CLI: it renders every state with a real mouse or keyboard and reports sizes, colours, clipping and hit areas. Each theme then also goes through `mui verify <C> --all`.

Run each eval **3× per side** before drawing conclusions. One run is an anecdote.

Record for each run: **wall-clock time** (from launching the agent to its finish notice), **tool calls** and the outcome. Both agents run at the same time on one machine, so time is comparable between the two, but not across machines.

---

## ~~1. Switch: iOS look + unclipped focus-visible~~ ✅ Done (2 rounds per side)

**Brief:** "Theme the Switch from default Material UI to look like an iOS Switch, and enable theme focus visible so the focus-visible indicator appears on the Switch without being clipped. All of the Switch states should not look off."

**Expected gap:** small. It's one component with a handful of states, and the MUI source answers most of it.

### Round 1: CLI before the `verify --all` gate

| | with CLI | without CLI |
|---|---|---|
| Medium track | 42×26 (smaller than iOS) | 51×31 (iOS) |
| Focus ring | `focusVisible: true`; root keeps `overflow: hidden`, 4px padding exactly fits the ring | `focusVisible: true`; root `overflow: visible`, input resized to the track |
| Hit area | input 22px tall → a 1px dead strip along the track edge | exactly the track |
| Gap to label | **4px** (padding shrank from 12 to 4; the label gap was that padding) | 12px for `end`; but `marginLeft: 0` dropped the 16px margin for `start` / `top` / `bottom` |
| Extras | none | dark-mode track colours |
| Proof | every state backed by `mui verify --expect`; `mui diff` Switch-only | its own Playwright scripts |
| Wall-clock time | 3m 43s | 2m 59s |

**Verdict:** a tie on the visible result; the without-CLI theme was more faithful to iOS. Both themes had placement or spacing regressions, and nothing caught them: the CLI's checks covered only the Switch on its own.

**What it led to:** the `verify --all` gate. It runs every variant, every docs composition and the component's family through fixed a11y rules: touch target (24×24 or WCAG 2.5.8 spacing), dead zones, and a focus ring that is present and not clipped. It also renders a contact sheet.

### Round 2: CLI with the `verify --all` gate

| | with CLI | without CLI |
|---|---|---|
| `verify Switch --all` | **62 cases · 251 checks · 0 failed** | **20 failed:** a 1px dead strip along the track (input 27px tall, track 31px) |
| Medium track | 42×26 (again smaller than iOS) | 51×31 (iOS) |
| Focus ring | 6px padding, `overflow: hidden` kept | 4px padding, `overflow: hidden` kept |
| Gap to label | 6px in every placement | 12px for `end`/`start`, **4px** for `top`/`bottom` |
| Default checked colour | primary | primary |
| Wall-clock time | 5m 26s | 4m 32s |

**Verdict:** the gate decided the outcome. The with-CLI agent iterated until the gate passed; the without-CLI theme shipped a dead strip that only the gate showed.

### Takeaways

- **The theme kept stopping at the component.** Neither agent checked Switch inside labels in every placement until the CLI generated those cases.
- **No rule covers spacing.** Gaps between a control and its label (4–6px against plain MUI's 12px) pass every rule. Only the contact sheet shows them.
- **Missing placements.** The Switch docs demo has only `bottom` and `end`, so the `top` and `start` label placements need hand-written composition cases.
- **Size fidelity.** The with-CLI agent chose a 42×26 track twice. That's probably a side effect of budgeting padding for the ring, but the skill could prompt the agent to match the reference size.
- **Bug found and fixed.** Both rounds surfaced a `showcase --verify` bug (the "checked" tile was drawn unchecked, and the "on" colour read a transparent root). It's fixed.

**Artifacts** (`evals/01-switch/`):
- `themes/round{1,2}-{with,no}-cli.ts`: the delivered themes.
- `judge/`: the neutral Playwright judge.
  - `judge.mjs`: 15 states per theme.
  - `montage2.mjs`: the side-by-side image with sizes.
  - `fcl.mjs` / `fcl.tsx`: control-to-label gap and margins for each placement.
  - `hit.mjs`: hidden input box and clicks just outside the track.
  - `main.tsx`: the judge page.
- `round2-side-by-side.png`

---

## ~~2. Inputs: one height across all text inputs~~ ✅ Done (1 run per side)

**Brief:** "Make all inputs 40px tall (including all variants of TextField, Select, and Autocomplete) with font-size 1rem on mobile & tablet but font-size 0.875rem on laptop and up."

**Why the gap should be large:**
- **Height comes from many rules at once.** These include the input's padding, line height (which changes with the font size), the label's resting and shrunk position, the outline's notch, the adornment margins, Autocomplete's own `inputRoot` padding (which beats InputBase), Select's min-height, and multiline. The agent has to work out the padding itself, and a guess fixes one variant and breaks the label or the notch.
- **The height must hold at both font sizes,** so the padding can't be tuned for one of them.
- **The font size changes with the screen,** through `theme.breakpoints` in the overrides or responsive typography. The label's size must follow the input's, or it won't line up with the value.

**Judge:**
- **Widths:** measure at 390px (mobile), 768px (tablet) and 1280px (laptop), where either reading of "laptop" (MUI `md` = 900, `lg` = 1200) agrees.
- **Variants:** outlined / filled / standard × small / medium × empty / with a value / focused, with a label, with start and end adornments, with helper text, and multiline. Plus Select (each of the 3 variants) and Autocomplete (single, multiple with chips).
- **Per variant:**
  - the root's height is exactly 40px;
  - the input's computed font size is 16px or 14px, depending on the width;
  - the resting label sits vertically centred and doesn't overlap the value;
  - the shrunk label sits in the notch, and the notch fits it;
  - the adornments are vertically centred.
- Plus `verify --all` for TextField, Select and Autocomplete.

**Ambiguities to note when judging:**
- **Multiline:** "40px tall" can only mean the minimum height (one line).
- **Small size:** "all variants" includes `size="small"`. An agent may reasonably ask whether small should also be 40px.

### Outcome (1 run per side)

Both agents made the same calls:
- **Breakpoint:** "laptop and up" read as `md` (900px).
- **Small size:** `size="small"` also 40px.
- **Padding:** written as `calc((40px − 1.4375em) / 2)`, so the box holds 40px at either font size.
- **Labels:** sized to match the input.
- **Autocomplete:** its more-specific padding rules restated so the overrides win.

| | with CLI | without CLI |
|---|---|---|
| Judge (1,086 checks: height, font per width, label, notch, adornments, chips) | 44 "failed" | 64 "failed" |
| … of which: filled shrunk label's line box overlaps the value's | 38 | 58 |
| Actual glyph gap, label → value, filled @390 / @1280 | 4.4 / 8.4px | 3.4 / 7.4px |
| … of which: filled Autocomplete with chips over 40px | 6 (55–58px, keeps medium chips) | 6 (43–46px; **made chips small by default**, not asked for) |
| `verify --all` (OutlinedInput, FilledInput, Input, InputBase, Select, Autocomplete) | 0 failed | 0 failed |
| Components changed (`diff --against vanilla`) | 6 (bare InputBase untouched: 32px · 16px, as in plain MUI) | 7 (also **InputBase**, font only: a bare InputBase **shrinks to 29px** on laptop next to 40px fields; TablePagination unaffected, as it sets its own font) |
| Side effect it found and reported | standard-label rule also moves labels paired with a custom InputBase (found by `diff`) | InputBase font reaching TablePagination (predicted by reasoning; **measured: doesn't happen**) |
| `Select input={<InputBase/>}` (docs customized-select pattern) | 32px, not 40 | 32px → 29px, not 40 |
| **Bare `<InputBase>`: "all inputs" includes it** | ✗ untouched: 32px · 16px at every width (font wrong on laptop, height wrong) | ✗ font right (16 → 14px), height wrong (32 → 29px) |
| Tool calls | ~30 | ~17 |
| Wall-clock time | 6m 20s | 5m 12s |

The judge's "overlap" is between line boxes, not glyphs: no glyphs overlap in either theme. A filled field with a label at 40px leaves 3–4px between label and value on mobile (plain MUI, at 56px, leaves about 10px), and both agents flagged it as tight.

**Verdict: a tie, and both miss part of the requirement.** "All inputs (including … TextField, Select, Autocomplete)" names examples, not a limit: a bare `<InputBase>` (public, with its own docs section) is an input too, and neither theme brings it to 40px with the right font. The judge missed it at first, because none of its cases was a bare InputBase. The large gap I predicted didn't appear. Given the MUI source and Playwright, the without-CLI agent found the same cascade traps: Autocomplete's specificity, the label's shrink transform, and textarea autosize rounding (39.88 → `minHeight: 40`). The differences are in **scope discipline**:
- the with-CLI agent kept the font rule off bare InputBase and left chip sizes alone;
- the without-CLI agent changed both. Its InputBase change was a half-change: font only, so bare inputs shrink on laptop. Neither theme reaches 40px for `Select input={<InputBase/>}`.

The CLI cost about 13 more tool calls and 22% more time.

**What it says about the CLI:**
- **Lookups:** they didn't change the outcome. A capable agent reads the same rules from the source.
- **`diff`:** it surfaced a side effect the agent wouldn't otherwise have looked for (labels next to a custom InputBase).
- **Missing check:** neither agent nor the gate checked text clearance between label and value. A minimum label-to-value glyph gap could be a rule.
- **`verify` has no width option,** so it can't check breakpoint-dependent values (the font at 390 vs 1280). Agents had to fall back to Playwright for that.
- **InputBase framed as internal:** `mui component InputBase` lists "extended by: FilledInput, Input, OutlinedInput" and "part of: TablePagination" but never "used on its own as an input". The with-CLI agent read that as an internal base and kept the font off it "so TablePagination's select doesn't change". That concern was unfounded, since TablePagination sets its own font. **Fix:** list the docs demos that use a component on its own (search box, customized selects) under "related".
- **Placement went unused:** `theme --set` can't target a negated variant ("not multiline"), so the with-CLI agent wrote every override by hand.
- **TextField:** `verify TextField` errors with "unknown component" (TextField is a composite with no style rows of its own), so agents have to know to check OutlinedInput, FilledInput and Input instead.

**Judge gap:** add bare `<InputBase>` and `<Select input={<InputBase/>}>` cases before the next run.

**Artifacts** (`evals/02-inputs/`):
- `themes/{with,no}-cli.ts`: the delivered themes.
- `judge/`:
  - `main.tsx`: 66 cases × 3 widths.
  - `judge.mjs`: the scorer.
  - `overlap.mjs`: glyph gaps.
  - `montage.mjs`: the side-by-side image.
- `judge-score.json`
- `inputs-side-by-side.png`


## ~~2.1 Inputs: 36px, static label above, font by pointer type~~ ✅ Done (3 runs per side)

**Brief:** "Theme all inputs to 36px tall (not including label/helper text) by opting out of the floating label (a static label above the input), with font-size 1rem on touch viewports and 0.875rem on pointer viewports."

**Why the gap should be large:**
- **The label stays put.** Opting out of the floating label means it never moves: it sits above the box whether the field is empty, has a value or is focused. Outlined loses its notch (MUI's `notched` / legend). Filled and standard stop reserving room for a label inside the box. The placeholder must show while empty, because MUI hides it until the label shrinks.
- **"Touch vs pointer" is a media feature, not a width:** `(pointer: coarse)` or `(hover: none)`, not a breakpoint.
- **"All inputs" means all of them:** bare `InputBase`, `Select input={<InputBase/>}`, NativeSelect and Autocomplete included.

**Judge:**
- **Emulation:** Chrome DevTools media emulation with 4 combinations — touch @390, touch @1280, pointer @390, pointer @1280. Width-based answers fail the mixed ones.
- **Per case** (outlined / filled / standard × small / medium × empty / with value / focused; placeholder, adornments, helper text, multiline, Select, NativeSelect, Autocomplete single and chips, bare InputBase, `Select input={<InputBase/>}`):
  - the root's height is 36px;
  - the font is 16px on touch, 14px on pointer;
  - the label sits fully above the box and doesn't move between empty, value and focused;
  - outlined has no notch;
  - the placeholder is visible while empty;
  - the value text is centred;
  - adornments are centred;
  - chips fit inside the box.
- Plus `verify --all` on the input components.

### Outcome (1 run per side)

Both agents made the same core calls:
- **Static label:** `InputLabel` defaults to `shrink: true` and sits in the normal flow above the box.
- **No notch:** the notch is removed (with-CLI hides the legend; no-CLI sets `notched: false`).
- **Font:** 1rem by default, 0.875rem under `@media (pointer: fine)`.
- **Small size:** `size="small"` is 36px too.
- **Chips:** made small so a row of chips fits.

| | with CLI | without CLI |
|---|---|---|
| Judge (2,872 checks; 4 views: touch/pointer × 390/1280) | **12 failed** | **0 failed** |
| … of which: bare `<InputBase>`, `Select input={<InputBase/>}` | ✗ 32px on touch, **29px on pointer**: font applied, height not ("treated bare InputBase as unstyled") | ✓ 36px |
| Label above the box and never moving, no notch, placeholder visible, font by pointer type, centring, chips | ✓ | ✓ |
| `verify --all` (OutlinedInput, FilledInput, Input, InputBase, InputLabel, Select, Autocomplete) | 0 failed | 0 failed |
| Components changed (`diff --against vanilla`) | 7 | 8 (also TablePagination: its rows select 29 → 36px, consistent with "all inputs") |
| Theme size | 143 lines | 118 lines |
| Wall-clock time | **7m 59s** | **4m 37s** |
| Tool calls | ~35 | (not reported) |

**Verdict: without CLI wins.** Its theme is fully correct, smaller, and took 42% less time. The with-CLI agent repeated #2's scope call and left a bare InputBase out of the height, even though the brief now says just "all inputs". That's again consistent with how `mui component InputBase` frames InputBase: "extended by … / part of TablePagination", never "an input on its own".

**CLI bugs this eval exposed (all fixed after the run):**
1. **Touch emulation has never worked.**
   - **What's broken:** `interact` sets media emulation in a DevTools session and then detaches it, which drops every emulation (print, forced-colors, touch). Separately, Chrome ignores the `hover` and `pointer` features in `setEmulatedMedia`; only `Emulation.setTouchEmulationEnabled` drives `(hover: none)` and `(pointer: coarse)`.
   - **What it affects:** `verify --touch` and the media-based renders in `sync-renders`. The 2 rows "confirmed by a touch render" only matched because their values are the same without touch.
   - The judge first hit the same pitfall and was fixed.
   - ✅ Fixed: one DevTools session per page, kept open; touch through `setTouchEmulationEnabled`. The 25 components with media rows were re-synced.
2. **`verify` returned stale results right after a theme edit.** The warm page keeps the theme module it imported first. ✅ Fixed: before each run the server checks the theme folders for changed files, drops those modules from Vite and reloads the pages.
3. **`theme --set` placed an override that lost** to MUI's filled start-adornment selector, which repeats `&` for extra weight. `theme` reported the loss itself. ✅ Fixed: placement evaluates the component's own prop classes (`.MuiInputAdornment-positionStart` = `position="start"`, `:not(.…-hiddenLabel)`) and now places the override under MUI's selector.
4. **`theme --props multiline=true`** prints `'true'` as a string in the variant matcher, so it never matches. ✅ Fixed: booleans and `null` print bare.
5. **InputBase framing** (as in #2): standalone uses aren't listed. ✅ Fixed: `mui component InputBase` now says "also used on its own: 6 docs demos (…) — not only a base". The data is recorded by `sync-compositions`.
6. **`verify TextField` was a dead end** ("unknown component"). ✅ Fixed: it now names the parts TextField is made of, from the component graph.

**Judge lesson:** emulate touch with `Emulation.setTouchEmulationEnabled` (keeping the session open), and assert `matchMedia('(pointer: coarse)')` before measuring.

**Artifacts** (`evals/02.1-inputs-static-label/`):
- `themes/{with,no}-cli.ts`: the delivered themes.
- `judge/`:
  - `main.tsx`: 76 cases.
  - `judge.mjs`: the scorer, with 4 emulated views.
  - `montage.mjs`: the side-by-side image.
- `judge-score.json`
- `inputs21-side-by-side.png`

### Round 2 (after ADR 0019 + 0020: batch `verify`, composites, `--width`/`--pointer`, whole-theme gate, content rules, slim skill)

The judge gained its own content cases, written separately from the CLI's: a long value under `$`/`kg`, a password with an eye button, a long label, typed multiline, a long Select option, Autocomplete chips with typing. 2,944 checks.

| | with CLI | without CLI |
|---|---|---|
| Judge | **0 failed** | **0 failed** |
| `verify --all --theme` (a11y + content) | 124 cases · 501 checks · 0 failed | 134 cases · 516 checks · 0 failed |
| Bare `InputBase` | ✓ 36px (one InputBase-level override) | ✓ 36px |
| Theme size | **98 lines** | 156 lines |
| Wall-clock time | **10m 04s** | **4m 16s** |
| Tool calls | ~30 | (not reported) |

**Verdict:** a tie on quality, and the CLI was 2.4× slower, worse than round 1's 1.7×. The fixes did not buy speed.
- **What the with-CLI agent did with the time:**
  - a 208-case `verify TextField` matrix;
  - 48-case matrices on InputBase, OutlinedInput and FilledInput;
  - Select and NativeSelect checks;
  - the gate, `diff`, and its own Playwright screenshots on top.
- **Over-checking:** batch `verify` made exhaustive checking cheap per call, so the agent did more of it.
- **Its screenshot, not the CLI, caught its two real bugs:** a 16px gap above the standard label, and a filled `$` adornment making the root 40px. No CLI check covers either. The gate isn't about sizes, and its own `verify` matrix had no adornment case.
- **CLI gains this time:**
  - **Leaner theme:** InputBase-level overrides cover every variant, bare InputBase and TablePagination's select from one place.
  - **Side effects:** `diff` listed them (TablePagination select 29 → 36px).
- **CLI gaps it hit:**
  - `verify Input` addresses no `input.*` slot (Input has no input rows of its own; `InputBase.input` is the one).
  - Autocomplete's base generated case renders nothing.
  - Its Playwright couldn't emulate a coarse pointer, so touch fonts were checked only by `verify --pointer coarse`.

**Takeaway for the skill:** tell agents to batch the asked values in **one** `verify` call per component family and stop there, not expand to every prop. Add size expectations in the content cases (e.g. `box.height`) so a filled adornment that grows the box is caught by the gate rather than a screenshot.

**Artifacts:** `round2/themes/{with,no}-cli.ts`, `round2/judge/` (the judge with content cases), `round2/judge-score.json`.

**Follow-ups done after round 2 (re-run in round 3):**
- **Skill:** a "Done when" stop condition (one batch `verify` per asked family, the gate, `diff`, a look at the sheet, then stop), and "don't widen the matrix".
- **`verify`:** a slot the component lacks resolves to its base (`Input` → `InputBase.input`). Routed theme keys are slots too (Autocomplete's `inputRoot`, `input`, found by their route when several keys share one element).
- **Autocomplete:** its generated render passes `options` and `renderInput` (a TextField), so it renders on its own.
- **Gate:** a `same-height` content rule (`data-same-height` groups in content cases); it catches the filled `$` growing the box.

### Round 3 (after the round 2 follow-ups: skill stop condition, base/routed slots, Autocomplete renders alone, same-height rule)

Same brief, prompts and judge as round 2.

| | with CLI | without CLI |
|---|---|---|
| Judge (2,944 checks) | **0 failed** | **0 failed** (8 once the judge checked the label gap, below) |
| `verify --all --theme` | 0 failed | 0 failed |
| Label gap above the field | **4px on every variant** | 6px outlined/filled, **22px standard** |
| Label font | 14px everywhere (its assumption: the touch/pointer rule is for the input text only) | follows the input (16px touch, 14px pointer) |
| Typed 3-line multiline, touch | 96px | 105px |
| Chips | small by default (both) | small by default (both) |
| Components changed (`diff --against vanilla`) | 8 (no InputAdornment: `hiddenLabel` on FilledInput instead) | 9 |
| Theme size | 106 lines | 94 lines |
| Wall-clock time | **9m 36s** | **4m 06s** |
| Tool calls | 35 | 22 |

**Verdict: with CLI ships the better theme, but not because of the CLI.**
- **The no-CLI bug:** its standard label sits 22px above the field. MUI writes the standard variant's label margin as `label + &, .MuiInputLabel-root + &`. The no-CLI override wrote only `label + &`, which loses on specificity (0,1,1 vs 0,2,0), so the 16px margin stays. That is a silent cascade loss of the kind `theme --set` placement reports.
- **Who caught it:** the with-CLI agent had the same bug. Its own Playwright screenshot found it, not `verify`, the gate or `diff`. That's the third round in a row where a with-CLI bug was caught by the agent's screenshot.
- **Missed by every check:** the judge, the gate and both agents' `verify` calls pass a 22px gap. Nothing compares the label gap across variants.
- **Speed:** the stop condition didn't shorten the run (2.3× slower, against 2.4× in round 2). The agent still ran a 224-case `verify TextField` matrix (every variant × size × state × width × pointer), plus separate calls for every other input.

**Time breakdown (with CLI, 9m 36s):**
- 4m 18s: two 224-case `verify TextField` runs. About 3m 20s of that was 48 select cases that threw and each waited about 2.1s.
- 1m 56s: reading, then writing the theme.
- 1m 19s: its own Playwright preview, because a passing gate wrote no sheet and `showcase` knows only Button and Switch.
- 1m 08s: other `verify`, the gate and `diff`.
- 55s: the fix and the report.

**Follow-ups (ADR 0021):**
- ~~**Gate:** a `same-gap` content rule~~ ✅ Done (`content-cases/_shared/LabelGap.tsx`; it fails the no-CLI theme, passes with-CLI and plain MUI).
  - Removed 2026-10-07: label placement per variant is the design system's choice (ADR 0027).
- ~~**Judge:** label gap equal across variants~~ ✅ Done (`round3/judge/judge.mjs`: no-CLI 8 failed, with-CLI 0).
- ~~**TextField `select=true` renders nothing in `verify`**~~ ✅ Done (default options), plus dead renders fail fast: that agent's 224-case call went from about 120s to 20.8s.
- ~~**Gate sheet only on failure**~~ ✅ Done: a passing whole-theme run also writes a sheet of its content cases.
- **Skill: matrix size.** No cap needed: working cases cost about 0.1s each, so 224 cases take about 20s. The cost was dead renders.
- **Estimate for a re-run:** about 4m 40s (not re-run yet).

**Artifacts:** `round3/themes/{with,no}-cli.ts`, `round3/judge-score.json`, `round3/inputs21-round3-side-by-side.png` (judge: `round2/judge/`).

## 3. Specificity: overrides that must win in every state (recommended next)

**Brief:** "Outlined Button: 2px border in every state, including hover, disabled and touch devices. ToggleButton selected background X, and also selected+hover."

**Why the gap should be large:** MUI's state selectors beat naive overrides: `.Mui-disabled`, hover inside `@media (hover: none)`, and `.Mui-selected:hover`. Overrides then fail silently in exactly the states an agent doesn't try.

**Judge:** computed value for each state × variant, with touch emulated for hover, and `verify --all`.

## ~~3.1 Inputs: focus shown by `theme.focusVisible`, like Button~~ ✅ Done (1 run per side)

**Brief:** "Change the focus indicator of all inputs from the border color to `theme.focusVisible`. When focused, inputs should show the same focus ring as a Button does when focus-visible."

**Why the gap should be large:**
- **Inputs don't use `theme.focusVisible`.** MUI 9.4 wires the ring into about 30 components (Button, Chip, Checkbox, Switch, Tab…), but not into OutlinedInput, FilledInput, Input or InputBase. They show focus only through `.Mui-focused`:
  - outlined: the outline's border color and width;
  - filled and standard: the underline's `::after` bar scaling in.

  The agent has to add the ring itself and remove all of those.
- **"The same ring as Button":** the ring is the resolved `theme.focusVisible` (outline color, width, style and offset, from `palette.primary.main` unless authored). Button adds `shadows[6]` to its box-shadow. The input ring should match the outline, not Button's elevation.
- **Where the ring goes:** on the root (the box), not the native `<input>` inside its padding. That covers Select's display, Autocomplete's `inputRoot`, multiline, adornments and a bare InputBase. The outline must follow the root's border radius, and no parent may clip it: Autocomplete's popup, a Dialog or Card, or a parent with `overflow: hidden`.
- **States:**
  - the ring shows on keyboard focus;
  - text inputs match `:focus-visible` on a mouse click too, so they ring then as well;
  - the rest look is unchanged;
  - disabled has no ring;
  - error keeps its red border or underline. Whether the ring turns red is the agent's call, to state.
- **"All inputs":** as in #2: outlined, filled and standard × small and medium; Select; NativeSelect; Autocomplete (single and chips); multiline; bare InputBase; `Select input={<InputBase/>}`.

**Judge:**
- On keyboard focus (Tab) and on mouse focus, read the root's computed `outline-*` and `box-shadow` and compare them with a focus-visible Button's under the same theme. Match the outline; ignore Button's elevation shadow.
- Focused vs rest: the outline border color and width (outlined), and the underline's `::after` transform and color (filled, standard), must not change.
- The ring isn't clipped: the root's outline box fits inside every ancestor with `overflow` other than visible. Check in a Dialog, a Card and an open Autocomplete.
- Disabled has no ring. Light and dark schemes, if the theme defines dark.
- Plus `verify --all`.

**Note for the CLI:** the gate's focus rule passes any visible change on focus, so a border-color focus passes it too. It can't tell whether the ring is the theme's. Either the judge carries this, or `verify --expect` checks the ring per input (e.g. `root.outlineStyle=solid` on a focused case).

### Outcome (1 run per side, after ADRs 0021–0023)

Both agents made the same core calls:
- **`focusVisible: true`** plus `MuiInputBase.root '&.Mui-focused': theme.focusVisible`. One override covers every input: variants, Select, NativeSelect, Autocomplete, bare InputBase.
- **Outlined:** the focused border stays at its rest look (1px, 23% black); hover still darkens it, and error keeps red.
- **Filled / standard:** the focus underline (`::after`) stays hidden.
- **The same trick, found independently:** the ring ran through the outlined floating label, so both gave the focused label a background patch (`background.default` with CLI, `background.paper` without) and side padding. Both say it shows as a box on colored surfaces.
- **Ring colour:** primary, even for error and `color="secondary"`.

| | with CLI | without CLI |
|---|---|---|
| Judge (354 checks: ring = Button's outline on keyboard and mouse focus, border/underline unchanged, not clipped, no ring at rest) | **0 failed** | **0 failed** |
| Error fields on focus (a note, not a failure: the brief leaves error styling to the agent) | outlined error stays 1px when focused, but filled/standard error still slide in the 2px red focus bar (`:not(.Mui-error)`): inconsistent between variants | no change on focus in any variant (`&.Mui-focused::after { transform: scaleX(0) }`) |
| `verify --all --theme` | 933 cases · 0 failed | 933 cases · 0 failed |
| Side effects reported | **yes, from `diff`:** `focusVisible: true` also replaces the grey focus background of MenuItem, ListItemButton, AccordionSummary and PaginationItem with the ring, removes CardActionArea's focus overlay, and adds a box-shadow layer to Fab | none mentioned |
| Theme size | 63 lines | 78 lines |
| Wall-clock time | **6m 51s** | **4m 27s** |
| Tool calls | 26 | 20 |

**Verdict: a tie on the brief; with CLI wins on reporting, and is 54% slower.** Only the with-CLI agent told the user that `focusVisible: true` changes the focus look of other components. That's the brief's biggest side effect, and the no-CLI agent didn't notice it. The with-CLI theme treats focused error fields inconsistently across variants.

**Judge correction:** the first scoring failed with-CLI 8 times for the error focus bar. That was stricter than the brief, which leaves error styling to the agent, so the judge now records it as a note.

**What the gate couldn't do:** the focus rule passes any visible change on focus, so a border-colour focus would pass too. Both themes passed with 933 cases. `focusVisible` is a global key, so the gate covered all 109 components, which took **54s**. Checking the ring itself fell to the agent's `verify --expect …outline…`.

**CLI bugs this eval exposed (both fixed after the run):**
1. **Border widths:** `--expect notchedOutline.borderWidth=1px` reported "want 0px". The want is read back from a scratch element with no border style, and a border without a style computes to 0 width. ✅ Fixed: the scratch gets a solid style for border/outline widths.
2. **`verify Autocomplete --expect InputBase.root…` gave "no-element".** The graph doesn't count the TextField its `renderInput` draws. ✅ Fixed: the generated render's parts (TextField and what it composes) are Autocomplete's parts.

**Follow-up ideas (not done):**
- **Gate: one focus look per family.** The inputs had two focus looks (ring on Button, border colour on inputs) and the gate passed both. A rule could require that, when `theme.focusVisible` is set, every focusable component's focused look includes that outline. That's the brief's intent as a fixed rule.
- **Gate time on global keys:** 54s for all 109 components. Restricting the gate to components whose renders actually change (as `diff` does) would cut it.
- **Judge gap:** the judge doesn't check the ring over the floating label; both agents caught it by eye.

**Artifacts** (`evals/03.1-inputs-focus-visible/`): `themes/{with,no}-cli.ts`, `themes/judge-reference.ts` (a 6-override theme the judge passes, proving the judge can pass), `judge/` (`main.tsx`, `judge.mjs`, `montage.mjs`), `judge-score.json`, `focus-side-by-side.png`.

## 4. Global value with knock-on effects

**Brief:** "Change `shape.borderRadius` to 12" (and separately: "change the primary palette to X").

**Why:** it spreads into Chip, Alert, ToggleButtonGroup, ButtonGroup (inner corners must stay square), Slider and Badge, which are components the agent never opens.

**Judge:** needs a written spec of intended changes first, so the judge can separate regressions from intended effects. Count of unintended changes, using `mui diff` against plain MUI.

## 5. Portalled and popup components

**Brief:** "Menu items 8px vertical padding, the Tooltip arrow matches its background, Autocomplete options 36px tall, Select menu max height 300px."

**Why:** none of it is on the page until opened, and the styles live on slots like `paper`, `listbox` and `popper`. Without opening them an agent can't check its work, and often styles the wrong slot.

**Judge:** measured in the open state (the judge must open each popup).

## 6. Focus rings across the system

**Brief:** "Replace ripples with a 2px focus ring on every interactive component."

**Why:** this eval's failure across ~25 controls. Rings get clipped by `overflow: hidden` (Switch, Tab, Chip with delete, ListItemButton inside a List). An active TableSortLabel loses its focus colour, and inputs need a border, not an outline.

**Judge:** `verify --all` for each interactive component, plus the contact sheets. Needs the whole-theme gate (`mui verify --all --theme <file>` with no component), which isn't built yet.

## 7. Compact density for dense data UIs

**Brief:** "List, Table, MenuItem, Chip and IconButton about 25% tighter."

**Why:** touch targets drop below 24, padding moves off the clickable element (dead zones), and icon buttons in a table row end up too close together.

**Judge:** `verify --all` failures and measured sizes against the 25% target.

## 8. Dark mode via `colorSchemes`

**Brief:** "Brand dark theme where hover, selected and disabled states stay readable."

**Why:** hover and selected colours are opacity layers on top of the palette, so they shift in dark mode, and agents test only light mode.

**Judge:** computed contrast for each state in both schemes, plus `showcase --scheme dark`.
