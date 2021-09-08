describe('Test Facebook', () => {
    it('Visits the Kuverit Admin', () => {
        cy.visit('https://app.kuverit.com/')
        cy.get('.css-8lww2w-CategoryCards > :nth-child(1)').trigger('mouseover').screenshot()
        cy.wait(1000)
        cy.get('.css-8lww2w-CategoryCards > :nth-child(2)').trigger('mouseover')
        cy.wait(1000)
        cy.get('.css-8lww2w-CategoryCards > :nth-child(3)').trigger('mouseover')
        cy.wait(1000)
        cy.get('.css-8lww2w-CategoryCards > :nth-child(4)').trigger('mouseover')
    })
})