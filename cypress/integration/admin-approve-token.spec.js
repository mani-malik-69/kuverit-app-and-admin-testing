describe('KUVERIT TEST ADMIN', () => {
    it('Visits the Kuverit Admin', () => {
    cy.visit('https://kuverit-backend.netlify.app/tokens/paid')
    cy.get('.mx-auto > .hidden > :nth-child(2)').click()
    cy.get(':nth-child(2) > .w-64 > .flex > .bg-green-500').click()       
    cy.contains(/yes/i).click()
    })
})