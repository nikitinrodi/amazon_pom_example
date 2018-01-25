import Page from './Page'

class AmazonCart extends Page {

    get cartButton() { return browser.element('#nav-cart');}
    get deleteButton() { return browser.element('//*[@id="activeCartViewForm"]/div[2]/div[3]/div[4]/div/div[1]/div/div/div[2]/div/span[1]/span');}
    get metasploitItem() { return browser.element('span*=Metasploit');}
    get monitorItem() { return browser.element('span*=LG 24UD58-B');}
    get catItem() { return browser.element('span*=Cat')};


    clickCart () {
        this.cartButton.click();
        browser.getTitle().should.equal('Amazon.com Shopping Cart');
    }

    itemCheck () {
        this.metasploitItem.isVisible();
        this.catItem.isVisible();
        this.monitorItem.isVisible();
    }

    itemCheckDeleted () {
        this.metasploitItem.isVisible();
        this.catItem.isVisible();
    }

    deleteMonitor() {
        this.deleteButton.isVisible();
        this.deleteButton.click();
        browser.pause(2000);
    }
}

export default new AmazonCart();