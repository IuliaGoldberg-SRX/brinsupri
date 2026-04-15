import {BasePage} from "./Base";
import {expect, Locator, Page} from "@playwright/test";

export class FooterPage extends BasePage {
  InsmedLogo: Locator;
  facebook: Locator;
  instagram: Locator;
  privacyPolicy: Locator;
  termsOfUse: Locator;
  contactUs: Locator;
  californiaNotice: Locator;
  consumerHealth: Locator;
  privacyChoices: Locator;
  cookie: Locator;
  siteMap: Locator;
  accessibility: Locator;
  glossary: Locator;
  OkBtn: Locator;
  close: Locator;

  constructor(page: Page) {
    super(page);
    this.InsmedLogo = this.page.locator('a[aria-label="Insmed Logo"]');
    this.facebook = this.page.locator('a[href="http://www.facebook.com/brinsupri"]');
    this.instagram = this.page.locator('a[href="http://www.instagram.com/brinsupri_"]');
    this.termsOfUse = this.page.locator('a[href="https://insmed.com/terms-of-use/"]');
    this.privacyPolicy = this.page.locator('a[href="https://insmed.com/privacy-policy/"]');
    this.californiaNotice = this.page.locator('a[href="https://insmed.com/privacy-policy/#section-ii"]');
    this.consumerHealth = this.page.locator('a[href="https://insmed.com/us-consumer-health-data-privacy-policy/"]');
    this.privacyChoices = this.page.locator('a[href="/privacy-choices"]');
    this.cookie = this.page.getByRole('link', { name: 'Cookie preferences' })
    this.siteMap = this.page.locator('a[href="/site-map"]');
    this.contactUs = this.page.locator('a[href="/contact"]');
    this.accessibility = this.page.locator('a[href="/accessibility"]');
    this.glossary = this.page.locator('a[href="/glossary"]');
    this.OkBtn = this.page.getByRole('button', {name: 'OK'});
    this.close = this.page.getByRole('button', { name: 'Close' });
  }

  async clickInsmedLogo() {
    await this.customClick(this.InsmedLogo.nth(1));
    await this.customClick(this.OkBtn);
  }

  async clickFacebook() {
    await this.customClick(this.facebook);
    await this.customClick(this.OkBtn);
  }

  async clickInstagram() {
    await this.customClick(this.instagram);
    await this.customClick(this.OkBtn);
  }

  async clickTermsOfUse() {
    await this.customClick(this.termsOfUse);
    await this.customClick(this.OkBtn);
  }

  async clickPrivacyPolicy() {
    await this.customClick(this.privacyPolicy);
    await this.customClick(this.OkBtn);
  }

  async clickCaliforniaNotice() {
    await this.customClick(this.californiaNotice);
    await this.customClick(this.OkBtn);
  }   

  async clickConsumerHealth() {
    await this.customClick(this.consumerHealth);
    await this.customClick(this.OkBtn);
  }

  async clickPrivacyChoices() {
    await this.customClick(this.privacyChoices);
    await expect(this.page).toHaveURL('/privacy-choices/');
  }

  async clickCookie() {
    await this.customClick(this.cookie);
    await expect(this.page.getByText('Save and accept changes')).toBeVisible();
  }

  async clickSiteMap() {
    await this.customClick(this.siteMap);
    await expect(this.page).toHaveURL('/site-map/');
  }   

  async clickContactUs() {
    await this.customClick(this.contactUs);
    await expect(this.page).toHaveURL('/contact/');
  }

  async clickAccessibility() {
    await this.customClick(this.accessibility);
    await expect(this.page).toHaveURL('/accessibility/');
  }

  async clickGlossary() {
    await this.customClick(this.glossary);
    await expect(this.page).toHaveURL('/glossary/');
  }
}