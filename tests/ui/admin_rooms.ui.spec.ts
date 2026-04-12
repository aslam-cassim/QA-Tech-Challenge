import { test } from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/LoginPage';
import { AdminPage } from '../../src/ui/pages/AdminPage';

test('Admin can add a new room to the inventory', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);

  // 1. Authenticate
  await loginPage.goto();
  await loginPage.login('admin', 'password');

  // 2. Add a room
  const uniqueRoomName = `Suite ${Date.now()}`;
  await adminPage.createRoom(uniqueRoomName, 'Double', '150');

  // 3. Assert visibility
  await adminPage.verifyRoomExists(uniqueRoomName);
});