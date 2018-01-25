import Page from './Page'

class AmazonResult extends Page {

    get topLink() { return browser.element('//*[@class="a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal"]');}
    get resultsList() { return browser.element('#atfResults');}
    get pageContent() { return browser.element('#dp-container');}


    topResult () {
        this.topLink.click();
    }

    pageisLoaded () {
        this.pageContent.waitForVisible(1000);
        return this.pageContent.isVisible();
    }

    isSearched () {
        this.resultsList.waitForVisible(1000);
        return this.resultsList.isVisible();
    }
}

export default new AmazonResult();