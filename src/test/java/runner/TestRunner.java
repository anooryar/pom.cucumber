package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features=".", glue="StepDefinition", monochrome=true,dryRun = false, 
plugin= {"pretty", "html:Reports/Cucumber_Reports/testReport", "json: Report/Cumber-Json/report.json",
		      "rerun:Rerun/Failed-Scenarios.txt" })
public class TestRunner {

}
