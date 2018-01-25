Feature: Homework

  As a user

  Scenario: Search Amazon.com for the items
    Given I am on the amazon website
    When I enter "LG 24UD58-B 24-Inch 4k Monitor" into the search field
    And I click the search button
    Then I should see search results
    When I click on top result
    And I click add to cart
    When I enter "Metasploit: The Penetration Tester's Guide Book" into the search field
    And I click the search button
    Then I should see search results
    When I click on top result
    And I click add to cart
    When I enter "Cup with cat picture" into the search field
    And I click the search button
    Then I should see search results
    When I click on top result
    And I take a screenshot of the page
    When I click add to cart
    When I am in the cart
    Then I should see all items in the cart
    When I delete Monitor from the cart
    Then I should not see Monitor in the cart

