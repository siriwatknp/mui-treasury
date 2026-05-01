# Primitive Demo Design

How to design the showcase render for any registry primitive — `category: "primitive"` items under `registry/components/<name>/`. Applies to both the standalone preview at `/preview/<name>` and the OG card emitted from the same render.

Scope: this doc is about the **demo composition** — what to put on the canvas and how. File/meta conventions live in `registry.md`; baseline + OG mechanics live in `visual-regression.md`; demo-file syntax (`Demo` export, imports) lives in `development.md`.

For `*-mui-treasury` themed-primitive references, all of this applies — additionally follow `registry.md` §6 for naming/dependencies/pinning.

## Hard constraints

| #   | Constraint                                                                                | Why                                 |
| --- | ----------------------------------------------------------------------------------------- | ----------------------------------- |
| H1  | Fits in 630px height canvas, no scroll.                                                   | Same render is the OG card.         |
| H2  | Light + dark baselines must render identically to source (no state drift, no fake props). | Visual regression trust.            |
| H3  | Deterministic — no `Date.now()`, `Math.random()`, no animation in initial render.         | Per `CLAUDE.md` registry-demo rule. |

## Editorial criteria

| #   | Criterion                                                                                                                                                                                                                                                | Why                                                                            |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| C1  | **Editorial, not exhaustive.** Pick 4–6 states max. Skip the rest. Don't try to be a docs page.                                                                                                                                                          | 630px doesn't fit a full matrix.                                               |
| C2  | **Lead with the primitive's signature state.** The one state that defines this primitive's visual identity. If you skip it, the showcase is generic.                                                                                                     | See signature table below.                                                     |
| C3  | **Anchor on one realistic composition, not a row of isolated examples.** A coherent mini-scene that _naturally_ exercises multiple states.                                                                                                               | Compositions read as "I could ship this." Isolated rows read as a docs sample. |
| C4  | **Show validation/error in context, exactly once.** Don't repeat error styling across sections.                                                                                                                                                          | Error chrome is loud; it dominates if shown twice.                             |
| C5  | **Bare primitive only when it adds info the composition can't show.**                                                                                                                                                                                    | C1 — editorial.                                                                |
| C6  | **One non-default semantic color, only if the theme treats it distinctively.** Skip otherwise.                                                                                                                                                           | Color matrix wastes vertical budget.                                           |
| C7  | **No fake props.** Don't pass props the component doesn't support (e.g. `size="large"` on `Checkbox` → silently falls back to medium). Check the component's prop union.                                                                                 | Catches the most common showcase bug.                                          |
| C8  | **Realistic labels.** Production-style copy ("Read", "Write", "Admin", "I agree to terms"). No `Lorem`, no single-letter labels.                                                                                                                         | Readers project onto real apps.                                                |
| C9  | **Section headers are showcase-level, not `FormLabel`.** Use `Typography variant="subtitle1"` (`fontWeight: 600`) for scene headers. Reserve `FormLabel`/`FormHelperText` for the validation scene where they're load-bearing.                           | Mixing showcase chrome with form chrome creates inconsistent rhythm.           |
| C10 | **Layout: `flex` + `justifyContent: 'center'` + content-sized scenes.** For 2 scenes, prefer this over `gridTemplateColumns: '1fr 1fr'` — the grid stretches scenes apart and reads loose as an OG card. For 3+ scenes, the grid wins. Default `gap: 8`. | Same render is the OG card. Layout has two audiences.                          |

## Signature state per primitive

The state to lead with — the one a reader wants to see _this implementation_ handle. Skip it and the demo could be any library's primitive.

