describe('KUVERIT', () => {
    it('Visits the Kuverit Admin', () => {
    cy.visit('https://app.kuverit.com/')
    cy.contains(/join now/i).click()
    cy.get('#first').type('Malik').click()
    cy.get('#last').type('Zain').click()
    cy.get('#email').type('m.zain@mailinator.com').should('have.value', 'm.zain@mailinator.com').click()
    cy.get('#password').type('bcdapps123').click()
    cy.get('#retryPassword').type('bcdapps123').click()
    cy.get('.checkbox').click()
    cy.contains(/start now/i).click()
    })
})