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
};
