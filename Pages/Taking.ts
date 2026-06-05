import {BasePage} from "./Base";
import {expect, Locator, Page} from "@playwright/test";
import {StudyPage} from "./Study";

export class TakingPage extends BasePage {
    fda: Locator;
    OK: Locator;
    airway: Locator;
    savings: Locator;
    
    constructor(page: Page) {                   
        super(page);
        this.fda = this.page.locator('a[href="https://www.fda.gov/safety/medwatch"]');
        this.OK = this.page.getByRole('button', { name: 'OK' });
        this.airway = this.page.locator('a[href="/resources/#airway-clearance-video"]');
        this.savings = this.page.locator('a[href="/savings-and-support"]');
    }

    async clickFDALink(){
       await this.customClick(this.fda);
       await this.customClick(this.OK);       
    }

    async clickAirwayLink(){
        await this.customClick(this.airway);
        await expect(this.page).toHaveURL('https://www.brinsupri.com/resources/#airway-clearance-video');
    }

    async clickSavingsLink(){
        await this.customClick(this.savings);
        await expect(this.page).toHaveURL('https://www.brinsupri.com/savings-and-support/');
    }
}