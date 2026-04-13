import { test } from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/LoginPage';
import { AdminPage } from '../../src/ui/pages/AdminPage';

// Get credentials from environment or use defaults
const getTestCredentials = () => ({
  username: process.env.TEST_ADMIN_USERNAME || 'admin',
  password: process.env.TEST_ADMIN_PASSWORD || 'password'
});

// Note: This file duplicates admin_rooms.spec.ts. Consider consolidating both test files.
test('@critical @admin Add new room to inventory', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);
  const credentials = getTestCredentials();

  // 1. Authenticate
  await loginPage.goto();
  await loginPage.login(credentials.username, credentials.password);

  // 2. Add a room
  const uniqueRoomName = `Suite ${Date.now()}`;
  await adminPage.createRoom(uniqueRoomName, 'Double', '150');

  // 3. Assert visibility
  await adminPage.verifyRoomExists(uniqueRoomName);
});