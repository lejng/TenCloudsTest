const HeaderComponent = require('../components/header.component')
const CareersPage = require('../pages/careers.page')

describe('Careers Page Tests', () => {
    const careersTabName = "Careers"
    const headerComponent = new HeaderComponent()
    const careersPage = new CareersPage()

    beforeEach(async () => {
        browser.url(browser.config.baseUrl)
    });

    it('Validate job offers count', () => {
        const jobTitle = "QA Automation Engineer"
        const expectedJobCounts = 1
        headerComponent.chooseTab(careersTabName)
        let cards = careersPage.getJobOffersByTitle(jobTitle)
        const actualJobCounts = cards.length
        expect(actualJobCounts).toEqual(expectedJobCounts)
    });

    it('Validate job offers search input', () => {
        const jobName = "Automation"
        headerComponent.chooseTab(careersTabName)
        careersPage.searchJob(jobName)
        let jobs = careersPage.jobOffersCards
        jobs.forEach(job => expect(job.title).toContain(jobName))
    });
});


