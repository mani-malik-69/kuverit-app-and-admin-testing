describe('Test Facebook', () => {
      it('Visits the Kuverit Admin', () => {
      cy.visit('https://app.kuverit.com/')
      cy.get('#noprint > div > div:nth-child(1) > div:nth-child(3) > a:nth-child(2) > svg > path').click()
      cy.get('[href="https://twitter.com/kuver_it"]').click()
      cy.wait(2000)
})
})