import {BasePage} from "../Pages/Base";
import {HomePage} from "../Pages/Home";
import {test, expect} from "@playwright/test";
import {FooterPage} from "../Pages/Footer";

test.describe("Footer Tests", () => {
  let base: BasePage;
  let homePage: HomePage;
  let footerPage: FooterPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    footerPage = new FooterPage(page);
    base = new BasePage(page);
    await base.navigate('/'); 
    await footerPage.close.click(); // Navigates to the base URL defined in playwright.config.ts
  })

  test("Insmed logo", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            footerPage.clickInsmedLogo() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://insmed.com/');
    
  })

  test("Facebook icon", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            footerPage.clickFacebook() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://www.facebook.com/brinsupri');
    
  })

  test("Instagram icon", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            footerPage.clickInstagram() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fbrinsupri_&is_from_rle');
  })

  test("Terms of Use", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            footerPage.clickTermsOfUse() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://insmed.com/terms-of-use/');
  })

  test("Privacy Policy", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            footerPage.clickPrivacyPolicy() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://insmed.com/privacy-policy/');
  })

  test("California Notice", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            footerPage.clickCaliforniaNotice() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://insmed.com/privacy-policy/#section-ii');
  })

  test("Consumer Health", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            footerPage.clickConsumerHealth() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://insmed.com/us-consumer-health-data-privacy-policy/');
  })

  test("Privacy Choices", async ({page}) => {
    await footerPage.clickPrivacyChoices();
  })
  
  test("Cookie", async ({page}) => {
    await footerPage.clickCookie();
  })

  test("Site Map", async ({page}) => {
    await footerPage.clickSiteMap()
})

test("Contact Us", async ({page}) => {  
  await footerPage.clickContactUs();
})

test("Accessibility", async ({page}) => {  
  await footerPage.clickAccessibility();  

})

test("Glossary", async ({page}) => {
  await footerPage.clickGlossary();  
})

})