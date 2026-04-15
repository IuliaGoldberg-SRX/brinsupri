import { BasePage } from "./Base";
import { expect, Locator, Page } from "@playwright/test";

export class Header extends BasePage {
    isi: Locator;
    PI: Locator;
    PatInfo: Locator;
    FAQ: Locator;
    glossary: Locator;
    healthcareProf: Locator;
    OK: Locator;
    searchBtn: Locator;
    searchInput: Locator
    terms: Locator;
    medWatch: Locator;
    study: Locator;
    tool: Locator;
    stay: Locator;
   

    constructor(page: Page) {
        super(page);
        this.isi= this.page.locator('a[href="#isi"]');
        this.PI = this.page.locator('a[href="/pdfs/full-prescribing-information.pdf"]')
        this.PatInfo = this.page.locator('a[href="/pdfs/patient-information.pdf"]');
        this.FAQ = this.page.locator('a[href="/frequently-asked-questions/"]');
        this.glossary = this.page.locator('a[href="/glossary/"]');
        this.healthcareProf = this.page.locator('a[href="https://www.brinsuprihcp.com"]');
        this.OK = this.page.getByRole('button', { name: 'OK' });
        this.searchBtn = this.page.locator('button[class="ml-5 hidden lg:flex items-center justify-center w-8 h-8 rounded-full border-2 border-white text-white"]')
        this.searchInput = this.page.locator('input[class="search-input"]');
        this.medWatch = this.page.locator('a[href="https://www.fda.gov/medwatch"]').nth(2);
        this.terms = this.page.locator('a[class="font-gilroy-bold underline text-green"]')
        this.study = this.page.getByRole('link', {name: 'BRINSUPRI study results'});
        this.tool = this.page.getByRole('link', {name: 'BE Management Tool'});
        this.stay = this.page.getByRole('link', {name: 'Stay up to date'});
    }

    async clickFAQ(){
        await this.customClick(this.FAQ)
        await expect(this.page).toHaveURL('');
    }

    async clickGlossary(){
        await this.customClick(this.glossary)
        await expect(this.page).toHaveURL('/glossary/');
    }

    async clickHealthcareProf(){
        await this.customClick(this.healthcareProf);
        await this.customClick(this.OK);
    }

    async clickSearch(){
        await this.customClick(this.searchBtn);
        await expect(this.page.locator('text=Your health matters to us.')).toBeVisible();
    }

    async typeSearch(res = 'test'){
            await this.searchInput.fill(res);
            const result = this.page.locator(`a[data-link=${res}]`).first();
            await expect(result).toBeVisible()
    }

     async clickSearchMedWatch(){
        await this.medWatch.click();
        await this.customClick(this.OK);
    }

    async clickSearchTerms(){
        await this.terms.click();
        await this.customClick(this.OK);
    }

    async clickStudy(){
        await this.study.click();
        await expect(this.page).toHaveURL('/brinsupri-study-results/');
    }

      async clickTool(){
        await this.tool.click();
    }

      async clickStay(){
        await this.stay.click();
        await expect(this.page).toHaveURL('/sign-up/');
    }


}
