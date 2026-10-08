# Pictures: annotate

Open every PNG it prints and look at it before telling the user a theme is right. `--shot <file>` sets the path. For a component under the theme in all its uses (variants, its docs demos, compositions, real content), look at the sheet `mui verify <Component> --all --theme <file>` prints.

```bash
mui annotate Button --props size=small --theme ./src/theme.ts  # the component with its height, padding, gap and icon drawn on it (--aspects adds width)
```

MUI X Data Grid: `--slot` names the theme key (`styleOverrides.<slot>`, e.g. `cell`, `columnHeader`, `toolbar`, `cellCheckbox`, `skeletonLoadingOverlay`, `editInputCell`, `root--densityCompact`). Each slot renders on a grid set up to show it (checkbox selection, loading, editing, column groups, the column menu or columns panel opened…). A slot only Pro/Premium, a drag or a focus shows says so instead of drawing; a slot not in the render, hidden or 0-sized exits 1 with which one. `DataGridPro` / `DataGridPremium` share the `MuiDataGrid` key and draw on the community grid.

```bash
mui annotate DataGrid --slot cell --aspects padding,height --theme ./src/theme.ts
```

If `annotate` reports a label collision, pin that label with `--routes <file>` (JSON keyed by aspect, e.g. `{"padding-block": {"gutter": "right", "shift": 20}}`) and re-run.
