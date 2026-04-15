import {BasePage} from "../Pages/Base";
import {HomePage} from "../Pages/Home";
import {test} from "@playwright/test";

test.describe("Home Page Tests", () => {
  let base: BasePage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    base = new BasePage(page);
    await base.navigate('/'); // Navigates to the base URL defined in playwright.config.ts
  })

  test('Study Results Link', async ({page})=> {
    await homePage.clickStudy();
  })

    test('About Brinsupri Link', async ({page})=> {
    await homePage.clickAbout();
})

    test('Resources Link', async ({page})=> {
    await homePage.clickResources();

})

    test('Savings and Support Link', async ({page})=> {
    await homePage.clickSavings();
})

})