import { expect, test } from "@playwright/test";

import { getVisualItems } from "./registry-items";

const themes = ["light", "dark"] as const;

for (const item of getVisualItems()) {
  for (const theme of themes) {
    const suffix = theme === "dark" ? "-dark" : "";
    test(`visual: ${item.name}${suffix}`, async ({ page }) => {
      const pageErrors: string[] = [];
      page.on("pageerror", (err) => pageErrors.push(err.message));

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

      const errorOverlayCount = await page
        .locator("nextjs-portal")
        .locator("[data-nextjs-dialog], [data-nextjs-error-overlay]")
        .count();
      expect(errorOverlayCount, "Next.js error overlay present").toBe(0);

      expect(
        pageErrors,
        `Runtime errors:\n${pageErrors.join("\n")}`,
      ).toHaveLength(0);

      const unavailable = await page
        .getByText("Preview unavailable", { exact: true })
        .count();
      expect(unavailable, '"Preview unavailable" fallback rendered').toBe(0);

      await expect(page).toHaveScreenshot(`${item.name}${suffix}.png`);
    });
  }
}
