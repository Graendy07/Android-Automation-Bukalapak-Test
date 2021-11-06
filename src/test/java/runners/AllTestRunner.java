package runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
        plugin = {"pretty", "json:target/results/regression/cucumber-report.json",  "html:target/results/cucumber.html"},
        features = {"src/test/resources/features"},
        glue = "steps",
        tags = {"@TestAll"}

)
public class AllTestRunner extends AbstractTestNGCucumberTests
{

}