import { Header } from "../Pages/Header";
import { test, expect } from "@playwright/test";
import { BasePage } from "../Pages/Base";
import { HomePage } from "../Pages/Home";

test.describe("Header Tests", () => {
    let header: Header;
    let base: BasePage;

    test.beforeEach(async ({ page }) => {
        header = new Header(page);
        base = new BasePage(page);
        await base.navigate('/'); // Navigates to the base URL defined in playwright.config.ts
    });

    test('ISI Link', async ({ page }) => {
        await header.isi.click();
        await expect(page).toHaveURL('/#isi');
    })

    test('PI Link', async ({ page }) => {
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            header.PI.click(), // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('/pdfs/full-prescribing-information.pdf');
    });

    test('Patient Information Link', async ({ page }) => {
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            header.PatInfo.click(), // or any action that opens the new tab
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('pdfs/patient-information.pdf');
    });

    test('FAQ Link', async ({ page }) => {
        await header.clickFAQ();
    });

    test('Glossary Link', async ({ page }) => {
        await header.clickGlossary();
    });

    test('Healthcare Professionals Link', async ({ page }) => {
        await header.clickHealthcareProf();
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://www.brinsuprihcp.com/');
    });

    test('Search Button', async ({ page }) => {
        //click on Search button and verify the search modal appears with the expected text
        await header.clickSearch();
        //type something and check that results appear
        await header.typeSearch();
    });

    test('Search modal - MedWatch Link', async ({ page }) => {
        await header.clickSearch();
        await header.clickSearchMedWatch();
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            header.medWatch.click()
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program');
    });

    test('Search modal - Terms of use Link', async ({ page }) => {
        await header.clickSearch();
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            header.clickSearchTerms()
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://insmed.com/terms-of-use/');
    });

    test('Search modal - Brinsupri Study Results Link', async ({ page }) => {
        await header.clickSearch();
        await header.clickStudy();
    });

    test('Search modal - Be Management Tool', async ({ page }) => {
        await header.clickSearch();
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            header.clickTool()
        ]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL('https://www.brinsupri.com/pdfs/brinsupri-bronchiectasis-management-tool.pdf');
    });

    test('Search modal - Stay up to Date Link', async ({ page }) => {
        await header.clickSearch();
        await header.clickStay();
    });



})