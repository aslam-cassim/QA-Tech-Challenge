/**
 * LoginPage - Page Object for Login UI
 * Encapsulates login page selectors and interactions
 */

import { Page, Locator } from 'playwright';

export class LoginPage {
  private page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private submitButton: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('[class*="error"]');
  }

  async navigate() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async getErrorMessage(): Promise<string> {
    const text = await this.errorMessage.textContent();
    return text || '';
  }

  async isErrorDisplayed(): Promise<boolean> {
    return this.errorMessage.isVisible();
  }

  async waitForRedirect(expectedUrl: string, timeout = 5000) {
    await this.page.waitForURL(expectedUrl, { timeout });
  }
}
