# Docs demos and compose

Real runnable usage synced from the Material UI and MUI X docs — use these instead of writing demo code from scratch.

## Single demos

```bash
mui demos Button                          # DEMO / SECTION / DESCRIPTION table
mui demos Switch ControlledSwitches       # prints the .tsx source
mui demos Switch ControlledSwitches --js  # the docs' own JavaScript version
mui demos tag                             # aliases resolve: tag → Chip, input → TextField
```

## MUI X (data-grid, charts, date-pickers, tree-view)

```bash
mui component DatePicker                  # feature map: FEATURE / PLAN / DEMOS (DateTimePicker, tree, charts… resolve too); DataGrid prints its style rows instead
mui demos data-grid                       # every demo of the product, with its FEATURE
mui demos data-grid filtering             # one feature's demos (SECTION column)
mui demos data-grid filtering QuickFilteringGrid [--js]
mui compose data-grid/filtering:QuickFilteringGrid charts/lines:LineDataset -o demos.tsx
```

PLAN (community / pro / premium) comes from the packages each demo imports — a `pro`/`premium` demo needs a commercial license; say so before handing it over. Feature names can hold a `/` (`rich-tree-view/editing`). Style commands cover Material UI, plus the Data Grid for `component` rows and `annotate`.

Demo names are the DEMO column **verbatim — case-sensitive PascalCase**. A miss prints the valid candidates; use one of those, don't guess variants. `--copy` writes the user's SYSTEM clipboard (only useful when the user asked for that).

## `compose` — several demos → ONE runnable file

```bash
mui compose Switch:BasicSwitches Checkbox:Checkboxes Tabs:BasicTabs \
  --theme ./src/theme.ts -o composed-demos.tsx
```

- Imports dedupe; name collisions auto-suffix (`label` → `label2`) with every usage rewritten (found by a syntax-tree pass when the data was built — strings and property keys are left alone) — trust the rename notes it prints.
- `--js` composes the docs' own JavaScript versions.
- `--theme` wraps everything in `<ThemeProvider>`, imported relative to `-o`.
- A `needs:` note lists packages beyond `react` + `@mui/material` that the composition imports (e.g. `@mui/icons-material`, `@mui/x-data-grid`). NO note = the file runs on `@mui/material` alone. Install the listed packages where the file will run — compose reports, it does not install.
- Demos that import docs **data files** (`./top100Films`, MUI X's shared `../dataset/weather`) pull them in automatically, flattened next to the output with the imports rewritten to `./<name>`: with `-o` the files are written next to the output (`emitted: top100Films.ts (data file of ComboBox)`, transitive imports included); without `-o` a `data file needed:` note tells you to rerun with `-o` or take the sources from `--json` (`data.assets`). An `unresolved:` note means the data file was never captured — the output will not run as-is; relay that to the user.
- Without `-o`, source goes to stdout and notes go to stderr (pipes stay clean).
