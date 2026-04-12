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
    this.bookBtn = page.locator('.openBooking').first();
    this.firstnameInput = page.locator('[data-testid="firstname"]');
    this.lastnameInput = page.locator('[data-testid="lastname"]');
    this.emailInput = page.locator('[data-testid="email"]');
    this.phoneInput = page.locator('[data-testid="phone"]');
    this.bookConfirmBtn = page.locator('#doReservation');
    this.successBanner = page.locator('.booking-confirmation');
    this.calendarNextBtn = page.locator('.rbc-btn-group button').last();
    this.cancelBtn = page.locator('button:has-text("Cancel"), button:has-text("Close"), .close');
    this.modal = page.locator('.booking-form, .room-booking, [class*="booking"]');
  }

  async openBookingForm() {
    await this.bookBtn.click();
    await this.modal.first().waitFor({ state: 'visible', timeout: 5000 });
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