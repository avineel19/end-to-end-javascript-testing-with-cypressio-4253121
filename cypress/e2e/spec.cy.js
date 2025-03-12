describe('template spec', () => {
  it('Heading Text', () => {
    cy.visit('http://192.168.68.111:5173/example-1');
    cy.get('h1').should('have.text', 'My Awesome Web Application');
  })
})