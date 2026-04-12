import { Page, Locator, expect } from '@playwright/test';

export class AdminPage {
  readonly page: Page;
  readonly roomNameInput: Locator;
  readonly createButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.roomNameInput = page.locator('#roomName');
    this.createButton = page.locator('#createRoom');
  }

  async createRoom(name: string, type: string, price: string) {
    await this.roomNameInput.fill(name);
    await this.page.selectOption('#type', type);
    await this.page.locator('#roomPrice').fill(price);
    await this.createButton.click();
  }

  async verifyRoomExists(name: string) {
    await expect(this.page.locator(`text=${name}`)).toBeVisible();
  }
}