| Primitive    | Signature state                                        |
| ------------ | ------------------------------------------------------ |
| Checkbox     | indeterminate (esp. select-all parent)                 |
| Radio        | selected-in-group (active vs. siblings)                |
| Switch       | checked, on-color (track + thumb)                      |
| Select       | open menu (option list + selected)                     |
| TextField    | focused with helper text                               |
| Tabs         | active indicator                                       |
| Button       | hover/active on each variant (contained/outlined/text) |
| ButtonGroup  | selected segment in a real toolbar                     |
| ToggleButton | selected in a group                                    |
| Slider       | track fill + thumb at non-zero value                   |
| Tooltip      | open tooltip on a real trigger                         |
| Menu         | selected item with icons + disabled neighbor           |
| Autocomplete | open dropdown + multi-chip selected value              |
| Avatar       | AvatarGroup with overflow (+N)                         |
| Badge        | non-zero `badgeContent` overlapping a real icon        |
| Chip         | filled/outlined mix as filter chips, one deletable     |
| List         | selected `ListItemButton` in a nav list                |
| Table        | `TableHead` + 3+ data rows in outlined `Paper`         |
| Typography   | h1–h6 scale ladder (one column)                        |
| Alert        | all four severities stacked (color signature)          |
| Dialog       | `DialogTitle` + Content + Actions in elevated `Paper`  |
| Progress     | determinate fill at non-zero, both circular + linear   |
| Snackbar     | dark `SnackbarContent` with action button              |
| Accordion    | one expanded + sibling collapsed                       |
| AppBar       | filled primary bar with toolbar items                  |
| Breadcrumbs  | 3+ links with separator + terminal `Typography`        |
| Pagination   | active page highlighted in mid-range count             |
| Stepper      | active step mid-flow, prior steps with check marks     |
| Rating       | partial fill (3.5/5) + hover affordance                |

Add to this table when redoing a new primitive. If the table doesn't list it, ask: "what's the one state that, if missing, makes this look like any other library's primitive?"

## Don't conflate primitives — match the real-world composition

The most common showcase mistake is rendering a primitive in the wrong real-world container. A switch is not "a checkbox with a different shape" — it lives in a different kind of UI. Choose the composition that matches where readers actually encounter the primitive in production.

| Primitive                 | Lives in (real-world habitat)                                                                  | Composition shape                                                                                                                                                                | Anti-pattern                                                                               |
| ------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Checkbox**              | Forms, multi-select lists, bulk actions, terms & conditions (Gmail, Asana, GitHub file picker) | Inline `FormControlLabel` rows, often with select-all parent                                                                                                                     | Single isolated checkbox in a settings row — that's a switch                               |
| **Switch**                | **Settings panels** (Linear, iOS, GitHub repo settings)                                        | Wide row: **title + description on left, Switch on far right**. Stack rows in an outlined `Paper` with `Divider` between. The label is a _setting name_, not a form field label. | Inline `FormControlLabel` like a checkbox — implies form input, not immediate state change |
| **Radio**                 | Forms with mutually exclusive choice (plan picker, account type, shipping option)              | `RadioGroup` with `FormControlLabel` rows, often inside a card                                                                                                                   | Stacked single-choice "yes/no" — use Switch for binary preferences                         |
| **ToggleButton**          | Editor toolbars (text alignment, view mode)                                                    | `ToggleButtonGroup exclusive` — icon-only or icon+label, no inline `FormControlLabel`                                                                                            | Vertical list with labels next to each — that's a Radio                                    |
| **Select / Autocomplete** | Form fields                                                                                    | `FormControl` with `InputLabel` + `Select`/`Autocomplete`                                                                                                                        | Inline label outside the input — breaks alignment with adjacent TextFields                 |
| **Slider**                | Form input (price range), audio/volume controls                                                | Standalone with a heading above + value label visible                                                                                                                            | FormControlLabel — Slider doesn't accept one                                               |
| **Menu**                  | Dropdown trigger from a button or `IconButton`                                                 | Floating Paper rendered inline (use `MenuList` + `Paper`, not a real `Menu` modal)                                                                                               | Inline list — that's `List`                                                                |

When in doubt: open the equivalent feature in Linear, GitHub, Asana, or a system settings UI. Match what they do.

## Recommended shape (2-scene)

Default to two scenes, side by side, content-sized, centered:

- **Scene A — Signature scene.** Realistic composition that exercises the signature state alongside checked/unchecked/disabled as a side effect of the composition. Example for Checkbox: workspace permissions with select-all parent (indeterminate) + 4 children (one disabled+checked).
- **Scene B — Complementary scene.** Different axis from Scene A. For form controls (Checkbox, Radio, Switch, TextField, Select, Slider, Autocomplete): use a **validation/error** scene — single `FormControl error` with helper text in a realistic mini-form. The only place error chrome appears.

