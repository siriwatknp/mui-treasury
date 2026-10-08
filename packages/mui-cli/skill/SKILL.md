---
name: mui-cli
description: Check a Material UI theme in real renders with the `mui` CLI — asked values in every variant, state, viewport width and pointer type in one call (`verify`), an accessibility gate over every component the theme touches (`verify --all`), every side effect of a theme edit (`diff`), and modern theme options checked against the project's browser targets (`recommend`); where MUI sets a style and which selector wins (`component`); docs demos for Material UI and MUI X. Use when theming MUI (createTheme, styleOverrides), when an override doesn't take effect, or to confirm a theme change worked and broke nothing else.
allowed-tools: Bash(mui:*) Bash(npx:*)
---

# Material UI with mui-cli

The CLI renders Material UI components in Chrome under the project's theme and checks what they really compute. Its data comes from one Material UI release (`mui --version`). If a command warns about the version, run `mui doctor`.

## Theming loop

1. **Write the theme your way.** When unsure where MUI sets a value or which selector wins, `mui component <Name>` lists slots, variants, state selectors and theme links. A base other components build on says so, and also says when it is used on its own (InputBase). Copy MUI's selector when your override must beat it.
2. **Check what the user asked for, in one call:**

   ```bash
   mui verify TextField --theme src/theme.ts \
     --props variant=outlined,label=Name --props variant=filled,label=Name \
     --state "" --state focused --width 390,1280 --pointer fine,coarse \
     --expect InputBase.root.box.height=36px \
     --expect "touch:InputBase.input.fontSize=16px" --expect "mouse:InputBase.input.fontSize=14px"
   ```

   - **Cases:** every `--props` × `--state` × `--width` × `--pointer` combination is one case.
   - **Expectations:** each `--expect` applies to every case. A `touch:`, `mouse:`, `@<900:` or `@>=900:` prefix limits it to some cases. `slot.box.height` / `box.width` check the laid-out box.
   - **Composites** (TextField) render as used. Their parts are addressed as `Part.slot`, including the bases they extend: `InputBase.root` covers every variant.
   - **Slots:** a slot the component lacks resolves to its base (`Input` → `InputBase.input`). Theme keys a component routes to nested parts are slots too (Autocomplete's `inputRoot`, `input`).
   - Exit 1 on any miss. `--values` prints every computed value.
   - **One call per component family, with the values the user asked for.** Cover the variants, states, widths and pointers the brief names. Don't widen the matrix to every prop to feel safe: the gate covers the rest.
3. **Pass the gate:** `mui verify --all --theme <file>` must exit 0.
   - **What it checks:** every component the theme touches and its family, across recorded variants, states, docs compositions and real content cases (long values, typed multiline, long labels, chips, long button text).
   - **Rules:**
     - **a11y:** a 24×24 clickable area or WCAG 2.5.8 spacing; every painted part responds to a click; keyboard focus visibly changes something and no `overflow: hidden` parent cuts the ring.
     - **content:** text never runs under an adornment, icon or chip; never spills out (an intended ellipsis or clip is fine); typed lines stay visible; a label never sits on the value; fields that should match keep one height.
   - **Sheet:** it always prints a contact sheet of real usage (content cases, variants side by side) plus any failing case. Look at it instead of building your own preview.
   - **On failure:** fix the theme, not the check.
4. **Read the side effects:** `mui diff --theme <file>` compares against the theme file at git HEAD (else vanilla; `--against vanilla` forces it).
   - **Output:** one line per changed component; `--full` (or `mui diff <Name> --full`) prints every before → after.
   - **Report** anything the user didn't ask for. A `✗ … failed` line means the report is incomplete; say so.

## Modern options: `mui recommend`

When building a new theme or asked to modernize one, run `mui recommend --theme <file>`. It lists options the theme doesn't use (CSS variables, color schemes, native color, focus ring, reduced motion…), each checked against the project's browser targets (browserslist, Electron version or framework default; `--targets` to override).
- `+`: add the printed snippet and say so. `mui recommend <id> --show` diffs what it changes.
- `✗`: don't adopt it; a target browser can't run it, and the line names which one.
- `cssVariables` / `colorSchemes` on an existing theme: ask first. Code that reads `theme.palette` directly changes.
- **Design tokens** (type scale, uppercase buttons, shadows, radius) are reported only. Changing them is the user's call. Typography and shadows have a Tailwind-inspired preset (`mui recommend shadows --preset tailwind`, add `--show` for its impact) to show the user. Never apply one unasked.
- If it says targets were assumed, tell the user and suggest adding a browserslist.

## Theme code

Generated themes are read and copied, so write overrides the way MUI writes its own styles. The gate fails on every rule here except the last three.

- **Classes:** select with imported `*Classes`, never class strings: `` [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {…} `` with `import { outlinedInputClasses } from '@mui/material/OutlinedInput'`. `mui component` prints selectors in this form.
- **Tokens:** read through `(theme.vars || theme).palette.*` (also `shape`, `shadows`), so a theme with CSS variables uses them.
- **Dark mode:** `...theme.applyStyles('dark', {…})`, never `theme.palette.mode === 'dark'`.
- **Typography:** `theme.typography.*` directly. It isn't exposed as CSS variables.
- **Color helpers:** `theme.alpha` / `theme.darken` / `theme.lighten` in overrides. The standalone imports break on CSS-variable colors.
- **No raw `var(--mui-…)` strings:** read `theme.vars.*` in the callback.
- **No spreading a function into a style object:** make the whole value the callback.
- **Colors:** prefer a palette token or `theme.alpha(token, 0.2)` over a literal `rgba()`.
- **Conditions:** `variants: [{ props: {…}, style: {…} }]` over `ownerState` callbacks.
- **Theme access:** a `styleOverrides` callback `({ theme }) => ({…})`, never an outer theme object closed over.

## Done when

1. One batch `verify` per asked component family passes.
2. `mui verify --all --theme <file>` exits 0.
3. `diff` is read and its side effects are reported.
4. You looked at the gate's contact sheet.

Then stop and report. More checking past this point costs time without changing the result.

## What the checks don't cover

- **Spacing between components** (a control and its label, alignment, overhang): look at the gate's contact sheet (`verify <Component> --all` for one component in all its uses).
- **Visual taste.**
- **MUI X styles** in `verify` and `diff`. The Data Grid, Date Pickers and Tree View have style rows (`component DataGrid`, `component DateCalendar`, `component TreeItem`) and `annotate`; Charts has neither yet.
- **Components that only render inside docs demos** (Accordion, Select's menu, Snackbar…): they use their recorded demo, so `--props` doesn't apply.

## Rules

- **`--json` when parsing:** every command returns `{ type, data }`.
- **Always pass `--theme`.** Without it, values and placement assume plain MUI.
- **Fonts are explicit.** A theme naming a font that is neither a system font nor MUI's default makes `verify` and `diff` exit 1 until you say which font to render with: `--font <package>` (an installed `@fontsource/…`) or `--font "Family=<file>"`. Use the font the app actually loads; ask the user when that isn't clear. `--skip-font` (fallback fonts) only when the user accepts it.
- **"All inputs" / "all buttons" briefs include the bases users render directly:** a bare `InputBase`, or `Select input={<InputBase/>}`. Check them too.
- **Render server:** the first rendering call starts it (~2s); later calls take ~0.2s for 5 idle minutes. `mui server stop` ends it.

## More (read when needed)

- `references/demos.md`: docs demos, MUI X demos, `compose` into one runnable file.
- `references/design-brief.md`: a theme from a design brief (`wizard`, `compile-theme`, `showcase DESIGN.md`).
- `references/pictures.md`: `annotate` measurement images.
