@regression
Feature: Geaorge - Search Functionality

    Background: Login

        Given I navigate to the George homepage

        And I enter the username
        And I click on the Start login button
        And I enter the password
        And I click on the Login button

    @fashion
    Scenario: Search for Fashion

        When I enter the search term Fashion

        And I click on the search button

        Then I should be presented with 3 outgoing transactions

    @smoke
    Scenario Outline: Search for multiple search terms

        When I enter a search term '<searchTerm>'

        And I click on the search button

        Then I should be presented with a certain number of transactions '<searchResults>'

        Examples:
            | searchTerm | searchResults            |
            | George     | 56 transactions          |
            | Erste Bank | 14 outgoing transactions |
            | Reinhard   | 20 incoming transactions |