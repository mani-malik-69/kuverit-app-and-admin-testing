describe('KUVERIT TEST ADMIN', () => {
    it('Visits the Kuverit Admin', () => {
    cy.visit('https://kuverit-backend.netlify.app/access-control/group-management')
    cy.wait(1000)
    cy.get(':nth-child(1) > .text-green-400 > .flex > :nth-child(3) > .text-red-500').click()
    cy.wait(1000)
    })
})