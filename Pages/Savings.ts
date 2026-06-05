import {BasePage} from "./Base"
import {expect, Locator, Page} from "@playwright/test";

export class SavingsPage extends BasePage {
    enroll: Locator;
    continue: Locator;
    learn: Locator;
    ssa: Locator;
    OK: Locator;
    medicare: Locator;
    accordion: Locator;
    accordion2: Locator;

   constructor(page: Page) {
        super(page);
        this.enroll = this.page.locator('a[href="https://relaynetwork.jotform.com/252877368975884"]');
        this.continue = this.page.getByRole('button', { name: 'Continue' });
        this.learn = this.page.locator('a[href="/sign-up/#prospective"]');
        this.ssa = this.page.getByRole('link', { name: 'ssa.gov/medicare/part-d-extra-help' });
        this.OK = this.page.getByRole('button', { name: 'OK' });
        this.medicare = this.page.locator('a[href="http://Medicare.gov"]');
        this.accordion = this.page.locator('#radix-_R_bnlfiutb_')
        this.accordion2 = this.page.locator('#radix-_R_jnlfiutb_')
   }
    async clickEnroll() {
        await this.enroll.nth(0).click();
        await this.continue.click();
    }

      async clickSignUpNow() {
        await this.enroll.nth(1).click();
        await this.continue.click();
    }

    async clickLearn(){
        await this.learn.click();
        await expect(this.page).toHaveURL('https://www.brinsupri.com/sign-up/#prospective');
    }

    async clickSSA() {
        await this.customClick(this.ssa);
        await this.customClick(this.OK);
    }

    async clickMedicare() {
        await this.customClick(this.medicare);
        await this.customClick(this.OK);
    }

    async clickAccodion2(){
        await this.accordion2.click();
        await expect(this.page.getByText('You may be eligible to save on BRINSUPRI.')).toBeVisible();
    }

    async clickCloseAccordion(){
        await this.accordion.click();
        await expect(this.page.getByText('If you have Medicare Part D prescription drug coverage')).not.toBeVisible();
    }

    async clickOpenAccordion(){
        await this.accordion.click();
        await expect(this.page.getByText('If you have Medicare Part D prescription drug coverage')).toBeVisible();
    }
}