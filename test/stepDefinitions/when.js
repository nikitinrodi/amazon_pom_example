
import { defineSupportCode } from 'cucumber';
import amazonPage from '../pageobjects/amazon-home.page';
import amazonResult from '../pageobjects/amazon-result.page';
import amazonProduct from '../pageobjects/amazon-product.page';
import amazonCart from '../pageobjects/amazon-cart.page';

defineSupportCode(function({ When }) {

    When(/^I enter "([^"]*)" into the search field$/, function(search_request) {
        amazonPage.enterText(search_request);
        amazonPage.amazonsearchInput.getValue().should.equal(search_request);
    });

    When(/^I click the search button$/, function() {
        amazonPage.search();
    });

    When(/^I click on top result$/, function() {
        amazonResult.topResult();
        amazonResult.pageisLoaded().should.be.true;
    });

    When(/^I click add to cart$/, function() {
        amazonProduct.addCart();
        amazonProduct.waitForPopup();
    });

    When(/^I take a screenshot of the page$/, function() {
        browser.saveScreenshot('./cat_cup_snapshot.png');
    });

    When(/^I am in the cart$/, function() {
        amazonCart.clickCart();
    });

    When(/^I delete Monitor from the cart$/, function() {
        amazonCart.deleteMonitor();
        //browser.saveScreenshot('./monitor_deleted_snapshot.png');
    });

});