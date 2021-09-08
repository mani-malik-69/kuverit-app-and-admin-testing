describe('My First Test', () => {
    it('Visits the Kuverit', () => {
   cy.visit('https://app.kuverit.com')
   cy.contains('Sign In').click()
   cy.url().should('include', '/auth/login')
   cy.get('#identifier').type('employer@mailinator.com').should('have.value', 'employer@mailinator.com')
   cy.get('#password').type('bcdapps12345')
   cy.get('.flex > .px-6').click()
   cy.get('#headlessui-menu-button-1 > .flex > .text-white').click()
   cy.get('#headlessui-menu-item-23 > .justify-between > .text-gray-600 > .ml-4').trigger('hover')
   cy.contains(/project invoices/i).click({force: true})
   cy.get(':nth-child(1) > :nth-child(5) > .px-3').click()
    })
})