package utilities;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;
import io.appium.java_client.android.nativekey.PressesKey;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


import java.util.List;

import static io.appium.java_client.touch.TapOptions.tapOptions;
import static io.appium.java_client.touch.offset.ElementOption.element;
import static io.appium.java_client.touch.offset.PointOption.point;

public class AppiumHelpers {

	AppiumDriver<WebElement> driver;

	public AppiumHelpers(AppiumDriver<WebElement> driver) {
		this.driver = driver;
	}


	//Elements 

	/**
	 * Enter text to input field
	 *
	 * @param e     WebElement object
	 * @param text  input text
	 * @param clear set true if want to clear field else set false
	 */
	public void enterText(WebElement e, String text, boolean clear) {
		e = waitTillElementIsClickable(e);
		if (clear) {
			e.clear();
		}
		e.sendKeys(text);
	}


	/**
	 * Get Text from field
	 *
	 * @param e WebElement object
	 * @return text from field
	 */
	public String getText(WebElement e) {
		return waitTillElementIsVisible(e).getText().trim();
	}

	public String getText(By object) {
		return driver.findElement(object).getText();
	}

	/**
	 * Click on Element
	 *
	 * @param e WebElement object
	 */
	public void clickOn(WebElement e) {
		waitTillElementIsClickable(e).click();
	}

	//Waits

	/**
	 * To wait until element is clickable
	 *
	 * @param e WebElement object
	 * @return WebElement object
	 */
	public WebElement waitTillElementIsClickable(WebElement e) {
		WebDriverWait wait = new WebDriverWait(driver, 3);
		wait.until(ExpectedConditions.elementToBeClickable(e));
		return e;
	}

	/**
	 * o wait until element is visible
	 *
	 * @param e WebElement object
	 * @return WebElement object
	 */
	public WebElement waitTillElementIsVisible(WebElement e) {
		WebDriverWait wait = new WebDriverWait(driver, 3);
		wait.until(ExpectedConditions.visibilityOf(e));
		return e;
	}


	/**
	 * o wait until element is visible
	 *
	 * @param e                     WebElement object
	 * @param waitDurationInSeconds wait duration in seconds
	 * @return WebElement object
	 */
	public WebElement waitTillElementIsVisible(WebElement e, int waitDurationInSeconds) {
		WebDriverWait wait = new WebDriverWait(driver, waitDurationInSeconds);
		wait.until(ExpectedConditions.visibilityOf(e));
		return e;
	}

	/**
	 * o wait until element is visible
	 * @param by By object
	 * @param waitDurationInSeconds wait duration in seconds
	 * @return WebElement object
	 */

	/**
	 * Wait for specified duration and check if element is visible or not
	 *
	 * @param e        WebElement object
	 * @param duration wait duration in seconds
	 * @return WebElement if visible or null if not visible
	 */
	public WebElement waitInCaseElementVisible(WebElement e, int duration) {
		WebDriverWait wait = new WebDriverWait(driver, duration);
		try {
			return wait.until(ExpectedConditions.visibilityOf(e));
		} catch (Exception ex) {
			return null;
		}
	}

	/**
	 * Wait for specified duration and check if element is clickable or not
	 *
	 * @param e        WebElement object
	 * @param duration wait duration in seconds
	 * @return WebElement if clickable or null if not visible
	 */
	public WebElement waitInCaseElementClickable(WebElement e, int duration) {
		WebDriverWait wait = new WebDriverWait(driver, duration);
		try {
			return wait.until(ExpectedConditions.elementToBeClickable(e));
		} catch (Exception ex) {
			return null;
		}
	}


	/**
	 * Waiting before performing next action
	 *
	 * @param seconds provide duration e.g. 1,2 etc
	 * @throws InterruptedException
	 */
	public void hardWait(int seconds) throws InterruptedException {
		Thread.sleep(seconds * 1000);
	}

	/**
	 * Wait till all elements are located
	 *
	 * @param by By object
	 * @return List of WebElement
	 */
	public List<WebElement> waitTillAllElementsAreLocated(By by) {
		WebDriverWait wait = new WebDriverWait(driver, 3);
		return wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(by));
	}


	//Mobile Specific Events

	/**
	 * Hide keyboard
	 */
	public void hideKeyboard() {
		driver.hideKeyboard();
	}

	/**
	 * Go back by Android Native back click
	 */
	public void back() {
		((PressesKey) driver).pressKey(new KeyEvent().withKey(AndroidKey.BACK));
	}

	/**
	 * Close application by Android Home button
	 */
	public void home() {
		((PressesKey) driver).pressKey(new KeyEvent().withKey(AndroidKey.HOME));
	}


	/**
	 * Tap or Click on Element
	 *
	 * @param e WebElement object
	 */
	public void tapOrClick(WebElement e) {
		if (waitInCaseElementClickable(e, 3) != null) {
			try {
				tap(e);
			} catch (Exception e1) {
				e.click();
			}
		} else {
			//Trying in-case it works 
			e.click();
		}
	}

	/**
	 * Tap on Element
	 *
	 * @param e WebElement object
	 */
	public void tap(WebElement e) {
		TouchAction<?> t = new TouchAction<>(driver);
		t.tap(tapOptions().withElement(element(e))).perform();
	}

	/**
	 * Tap on Element by coordinates
	 *
	 * @param x value of x coordinates
	 * @param y value of y coordinates
	 */
	public void tap(int x, int y) {
		TouchAction<?> t = new TouchAction<>(driver);
		t.tap(tapOptions().withPosition(point(x, y))).perform();
	}

	/**
	 * Tap on Element by location (using co-ordinates)
	 *
	 * @param e WebElement object
	 */
	public void tapByElementLocation(WebElement e) {
		Point p = e.getLocation();
		int x = p.getX();
		int y = p.getY();
		tap(x, y);
	}

}