describe('My First Test', () => {
  it('Visits the Kuverit', () => {
    cy.visit('https://kuverit-backend.netlify.app/tokens/paid')
    cy.get('.mx-auto > .hidden > :nth-child(3)').click()
    cy.get(':nth-child(1) > .w-64 > .flex > .bg-green-500').click()
    cy.contains(/yes/i).click()
    cy.wait(2000)
  })
})
