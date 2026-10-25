Feature: Login and product functionality
  Scenario: Successful login and adding products
    Given I am on the login page2
    When I enter a valid username and password2
    When I add the products2
    Then I should be able to see the products added successfully2