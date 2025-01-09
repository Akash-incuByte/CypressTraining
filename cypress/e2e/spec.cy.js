describe('My First Test', () => {
  it('Opening a url!', () => {
    cy.visit('example.cypress.io')
    cy.url().should('include', 'cypress')
    cy.get('a').contains('get').click()
    cy.get('#query-btn').should('contain', 'Button')
    cy.get('button').should('have.length.greaterThan',1)

  })
})