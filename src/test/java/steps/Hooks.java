package steps;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Hooks {

    private static AppiumDriver<WebElement> driver;


    @Before
    public void setup()  throws MalformedURLException{

        DesiredCapabilities caps = new DesiredCapabilities();

        caps.setCapability("platformName", "ANDROID");
//        caps.setCapability(CapabilityType.PLATFORM_NAME, "Android");
        caps.setCapability(MobileCapabilityType.VERSION, "10");
        caps.setCapability(MobileCapabilityType.DEVICE_NAME, "Android SDK Built for x86");
        caps.setCapability(MobileCapabilityType.UDID, "emulator-5554");
        caps.setCapability(MobileCapabilityType.NEW_COMMAND_TIMEOUT, 60);
        caps.setCapability(MobileCapabilityType.APP, "C:\\Kerjaan\\APPS Automation Test Graendy\\src\\main\\resources\\apk\\SampleAndroid.apk");

        URL url = new URL ("http://0.0.0.0:4723/wd/hub");

        driver = new AppiumDriver<WebElement>(url, caps);
        String sessionId = driver.getSessionId().toString();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        System.out.println("--------Apps Started--------");

    }

    @After
    public void teardown()	{
        driver.quit();
        }

    public static AppiumDriver<WebElement> getDriver() {
        return driver;
    }

}