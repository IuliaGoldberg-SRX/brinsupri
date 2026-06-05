import {BasePage} from "../Pages/Base";
import {TakingPage} from "../Pages/Taking";
import {test, expect} from "@playwright/test";
import {StudyPage} from "../Pages/Study";

test.describe('Taking Page Tests', () => {
    let Base:BasePage;
    let Taking:TakingPage;
    let Study:StudyPage;

    test.beforeEach(async ({ page }) => {       
        Base = new BasePage(page);
        Taking = new TakingPage(page);
        Study = new StudyPage(page);
        await Base.navigate('/taking-brinsupri/');
    });

    test("Click on FDA link", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            Taking.clickFDALink() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program');
    
  })

  test("Click on Airway clearance techniques link", async () => {
    await Taking.clickAirwayLink();
})

 test('Click on the Bronchiectasis (BE) Management Tool preview image', async () => {        
        await Study.clickToolImage();
    })

    test("Click on Get your Tool button", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            Study.clickToolButton() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://www.brinsupri.com/pdfs/brinsupri-bronchiectasis-management-tool.pdf');
    
  })

  test('Click on the Share button', async () => {
        await Study.clickShareButton();
})
 test("Click on Get your Tool in Spanish button", async ({page}) => {
    const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            Study.clickSpanishButton() // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://www.brinsupri.com/pdfs/brinsupri-bronchiectasis-management-tool-spanish.pdf');
})

test('Click on the Share button for Spanish tool', async () => {
        await Study.clickShareSpanishButton();
})

})