export const LIB_PACKAGES = {
  material: ['@mui/material'],
  x: ['@mui/x-data-grid', '@mui/x-date-pickers', '@mui/x-charts', '@mui/x-tree-view'],
};

const LIB_NAMES = { material: 'Material UI', x: 'MUI X' };

const parts = (v) => v.split('.').map((n) => Number.parseInt(n, 10));

/**
 * @param {Record<string, string>} built  versions the bundled data was generated from
 * @param {Record<string, string | null>} installed  versions found in the user's project
 * @returns {Array<{ lib: string, level: 'ok' | 'warn' | 'error' | 'note', message: string }>}
 */
export function compareVersions(built, installed) {
  return Object.keys(LIB_PACKAGES).map((lib) => {
    const name = LIB_NAMES[lib];
    const have = installed[lib] ?? null;
    const want = built[lib] ?? null;
    if (have === null) {
      return lib === 'material'
        ? { lib, level: 'error', message: `${name} not found — run the CLI inside a project with @mui/material installed` }
        : { lib, level: 'ok', message: `${name} not installed — X data not needed` };
    }
    if (want === null) {
      return { lib, level: 'note', message: `${name} ${have} installed, but this build has no ${name} data yet` };
    }
    const [hMajor, hMinor] = parts(have);
    const [wMajor, wMinor] = parts(want);
    if (hMajor !== wMajor) {
      return {
        lib,
        level: 'error',
        message: `${name} ${have} ≠ major ${wMajor} this CLI targets — install the CLI version whose major matches (npm i -D @siriwatknp/mui-cli@${hMajor})`,
      };
    }
    if (hMinor !== wMinor) {
      return {
        lib,
        level: 'warn',
        message: `${name} ${have}, data built with ${want} — static answers reflect ${want} defaults; verify with --measure`,
      };
    }
    return { lib, level: 'ok', message: `${name} ${have} matches data (${want})` };
  });
}
