import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/LoginPage';

// Get credentials from environment or use defaults
const getTestCredentials = () => ({
  username: process.env.TEST_ADMIN_USERNAME || 'admin',
  password: process.env.TEST_ADMIN_PASSWORD || 'password'
});

// Note: This file duplicates login.spec.ts. Consider consolidating both test files.
test.describe('Admin Login Flow', () => {
  // TC-LOGIN-004 @critical @authentication
  test('should successfully log in to the admin panel', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = getTestCredentials();

    await loginPage.goto();
    await loginPage.login(credentials.username, credentials.password);

    // Verify successful login by checking for the "Logout" button
    const logoutButton = page.locator('text=Logout');
    await expect(logoutButton).toBeVisible();
  });
});
