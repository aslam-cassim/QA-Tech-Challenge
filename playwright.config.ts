import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html', // This generates the required HTML report
  use: {
    baseURL: 'https://restful-booker.herokuapp.com',
    trace: 'on-first-retry', // Essential for the "built to last" requirement
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'api',
      testMatch: /.*\.api\.spec\.ts/,
    },
    {
      name: 'chromium',
      testMatch: /.*\.ui\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
