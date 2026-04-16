import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4418',
    trace: 'on-first-retry',
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
      caret: 'hide',
    },
  },
  projects: [
    {
      name: 'desktop',
      testIgnore: ['**/visual.spec.ts'],
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'touch',
      testIgnore: ['**/visual.spec.ts'],
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 600, height: 1024 },
      },
    },
    {
      name: 'visual',
      testMatch: ['**/visual.spec.ts'],
      snapshotPathTemplate:
        '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{ext}',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1200, height: 630 },
      },
    },
  ],
  webServer: {
    command: process.env.VISUAL_BUILD
      ? 'pnpm --filter registry start'
      : 'pnpm --filter registry dev',
    url: 'http://localhost:4418',
    reuseExistingServer: !process.env.CI,
  },
});
