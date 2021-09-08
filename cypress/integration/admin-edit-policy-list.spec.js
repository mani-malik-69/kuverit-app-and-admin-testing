describe('KUVERIT TEST ADMIN', () => {
    it('Visits the Kuverit Admin', () => {
    cy.visit('https://kuverit-backend.netlify.app/access-control/group-management')
    cy.contains(/policy list/i).click()
    cy.get(':nth-child(7) > .pr-6 > .flex > .mr-2 > .icon').click()
    cy.wait(3000)
    cy.get('.bg-green-500').click()
    cy.wait(3000)
    })
})

