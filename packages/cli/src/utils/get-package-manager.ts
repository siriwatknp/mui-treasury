import { existsSync } from 'fs';
import path from 'path';

export function getPackageManager(
  cwd: string,
): 'pnpm' | 'yarn' | 'bun' | 'npm' {
  if (existsSync(path.resolve(cwd, 'pnpm-lock.yaml'))) return 'pnpm';
  if (existsSync(path.resolve(cwd, 'yarn.lock'))) return 'yarn';
  if (
    existsSync(path.resolve(cwd, 'bun.lockb')) ||
    existsSync(path.resolve(cwd, 'bun.lock'))
  )
    return 'bun';
  return 'npm';
}
