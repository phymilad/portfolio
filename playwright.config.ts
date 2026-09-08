import { defineConfig, devices } from '@playwright/test';

const PORT = 3210;
const baseURL = `http://localhost:${PORT}`;

/**
 * Tests run against a production build, not the dev server: draft filtering,
 * static generation and prerendered metadata only behave correctly there.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL, trace: 'on-first-retry' },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Use the installed browser rather than downloading one. CI sets
        // PLAYWRIGHT_DOWNLOAD to opt into the bundled build instead.
        ...(process.env.PLAYWRIGHT_DOWNLOAD ? {} : { channel: 'chrome' }),
      },
    },
  ],
  webServer: {
    command: `npm run build && npx next start -p ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
