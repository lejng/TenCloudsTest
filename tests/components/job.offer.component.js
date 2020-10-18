
class JobOfferComponent  {
    constructor(jobOfferElement) {
        this.jobOfferElement = jobOfferElement;
    }

    get title() {return this.jobOfferElement.$("h3").getText()}
}

module.exports = JobOfferComponent
