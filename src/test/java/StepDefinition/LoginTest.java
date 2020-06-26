package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;

import Utilities.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginTest extends BaseClass {

@Given("^I Open Chrome Browser$")
public void I_Open_Chrome_Browser() {
//	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Anooryar\\Downloads\\chromedriver_win32\\chromedriver.exe");
//	driver = new ChromeDriver();
//	driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
//	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	
    caps.setJavascriptEnabled(true); // not really needed: JS enabled by default
    caps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, System.getProperty("user.dir") + "/Drivers/phantomjs.exe");
    driver = new PhantomJSDriver(caps);
    
    driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
}

@When("^I go to Salesforce application$")
public void I_go_to_Salesforce_application() {
	driver.get("https://login.salesforce.com");
	
}


@Then("^I should see the Salesforce logo$")
public void I_should_see_the_Salesforce_logo() {
	boolean isLogoPresent = driver.findElement(By.id("logo")).isDisplayed();
	Assert.assertTrue(isLogoPresent);
}
@Then("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
public void I_enter_valid_and(String username, String password) {
	driver.findElement(By.id("username")).sendKeys(username);
	driver.findElement(By.id("password")).sendKeys(password);
	
}


@When("^I click the login button$")
public void I_click_the_login_button() {
	driver.findElement(By.id("Login")).click();
	}

@Then("^I should see the logout button$")
public void I_should_see_the_logout_button() {
	   driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	boolean setupLin = driver.findElement(By.id("setupLink")).isDisplayed();
	Assert.assertTrue(setupLin);
}


}
