import path from 'path';
import { describe, expect, it } from 'vitest';

import { getPackageManager } from './get-package-manager';

const FIXTURES = path.resolve(__dirname, '../../test/fixtures');

describe('getPackageManager', () => {
  it.each([
    { dir: 'project-npm', expected: 'npm' },
    { dir: 'project-pnpm', expected: 'pnpm' },
    { dir: 'project-yarn', expected: 'yarn' },
    { dir: 'project-bun', expected: 'bun' },
  ])('detects $expected from $dir', ({ dir, expected }) => {
    expect(getPackageManager(path.join(FIXTURES, dir))).toBe(expected);
  });

  it('defaults to npm when no lockfile found', () => {
    expect(getPackageManager('/tmp')).toBe('npm');
  });
});
