import { expect, test } from "@playwright/test";

const pilots = [
  { name: "login-form", url: "/preview/login-form" },
  { name: "portfolio-value-chart", url: "/preview/portfolio-value-chart" },
  { name: "project-invite-modal", url: "/preview/project-invite-modal" },
];

for (const p of pilots) {
  test(`visual: ${p.name}`, async ({ page }) => {
    await page.goto(p.url);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveScreenshot(`${p.name}.png`);
  });
}
