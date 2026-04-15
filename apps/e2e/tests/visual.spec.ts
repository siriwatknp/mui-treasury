import { expect, test } from "@playwright/test";

import { getVisualItems } from "./registry-items";

for (const item of getVisualItems()) {
  test(`visual: ${item.name}`, async ({ page }) => {
    const url =
      item.previewMode === "iframe" && item.previewPath
        ? item.previewPath
        : `/preview/${item.name}`;
    await page.goto(url);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveScreenshot(`${item.name}.png`);
  });
}
