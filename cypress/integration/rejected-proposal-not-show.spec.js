describe('My First Test', () => {
    it('Visits the Kuverit', () => {
        cy.visit('https://app.kuverit.com')
        cy.contains('Sign In').click()
        cy.url().should('include', '/auth/login')
        cy.get('#identifier').type('employer@mailinator.com').should('have.value', 'employer@mailinator.com')
        cy.get('#password').type('bcdapps12345')
        cy.get('.flex > .px-6').click()
        cy.visit('https://app.kuverit.com/employer/manage/jobs')
        cy.get('#root > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button:nth-child(2)').click()
        cy.contains(/reject/i).click()
        cy.visit('https://app.kuverit.com/employer/manage/jobs')
        cy.wait(3000)
        cy.contains(/job Attachment/i).should('not.exist');
    })
})