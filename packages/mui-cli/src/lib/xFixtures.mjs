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
