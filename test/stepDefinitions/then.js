
import { defineSupportCode } from 'cucumber';
import amazonResult from '../pageobjects/amazon-result.page';
import amazonCart from '../pageobjects/amazon-cart.page';


defineSupportCode(function({ Then }) {

    Then(/^I should see search results$/, function() {
        amazonResult.isSearched().should.be.true;
    });

    Then(/^I should see all items in the cart$/, function() {
        amazonCart.itemCheck();
    });

    Then(/^I should not see Monitor in the cart$/, function() {
        amazonCart.itemCheckDeleted();
    });



});
