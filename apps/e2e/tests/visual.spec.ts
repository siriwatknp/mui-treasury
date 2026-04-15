import { expect, test } from "@playwright/test";

import { getVisualItems } from "./registry-items";

const themes = ["light", "dark"] as const;

for (const item of getVisualItems()) {
  for (const theme of themes) {
    const suffix = theme === "dark" ? "-dark" : "";
    test(`visual: ${item.name}${suffix}`, async ({ page }) => {
      await page.addInitScript((mode) => {
        try {
          localStorage.setItem("mui-mode", mode);
        } catch {
          /* ignore */
        }
      }, theme);
      const url =
        item.previewMode === "iframe" && item.previewPath
          ? item.previewPath
          : `/preview/${item.name}`;
      await page.goto(url);
      await page.evaluate(() => document.fonts.ready);
      await page.waitForLoadState("networkidle");
      await expect(page).toHaveScreenshot(`${item.name}${suffix}.png`);
    });
  }
}
