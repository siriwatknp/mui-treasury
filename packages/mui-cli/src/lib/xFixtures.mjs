/**
 * @file Render fixtures for MUI X components (RENDER_DEFAULTS entries): fixed data, and named scenarios a slot needs to
 * show (`scenario` prop, from data/x/<product>/renders.json slotProps) — checkbox selection, loading, editing…
 */

// the grid fills its parent and lays rows out from the measured size: a sized frame, fixed rows
export const DATA_GRID = {
  imports: `import { GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
const rows = [
  { id: 1, name: 'Ada Lovelace', role: 'Engineer', projects: 12, active: true, bio: 'Wrote the first published algorithm for a machine.' },
  { id: 2, name: 'Grace Hopper', role: 'Admiral', projects: 8, active: false, bio: 'Built the first compiler.' },
  { id: 3, name: 'Alan Turing', role: 'Researcher', projects: 5, active: true, bio: 'Defined computability.' },
  { id: 4, name: 'Katherine Johnson', role: 'Mathematician', projects: 9, active: true, bio: 'Calculated orbital trajectories.' },
];
const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'role', headerName: 'Role', flex: 1 },
  { field: 'projects', headerName: 'Projects', type: 'number', width: 120 },
];
const typed = [
  { field: 'name', headerName: 'Name', width: 160, headerAlign: 'left' },
  { field: 'role', headerName: 'Role', width: 130, align: 'center', headerAlign: 'center', display: 'flex' },
  { field: 'active', headerName: 'Active', type: 'boolean', width: 80 },
  { field: 'bio', headerName: 'Bio', type: 'longText', width: 140 },
  { field: 'actions', type: 'actions', width: 70, getActions: () => [<GridActionsCellItem key="edit" icon={node} label="Edit" />] },
];
const editable = typed.filter((c) => c.field !== 'actions').map((c) => ({ ...c, editable: true }));
const many = Array.from({ length: 20 }, (_, i) => ({ ...rows[i % 4], id: i + 1 }));
const scenarios = {
  checkbox: { checkboxSelection: true, rowSelectionModel: { type: 'include', ids: new Set([1]) } },
  loading: { loading: true, rows: [] },
  empty: { rows: [] },
  'no-toolbar': { slots: { toolbar: null } },
  'legacy-toolbar': { showToolbar: true, slots: { toolbar: GridToolbar } },
  types: { columns: typed },
  'sorted-filtered': { sortModel: [{ field: 'name', sort: 'asc' }], filterModel: { items: [{ field: 'role', operator: 'contains', value: 'e' }] } },
  'cell-editing': { columns: editable, cellModesModel: { 1: { name: { mode: 'edit' }, active: { mode: 'edit' }, bio: { mode: 'edit' } } } },
  'row-editing': { columns: editable, editMode: 'row', rowModesModel: { 1: { mode: 'edit' } } },
  groups: { columnGroupingModel: [{ groupId: 'Person', children: [{ field: 'name' }, { field: 'role' }] }] },
  'dynamic-height': { getRowHeight: () => 'auto' },
  overflow: { rows: many, columns: columns.map((c) => ({ ...c, flex: undefined, width: 300 })) },
  'columns-panel': { showToolbar: true, initialState: { preferencePanel: { open: true, openedPanelValue: 'columns' } } },
  'filters-panel': { showToolbar: true, initialState: { preferencePanel: { open: true, openedPanelValue: 'filters' } } },
};
`,
  props: '{ rows, columns, disableVirtualization: true, ...scenarios[props.scenario] }',
  local: ['scenario'],
  content: 'undefined',
  frame: { width: 640, height: 360 },
};

// one product tree, a branch expanded and a leaf selected; `checkbox` selects with checkboxes, `editing` lets a label be edited
const TREE_SCENARIOS = `const scenarios = {
  checkbox: { checkboxSelection: true, multiSelect: true, defaultSelectedItems: ['grid-pro'] },
  editing: { isItemEditable: true },
};
`;

