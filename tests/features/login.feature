Feature: Client application login
  @login
  Scenario: Successful login with valid credentials
    Given I am on the client login page
    When I sign in with valid credentials
    Then I should see the dashboard
