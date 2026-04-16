import type { Page } from '@playwright/test';

export type VisualSetup = (ctx: {
  page: Page;
  theme: 'light' | 'dark';
}) => Promise<void>;

const openMuiMenu = async ({
  page,
  trigger,
}: {
  page: Page;
  trigger: string;
}) => {
  await page.locator(trigger).click();
  await page.locator('.MuiMenu-paper').first().waitFor({ state: 'visible' });
};

export const visualSetups: Record<string, VisualSetup> = {
  'color-scheme-select-icon': ({ page }) =>
    openMuiMenu({ page, trigger: 'button[aria-haspopup="true"]' }),
  'color-scheme-select-basic': ({ page }) =>
    openMuiMenu({ page, trigger: '[role="combobox"]' }),
  'color-scheme-select-minimal': ({ page }) =>
    openMuiMenu({ page, trigger: '[role="combobox"]' }),
};
