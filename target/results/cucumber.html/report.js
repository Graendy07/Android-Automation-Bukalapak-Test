$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login Test Case",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TestAll"
    }
  ]
});
formatter.scenario({
  "name": "User try to login using wrong email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestAll"
    },
    {
      "name": "@TestingLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the sample android application",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.loginStep.user_launch_the_sample_android_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input wrong email \"(\u0026@\u0026#\u0026@\" on Login page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.loginStep.user_input_wrong_email_on_Login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify error message on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.loginStep.user_verify_error_message_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User try to login using valid email but empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestAll"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user input valid \"testing@gmail.com\" email but empty password on Login page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.loginStep.user_input_valid_email_but_empty_password_on_Login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify error message on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.loginStep.user_verify_error_message_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User try to login with empty email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestAll"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user input password \"qwerty123\" but empty email on Login page",
  "keyword": "When "
});
formatter.match({
  "location": "steps.loginStep.user_input_password_but_empty_email_on_Login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify error message on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.loginStep.user_verify_error_message_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User try to login using wrong email \u0026 password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestAll"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user_input with wrong email \"testingGajah@gmail.com\" and password \"qwerty123\" on login page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.loginStep.user_input_with_wrong_email_and_password_on_login_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify error toast message on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.loginStep.user_verify_error_toast_message_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/register.feature");
formatter.feature({
  "name": "Registrasi Test Case",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TestAll"
    }
  ]
});
formatter.scenario({
  "name": "user try to register without input name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestAll"
    },
    {
      "name": "@TestingRegistrasi"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the sample android application",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.loginStep.user_launch_the_sample_android_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input email field \"testing321@gmail.com\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_email_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password field \"qwerty123\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input confirm password field \"qwerty123\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_confirm_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify error message on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.loginStep.user_verify_error_message_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user try to register without input email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestAll"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the sample android application",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.loginStep.user_launch_the_sample_android_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input name field \"haloha\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_name_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password field \"qwerty123\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input confirm password field \"qwerty123\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_confirm_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify error message on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.loginStep.user_verify_error_message_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user try to register without input password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestAll"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the sample android application",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.loginStep.user_launch_the_sample_android_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input name field \"haloha\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_name_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input email field \"testing321@gmail.com\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_email_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input confirm password field \"qwerty123\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_confirm_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify error message on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.loginStep.user_verify_error_message_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user try to register with invalid confirm password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestAll"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the sample android application",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.loginStep.user_launch_the_sample_android_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input name field \"haloha\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_name_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input email field \"testing321@gmail.com\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_email_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password field \"qwerty123\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input confirm password field \"qwerty\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_confirm_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify error message on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.loginStep.user_verify_error_message_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user try to register with invalid email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestAll"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the sample android application",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.loginStep.user_launch_the_sample_android_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input name field \"testing1\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_name_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input email field \"testing1@gmail\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_email_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password field \"qwerty123\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input confirm password field \"qwerty123\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_confirm_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify error message on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.loginStep.user_verify_error_message_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user success to register \u0026 same email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestAll"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the sample android application",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.loginStep.user_launch_the_sample_android_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input name field \"test31\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_name_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input email field \"test31@gmail.com\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_email_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password field \"qwerty321\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input confirm password field \"qwerty321\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_confirm_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the success register",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.registerStep.user_verify_the_success_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input name field \"test31\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_name_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input email field \"test31@gmail.com\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_email_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password field \"qwerty321\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input confirm password field \"qwerty321\" on register page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_input_confirm_password_field_on_register_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the email already exists",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.registerStep.user_verify_the_email_already_exists()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user back to login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TestAll"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch the sample android application",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.loginStep.user_launch_the_sample_android_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on register link",
  "keyword": "When "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_register_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click or tap on login link",
  "keyword": "And "
});
formatter.match({
  "location": "steps.registerStep.user_click_or_tap_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});