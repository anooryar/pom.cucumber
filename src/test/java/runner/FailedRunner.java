package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"@rerun/Failed-Scenarios.txt"}, glue="StepDefinition", monochrome=true,
plugin= {"pretty", "html:Reports/Cucumber_Reports/testReport", "json: Report/Cumber-Json/report.json",
		      "rerun:Rerun/Failed-Scenarios.txt" })
public class FailedRunner {

}