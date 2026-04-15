import { BasePage } from "./Base";
import { Locator, Page, expect } from "@playwright/test";

export class SignUpPage extends BasePage {
  not: Locator;
  firstName: Locator;
  lastName: Locator;
  email: Locator;
  address: Locator;
  city: Locator;
  state: Locator;
  zipCode: Locator;
  checkmark: Locator;
  submitButton: Locator;

    constructor(page: Page) {                           
    super(page);
    this.not = this.page.locator('button:has-text("I am not prescribed BRINSUPRI")');
    this.firstName = this.page.locator('#firstName');
    this.lastName = this.page.locator('#lastName');
    this.email = this.page.locator('#email');
    this.address = this.page.locator('#mailingAddress1');
    this.city = this.page.locator('#city');
    this.state = this.page.locator('select[name="state"]');
    this.zipCode = this.page.locator('#zipCode');
    this.checkmark = this.page.locator('.jsx-1a6c81a194273f9a.relative.min-w-\\[14px\\]');
    this.submitButton = this.page.locator('button[type="submit"]');
  }

  async clickOnNotPrescribed(){
    await this.customClick(this.not);
    await expect(this.firstName).toBeVisible();
  }

  async fillForm(firstName: string, lastName: string, email: string, address: string, city: string, state: string, zipCode: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.address.fill(address);
    await this.page.waitForTimeout(1000)
    //await this.address.press('ArrowDown');
    await this.address.press('Enter');
    await this.city.fill(city);
    await this.state.selectOption(state);
    await this.zipCode.fill(zipCode);
  }

  async submitForm() {
    await expect(this.submitButton).toBeDisabled()
    await this.checkmark.check();
    await expect(this.submitButton).toBeEnabled() // Wait for 3 seconds to ensure the checkmark is clicked before submitting
    //await this.submitButton.click();
  }
}