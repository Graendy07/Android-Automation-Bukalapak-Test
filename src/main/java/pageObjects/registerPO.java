package pageObjects;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import utilities.AppiumHelpers;

public class registerPO {

    AppiumHelpers appium;
    AppiumDriver<WebElement> driver;

    public registerPO(AppiumDriver<WebElement> driver) {
        this.driver = driver;
        appium = new AppiumHelpers(driver);

        //This initElements method will create all Android Elements
        PageFactory.initElements(new AppiumFieldDecorator(driver),this);
    }

    @AndroidFindBy(id = "com.loginmodule.learning:id/textViewLinkRegister")
    private WebElement registerLink;

    @AndroidFindBy(id = "com.loginmodule.learning:id/textInputEditTextName")
    private WebElement nameField;

    @AndroidFindBy (id = "com.loginmodule.learning:id/textInputEditTextEmail")
    private WebElement emailField;

    @AndroidFindBy (id = "com.loginmodule.learning:id/textInputEditTextPassword")
    private WebElement passwordField;

    @AndroidFindBy(id = "com.loginmodule.learning:id/textInputEditTextConfirmPassword")
    private WebElement confirmPasswordField;

    @AndroidFindBy(id = "com.loginmodule.learning:id/appCompatButtonRegister")
    private WebElement registerButton;

    @AndroidFindBy(xpath = "//android.widget.LinearLayout/android.widget.TextView")
    private WebElement warningErrorMessage;

    @AndroidFindBy(id = "com.loginmodule.learning:id/appCompatTextViewLoginLink")
    private WebElement loginLink;

    @AndroidFindBy(xpath = "//*[@text='Email Already Exists']")
    private WebElement emailExistsToast;

    @AndroidFindBy(xpath = "//*[@text='Registration Successful']")
    private WebElement registSuccessToast;

    public void inputNameOnRegisterPage (String name) throws InterruptedException {
        appium.enterText(nameField, name, false);
        appium.hardWait(1);
    }

    public void inputEmailOnRegisterPage (String email) throws InterruptedException {
        appium.enterText(emailField, email, false);
        appium.hardWait(1);
    }

    public void inputPasswordOnRegisterPage (String pass) throws InterruptedException {
        appium.enterText(passwordField, pass, false);
        appium.hardWait(1);
    }

    public void inputConfirmPasswordOnRegisterPage (String confirmPass) throws InterruptedException {
        appium.enterText(confirmPasswordField, confirmPass, false);
        appium.hardWait(1);
    }

    public void clickOnRegisterButton() throws InterruptedException{
        appium.waitTillElementIsVisible(registerButton, 3);
        appium.clickOn(registerButton);
        appium.hardWait(2);
    }

    public void clickOnRegisterLink() throws InterruptedException{
        appium.waitTillElementIsVisible(registerLink, 3);
        appium.clickOn(registerLink);
        appium.hardWait(2);
    }

    public void clickOnLoginLink() throws InterruptedException{
        appium.waitTillElementIsVisible(loginLink, 3);
        appium.clickOn(loginLink);
        appium.hardWait(2);
    }

    public Boolean getWarningMessages(){
        return appium.waitInCaseElementVisible(warningErrorMessage, 5) != null;
    }

    public Boolean getEmailExistsToast(){
        return appium.waitInCaseElementVisible(emailExistsToast, 5) != null;
    }

    public Boolean getSuccessToast(){
        return appium.waitInCaseElementVisible(registSuccessToast, 5) != null;
    }

}
