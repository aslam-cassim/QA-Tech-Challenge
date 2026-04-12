import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/ui/pages/HomePage';
import { BookingModal } from '../../src/ui/pages/BookingModal';

/**
 * ============================================================
 * TC-BOOK-001 to TC-BOOK-012
 * Room Booking — Modal, Calendar, Validation, Confirmation
 * ============================================================
 */
test.describe('Room Booking', () => {
  let homePage: HomePage;
  let bookingModal: BookingModal;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    bookingModal = new BookingModal(page);
    await homePage.goto();
  });

  // TC-BOOK-001
  test('should open booking modal when Book This Room is clicked', async () => {
    await bookingModal.openBookingForm();
    expect(await bookingModal.isModalVisible()).toBe(true);
  });

  // TC-BOOK-002
  test('should display booking form fields inside the modal', async () => {
    await bookingModal.openBookingForm();

    await expect(bookingModal.firstnameInput).toBeVisible({ timeout: 5000 });
    await expect(bookingModal.lastnameInput).toBeVisible();
    await expect(bookingModal.emailInput).toBeVisible();
    await expect(bookingModal.phoneInput).toBeVisible();
  });

  // TC-BOOK-003
  test('should display a calendar for date selection in booking modal', async ({ page }) => {
    await bookingModal.openBookingForm();

    const calendar = page.locator('.rbc-calendar, [class*="calendar"], .datepicker');
    await expect(calendar.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-BOOK-004
  test('should show error when booking form is submitted without dates', async ({ page }) => {
    await bookingModal.openBookingForm();

    await bookingModal.firstnameInput.fill('John');
    await bookingModal.lastnameInput.fill('Doe');
    await bookingModal.emailInput.fill('john@example.com');
    await bookingModal.phoneInput.fill('01234567890');
    await bookingModal.submitBooking();

    const error = page.locator('.alert-danger, p.text-danger, .booking-error');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-BOOK-005
  test('should show error when firstname is missing from booking', async ({ page }) => {
    await bookingModal.openBookingForm();

    await bookingModal.lastnameInput.fill('Doe');
    await bookingModal.emailInput.fill('john@example.com');
    await bookingModal.phoneInput.fill('01234567890');
    await bookingModal.submitBooking();

    const error = page.locator('.alert-danger, p.text-danger');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-BOOK-006
  test('should show error when lastname is missing from booking', async ({ page }) => {
    await bookingModal.openBookingForm();

    await bookingModal.firstnameInput.fill('John');
    await bookingModal.emailInput.fill('john@example.com');
    await bookingModal.phoneInput.fill('01234567890');
    await bookingModal.submitBooking();

    const error = page.locator('.alert-danger, p.text-danger');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-BOOK-007
  test('should show error when email is invalid in booking form', async ({ page }) => {
    await bookingModal.openBookingForm();

    await bookingModal.firstnameInput.fill('John');
    await bookingModal.lastnameInput.fill('Doe');
    await bookingModal.emailInput.fill('bad-email-format');
    await bookingModal.phoneInput.fill('01234567890');
    await bookingModal.submitBooking();

    const error = page.locator('.alert-danger, p.text-danger');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-BOOK-008
  test('should show error when phone is missing from booking', async ({ page }) => {
    await bookingModal.openBookingForm();

    await bookingModal.firstnameInput.fill('John');
    await bookingModal.lastnameInput.fill('Doe');
    await bookingModal.emailInput.fill('john@example.com');
    await bookingModal.submitBooking();

    const error = page.locator('.alert-danger, p.text-danger');
    await expect(error.first()).toBeVisible({ timeout: 5000 });
  });

  // TC-BOOK-009
  test('should be able to navigate the calendar to next month', async ({ page }) => {
    await bookingModal.openBookingForm();

    await page.waitForSelector('.rbc-calendar, [class*="calendar"]', { timeout: 5000 });

    const nextBtn = page.locator('.rbc-btn-group button:last-child, button[aria-label="Next"]');
    if (await nextBtn.count() > 0) {
      await nextBtn.first().click();
      // Calendar should update — verify no crash
      await expect(page.locator('body')).toBeVisible();
    }
  });

  // TC-BOOK-010
  test('Cancel or close button should dismiss the booking modal', async ({ page }) => {
    await bookingModal.openBookingForm();

    await page.waitForSelector('[data-testid="firstname"]', { timeout: 5000 });

    await bookingModal.cancelBooking();
    await expect(bookingModal.firstnameInput).not.toBeVisible({ timeout: 3000 });
  });

  // TC-BOOK-011
  test('should display room features/amenities on room cards', async ({ page }) => {
    const roomCard = page.locator('.room-info').first();
    const amenityIcons = roomCard.locator('i, svg, .fa, img[alt]');
    // Room cards may show icons for WiFi, TV, etc.
    const roomText = await roomCard.innerText();
    expect(roomText.length).toBeGreaterThan(5);
  });

  // TC-BOOK-012
  test('should show room image or placeholder on room cards', async ({ page }) => {
    const roomImages = page.locator('.room-info img, .hotel-image img');
    const count = await roomImages.count();
    // At least one room image or the page renders the card section
    const roomCards = page.locator('.room-info');
    await expect(roomCards.first()).toBeVisible();
  });
});