// TreeItem renders inside a RichTreeView too (its default item), so both theme keys use this tree
export const RICH_TREE_VIEW = {
  imports: `import { RichTreeView as Tree } from '@mui/x-tree-view';
const items = [
  { id: 'grid', label: 'Data Grid', children: [{ id: 'grid-community', label: 'Community' }, { id: 'grid-pro', label: 'Pro' }] },
  { id: 'pickers', label: 'Date Pickers' },
];
${TREE_SCENARIOS}`,
  props: "{ items, defaultExpandedItems: ['grid'], defaultSelectedItems: 'grid-pro', ...scenarios[props.scenario] }",
  local: ['scenario'],
  render: (spread) => `<div style={{ width: 280 }}><Tree ${spread} /></div>`,
};

export const SIMPLE_TREE_VIEW = {
  imports: `import { TreeItem } from '@mui/x-tree-view';
${TREE_SCENARIOS}`,
  props: "{ defaultExpandedItems: ['grid'], defaultSelectedItems: 'grid-pro', ...scenarios[props.scenario] }",
  local: ['scenario'],
  render: (spread) =>
    `<div style={{ width: 280 }}><C ${spread}><TreeItem itemId="grid" label="Data Grid"><TreeItem itemId="grid-community" label="Community" /><TreeItem itemId="grid-pro" label="Pro" /></TreeItem><TreeItem itemId="pickers" label="Date Pickers" /></C></div>`,
};

// "now" is the real clock in MUI X pickers (today's highlight, the Today action): the adapter pins it so renders repeat
const PICKER_SETUP = `import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DayCalendarSkeleton } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
const NOW = '2026-04-17T10:30:00';
class FixedNowAdapter extends AdapterDayjs {
  constructor(options) {
    super(options);
    const date = this.date;
    this.date = (v, timezone) => date(v === undefined ? NOW : v, timezone);
  }
}
const day = dayjs(NOW);
const scenarios = {
  'week-number': { displayWeekNumber: true },
  loading: { loading: true, renderLoading: () => <DayCalendarSkeleton /> },
  outside: { showDaysOutsideCurrentMonth: true },
  switcher: { showViewSwitcher: true },
  shortcuts: { slotProps: { shortcuts: { items: [{ label: 'Today', getValue: () => day }] } } },
  'action-bar': { slotProps: { actionBar: { actions: ['clear', 'today', 'cancel', 'accept'] } } },
  error: { minDate: day.add(1, 'day') },
  'min-time': { minTime: day.hour(11).minute(0) },
};
`;

const picker = (props) => ({
  imports: PICKER_SETUP,
  props: `{ ${props}, ...scenarios[props.scenario] }`,
  local: ['scenario'],
  render: (spread) => `<LocalizationProvider dateAdapter={FixedNowAdapter}><C ${spread} /></LocalizationProvider>`,
});

const calendar = picker('value: day, reduceAnimations: false');
const clock = picker('value: day, ampm: true, ampmInClock: true');
const field = (variant) => picker(`value: day, label: 'Start date'${variant ? `, variant: '${variant}'` : ''}`);
const staticPicker = picker("value: day, ampm: true, slotProps: { tabs: { hidden: false } }");

