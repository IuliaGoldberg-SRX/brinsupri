import {BasePage} from "./Base";
import {expect, Locator, Page} from "@playwright/test";

export class StudyPage extends BasePage {       
    jump: Locator;
    toolImage: Locator;
    preview:Locator;
    toolButton: Locator;
    share: Locator;
    spanish: Locator;
    detailsBtn: Locator;


    constructor(page: Page) {                   
        super(page);
        this.jump = this.page.locator('a[class="page-link relative w-full h-full rounded-br-[32px] py-5 px-5 sm:px-3 flex flex-row items-center bg-peri-tint"]');
        this.toolImage = this.page.locator('img[alt="Bronchiectasis (BE) Management Tool preview image"]');
        this.preview = this.page.locator('img[data-state="open"]');
        this.toolButton = this.page.locator('a[href="/pdfs/brinsupri-bronchiectasis-management-tool.pdf"]');
        this.share = this.page.getByRole('button', { name: 'Share' });
        this.spanish = this.page.locator('a[href="/pdfs/brinsupri-bronchiectasis-management-tool-spanish.pdf"]');
        this.detailsBtn = this.page.getByRole('link', { name: 'See the details' });
    }

    async clickReducedRiskJump(){
        this.customClick(this.jump.nth(0));
        await this.page.waitForTimeout(2000);
        expect(this.page).toHaveURL('https://www.brinsupri.com/brinsupri-study-results/#reduction');
    }

    async clickHelpedJump(){
        this.customClick(this.jump.nth(1));
        await this.page.waitForTimeout(2000);
        expect(this.page).toHaveURL('https://www.brinsupri.com/brinsupri-study-results/#flare-free-year');
    }

    async clickDeclinedJump(){
        this.customClick(this.jump.nth(2));
        await this.page.waitForTimeout(2000);
        expect(this.page).toHaveURL('https://www.brinsupri.com/brinsupri-study-results/#lung-function');
    }

    async clickToolImage(){
        this.customClick(this.toolImage);
        await expect(this.preview).toBeVisible();
        await this.page.waitForTimeout(2000); // Wait for the preview to load
    }

    async clickToolButton(){
        this.customClick(this.toolButton);
    }

   async clickShareButton(){
        this.customClick(this.share.nth(0));
        await expect(this.page.locator('div[role="dialog"]')).toBeVisible();
    }

    async clickSpanishButton(){
        this.customClick(this.spanish);
    }

    async clickShareSpanishButton(){
        this.customClick(this.share.nth(1));
        await expect(this.page.locator('div[role="dialog"]').nth(1)).toBeVisible();
    }

    async clickDetailsButton(){
        this.customClick(this.detailsBtn);
        await this.page.waitForTimeout(2000);
        await expect(this.page).toHaveURL('https://www.brinsupri.com/taking-brinsupri/');
    }
}
