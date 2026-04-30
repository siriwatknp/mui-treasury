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
  'select-inset-01': ({ page }) =>
    openMuiMenu({ page, trigger: '[role="combobox"]' }),
  'popup-menu': async ({ page }) => {
    await page.getByRole('button', { name: 'Analytics' }).hover();
    const reports = page.getByRole('button', { name: 'Reports' });
    await reports.waitFor({ state: 'visible' });
    await reports.hover();
    await page
      .getByRole('link', { name: 'Overview' })
      .waitFor({ state: 'visible' });
  },
  'sidebar-tooltip': async ({ page }) => {
    await page.getByRole('button', { name: 'Home' }).hover();
    await page.locator('.MuiTooltip-tooltip').first().waitFor({ state: 'visible' });
  },
  'tooltip-mui-treasury': async ({ page }) => {
    await page.getByRole('button', { name: 'Top' }).first().hover();
    await page.locator('.MuiTooltip-tooltip').first().waitFor({ state: 'visible' });
  },
};
