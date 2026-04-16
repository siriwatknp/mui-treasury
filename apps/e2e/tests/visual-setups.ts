import type { Page } from '@playwright/test';

export type VisualSetup = (ctx: {
  page: Page;
  theme: 'light' | 'dark';
}) => Promise<void>;

export const visualSetups: Record<string, VisualSetup> = {
  'color-scheme-select-icon': async ({ page }) => {
    await page.locator('button[aria-haspopup="true"]').click();
    await page.locator('.MuiMenu-paper').first().waitFor({ state: 'visible' });
  },
};
