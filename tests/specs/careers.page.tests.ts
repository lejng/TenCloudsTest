import {HeaderComponent} from '../components/header.component';
import {CareersPage} from '../pages/careers.page';
import {assert} from 'chai';
import {HeaderNavTabsEnum} from "../enums/header.nav.tabs.enum";
import {SoftAssert} from "../base/soft.assert";

describe('Careers Page Tests', () => {
    const headerComponent = new HeaderComponent();
    const careersPage = new CareersPage();
    let softAssert : SoftAssert;

    beforeEach(() => {
         softAssert = new SoftAssert();
         browser.url(browser.config.baseUrl);
    });

    it('Validate job offers count', () => {
        let jobTitle = "QA Automation Engineer"
        let expectedJobCounts = 1
        headerComponent.chooseTab(HeaderNavTabsEnum.Careers)
        let cards = careersPage.getJobOffersByTitle(jobTitle)
        let actualJobCounts = cards.length
        assert.equal(actualJobCounts, expectedJobCounts, `Incorrect job offers count with title '${jobTitle}'`)
    });

    it('Validate job offers search input', () => {
        let jobName = "Automation"
        headerComponent.chooseTab(HeaderNavTabsEnum.Careers)
        careersPage.searchJob(jobName)
        let jobs = careersPage.jobOffersCards
        let errorMessage = "Job offers search input find incorrect jobs"
        jobs.forEach(job => softAssert.assertContains(job.title, jobName, errorMessage))
        softAssert.softAssertAll()
    });
});
