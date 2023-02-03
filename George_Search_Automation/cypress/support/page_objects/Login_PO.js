class Login_PO {

    type_Username(userName) {
        cy.get("#user").type(userName)
    }

    type_Password(password) {
        cy.get("#secret").type(password);
    }

    click_On_Submit_Button() {
        cy.get("#submitButton").click();
    }
    
}
export default Login_PO