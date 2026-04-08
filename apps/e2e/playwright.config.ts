import { defineConfig, devices } from "@playwright/test";

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
    command: "pnpm --filter registry dev",
    url: "http://localhost:4418",
    reuseExistingServer: !process.env.CI,
  },
});
