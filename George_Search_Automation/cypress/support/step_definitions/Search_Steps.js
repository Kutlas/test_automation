import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Search_PO from "../page_objects/Search_PO";

const searchPage = new Search_PO

When('I enter the search term Fashion', () => {
    searchPage.type_Search_Term('Fashion')
})

When('I click on the search button', () => {
    searchPage.click_On_Search_Button()
})

Then('I should be presented with 3 outgoing transactions', () => {
    searchPage.validate_Transaction_Number('3 outgoing transactions')
})

When('I enter a search term {string}', (searchTerm) => {
    searchPage.type_Search_Term(searchTerm)
})

Then('I should be presented with a certain number of transactions {string}', (searchResults) => {
    searchPage.validate_Transaction_Number(searchResults)
})
