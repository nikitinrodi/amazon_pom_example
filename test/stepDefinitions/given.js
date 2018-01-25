
import { defineSupportCode } from 'cucumber';
import amazonPage from '../pageobjects/amazon-home.page';

defineSupportCode(function({ Given }) {

    Given(/^I am on the amazon website$/, function() {
        amazonPage.open();
    });

});
