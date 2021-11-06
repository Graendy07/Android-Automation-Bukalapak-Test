@TestAll

Feature: Registrasi Test Case

  @TestingRegistrasi
  Scenario: user try to register without input name
    Given user launch the sample android application
    When user click or tap on register link
    And user input email field "testing321@gmail.com" on register page
    And user input password field "qwerty123" on register page
    And user input confirm password field "qwerty123" on register page
    When user click or tap on register button
    Then user verify error message on login page

  Scenario: user try to register without input email
    Given user launch the sample android application
    When user click or tap on register link
    And user input name field "haloha" on register page
    And user input password field "qwerty123" on register page
    And user input confirm password field "qwerty123" on register page
    When user click or tap on register button
    Then user verify error message on login page

  Scenario: user try to register without input password
    Given user launch the sample android application
    When user click or tap on register link
    And user input name field "haloha" on register page
    And user input email field "testing321@gmail.com" on register page
    And user input confirm password field "qwerty123" on register page
    When user click or tap on register button
    Then user verify error message on login page

  Scenario: user try to register with invalid confirm password
    Given user launch the sample android application
    When user click or tap on register link
    And user input name field "haloha" on register page
    And user input email field "testing321@gmail.com" on register page
    And user input password field "qwerty123" on register page
    And user input confirm password field "qwerty" on register page
    When user click or tap on register button
    Then user verify error message on login page

  Scenario: user try to register with invalid email
    Given user launch the sample android application
    When user click or tap on register link
    And user input name field "testing1" on register page
    And user input email field "testing1@gmail" on register page
    And user input password field "qwerty123" on register page
    And user input confirm password field "qwerty123" on register page
    When user click or tap on register button
    Then user verify error message on login page

  Scenario: user success to register & same email
    Given user launch the sample android application
    When user click or tap on register link
    And user input name field "test31" on register page
    And user input email field "test31@gmail.com" on register page
    And user input password field "qwerty321" on register page
    And user input confirm password field "qwerty321" on register page
    When user click or tap on register button
    Then user verify the success register
    And user input name field "test31" on register page
    And user input email field "test31@gmail.com" on register page
    And user input password field "qwerty321" on register page
    And user input confirm password field "qwerty321" on register page
    When user click or tap on register button
    Then user verify the email already exists

  Scenario: user back to login page
    Given user launch the sample android application
    When user click or tap on register link
    And user click or tap on login link