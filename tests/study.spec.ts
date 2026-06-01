import {BasePage} from "../Pages/Base";
import {StudyPage} from "../Pages/Study";
import {test, expect} from "@playwright/test";

test.describe('Study Page Tests', () => {
    let Base:BasePage;
    let Study:StudyPage;

    test.beforeEach(async ({ page }) => {
        Base = new BasePage(page);
        Study = new StudyPage(page);
        await Base.navigate('/brinsupri-study-results/'); 
    });

    test('Click on Reduced the risk of bronchiectasis (BE) flares', async () => {
        await Study.clickReducedRiskJump();
    })

    test('Click on Helped more patients remain flare-free for a year', async () => {
        await Study.clickHelpedJump();
})

   test('Click on Reduced the decline of lung function with the 25-mg dose', async () => {
        await Study.clickDeclinedJump();
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

test('Click on the Details button', async () => {
        await Study.clickDetailsButton();
})

})