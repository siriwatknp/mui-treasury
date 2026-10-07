import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

let cached;

/**
 * `{ createTheme, alpha }` from the project's @mui/material. createTheme's own module is imported directly: the
 * `@mui/material/styles` barrel also loads styled/Emotion and costs about twice as long.
 */
export async function loadMuiStyles() {
  if (cached) {
    return cached;
  }
  let createTheme;
  try {
    const dir = path.dirname(createRequire(path.join(process.cwd(), 'package.json')).resolve('@mui/material/package.json'));
    const file = path.join(dir, 'styles/createTheme.mjs');
    if (fs.existsSync(file)) {
      createTheme = (await import(pathToFileURL(file).href)).default;
    }
  } catch {
    // fall through to the public entry
  }
  if (!createTheme) {
    try {
      ({ createTheme } = await import('@mui/material/styles'));
    } catch {
      throw new Error('this command needs @mui/material — run it inside a project that has it installed');
    }
  }
  const base = createTheme();
  cached = { createTheme, alpha: (color, value) => base.alpha(color, value) };
  return cached;
}
