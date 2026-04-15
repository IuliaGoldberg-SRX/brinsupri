import { BasePage } from "./Base";
import { Locator, Page , expect} from "@playwright/test";

export class HomePage extends BasePage {
  study: Locator;
  about: Locator;
  resources: Locator;
  savings: Locator;

  constructor(page: Page) {
    super(page);
    this.study = this.page.locator('a[href="/brinsupri-study-results"]')
    this.about = this.page.locator('a[href="/about-brinsupri"]')
    this.resources = this.page.locator('a[href="/resources"]')
    this.savings = this.page.locator('a[href="/savings-and-support"]')
  }

  async clickStudy() {
    await this.customClick(this.study);
    await expect(this.page).toHaveURL('/brinsupri-study-results/');
  }

  async clickAbout() {
    await this.customClick(this.about);
    await expect(this.page).toHaveURL('/about-brinsupri/');
  }

  async clickResources() {
    await this.customClick(this.resources);
    await expect(this.page).toHaveURL('/resources/');
  }

  async clickSavings() {
    await this.customClick(this.savings);
    await expect(this.page).toHaveURL('/savings-and-support/');
  }
}
