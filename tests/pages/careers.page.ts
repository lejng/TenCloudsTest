import {JobOfferComponent} from '../components/job.offer.component';
import {BaseComponent} from "../base/base.component";

export class CareersPage extends BaseComponent{
    get searchInput() {
        this.waitUntilPageLoaded()
        return $("//div[contains(@class,'job-offers__search')]//input")
    }

    get jobOffersCards()  {
        this.waitUntilPageLoaded();
        let jobOfferElements = $$("//div[contains(@class,'offers__wrapper')]//a")
        return jobOfferElements.map( element => new JobOfferComponent(element))
    }

    getJobOffersByTitle(title: string) {
        return this.jobOffersCards.filter(card => card.title == title)
    }

    searchJob(jobName: string) {
        this.searchInput.setValue(jobName)
    }

    waitUntilPageLoaded() {
        this.waitForLoadScripts()
        $("#job-offers-section").waitForDisplayed()
    }
}
