class Search_PO {

    type_Search_Term(searchTerm) {
        cy.get('[data-cy="search-keyword"]', { timeout: 30000 }).type(searchTerm);
    }

    click_On_Search_Button() {
        cy.get('[data-cy="search-trigger-button"]').click();
    }

    validate_Transaction_Number(transactionNumber) {
        cy.get('strong').contains(transactionNumber)
    }

}
export default Search_PO