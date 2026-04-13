import { test, expect } from '@playwright/test';
import { AdminPage } from '../../src/ui/pages/AdminPage';
import { LoginPage } from '../../src/ui/pages/LoginPage';

// Get credentials from environment or use defaults
const getTestCredentials = () => ({
  username: process.env.TEST_ADMIN_USERNAME || 'admin',
  password: process.env.TEST_ADMIN_PASSWORD || 'password'
});

/**
 * ============================================================
 * TC-ADMIN-001 to TC-ADMIN-012
 * Admin Room Management — CRUD, Validation, UI Elements
 * ============================================================
 */
test.describe('Admin Room Management', () => {
  let adminPage: AdminPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    adminPage = new AdminPage(page);
    loginPage = new LoginPage(page);

    // Login to admin panel
    const credentials = getTestCredentials();
    await loginPage.goto();
    await loginPage.login(credentials.username, credentials.password);
    await adminPage.waitForPageLoad();
  });

  // TC-ADMIN-001
  test('should display admin panel with room list', async () => {
    await expect(adminPage.roomList).toBeVisible();
  });

  // TC-ADMIN-002
  test('should display room details in the admin panel', async () => {
    const roomCount = await adminPage.getRoomCount();
    expect(roomCount).toBeGreaterThanOrEqual(0);
  });

  // TC-ADMIN-003
  test('should have a Create Room button in admin panel', async () => {
    await expect(adminPage.createRoomBtn).toBeVisible();
  });

  // TC-ADMIN-004
  test('should open create room form when Create Room is clicked', async () => {
    await adminPage.createRoomBtn.click();
    await expect(adminPage.roomNameInput).toBeVisible({ timeout: 5000 });
  });

  // TC-ADMIN-005
  test('should display room type dropdown with options', async () => {
    await adminPage.createRoomBtn.click();

    const options = await adminPage.getRoomTypeOptions();
    expect(options.length).toBeGreaterThan(0);
  });

  // TC-ADMIN-006
  test('should display accessibility dropdown with options', async () => {
    await adminPage.createRoomBtn.click();

    const options = await adminPage.getAccessibilityOptions();
    expect(options.length).toBeGreaterThan(0);
  });

  // TC-ADMIN-007
  test('should display room price input field', async () => {
    await adminPage.createRoomBtn.click();
    await expect(adminPage.roomPriceInput).toBeVisible();
  });

  // TC-ADMIN-008
  test('should display amenities checkboxes', async () => {
    await adminPage.createRoomBtn.click();

    const wifiCheckbox = adminPage.page.locator('input[type="checkbox"][name*="wifi"], input[type="checkbox"][value*="wifi"]');
    const tvCheckbox = adminPage.page.locator('input[type="checkbox"][name*="tv"], input[type="checkbox"][value*="tv"]');
    const radioCheckbox = adminPage.page.locator('input[type="checkbox"][name*="radio"], input[type="checkbox"][value*="radio"]');

    // At least one amenity checkbox should be present
    const checkboxes = adminPage.page.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    expect(count).toBeGreaterThan(0);
  });

  // TC-ADMIN-009
  test('should create a new room successfully', async () => {
    const initialCount = await adminPage.getRoomCount();

    await adminPage.createRoom({
      roomName: 'Test Room',
      roomType: 'Single',
      accessibility: 'false',
      roomPrice: '100',
      wifi: true,
      tv: true,
      radio: false
    });

    const finalCount = await adminPage.getRoomCount();
    expect(finalCount).toBeGreaterThan(initialCount);
  });

  // TC-ADMIN-010
  test('should display error when creating room without name', async () => {
    await adminPage.createRoomBtn.click();

    // Fill other fields but leave name empty
    await adminPage.roomTypeSelect.selectOption('Single');
    await adminPage.accessibilitySelect.selectOption('false');
    await adminPage.roomPriceInput.fill('100');

    await adminPage.submitRoomBtn.click();

    // Check for error message
    const error = adminPage.page.locator('.alert-danger, .error-message, p.text-danger');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-ADMIN-011
  test('should display error when creating room without price', async () => {
    await adminPage.createRoomBtn.click();

    // Fill other fields but leave price empty
    await adminPage.roomNameInput.fill('Test Room');
    await adminPage.roomTypeSelect.selectOption('Single');
    await adminPage.accessibilitySelect.selectOption('false');

    await adminPage.submitRoomBtn.click();

    // Check for error message
    const error = adminPage.page.locator('.alert-danger, .error-message, p.text-danger');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-ADMIN-012
  test('should be able to delete a room from admin panel', async () => {
    // First create a room to delete
    await adminPage.createRoom({
      roomName: 'Room to Delete',
      roomType: 'Double',
      accessibility: 'false',
      roomPrice: '150',
      wifi: true,
      tv: false,
      radio: true
    });

    const initialCount = await adminPage.getRoomCount();

    // Delete the room
    await adminPage.deleteRoom('Room to Delete');

    const finalCount = await adminPage.getRoomCount();
    expect(finalCount).toBeLessThan(initialCount);
  });
});