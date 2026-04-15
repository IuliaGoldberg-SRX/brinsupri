import  {BasePage} from '../Pages/Base'
import {SignUpPage} from '../Pages/SignUp'
import { test, expect } from "@playwright/test";

test.describe("Sign Up Page Tests", () => {
  let base: BasePage;
  let signUpPage: SignUpPage;

  test.beforeEach(async ({ page }) => {
    signUpPage = new SignUpPage(page);
    base = new BasePage(page);
    await base.navigate('/sign-up/'); // Navigates to the Sign Up page
  })

test("Fill the form and submit", async () => {
  await signUpPage.clickOnNotPrescribed();
  await signUpPage.fillForm("John", "Doe", "john.doe@example.com", "56 Bogart Street", "Brooklyn", "NY", "11206");
  await signUpPage.submitForm();
})

test("should display the form after clicking 'I am not prescribed BRINSUPRI'", async () => {
  await signUpPage.clickOnNotPrescribed();
  await expect(signUpPage.firstName).toBeVisible();
  await expect(signUpPage.lastName).toBeVisible();
  await expect(signUpPage.email).toBeVisible();
});

test("should show validation errors for empty required fields", async ({ page }) => {
  await signUpPage.clickOnNotPrescribed();
  await signUpPage.firstName.click()
  await signUpPage.lastName.click()
  // Adjust selector as needed for your app's validation error
  await expect(page.locator('text=The first name field cannot be blank.')).toBeVisible();
  await signUpPage.email.click()
  await expect(page.locator('text=The last name field cannot be blank.')).toBeVisible();
  await signUpPage.address.click()
  await expect(page.locator('text=The email address field cannot be blank.')).toBeVisible();
  //check error message for incorrect email format
  await signUpPage.email.fill('google')
  await signUpPage.city.click()
  await expect(page.locator('text=Email address should follow the format user@domain.com.')).toBeVisible();
  await expect(page.locator('text=The Mailing Address cannot be blank.')).toBeVisible();
  await signUpPage.state.click()
  await signUpPage.zipCode.click()
  await expect(page.locator('text=The city field cannot be blank.')).toBeVisible();
  await expect(page.locator('text=Please select a state.')).toBeVisible();
  await signUpPage.firstName.click()
  await expect(page.locator('text=The Zip Code field cannot be blank.')).toBeVisible();
  //check error message for incorrect zip code format
  await signUpPage.zipCode.fill('123')
  await signUpPage.checkmark.check()
  await expect(page.locator('text=Please enter a valid ZIP Code.')).toBeVisible();
  await signUpPage.checkmark.uncheck()
  await expect(page.locator('text=Please provide confirmation.')).toBeVisible();
});

})