Section header per scene via `Typography variant="subtitle1"` `sx={{ mb: 1, fontWeight: 600 }}`.

### When the 2-scene shape doesn't fit

Some primitives have no natural error state, or are wide/full-width and don't pair side-by-side. Pick the variant that matches the primitive:

| Primitive shape                                                        | Layout                                                                                                                   | Examples                              |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| **Wide horizontal surface** — full-width bar/header                    | Vertical stack of 1–2 variants. No Scene B if one composition tells the whole story.                                     | AppBar, Breadcrumbs                   |
| **Vertical-collapse / multi-step** — orientation is the variation axis | Vertical stack of 2 (e.g., one expanded + one with featured content). No validation scene.                               | Accordion, Stepper                    |
| **Tabular surface** — already a self-contained Paper                   | Single hero composition (one outlined `Paper` with TableHead + rows). No Scene B.                                        | Table                                 |
| **Modal / overlay** — needs surrounding Paper to read as a card        | 2-up grid of distinct dialogs (Confirm + Form), or single hero.                                                          | Dialog                                |
| **Display primitive** — no validation, no interaction                  | 2-scene where Scene B is a _different placement_ (e.g., Avatar standalone vs. AvatarGroup; Badge on Icon vs. on Avatar). | Avatar, Badge, Chip, Typography, List |
| **Severity / status family** — variation IS the signature              | Single column of all severities stacked, one with action. No Scene B.                                                    | Alert, Snackbar                       |
| **Determinate vs. indeterminate variant family**                       | 2-row stack: determinate row + indeterminate row, both linear+circular. No validation scene.                             | Progress                              |
| **Pagination / nav controls**                                          | Realistic placement (e.g., table footer) + variant comparison row. No validation scene.                                  | Pagination                            |
| **Settings toggle row** — title + description + control on right       | Single outlined `Paper` containing a `Stack` of rows separated by `Divider`. No Scene B; the panel IS the showcase.      | Switch                                |

When in doubt: ship the signature state in a real composition, skip Scene B.

## Layout snippet

```tsx
<Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
  }}
>
  <Box>{/* Scene A */}</Box>
  <Box>{/* Scene B */}</Box>
</Box>
```

## Spacing — outside-in, simplest first

Pursue simplicity: one source of truth for outer breathing room, one source of truth for inter-child gaps. Patching individual children's `sx` to compensate for missing wrapper padding is an anti-pattern — it scatters spacing logic, makes the code fragile, and produces asymmetric results when one override is forgotten.

Apply spacing in this order:

1. **Identify parent and children.** What is the outer container, what sits inside?
2. **Parent padding — set it based on what the parent is**:
   - **Surface parent** (outlined / bordered / shadowed / elevated `Paper` / `Card`): put padding on the **parent** (e.g. `Paper sx={{ p: 3 }}`). If the children carry default edge-touching padding (Dialog\* components, Snackbar\*, etc.), **zero them** (`sx={{ p: 0 }}`) so the parent's padding is authoritative.
   - **Bare parent** (no border/background): usually no padding needed; the outer canvas provides the breathing room. The parent is just a layout shell.
3. **Inter-child gap — based on parent layout**:
   - **Flexbox / Grid / `Stack`** parent: use `gap` (or `Stack spacing`) for the rhythm between children. Don't use child margins for sibling rhythm — gap on the parent is one source of truth.
4. **Child margin — only for one-off needs.** If a single child needs extra space relative to its siblings, put margin on that child. Rare. If you reach for child margins repeatedly, the parent's `gap` is the wrong value.

### Example — Dialog showcase

```tsx
// ❌ Patched paddings on each child — scattered, asymmetric, fragile
<Paper>
  <DialogTitle sx={{ pt: 3 }}>...</DialogTitle>
  <DialogContent>...</DialogContent>
  <DialogActions sx={{ px: 3, pb: 3, pt: 1 }}>...</DialogActions>
</Paper>

// ✓ One source of truth — Paper owns outer padding, Stack owns inter-section rhythm
<Paper sx={{ p: 3 }}>
  <Stack spacing={2}>
    <DialogTitle sx={{ p: 0 }}>...</DialogTitle>
    <DialogContent sx={{ p: 0 }}>...</DialogContent>
    <DialogActions sx={{ p: 0 }}>...</DialogActions>
  </Stack>
</Paper>
```

