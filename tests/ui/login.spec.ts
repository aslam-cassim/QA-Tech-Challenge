import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/LoginPage.js';
import { DataGenerator } from '../../src/utils/DataGenerator.js';
import { logger } from '../../src/utils/Logger.js';

test.describe('Login UI Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should login with valid credentials', async ({ page }) => {
    const credentials = DataGenerator.generateCredentials();
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
