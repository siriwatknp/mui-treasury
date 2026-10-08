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
