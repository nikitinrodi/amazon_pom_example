import Page from './Page'

class AmazonPage extends Page {

    get amazonsearchButton() { return browser.element('.nav-search-submit.nav-sprite');}
    get amazonsearchInput() { return browser.element('#twotabsearchtextbox');}


    open () {
        super.open('https://www.amazon.com');
        browser.pause(1000);
        browser.getTitle().should.equal('Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more');
    }

    enterText (item) {
        this.amazonsearchInput.clearElement();
        this.amazonsearchInput.setValue(item);
    }

    search () {
        this.amazonsearchButton.click();
    }

}

export default new AmazonPage();