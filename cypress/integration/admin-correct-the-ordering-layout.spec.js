describe('KUVERIT TEST ADMIN', () => {
    it('Visits the Kuverit Admin', () => {
    cy.visit('https://kuverit-backend.netlify.app/access-control/group-management')
    cy.contains(/policy list/i).click()
    cy.get('.cursor-pointer > .text-white').click()
    cy.get('#toggle').click()
    cy.get('#name').type('Fassih Haider')
    cy.get('#description').type('Test Cypress')
    cy.get(':nth-child(6) > .css-1ylwku0-StyledTagInput > .tags-input > input').type('deve').type('{enter}').type('abc').type('{enter}')
    cy.get(':nth-child(8) > .css-1ylwku0-StyledTagInput > .tags-input > input').type('fronte').type('{enter}')
    cy.get(':nth-child(10) > .css-1ylwku0-StyledTagInput > .tags-input > input').type('backend').type('{enter}')
    cy.get('.bg-green-500').click()
    })
})