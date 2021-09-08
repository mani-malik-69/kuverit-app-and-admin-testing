describe('My First Test', () => {
  it('Visits the Kuverit', () => {
    cy.visit('https://app.kuverit.com')
    cy.contains('Sign In').click()
    cy.url().should('include', '/auth/login')
    cy.get('#identifier').type('free@mailinator.com').should('have.value', 'free@mailinator.com')
    cy.get('#password').type('bcdapps123')
    cy.get('#rememberme').click()
    cy.get('.flex > .px-6').click()
    cy.get('#headlessui-menu-button-1 > .flex > .text-white').click()
    cy.contains(/token management/i).click()
    cy.visit('https://app.kuverit.com/sell-token')
    cy.get('.css-7xxymi-StyledInput').type('1000')
    cy.contains(/freelancer t/i).click()
    cy.wait(2000)
    cy.contains(/freelancer t/i).click()
    cy.get(':nth-child(2) > .px-6').click()

  })
})