/** Fixtures per MUI X Date Pickers theme key; each renders through the export xStyled names for it. */
export const DATE_PICKERS = {
  MuiDateCalendar: calendar,
  MuiDayCalendar: calendar,
  MuiPickersCalendarHeader: calendar,
  MuiPickersArrowSwitcher: calendar,
  MuiPickerDay: calendar,
  MuiPickersFadeTransitionGroup: calendar,
  MuiPickersSlideTransition: calendar,
  MuiDayCalendarSkeleton: picker('style: {}'),
  MuiMonthCalendar: picker('value: day'),
  MuiYearCalendar: picker('value: day'),
  MuiTimeClock: clock,
  MuiClock: clock,
  MuiClockPointer: clock,
  MuiClockNumber: clock,
  MuiDigitalClock: picker('value: day'),
  MuiMultiSectionDigitalClock: picker('value: day'),
  MuiMultiSectionDigitalClockSection: picker('value: day'),
  MuiPickersTextField: field(),
  MuiPickersInputBase: field(),
  MuiPickersOutlinedInput: field(),
  MuiPickersSectionList: field(),
  MuiPickersFilledInput: field('filled'),
  MuiPickersInput: field('standard'),
  MuiPickersLayout: staticPicker,
  MuiPickersToolbar: staticPicker,
  MuiDatePickerToolbar: staticPicker,
  MuiTimePickerToolbar: staticPicker,
  MuiPickersToolbarText: staticPicker,
  MuiPickersToolbarButton: staticPicker,
  MuiDateTimePickerToolbar: staticPicker,
  MuiDateTimePickerTabs: staticPicker,
  MuiPickerPopper: picker('value: day, open: true'),
  // Pickers Pro: a 5-day range from the pinned date; time-range pickers have no static form, so they open
  MuiDateRangeCalendar: picker("value: [day, day.add(4, 'day')]"),
  MuiDateRangePickerDay: picker("value: [day, day.add(4, 'day')]"),
  MuiMultiInputDateRangeField: picker("value: [day, day.add(4, 'day')]"),
  MuiMultiInputTimeRangeField: picker("value: [day, day.add(2, 'hour')]"),
  MuiMultiInputDateTimeRangeField: picker("value: [day, day.add(4, 'day')]"),
  MuiDateRangePickerToolbar: picker("value: [day, day.add(4, 'day')]"),
  MuiTimeRangePickerToolbar: picker("value: [day, day.add(2, 'hour')], open: true"),
  MuiTimeRangePickerTabs: picker("value: [day, day.add(2, 'hour')], open: true"),
  MuiDateTimeRangePickerToolbar: picker("value: [day, day.add(4, 'day')], open: true"),
  MuiDateTimeRangePickerTabs: picker("value: [day, day.add(4, 'day')], open: true"),
};

// fixed data, no animation; the tooltip and axis highlight are held open through their controlled props, not a pointer
const CHART_SETUP = `import { ChartsAxisHighlightValue, ContinuousColorLegend, PiecewiseColorLegend, Toolbar } from '@mui/x-charts';
// it portals into the chart's layer container, whose ref is unset on the chart's first render: mount it once the chart has
function AfterChart(props) {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => setReady(true), []);
  return ready ? <ChartsAxisHighlightValue {...props} /> : null;
}
const bar = { series: [{ id: 'revenue', label: 'Revenue', data: [3, 5, 2] }], xAxis: [{ id: 'x', data: ['Q1', 'Q2', 'Q3'], scaleType: 'band' }], width: 420, height: 260, skipAnimation: true };
const line = { series: [{ id: 'visits', label: 'Visits', data: [3, 5, 2, 6], showMark: true, shape: 'square', area: true }], xAxis: [{ id: 'x', data: [1, 2, 3, 4], scaleType: 'point' }], width: 420, height: 260, skipAnimation: true };
const scatter = { series: [{ id: 'points', label: 'Points', data: [{ x: 1, y: 2, id: 1 }, { x: 2, y: 5, id: 2 }, { x: 4, y: 3, id: 3 }] }], width: 420, height: 260 };
const pie = { series: [{ id: 'share', arcLabel: 'value', data: [{ id: 0, value: 10, label: 'Web' }, { id: 1, value: 20, label: 'Mobile' }, { id: 2, value: 15, label: 'Desktop' }] }], width: 320, height: 220, skipAnimation: true };
const scenarios = {
  grid: { grid: { horizontal: true, vertical: true } },
  'bar-label': { series: [{ ...bar.series[0], barLabel: 'value' }] },
  tooltip: { tooltipAxis: [{ axisId: 'x', dataIndex: 1 }] },
  highlight: { highlightedAxis: [{ axisId: 'x', dataIndex: 1 }] },
  toolbar: { showToolbar: true, slots: { toolbar: Toolbar } },
  continuous: { yAxis: [{ colorMap: { type: 'continuous', min: 0, max: 6, color: ['#90caf9', '#0d47a1'] } }], slots: { legend: ContinuousColorLegend }, slotProps: { legend: { axisDirection: 'y' } } },
  piecewise: { yAxis: [{ colorMap: { type: 'piecewise', thresholds: [3], colors: ['#f44336', '#2196f3'] } }], slots: { legend: PiecewiseColorLegend }, slotProps: { legend: { axisDirection: 'y' } } },
};
`;

