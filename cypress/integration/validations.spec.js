describe('My First Test', () => {
    it('Visits the Kuverit', () => {
     cy.visit('https://app.kuverit.com')
     cy.contains('Sign In').click()
     cy.url().should('include', '/auth/login')
     cy.get('#identifier').type('employer@mailinator.com').should('have.value', 'employer@mailinator.com')
     cy.get('#password').type('bcdapps12345')
     cy.get('.flex > .px-6').click()
     cy.visit('https://app.kuverit.com/employer/post/job')
     cy.get('.pl-10 > :nth-child(2) > .css-7xxymi-StyledInput').click().type('123')
     cy.get('.md\:justify-between > .px-6').click()
     
    })
})