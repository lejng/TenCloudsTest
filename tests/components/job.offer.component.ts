import {BaseComponent} from "../base/base.component";

export class JobOfferComponent extends BaseComponent{
    private jobOfferElement: WebdriverIO.Element;

    constructor(jobOfferElement: WebdriverIO.Element) {
        super();
        this.jobOfferElement = jobOfferElement;
    }

    get title() : string {return this.jobOfferElement.$("h3").getText()}
}
