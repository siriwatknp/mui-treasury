/**
 * @file One resolver for every addressable token. A token is a canonical MUI
 * export name (`Button`, `DataGrid`), a friendly alias (`tag` → Chip), or an X
 * product slug (`data-grid`). `component`, the bare-alias shortcut, and `demos`
 * all funnel through resolveToken so the three entry points stay consistent.
 */
import { xProducts } from './demosX.mjs';
import { X_STYLED, xStyledProducts } from './xStyled.mjs';

/** friendly term → canonical core export (users say it differently). */
const CORE_ALIASES = {
  tag: 'Chip',
  icon: 'SvgIcon',
  dropdown: 'Select',
  textbox: 'TextField',
  input: 'TextField',
};

/** X export names → their product. Tier stays display-only (the PLAN column); a
 *  Pro/Premium name is just a convenience alias to the same product view. */
const X_COMPONENTS = {
  DataGrid: 'data-grid',
  DataGridPro: 'data-grid',
  DataGridPremium: 'data-grid',
  BarChart: 'charts',
  LineChart: 'charts',
  PieChart: 'charts',
  ScatterChart: 'charts',
  SparkLineChart: 'charts',
  RadarChart: 'charts',
  FunnelChart: 'charts',
  Heatmap: 'charts',
  Gauge: 'charts',
  DatePicker: 'date-pickers',
  DateTimePicker: 'date-pickers',
  TimePicker: 'date-pickers',
  DateField: 'date-pickers',
  TimeField: 'date-pickers',
  DateTimeField: 'date-pickers',
  DateRangePicker: 'date-pickers',
  DateTimeRangePicker: 'date-pickers',
  DateCalendar: 'date-pickers',
  TimeClock: 'date-pickers',
  DigitalClock: 'date-pickers',
  RichTreeView: 'tree-view',
  SimpleTreeView: 'tree-view',
  TreeItem: 'tree-view',
};

/** friendly X terms → product (the kebab product slugs resolve to themselves). */
const X_ALIASES = {
  grid: 'data-grid',
  datagrid: 'data-grid',
  pickers: 'date-pickers',
  picker: 'date-pickers',
  tree: 'tree-view',
  treeview: 'tree-view',
};

export const xProductLabel = {
  'data-grid': 'DataGrid',
  charts: 'Charts',
  'date-pickers': 'Date Pickers',
  'tree-view': 'Tree View',
};

function xTarget(product, label) {
  // the theme key exporting `label` (TreeItem → MuiTreeItem); a product name or a tier (DataGridPro) → the product's first key
  const keys = xStyledProducts().includes(product) ? X_STYLED[product].keys : [];
  const component = keys.find((key) => X_STYLED[product].exports[key] === label) ?? keys[0] ?? null;
  return { kind: 'x', product, label, ...(component ? { component } : {}) };
}

/**
 * token → target, or null when nothing matches.
 *  - { kind: 'core', component: 'MuiChip', label: 'Chip' }
 *  - { kind: 'x', product: 'data-grid', label: 'DataGrid', component?: 'MuiDataGrid' }
 *    (`component` when the product has style rows: Pro/Premium share the community theme key)
 * A PascalCase miss is assumed to be a core component (downstream validates);
 * a lowercase miss returns null so the bare-alias shortcut leaves it to
 * Commander's "unknown command" (typo protection).
 * @param {string} token
 * @returns {{ kind: 'core', component: string, label: string }
 *          | { kind: 'x', product: string, label: string, component?: string }
 *          | null}
 */
export function resolveToken(token) {
  if (CORE_ALIASES[token]) {
    const label = CORE_ALIASES[token];
    return { kind: 'core', component: `Mui${label}`, label };
  }
  if (X_COMPONENTS[token]) {
    return xTarget(X_COMPONENTS[token], token);
  }
  if (X_ALIASES[token]) {
    const product = X_ALIASES[token];
    return xTarget(product, xProductLabel[product]);
  }
  if (Object.hasOwn(xProducts(), token)) {
    return xTarget(token, xProductLabel[token]);
  }
  if (/^[A-Z]/.test(token)) {
    const component = token.startsWith('Mui') ? token : `Mui${token}`;
    return { kind: 'core', component, label: component.replace(/^Mui/, '') };
  }
  return null;
}

/** Does the bare-alias shortcut own this token? (resolves to anything.) */
export function isResolvable(token) {
  return resolveToken(token) !== null;
}
