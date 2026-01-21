import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright configuration for MUI control height visual tests.
 * Tests verify that components using CONTROL_HEIGHTS scale have correct heights
 * at both desktop (>768px) and touch (<= 768px) viewports.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:4418",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "touch",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 600, height: 1024 },
      },
    },
  ],
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:4418",
    reuseExistingServer: !process.env.CI,
  },
});
