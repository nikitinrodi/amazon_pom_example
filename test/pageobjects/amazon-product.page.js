import Page from './Page'

class AmazonProduct extends Page {

    get addButton() { return browser.element('#add-to-cart-button');}
    get noButton() { return browser.element('#siNoCoverage');}


    addCart() {
        this.addButton.click();
    }

    waitForPopup() {
        browser.pause(2000);
        if (this.noButton.isVisible()) {
            this.noButton.click();
        } else {
            console.log()
        }
    }
}


export default new AmazonProduct();