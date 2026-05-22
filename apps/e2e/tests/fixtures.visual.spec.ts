import { expect, test } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Visual regression for off-site fixtures under apps/website/app/fixtures/*.
// Each fixture is a plain Next route at /fixtures/<name>, not a registry item:
// it never shows on the site and its baselines live in this spec's own
// -snapshots dir, so the OG pipeline (reads only visual.spec.ts-snapshots) skips them.
const FIXTURES_DIR = path.resolve(__dirname, '../../website/app/fixtures');

function getFixtures(): string[] {
  if (!fs.existsSync(FIXTURES_DIR)) return [];
  return fs
    .readdirSync(FIXTURES_DIR, { withFileTypes: true })
    .filter(
      (e) =>
        e.isDirectory() &&
        fs.existsSync(path.join(FIXTURES_DIR, e.name, 'page.tsx')),
    )
    .map((e) => e.name)
    .sort();
}

const themes = ['light', 'dark'] as const;

for (const name of getFixtures()) {
  for (const theme of themes) {
    const suffix = theme === 'dark' ? '-dark' : '';
    test(`fixture: ${name}${suffix}`, async ({ page }) => {
      const pageErrors: string[] = [];
      page.on('pageerror', (err) => pageErrors.push(err.message));

      await page.addInitScript((mode) => {
        try {
          localStorage.setItem('mui-mode', mode);
        } catch {
          /* ignore */
        }
      }, theme);

      await page.goto(`/fixtures/${name}`);
      await page.evaluate(() => document.fonts.ready);
      await page.waitForLoadState('networkidle');

      const errorOverlayCount = await page
        .locator('nextjs-portal')
        .locator('[data-nextjs-dialog], [data-nextjs-error-overlay]')
        .count();
      expect(errorOverlayCount, 'Next.js error overlay present').toBe(0);

      expect(
        pageErrors,
        `Runtime errors:\n${pageErrors.join('\n')}`,
      ).toHaveLength(0);

      await expect(page).toHaveScreenshot(`${name}${suffix}.png`, {
        fullPage: true,
      });
    });
  }
}
