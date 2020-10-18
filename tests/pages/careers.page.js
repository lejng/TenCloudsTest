const JobOfferComponent = require('../components/job.offer.component');

class CareersPage  {
    get searchInput(){
        this.waitUntilPageLoaded()
        return $("//div[contains(@class,'job-offers__search')]//input")
    }

    get jobOffersCards() {
        this.waitUntilPageLoaded();
        let jobOfferElements = $$("//div[contains(@class,'offers__wrapper')]//a")
        return jobOfferElements.map( element => new JobOfferComponent(element))
    }

    getJobOffersByTitle(title){
        return this.jobOffersCards.filter(card => card.title == title)
    }

    searchJob(jobName){
        this.searchInput.setValue(jobName)
    }

    waitUntilPageLoaded(){
        $("#job-offers-section").waitForDisplayed()
    }
}

module.exports = CareersPage;