const chart = (base, children = '') => ({
  imports: CHART_SETUP,
  props: `{ ...${base}, ...scenarios[props.scenario] }`,
  local: ['scenario'],
  render: (spread) => `<C ${spread}>${children}</C>`,
});

const barChart = chart('bar');

/** Fixtures per MUI X Charts theme key; each renders through the chart xStyled names for it. */
export const CHARTS = {
  ...Object.fromEntries(
    ['MuiChartsWrapper', 'MuiChartsLayerContainer', 'MuiChartsSvgLayer', 'MuiChartsLegend', 'MuiChartsLabelMark', 'MuiChartsAxis', 'MuiChartsXAxis', 'MuiChartsYAxis', 'MuiChartsGrid', 'MuiBarPlot', 'MuiBarLabel', 'MuiChartsTooltip', 'MuiChartsAxisHighlight', 'MuiChartsToolbar', 'MuiContinuousColorLegend', 'MuiChartsLabelGradient', 'MuiPiecewiseColorLegend', 'MuiChartsRadialGrid', 'MuiChartsRadialAxisHighlight'].map((key) => [key, barChart]),
  ),
  // shows only beside a highlight, so it is composed in with a fixed value
  MuiChartsAxisHighlightValue: chart('bar', '<AfterChart axisDirection="x" value="Q2" />'),
  ...Object.fromEntries(['MuiLinePlot', 'MuiAreaPlot', 'MuiMarkPlot', 'MuiMarkElement'].map((key) => [key, chart('line')])),
  MuiScatterPlot: chart('scatter'),
  ...Object.fromEntries(['MuiPieArcPlot', 'MuiPieArc', 'MuiPieArcLabelPlot', 'MuiPieArcLabel'].map((key) => [key, chart('pie')])),
  MuiGauge: chart('{ value: 60, width: 200, height: 200, skipAnimation: true }'),
};

