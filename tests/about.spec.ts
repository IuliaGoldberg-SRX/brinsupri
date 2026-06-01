import {BasePage} from "../Pages/Base";
import {AboutPage} from "../Pages/About";
import {test, expect} from "@playwright/test";

test.describe("About Page Tests", () => {
  let base: BasePage;
  let aboutPage: AboutPage; 

  test.beforeEach(async ({ page }) => {
    base = new BasePage(page);
    aboutPage = new AboutPage(page);
    base = new BasePage(page);
    await base.navigate('/about-brinsupri/'); 
  });

  test("Click on video", async () => {
    await aboutPage.clcikVideo();
  });

  test("Click on transcript", async () => {   
    await aboutPage.clickTranscript();
})
test("Click on the 'See Study Results' link", async () => {
    await aboutPage.clickStudy();
})

})