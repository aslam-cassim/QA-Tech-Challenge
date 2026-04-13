import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/LoginPage.js';
import { DataGenerator } from '../../src/utils/DataGenerator.js';
import { logger } from '../../src/utils/Logger.js';

// Get credentials from environment or use defaults
const getTestCredentials = () => ({
  username: process.env.TEST_ADMIN_USERNAME || 'admin',
  password: process.env.TEST_ADMIN_PASSWORD || 'password'
});

test.describe('Login UI Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  // TC-LOGIN-001 @critical @authentication
  test('should login with valid credentials', async ({ page }) => {
    const credentials = getTestCredentials();
    logger.info('Attempting login with:', { username: credentials.username });

    await loginPage.login(credentials.username, credentials.password);
    await loginPage.waitForRedirect('/dashboard');

    expect(page.url()).toContain('/dashboard');
    logger.info('Login successful');
  });

  test('should display error on invalid credentials', async () => {
    await loginPage.login('invalid_user', 'wrong_password');

    const isErrorDisplayed = await loginPage.isErrorDisplayed();
    expect(isErrorDisplayed).toBe(true);

    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Invalid');
    logger.info('Error message displayed as expected');
  });

  test('should have login form elements', async ({ page }) => {
    const usernameInput = page.locator('input[name="username"]');
    const passwordInput = page.locator('input[name="password"]');
    const submitButton = page.locator('button[type="submit"]');

    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(submitButton).toBeVisible();

    logger.info('All login form elements are visible');
  });
});
