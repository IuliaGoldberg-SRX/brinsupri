import {BasePage} from "../Pages/Base";
import {SavingsPage} from "../Pages/Savings";
import {test, expect} from "@playwright/test";

test.describe("Savings Page Tests", () => {
  let base: BasePage;
  let savingsPage: SavingsPage;

  test.beforeEach(async ({ page }) => {
    base = new BasePage(page);
    savingsPage = new SavingsPage(page);
    await base.navigate('/savings-and-support/'); 
  });

  test("Click on Enroll in Inlighten link", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            savingsPage.clickEnroll() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://relaynetwork.jotform.com/252877368975884');
  })
 test("Click on Sign up Now link", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            savingsPage.clickSignUpNow() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://relaynetwork.jotform.com/252877368975884');
  })

  test("Click on Learn more about BRINSUPRI link", async ({page}) => {
    await savingsPage.clickLearn();
  })

  test("Click on SSA link", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            savingsPage.clickSSA() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://www.ssa.gov/medicare/part-d-extra-help');

      })

  test("Click on Medicare link", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            savingsPage.clickMedicare() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://www.medicare.gov/');
})
  test("Click on Accordion2", async ({page}) => {
    await savingsPage.clickAccodion2();
  })

  test("Click on Accordion1 to close it", async ({page}) => {
    await savingsPage.clickCloseAccordion();
  })

  test("Click on Accordion1 to open it", async ({page}) => {
    await savingsPage.clickOpenAccordion();
  })


})