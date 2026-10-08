# Pictures: annotate

Open every PNG it prints and look at it before telling the user a theme is right. `--shot <file>` sets the path. For a component under the theme in all its uses (variants, its docs demos, compositions, real content), look at the sheet `mui verify <Component> --all --theme <file>` prints.

```bash
mui annotate Button --props size=small --theme ./src/theme.ts  # the component with its height, padding, gap and icon drawn on it (--aspects adds width)
```

MUI X Data Grid: `--slot` names the theme key (`styleOverrides.<slot>`): `cell`, `columnHeader`, `columnHeaderTitleContainer`, `toolbar`, `footerContainer`; popups open on their own (`menuList` opens a column menu, `panelContent` the columns panel). `DataGridPro` / `DataGridPremium` share the `MuiDataGrid` key and draw on the community grid.

```bash
mui annotate DataGrid --slot cell --aspects padding,height --theme ./src/theme.ts
```

If `annotate` reports a label collision, pin that label with `--routes <file>` (JSON keyed by aspect, e.g. `{"padding-block": {"gutter": "right", "shift": 20}}`) and re-run.
