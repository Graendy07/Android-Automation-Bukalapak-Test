@TestAll

  Feature: Login Test Case

  @TestingLogin
  Scenario: User try to login using wrong email
    Given user launch the sample android application
    When user input wrong email "(&@&#&@" on Login page
    Then user verify error message on login page

  Scenario: User try to login using valid email but empty password
    When user input valid "testing@gmail.com" email but empty password on Login page
    Then user verify error message on login page

  Scenario: User try to login with empty email
    When  user input password "qwerty123" but empty email on Login page
    Then user verify error message on login page

  Scenario: User try to login using wrong email & password
    And user_input with wrong email "testingGajah@gmail.com" and password "qwerty123" on login page
    Then user verify error toast message on login page
