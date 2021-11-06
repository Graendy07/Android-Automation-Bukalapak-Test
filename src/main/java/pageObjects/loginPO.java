package pageObjects;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import utilities.AppiumHelpers;

public class loginPO {

    AppiumHelpers appium;
    AppiumDriver<WebElement> driver;

    public loginPO(AppiumDriver<WebElement> driver) {
        this.driver = driver;
        appium = new AppiumHelpers(driver);

        //This initElements method will create all Android Elements
        PageFactory.initElements(new AppiumFieldDecorator(driver),this);
    }


    @AndroidFindBy (id = "com.loginmodule.learning:id/appCompatButtonLogin")
    private WebElement loginButton;

    @AndroidFindBy (id = "com.loginmodule.learning:id/textInputEditTextEmail")
    private WebElement inputEmailField;

    @AndroidFindBy (id = "com.loginmodule.learning:id/textInputEditTextPassword")
    private WebElement inputPasswordField;

    @AndroidFindBy (xpath = "//android.widget.LinearLayout/android.widget.TextView")
    private WebElement warningMessageOnEmail;

    @AndroidFindBy (id = "com.loginmodule.learning:id/snackbar_text")
    private WebElement wrongEmailandPassToastMessage;


    /**
     * To validate the click login list is displayed or not
     */
    public void verifyLoginButton () throws InterruptedException {
        appium.hardWait(5);
        if (loginButton.isDisplayed()){
            assert true;
            System.out.println("login button is displayed");
        }
        else {
            assert false;
            System.out.println("login button is not displayed");
        }

    }


    public void inputEmailOnLoginPage (String email) throws InterruptedException {
        appium.hardWait(3);
        appium.enterText(inputEmailField, email, false);
        appium.hideKeyboard();
        appium.hardWait(1);
    }

    public void inputPasswordOnLoginPage (String password) throws InterruptedException {
        appium.enterText(inputPasswordField, password, false);
        appium.hardWait(1);
    }

    public void clickOnLoginButton() throws InterruptedException{
        appium.waitTillElementIsVisible(loginButton, 3);
        appium.clickOn(loginButton);
        appium.hardWait(2);
    }

    public Boolean getErrorMessages(){
        return appium.waitInCaseElementVisible(warningMessageOnEmail, 5) != null;
    }

    public Boolean getErrorToastMessages(){
        return appium.waitInCaseElementVisible(wrongEmailandPassToastMessage, 5) != null;
    }

}
