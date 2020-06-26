Feature: Test login functionality 
Background: 
Given I Open Chrome Browser 
    When I go to Salesforce application
    Then I should see the Salesforce logo
   
    When I click the login button
    
    @login
  Scenario Outline:  Test Using Valid Credential
  
    Then I enter valid "<username>" and "<password>" 
    
    Then I should see the logout button
   
    
    Examples:
    |username|password|
    |batch03@codegator.us.qa|Pa55word|
    |batch03@codegator.us.qa|Pa55word|
    |batch03@codegator.us.qa|Pa55word|
    
    