describe('My First Test', () => {
    it('Visits the Kuverit', () => {
        cy.visit('https://app.kuverit.com')
        cy.contains('Services').click()
        cy.contains('QA').click()
        cy.get(':nth-child(4) > .ml-4').should('be.visible').click()
    })
})