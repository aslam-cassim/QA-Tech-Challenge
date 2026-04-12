import { Page, Locator, expect } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    // Using data-testid selectors based on the actual Restful Booker UI
    this.nameInput = page.locator('input[data-testid="ContactName"]');
    this.emailInput = page.locator('input[data-testid="ContactEmail"]');
    this.phoneInput = page.locator('input[data-testid="ContactPhone"]');
    this.subjectInput = page.locator('input[data-testid="ContactSubject"]');
    this.messageInput = page.locator('textarea[data-testid="ContactDescription"]');
    this.submitButton = page.locator('button:has-text("Submit")');
    this.successMessage = page.locator('h3:has-text("Thanks for getting in touch")'); // Actual success message
    this.errorMessage = page.locator('.alert-danger');
  }

  async navigate() {
    await this.page.goto('https://automationintesting.online/');
  }

  async submitForm(details: { name: string, email: string, phone: string, subject: string, message: string }) {
    await this.nameInput.fill(details.name);
    await this.emailInput.fill(details.email);
    await this.phoneInput.fill(details.phone);
    await this.subjectInput.fill(details.subject);
    await this.messageInput.fill(details.message);
    await this.submitButton.click();
  }
}