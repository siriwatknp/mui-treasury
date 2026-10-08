/**
 * @file MUI X products with style rows: the package a product's styles come from and the theme keys it owns.
 * Data lives in data/x/<product>/ (seams.json, graph.json, renders.json), produced by `pnpm sync-seams-x` / `sync-renders-x`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR } from './data.mjs';

export const X_STYLED = {
  'data-grid': {
    package: '@mui/x-data-grid',
    keys: ['MuiDataGrid'],
    exports: { MuiDataGrid: 'DataGrid' },
  },
  // chart parts render through the chart that draws them (MuiBarLabel → BarChart)
  charts: {
    package: '@mui/x-charts',
    keys: ['MuiChartsWrapper', 'MuiChartsLayerContainer', 'MuiChartsSvgLayer', 'MuiChartsLegend', 'MuiChartsLabelMark', 'MuiChartsAxis', 'MuiChartsXAxis', 'MuiChartsYAxis', 'MuiChartsGrid', 'MuiBarPlot', 'MuiBarLabel', 'MuiChartsTooltip', 'MuiChartsAxisHighlight', 'MuiChartsAxisHighlightValue', 'MuiChartsToolbar', 'MuiContinuousColorLegend', 'MuiChartsLabelGradient', 'MuiPiecewiseColorLegend', 'MuiChartsRadialGrid', 'MuiChartsRadialAxisHighlight', 'MuiLinePlot', 'MuiAreaPlot', 'MuiMarkPlot', 'MuiMarkElement', 'MuiScatterPlot', 'MuiPieArcPlot', 'MuiPieArc', 'MuiPieArcLabelPlot', 'MuiPieArcLabel', 'MuiGauge'],
    exports: { MuiChartsWrapper: 'BarChart', MuiChartsLayerContainer: 'BarChart', MuiChartsSvgLayer: 'BarChart', MuiChartsLegend: 'BarChart', MuiChartsLabelMark: 'BarChart', MuiChartsAxis: 'BarChart', MuiChartsXAxis: 'BarChart', MuiChartsYAxis: 'BarChart', MuiChartsGrid: 'BarChart', MuiBarPlot: 'BarChart', MuiBarLabel: 'BarChart', MuiChartsTooltip: 'BarChart', MuiChartsAxisHighlight: 'BarChart', MuiChartsAxisHighlightValue: 'BarChart', MuiChartsToolbar: 'BarChart', MuiContinuousColorLegend: 'BarChart', MuiChartsLabelGradient: 'BarChart', MuiPiecewiseColorLegend: 'BarChart', MuiChartsRadialGrid: 'BarChart', MuiChartsRadialAxisHighlight: 'BarChart', MuiLinePlot: 'LineChart', MuiAreaPlot: 'LineChart', MuiMarkPlot: 'LineChart', MuiMarkElement: 'LineChart', MuiScatterPlot: 'ScatterChart', MuiPieArcPlot: 'PieChart', MuiPieArc: 'PieChart', MuiPieArcLabelPlot: 'PieChart', MuiPieArcLabel: 'PieChart', MuiGauge: 'Gauge' },
  },
  // a key with no export of its own renders through the export that shows it inline (MuiDayCalendar → DateCalendar)
  'date-pickers': {
    package: '@mui/x-date-pickers',
    keys: ['MuiDateCalendar', 'MuiDayCalendar', 'MuiPickersCalendarHeader', 'MuiPickersArrowSwitcher', 'MuiPickerDay', 'MuiPickersFadeTransitionGroup', 'MuiPickersSlideTransition', 'MuiDayCalendarSkeleton', 'MuiMonthCalendar', 'MuiYearCalendar', 'MuiTimeClock', 'MuiClock', 'MuiClockPointer', 'MuiClockNumber', 'MuiDigitalClock', 'MuiMultiSectionDigitalClock', 'MuiMultiSectionDigitalClockSection', 'MuiPickersTextField', 'MuiPickersInputBase', 'MuiPickersOutlinedInput', 'MuiPickersFilledInput', 'MuiPickersInput', 'MuiPickersSectionList', 'MuiPickersLayout', 'MuiPickersToolbar', 'MuiDatePickerToolbar', 'MuiTimePickerToolbar', 'MuiPickersToolbarText', 'MuiPickersToolbarButton', 'MuiDateTimePickerToolbar', 'MuiDateTimePickerTabs', 'MuiPickerPopper'],
    exports: { MuiDateCalendar: 'DateCalendar', MuiDayCalendar: 'DateCalendar', MuiPickersCalendarHeader: 'DateCalendar', MuiPickersArrowSwitcher: 'DateCalendar', MuiPickerDay: 'DateCalendar', MuiPickersFadeTransitionGroup: 'DateCalendar', MuiPickersSlideTransition: 'DateCalendar', MuiDayCalendarSkeleton: 'DayCalendarSkeleton', MuiMonthCalendar: 'MonthCalendar', MuiYearCalendar: 'YearCalendar', MuiTimeClock: 'TimeClock', MuiClock: 'TimeClock', MuiClockPointer: 'TimeClock', MuiClockNumber: 'TimeClock', MuiDigitalClock: 'DigitalClock', MuiMultiSectionDigitalClock: 'MultiSectionDigitalClock', MuiMultiSectionDigitalClockSection: 'MultiSectionDigitalClock', MuiPickersTextField: 'DateField', MuiPickersInputBase: 'DateField', MuiPickersOutlinedInput: 'DateField', MuiPickersFilledInput: 'DateField', MuiPickersInput: 'DateField', MuiPickersSectionList: 'DateField', MuiPickersLayout: 'StaticDatePicker', MuiPickersToolbar: 'StaticDatePicker', MuiDatePickerToolbar: 'StaticDatePicker', MuiTimePickerToolbar: 'StaticTimePicker', MuiPickersToolbarText: 'StaticTimePicker', MuiPickersToolbarButton: 'StaticTimePicker', MuiDateTimePickerToolbar: 'StaticDateTimePicker', MuiDateTimePickerTabs: 'StaticDateTimePicker', MuiPickerPopper: 'DesktopDatePicker' },
  },
  'tree-view': {
    package: '@mui/x-tree-view',
    keys: ['MuiSimpleTreeView', 'MuiRichTreeView', 'MuiTreeItem', 'MuiTreeItemLoader', 'MuiTreeItemDragAndDropOverlay'],
    exports: { MuiSimpleTreeView: 'SimpleTreeView', MuiRichTreeView: 'RichTreeView', MuiTreeItem: 'TreeItem', MuiTreeItemLoader: 'TreeItemLoader', MuiTreeItemDragAndDropOverlay: 'TreeItemDragAndDropOverlay' },
  },
};

export const xDataDir = (product) => path.join(DATA_DIR, 'x', product);

/** Products whose style rows were generated into this build. */
export const xStyledProducts = () => Object.keys(X_STYLED).filter((product) => fs.existsSync(path.join(xDataDir(product), 'seams.json')));

/** The X product owning a theme key (`MuiDataGrid` → data-grid), or null for Material UI keys. */
export const xProductOfKey = (key) => Object.entries(X_STYLED).find(([, p]) => p.keys.includes(key))?.[0] ?? null;

/** `import … from …` for a theme key's component as `C`: X exports are named, Material UI's default per folder. */
export function importOf(key) {
  const product = xProductOfKey(key);
  return product
    ? `import { ${X_STYLED[product].exports[key]} as C } from '${X_STYLED[product].package}';`
    : `import C from '@mui/material/${key.replace(/^Mui/, '')}';`;
}
