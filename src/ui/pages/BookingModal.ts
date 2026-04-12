import { Page, Locator } from '@playwright/test';

export class BookingModal {
  readonly page: Page;
  readonly bookBtn: Locator;
  readonly firstnameInput: Locator;
  readonly lastnameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly bookConfirmBtn: Locator;
  readonly successBanner: Locator;
  readonly calendarNextBtn: Locator;
  readonly cancelBtn: Locator;
  readonly modal: Locator;

  constructor(page: Page) {
    this.page = page;
    // Book button - using same selector as HomePage for consistency
    this.bookBtn = page.locator('button:has-text("Book"), a:has-text("Book"), .openBooking, button[class*="book"]').filter({ hasText: /book/i }).first();

    // Booking form inputs - using data-testid pattern like contact form
    this.firstnameInput = page.locator('[data-testid="firstname"], input[name="firstname"], #firstname');
    this.lastnameInput = page.locator('[data-testid="lastname"], input[name="lastname"], #lastname');
    this.emailInput = page.locator('[data-testid="email"], input[name="email"], #email');
    this.phoneInput = page.locator('[data-testid="phone"], input[name="phone"], #phone');

    // Booking confirmation button
    this.bookConfirmBtn = page.locator('button:has-text("Book"), button[type="submit"], #bookRoom, #doReservation');

    // Success/error messages
    this.successBanner = page.locator('.alert-success, .booking-confirmation, h3:has-text("Booking Successful")');

    // Calendar navigation
    this.calendarNextBtn = page.locator('.rbc-btn-group button:last-child, button[aria-label="Next"], button:has-text("Next")');

    // Cancel/close buttons
    this.cancelBtn = page.locator('button:has-text("Cancel"), button:has-text("Close"), .close, button[type="button"]');

    // Modal container
    this.modal = page.locator('.booking-form, .room-booking, [class*="booking"], .modal, [role="dialog"]');
  }

  async openBookingForm() {
    // Click the book button
    await this.bookBtn.click();

    // Wait for modal to appear - try multiple possible selectors
    try {
      await this.modal.first().waitFor({ state: 'visible', timeout: 3000 });
    } catch (e) {
      // If modal doesn't appear, check if we're already on a booking page
      const currentUrl = this.page.url();
      if (!currentUrl.includes('booking') && !currentUrl.includes('reservation')) {
        throw new Error('Booking modal did not appear after clicking book button');
      }
    }
  }

  async fillBookingDetails(data: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  }) {
    await this.firstnameInput.fill(data.firstname);
    await this.lastnameInput.fill(data.lastname);
    await this.emailInput.fill(data.email);
    await this.phoneInput.fill(data.phone);
  }

  async submitBooking() {
    await this.bookConfirmBtn.click();
  }

  async isModalVisible(): Promise<boolean> {
    try {
      return await this.modal.first().isVisible();
    } catch (e) {
      return false;
    }
  }

  async cancelBooking() {
    if (await this.cancelBtn.count() > 0) {
      await this.cancelBtn.first().click();
    }
  }

  async navigateCalendarNext() {
    if (await this.calendarNextBtn.count() > 0) {
      await this.calendarNextBtn.first().click();
    }
  }

  async isModalVisible(): Promise<boolean> {
    return await this.modal.first().isVisible();
  }
}