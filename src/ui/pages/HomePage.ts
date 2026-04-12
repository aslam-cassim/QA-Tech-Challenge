import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly roomCards: Locator;
  readonly contactForm: Locator;
  readonly contactName: Locator;
  readonly contactEmail: Locator;
  readonly contactPhone: Locator;
  readonly contactSubject: Locator;
  readonly contactMessage: Locator;
  readonly contactSubmitBtn: Locator;
  readonly contactSuccessBanner: Locator;
  readonly footerBrandName: Locator;
  readonly cookieBanner: Locator;
  readonly cookieAcceptBtn: Locator;
  readonly bookButtons: Locator;
  readonly adminLink: Locator;

  constructor(page: Page) {
    this.page = page;
    // Logo/brand - using multiple possible selectors
    this.logo = page.locator('h1, .logo, .brand, [class*="logo"], img[alt*="hotel"], img[alt*="Shady Meadows"]').first();

    // Room cards - using common selectors for room listings
    this.roomCards = page.locator('.room, .room-card, [class*="room"], .col-sm-4, .card').filter({ hasText: /room|suite|double|single/i });

    // Contact form elements - using data-testid selectors like ContactPage
    this.contactForm = page.locator('#contact');
    this.contactName = page.locator('[data-testid="ContactName"]');
    this.contactEmail = page.locator('[data-testid="ContactEmail"]');
    this.contactPhone = page.locator('[data-testid="ContactPhone"]');
    this.contactSubject = page.locator('[data-testid="ContactSubject"]');
    this.contactMessage = page.locator('[data-testid="ContactDescription"]');
    this.contactSubmitBtn = page.locator('button:has-text("Submit"), #submitContact');
    this.contactSuccessBanner = page.locator('h3:has-text("Thanks for getting in touch")');

    // Footer and other elements
    this.footerBrandName = page.locator('.col-sm-4 p, footer p').first();
    this.cookieBanner = page.locator('#cookie-banner, [class*="cookie"], .cc-banner');
    this.cookieAcceptBtn = page.locator('#cookie-accept, button:has-text("Accept")');

    // Book buttons - common button selectors
    this.bookButtons = page.locator('button:has-text("Book"), a:has-text("Book"), .openBooking, button[class*="book"]').filter({ hasText: /book/i });

    // Admin link - common navigation selectors
    this.adminLink = page.locator('a:has-text("Admin"), a[href*="admin"], nav a[href*="admin"]').first();
  }

  async goto() {
    await this.page.goto('https://automationintesting.online/');
    await this.page.waitForLoadState('networkidle');
  }

  async submitContactForm(data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) {
    await this.contactName.fill(data.name);
    await this.contactEmail.fill(data.email);
    await this.contactPhone.fill(data.phone);
    await this.contactSubject.fill(data.subject);
    await this.contactMessage.fill(data.message);
    await this.contactSubmitBtn.click();
  }

  async getRoomCount(): Promise<number> {
    return await this.roomCards.count();
  }

  async clickBookButton(index: number = 0) {
    await this.bookButtons.nth(index).click();
  }

  async navigateToAdmin() {
    await this.adminLink.first().click();
  }
}