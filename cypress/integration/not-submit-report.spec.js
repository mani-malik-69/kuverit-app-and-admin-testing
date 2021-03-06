describe('My First Test', () => {
    it('Visits the Kuverit', () => {
        cy.visit('https://app.kuverit.com')
        cy.contains('Sign In').click()
        cy.url().should('include', '/auth/login')
        cy.get('#identifier').type('employer@mailinator.com').should('have.value', 'employer@mailinator.com')
        cy.get('#password').type('bcdapps12345')
        cy.get('.flex > .px-6').click()
        cy.visit('https://app.kuverit.com/search-results?type=contractors')
        cy.get("#root > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p").click()
        //cy.get('.css-15mtlmj-control').click()
        cy.get('.css-tj5bde-Svg').click()
        cy.wait(1000)
        cy.contains(/others/i).click({ force: true })
        cy.get('.px-5').type('Fake Profile')
        cy.contains(/submit/i).click()
    })
})