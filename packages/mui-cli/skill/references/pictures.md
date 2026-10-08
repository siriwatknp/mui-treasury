# Pictures: annotate

Open every PNG it prints and look at it before telling the user a theme is right. `--shot <file>` sets the path. For a component under the theme in all its uses (variants, its docs demos, compositions, real content), look at the sheet `mui verify <Component> --all --theme <file>` prints.

```bash
mui annotate Button --props size=small --theme ./src/theme.ts  # the component with its height, padding, gap and icon drawn on it (--aspects adds width)
```

MUI X Data Grid: `--slot` names the theme key (`styleOverrides.<slot>`, e.g. `cell`, `columnHeader`, `toolbar`, `cellCheckbox`, `skeletonLoadingOverlay`, `editInputCell`, `root--densityCompact`). Each slot renders on a grid set up to show it (checkbox selection, loading, editing, column groups, the column menu or columns panel opened…). A slot only Pro/Premium, a drag or a focus shows says so instead of drawing; a slot not in the render, hidden or 0-sized exits 1 with which one. `DataGridPro` / `DataGridPremium` share the `MuiDataGrid` key and draw on the community grid.

MUI X Date Pickers: annotate the part, by its theme key — `DateCalendar`, `DayCalendar --slot weekNumber`, `PickerDay`, `PickersCalendarHeader`, `TimeClock`, `ClockPointer --slot thumb`, `DigitalClock --slot item`, `PickersTextField`, `PickersOutlinedInput`, `PickersLayout --slot actionBar`, `DatePickerToolbar`, `PickerPopper --slot paper` (opened). `DatePicker` itself styles nothing; annotate prints its parts. Renders pin "now" to 2026-04-17 10:30 so the today mark doesn't move.

MUI X Charts: annotate the part by its theme key — `ChartsLegend`, `ChartsXAxis`, `ChartsGrid --slot horizontalLine`, `BarPlot`, `BarLabel`, `LinePlot`, `MarkElement`, `PieArc`, `PieArcLabel`, `Gauge --slot valueArc`, `ChartsTooltip --slot paper` (held open on the second bar), `ChartsAxisHighlight`. SVG parts have no padding or gap: draw `height,width`. `BarChart`, `LineChart`… style nothing themselves; annotate lists their parts.

MUI X Tree View: `mui annotate TreeItem --slot content` (also `label`, `iconContainer`, `groupTransition`, `checkbox`, `labelInput` — drawn with the label in edit mode), `SimpleTreeView`, `RichTreeView`.

```bash
mui annotate DataGrid --slot cell --aspects padding,height --theme ./src/theme.ts
```

If `annotate` reports a label collision, pin that label with `--routes <file>` (JSON keyed by aspect, e.g. `{"padding-block": {"gutter": "right", "shift": 20}}`) and re-run.
