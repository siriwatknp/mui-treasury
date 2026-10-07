import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const DATA_DIR = path.resolve(fileURLToPath(import.meta.url), '../../../data');

export const LIBS = ['material', 'x'];

export function builtWith(dataDir = DATA_DIR) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, 'meta.json'), 'utf8')).builtWith ?? {};
}

export async function loadData(lib, name, dataDir = DATA_DIR) {
  if (!LIBS.includes(lib)) {
    throw new Error(`unknown data library "${lib}" — expected one of: ${LIBS.join(', ')}`);
  }
  const file = path.join(dataDir, lib, `${name}.mjs`);
  if (!fs.existsSync(file)) {
    throw new Error(`no ${lib} data "${name}" in this build (${builtWith(dataDir)[lib] ?? 'not generated'})`);
  }
  return import(pathToFileURL(file).href);
}
