import {BasePage} from "./Base";
import {expect, Locator, Page} from "@playwright/test";

export class AboutPage extends BasePage {
    video: Locator;
    transcript:Locator;
    study:Locator;


  constructor(page: Page) {
    super(page);
    this.video = this.page.locator('iframe[title="Brinsupri Mechanism of Action_Patient"]');
    this.transcript = this.page.locator('div[class="flex items-center justify-center w-[32px] h-[32px] bg-peri-dark rounded-full"]');
    this.study = this.page.locator('a[href="/brinsupri-study-results"]');
  }
  
async clcikVideo(){
    await this.customClick(this.video);
    await this.page.waitForTimeout(2000); // Wait for the video to load
}

async clickTranscript(){
    //open Transcript
    await this.customClick(this.transcript);
    await expect(this.page.locator('text=Bronchiectasis is a chronic lung disease')).toBeVisible();
    //close Transcript
    await this.customClick(this.transcript);
    await expect(this.page.locator('text=Bronchiectasis is a chronic lung disease')).not.toBeVisible(); 
}

async clickStudy(){
    await this.customClick(this.study);
    await expect(this.page).toHaveURL('https://www.brinsupri.com/brinsupri-study-results/');
}
}