To change the outer padding: edit one line (Paper's `p`). To change the inter-section rhythm: edit one line (Stack's `spacing`). No per-side overrides.

## Attention to details

When you regenerate a baseline, **read it like you've never seen the demo before** — not like you're verifying the fix you just shipped. The "look-for-what-I-fixed" pattern misses the side effects of your own changes. Scan the whole image, in both light and dark, against this checklist:

- **Vertical rhythm.** Title → content → actions: are the gaps consistent? Does one card breathe more than its sibling? A "fix" that adds an absolutely-positioned element between two siblings can silently break MUI's adjacent-sibling selectors (e.g. `.MuiDialogTitle-root + .MuiDialogContent-root` zeroes DialogContent's top padding _only_ when DialogTitle is the immediate previous sibling).
- **Alignment.** Are icons vertically centered with the text they sit beside? Are columns aligned to the same baseline? Are items in the same row sharing a baseline (closing brackets / right edges / button heights)?
- **Overlaps and collisions.** Floating elements (close icons, badges, tooltips, value labels, popovers) crashing into adjacent content, section headers, or each other. Common offenders: `Slider valueLabelDisplay="on"` colliding with the heading above; `Tooltip placement="top"` colliding with the section header; absolutely-positioned `IconButton` overlapping the title text it was meant to sit beside.
- **Side effects of your own JSX.** Adding an element between two MUI components can break a CSS adjacency selector. Wrapping a component in a Box can collapse its margin. Pulling a component out of its parent (e.g. `DialogTitle` outside `Dialog`) loses cascading style assumptions.
- **Container breathing room.** Children pulled out of their original wrapper (`Dialog`, `Modal`, `Drawer`, `Snackbar`) carry default paddings tuned for that wrapper. Inline in a `Paper`, those defaults are inconsistent (e.g. `DialogActions` ships with 8px vs `DialogTitle`'s 24px sides) and contents jam against the Paper edges. Fix by following **Spacing — outside-in**: put padding on the parent `Paper`, zero the children's edge paddings. Don't patch each child's `sx` to compensate — that scatters spacing logic and produces the asymmetries the rule warns against.
- **Cross-scene consistency.** When the demo has 2+ scenes, compare them side-by-side: same heading style? Same internal padding? Same control alignment? Different is allowed only when intentional.
- **Both color schemes.** Dark mode often reveals contrast issues, dropped borders, invisible dividers, or surfaces that disappear into the background. Always read `<name>-mui-treasury-dark.png` too, not just the light baseline.
- **Anti-confirmation-bias check.** Before declaring done, ask: "if I were reviewing someone else's PR, would I leave a comment on this image?" If yes — fix it before claiming the task is complete.

## Common bugs

- **Code says `defaultChecked`, render shows unchecked.** Stale baseline or controlled-vs-uncontrolled mix-up. Re-run baseline with `--update-snapshots`.
- **`size="large"` on Checkbox/Radio/Switch.** These only support `small | medium`. Use `Slider`/`IconButton` if you need a larger control surface; otherwise drop the row.
- **`FormControl error` doesn't make the Checkbox/Radio red.** It only colors `FormLabel` and `FormHelperText`. That's idiomatic — keep it. If you need a red checkbox itself, pass `color="error"` on the control.
- **Indeterminate parent stays "checked" forever.** `indeterminate` is a visual flag; it doesn't change `checked`. Both props must be derived from children state.

## After implementing

1. Lint + tsc must pass for the file.
2. Delete old baseline + regenerate: `rm apps/e2e/tests/visual.spec.ts-snapshots/<name>{,-dark}.png && CI=1 pnpm --filter e2e exec playwright test --project=visual -g <name> --update-snapshots`.
3. `pnpm sync:og`.
4. Read both baselines (light + dark) and confirm: signature state visible, no dead zones beyond `PreviewComponent`'s natural vertical centering, error chrome appears in exactly one place.
