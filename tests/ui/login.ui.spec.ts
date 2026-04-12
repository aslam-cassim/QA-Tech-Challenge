import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/LoginPage';

test.describe('Admin Login Flow', () => {
  test('should successfully log in to the admin panel', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('admin', 'password');

    // Verify successful login by checking for the "Logout" button
    const logoutButton = page.locator('text=Logout');
    await expect(logoutButton).toBeVisible();
  });
});
