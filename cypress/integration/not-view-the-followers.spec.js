
describe('My First Test', () => {
    it('Visits the Kuverit', () => {
        cy.visit('https://app.kuverit.com')
        cy.visit('https://app.kuverit.com')
        cy.get('#search').type('Web Developer')
        cy.get('.bg-transparent').click()
        cy.contains('Clients').click()
        cy.get(':nth-child(1) > .relative > .px-4 > .flex > .px-2 > p').click()
        cy.get('.justify-end > p').click()
        cy.contains('View').click()
        
    })
})