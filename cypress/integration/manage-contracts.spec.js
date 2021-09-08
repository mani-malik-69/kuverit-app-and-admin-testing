
describe('My First Test', () => {
    it('Visits the Kuverit', () => {
        cy.visit('https://app.kuverit.com')
        cy.contains('Sign In').click()
        cy.url().should('include', '/auth/login')
        cy.get('#identifier').type('employer@mailinator.com').should('have.value', 'employer@mailinator.com')
        cy.get('#password').type('bcdapps12345')
        cy.get('#rememberme').click()
        cy.get('.flex > .px-6').click()
        cy.get('#headlessui-menu-button-1 > .flex > .text-white').click()
        cy.contains(/manage contracts/i).click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .px-10').click()
        cy.get(':nth-child(3) > .p-3 > .flex > .px-3').click()
        cy.wait(1000)
        cy.get('.px-3').click()
        cy.wait(1000)
        cy.get('.ReactModal__Content > :nth-child(1) > .flex > :nth-child(1)').click()
        cy.wait(1000)

    })
})