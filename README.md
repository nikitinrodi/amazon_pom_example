# amazon_pom_example

Test created by Rodion Nikitin

==Installation==

1. Install JDK 1.8+ and make sure class path is set properly.
2. Install Node.js from the site - https://nodejs.org/en/  take the LTS version based on your Operating system
3. Verify versions with following commands
        node --version
        npm --version
4. Navigate to the framework's package.json folder and run `npm install` to grab all dependencies.

==To run tests:==

1. Run selenium server first

java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.5.3.jar

2. Run tests

npm run tests

==Task:==

Homework:   Search Amazon.com for the following items:
 
LG 24UD58-B 24-Inch 4k Monitor
Metasploit: The Penetration Tester's Guide Book
For the final item add a cup with a cat on it, of your choosing, and take a screenshot of this page
  Add each item to your cart, then go to the cart and confirm all three items are in the cart.
The last thing is to remove the LG 24UD58-B 24-Inch 4k Monitor, and confirm that is no longer in the cart.  
Perform regular assertions to confirm that the pages are correct. Write the tests in the Page object model.

==Test files location:==

1. Step definitions: test/stepDefinitions

- given.js
- then.js
- when.js

2. pageobjects: test/pageobjects

- amazon-cart.page.js
- amazon-home.page.js
- amazon-product.page.js
- amazon-result.page.js
- page.js


3. bdd test (.feature file): test/features

- amazon.feature

Test video in VIDEO folder - https://github.com/nikitinrodi/amazon_pom_example/blob/master/VIDEO/test_run.mov





