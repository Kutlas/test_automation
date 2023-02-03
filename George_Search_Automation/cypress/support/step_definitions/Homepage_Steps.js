
import { Given } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/Homepage_PO";

const homePage = new Homepage_PO()

Given('I navigate to the George homepage', () => {
    homePage.navigate_To_Homepage()
})
