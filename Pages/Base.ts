import {Page, Locator} from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url); // Uses the base URL configured in playwright.config.ts
  }

  async customClick(locator: string | Locator) {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    // Add custom wait logic or logging here before the click
    await element.click();
  }
}