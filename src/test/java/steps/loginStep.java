package steps;

import io.appium.java_client.AppiumDriver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pageObjects.loginPO;

public class loginStep {


    private AppiumDriver<WebElement> driver = Hooks.getDriver();
    private loginPO login = new loginPO(driver);


    @Given("user launch the sample android application")
    public void user_launch_the_sample_android_application()throws InterruptedException{
      login.verifyLoginButton();
    }

    @When("user input wrong email {string} on Login page")
    public void user_input_wrong_email_on_Login_page(String email)throws InterruptedException{
        login.inputEmailOnLoginPage(email);
        login.clickOnLoginButton();
    }

    @Then("user verify error message on login page")
    public void user_verify_error_message_on_login_page() {
        Assert.assertTrue(login.getErrorMessages(), "Error messages not present");
    }

    @When("user input valid {string} email but empty password on Login page")
    public void user_input_valid_email_but_empty_password_on_Login_page(String email)throws InterruptedException{
        login.inputEmailOnLoginPage(email);
        login.clickOnLoginButton();
    }

    @When("user input password {string} but empty email on Login page")
    public void user_input_password_but_empty_email_on_Login_page(String password)throws InterruptedException{
        login.inputPasswordOnLoginPage(password);
        login.clickOnLoginButton();
    }

    @And("user_input with wrong email {string} and password {string} on login page")
    public void user_input_with_wrong_email_and_password_on_login_page(String email, String password)throws InterruptedException{
        login.inputEmailOnLoginPage(email);
        login.inputPasswordOnLoginPage(password);
        login.clickOnLoginButton();
    }

    @Then("user verify error toast message on login page")
    public void user_verify_error_toast_message_on_login_page() {
        Assert.assertTrue(login.getErrorToastMessages(), "Error toast messages not present");
    }


}
