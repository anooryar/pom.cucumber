$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality",
  "description": "",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Test Using Valid Credential",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I should see the logout button",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 18,
      "id": "test-login-functionality;test-using-valid-credential;;1"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 19,
      "id": "test-login-functionality;test-using-valid-credential;;2"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 20,
      "id": "test-login-functionality;test-using-valid-credential;;3"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 21,
      "id": "test-login-functionality;test-using-valid-credential;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 4638062800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_Salesforce_application()"
});
formatter.result({
  "duration": 6796474000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 49442000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 381568800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Test Using Valid Credential",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter valid \"batch03@codegator.us.qa\" and \"Pa55word\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I should see the logout button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 15
    },
    {
      "val": "Pa55word",
      "offset": 45
    }
  ],
  "location": "LoginTest.I_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 345708900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_button()"
});
formatter.result({
  "duration": 10112152800,
  "error_message": "org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with id \u0027setupLink\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"43\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:12114\",\"User-Agent\":\"selenium/3.141.59 (java windows)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\n  \\\"using\\\": \\\"id\\\",\\n  \\\"value\\\": \\\"setupLink\\\"\\n}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/0755a290-b754-11ea-8c07-011c9bb98a3b/element\"}}\nCommand duration or timeout: 0 milliseconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.LoginTest.I_should_see_the_logout_button(LoginTest.java:65)\r\n\tat ✽.Then I should see the logout button(Feature/login.feature:14)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:140)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.LoginTest.I_should_see_the_logout_button(LoginTest.java:65)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with id \u0027setupLink\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"43\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:12114\",\"User-Agent\":\"selenium/3.141.59 (java windows)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\n  \\\"using\\\": \\\"id\\\",\\n  \\\"value\\\": \\\"setupLink\\\"\\n}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/0755a290-b754-11ea-8c07-011c9bb98a3b/element\"}}\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027IAD-5CG9218VQP\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: unknown\r\n",
  "status": "failed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 1605288300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_Salesforce_application()"
});
formatter.result({
  "duration": 6265989300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 40421400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 676905000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Test Using Valid Credential",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter valid \"batch03@codegator.us.qa\" and \"Pa55word\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I should see the logout button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 15
    },
    {
      "val": "Pa55word",
      "offset": 45
    }
  ],
  "location": "LoginTest.I_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 188308200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_button()"
});
formatter.result({
  "duration": 10145758800,
  "error_message": "org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with id \u0027setupLink\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"43\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:19887\",\"User-Agent\":\"selenium/3.141.59 (java windows)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\n  \\\"using\\\": \\\"id\\\",\\n  \\\"value\\\": \\\"setupLink\\\"\\n}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/12df4760-b754-11ea-ae26-1b280717dff3/element\"}}\nCommand duration or timeout: 0 milliseconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.LoginTest.I_should_see_the_logout_button(LoginTest.java:65)\r\n\tat ✽.Then I should see the logout button(Feature/login.feature:14)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:140)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.LoginTest.I_should_see_the_logout_button(LoginTest.java:65)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with id \u0027setupLink\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"43\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:19887\",\"User-Agent\":\"selenium/3.141.59 (java windows)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\n  \\\"using\\\": \\\"id\\\",\\n  \\\"value\\\": \\\"setupLink\\\"\\n}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/12df4760-b754-11ea-ae26-1b280717dff3/element\"}}\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027IAD-5CG9218VQP\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: unknown\r\n",
  "status": "failed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I go to Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 1611677800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_Salesforce_application()"
});
formatter.result({
  "duration": 4785372100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 34314900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 531002800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Test Using Valid Credential",
  "description": "",
  "id": "test-login-functionality;test-using-valid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter valid \"batch03@codegator.us.qa\" and \"Pa55word\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I should see the logout button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 15
    },
    {
      "val": "Pa55word",
      "offset": 45
    }
  ],
  "location": "LoginTest.I_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 247841500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_button()"
});
formatter.result({
  "duration": 10116917500,
  "error_message": "org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with id \u0027setupLink\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"43\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:37915\",\"User-Agent\":\"selenium/3.141.59 (java windows)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\n  \\\"using\\\": \\\"id\\\",\\n  \\\"value\\\": \\\"setupLink\\\"\\n}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/1e292410-b754-11ea-ac15-cf4794668c1f/element\"}}\nCommand duration or timeout: 0 milliseconds\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.LoginTest.I_should_see_the_logout_button(LoginTest.java:65)\r\n\tat ✽.Then I should see the logout button(Feature/login.feature:14)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:140)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.phantomjs.PhantomJSCommandExecutor.execute(PhantomJSCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.LoginTest.I_should_see_the_logout_button(LoginTest.java:65)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: org.openqa.selenium.NoSuchElementException: {\"errorMessage\":\"Unable to find element with id \u0027setupLink\u0027\",\"request\":{\"headers\":{\"Accept-Encoding\":\"gzip\",\"Connection\":\"Keep-Alive\",\"Content-Length\":\"43\",\"Content-Type\":\"application/json; charset\u003dutf-8\",\"Host\":\"localhost:37915\",\"User-Agent\":\"selenium/3.141.59 (java windows)\"},\"httpVersion\":\"1.1\",\"method\":\"POST\",\"post\":\"{\\n  \\\"using\\\": \\\"id\\\",\\n  \\\"value\\\": \\\"setupLink\\\"\\n}\",\"url\":\"/element\",\"urlParsed\":{\"anchor\":\"\",\"query\":\"\",\"file\":\"element\",\"directory\":\"/\",\"path\":\"/element\",\"relative\":\"/element\",\"port\":\"\",\"host\":\"\",\"password\":\"\",\"user\":\"\",\"userInfo\":\"\",\"authority\":\"\",\"protocol\":\"\",\"source\":\"/element\",\"queryKey\":{},\"chunks\":[\"element\"]},\"urlOriginal\":\"/session/1e292410-b754-11ea-ac15-cf4794668c1f/element\"}}\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027IAD-5CG9218VQP\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: unknown\r\n",
  "status": "failed"
});
});