// DataGridPremium (covers Pro): only the slots that need it render here, so a project without it never imports it.
// No license key, so MUI's "missing license" watermark shows in pictures
export const DATA_GRID_PREMIUM = {
  requires: ['@mui/x-data-grid-premium'],
  imports: `import { DataGridPremium, GridAiAssistantPanel } from '@mui/x-data-grid-premium';
const at = new Date('2026-04-17T10:30:00');
const rows = [
  { id: 1, name: 'Ada Lovelace', role: 'Engineer', projects: 12, active: true, bio: 'Wrote the first published algorithm.' },
  { id: 2, name: 'Grace Hopper', role: 'Engineer', projects: 8, active: false, bio: 'Built the first compiler.' },
  { id: 3, name: 'Alan Turing', role: 'Researcher', projects: 5, active: true, bio: 'Defined computability.' },
  { id: 4, name: 'Katherine Johnson', role: 'Researcher', projects: 9, active: true, bio: 'Calculated orbital trajectories.' },
];
const columns = [
  { field: 'name', headerName: 'Name', width: 160 },
  { field: 'role', headerName: 'Role', width: 140 },
  { field: 'projects', headerName: 'Projects', type: 'number', width: 120 },
  { field: 'active', headerName: 'Active', type: 'boolean', width: 110 },
  { field: 'bio', headerName: 'Bio', width: 260 },
];
const pinnedRow = (id, name) => ({ id, name, role: '-', projects: 0, active: true, bio: '' });
const scenarios = {
  base: {},
  pinned: {
    initialState: { pinnedColumns: { left: ['name'], right: ['active'] } },
    pinnedRows: { top: [pinnedRow('pt', 'Pinned top')], bottom: [pinnedRow('pb', 'Pinned bottom')] },
    showCellVerticalBorder: true,
    showColumnVerticalBorder: true,
  },
  // pinned columns with room below the rows: the filler row carries pinned fillers
  'pinned-columns': { initialState: { pinnedColumns: { left: ['name'], right: ['active'] } } },
  grouping: { defaultGroupingExpansionDepth: -1, initialState: { rowGrouping: { model: ['role'] }, aggregation: { model: { projects: 'sum' } } } },
  'tree-data': { treeData: true, getTreeDataPath: (row) => [row.role, row.name], defaultGroupingExpansionDepth: -1 },
  'detail-panel': {
    getDetailPanelContent: ({ row }) => <div style={{ padding: 8 }}>{row.bio}</div>,
    getDetailPanelHeight: () => 56,
    initialState: { detailPanel: { expandedRowIds: new Set([1]) } },
  },
  reorder: { rowReordering: true },
  'header-filters': { headerFilters: true, initialState: { filter: { filterModel: { items: [{ field: 'bio', operator: 'isNotEmpty' }] } } } },
  'cell-selection': {
    columns: columns.map((c) => (c.field === 'name' || c.field === 'role' ? { ...c, editable: true } : c)),
    cellSelection: true,
    cellSelectionFillHandle: true,
    initialState: { cellSelection: { 1: { name: true, role: true }, 2: { name: true, role: true } } },
  },
  'multi-filter': {
    showToolbar: true,
    initialState: {
      preferencePanel: { open: true, openedPanelValue: 'filters' },
      filter: { filterModel: { logicOperator: 'or', items: [{ id: 1, field: 'name', operator: 'contains', value: 'a' }, { id: 2, field: 'role', operator: 'isNotEmpty' }] } },
    },
  },
  'columns-panel': { showToolbar: true, initialState: { preferencePanel: { open: true, openedPanelValue: 'columns' } } },
  pivot: { initialState: { sidebar: { open: true, value: 'pivot' }, pivoting: { model: { rows: [{ field: 'role' }], columns: [], values: [{ field: 'projects', aggFunc: 'sum' }] } } } },
  ai: {
    showToolbar: true,
    aiAssistant: true,
    slots: { aiAssistantPanel: GridAiAssistantPanel },
    onPrompt: () => new Promise(() => {}),
    aiAssistantSuggestions: [{ value: 'Group by role' }, { value: 'Sort by projects' }],
    initialState: {
      preferencePanel: { open: true, openedPanelValue: 'aiAssistant' },
      aiAssistant: {
        activeConversationIndex: 0,
        conversations: [{ id: 'c1', title: 'Team', prompts: [
          { value: 'Sort by projects', createdAt: at, response: { conversationId: 'c1', select: -1, filters: [], aggregation: {}, sorting: [{ column: 'projects', direction: 'desc' }], grouping: [], pivoting: {}, chart: null } },
          { value: 'Broken request', createdAt: at, variant: 'error', helperText: 'Something failed' },
        ] }],
      },
    },
  },
  'multi-select': {
    columns: [...columns.slice(0, 3), { field: 'tags', headerName: 'Tags', type: 'multiSelect', width: 220, valueOptions: ['Engineer', 'Researcher', 'Frontend', 'Backend'], valueGetter: (value, row) => [row.role, 'Frontend', 'Backend'] }],
  },
  loading: { loading: true, slotProps: { loadingOverlay: { variant: 'skeleton', noRowsVariant: 'skeleton' } } },
};
`,
  props: '{ rows, columns, disableVirtualization: true, ...scenarios[props.scenario ?? \'base\'] }',
  local: ['scenario'],
  render: (spread) => `<div style={{ width: 640, height: 400 }}><DataGridPremium ${spread} /></div>`,
};
