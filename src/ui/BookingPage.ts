/**
 * BookingPage - Page Object for Booking UI
 * Encapsulates booking page selectors and interactions
 */

import { Page, Locator } from 'playwright';

export class BookingPage {
  private page: Page;
  private hotelNameInput: Locator;
  private checkInInput: Locator;
  private checkOutInput: Locator;
  private guestCountInput: Locator;
  private submitButton: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hotelNameInput = page.locator('input[name="hotelName"]');
    this.checkInInput = page.locator('input[name="checkIn"]');
    this.checkOutInput = page.locator('input[name="checkOut"]');
    this.guestCountInput = page.locator('input[name="guests"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('[class*="success"]');
  }

  async navigate() {
    await this.page.goto('/booking');
  }

  async fillBookingForm(hotelName: string, checkIn: string, checkOut: string, guests: number) {
    await this.hotelNameInput.fill(hotelName);
    await this.checkInInput.fill(checkIn);
    await this.checkOutInput.fill(checkOut);
    await this.guestCountInput.fill(guests.toString());
  }

  async submitBooking() {
    await this.submitButton.click();
  }

  async getSuccessMessage(): Promise<string> {
    const text = await this.successMessage.textContent();
    return text || '';
  }

  async isSuccessMessageDisplayed(): Promise<boolean> {
    return this.successMessage.isVisible();
  }
}
