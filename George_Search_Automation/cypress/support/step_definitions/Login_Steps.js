import { When } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO

When('I enter the username', () => {
    loginPage.type_Username(107675017)
})

When('I click on the Start login button', () => {
    loginPage.click_On_Submit_Button()
})

When('I enter the password', () => {
    loginPage.type_Password(1111111)
})

When('I click on the Login button', () => {
    loginPage.click_On_Submit_Button()
})
