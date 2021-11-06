package steps;

import io.appium.java_client.AppiumDriver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pageObjects.registerPO;

public class registerStep {

    private AppiumDriver<WebElement> driver = Hooks.getDriver();
    private registerPO register = new registerPO(driver);


    @When("user input name field {string} on register page")
    public void user_input_name_field_on_register_page(String name)throws InterruptedException{
        register.inputNameOnRegisterPage(name);
    }

    @When("user input email field {string} on register page")
    public void user_input_email_field_on_register_page(String email)throws InterruptedException{
        register.inputEmailOnRegisterPage(email);
    }

    @And("user input password field {string} on register page")
    public void user_input_password_field_on_register_page(String pass)throws InterruptedException{
        register.inputPasswordOnRegisterPage(pass);
    }

    @And("user input confirm password field {string} on register page")
    public void user_input_confirm_password_field_on_register_page(String confirmPass)throws InterruptedException{
        register.inputConfirmPasswordOnRegisterPage(confirmPass);
    }

    @Then("user verify the email already exists")
    public void user_verify_the_email_already_exists() {
        Assert.assertTrue(register.getEmailExistsToast(), "Email exists toast messages not present");
    }

    @Then("user verify the success register")
    public void user_verify_the_success_register() {
        Assert.assertTrue(register.getSuccessToast(), "Success toast messages not present");
    }

    @When("user click or tap on register button")
    public void user_click_or_tap_on_register_button()throws InterruptedException{
        register.clickOnRegisterButton();
    }

    @When("user click or tap on register link")
    public void user_click_or_tap_on_register_link()throws InterruptedException{
        register.clickOnRegisterLink();
    }

    @When("user click or tap on login link")
    public void user_click_or_tap_on_login_link()throws InterruptedException{
        register.clickOnLoginLink();
    }

}
