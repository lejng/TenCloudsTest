import {BaseComponent} from "../base/base.component";

export class JobOfferComponent extends BaseComponent{
    private jobOfferElement: WebdriverIO.Element;

    constructor(jobOfferElement: WebdriverIO.Element) {
        super();
        this.jobOfferElement = jobOfferElement;
    }

    get title() : string {return this.getText(this.jobOfferElement.$("h3"), "Job Offer Component")}
}
