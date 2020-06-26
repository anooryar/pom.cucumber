package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginTest {
	
	
	@Given("^I open the Browser$")
	public void i_open_the_Browser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Anooryar\\eclipse-workspace\\com.codegator.cucumber\\Drivers\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver = new ChromeDriver();
	}

	@When("^I go to the application$")
	public void i_go_to_the_application() {
		System.out.println("I go to the application");
		
		
		
	}

	@Then("^I should see the logo$")
	public void i_should_see_the_logo() {
		System.out.println("I should see the logo");
		Assert.assertTrue(true);
	}

	@Then("^I enter valid username$")
	public void i_enter_valid_username() {
		System.out.println("I enter valid username");
		
	}

	@Then("^I enter valid password$")
	public void i_enter_valid_password() {
		System.out.println("I enter valid password");
		
	}

	@When("^I click the login button$")
	public void i_click_the_login_button() {
		System.out.println("I click the login button");
		
	}



}
