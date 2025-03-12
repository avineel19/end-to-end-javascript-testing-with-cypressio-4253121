describe('Max Characters input functionality', () => {
    it('It displays the appropriate remaining chars count', () => {
      cy.visit('/example-2');
      cy.get('span').invoke('text').should('equal','15');
      cy.get('input').type('Hello');
      cy.get('span').invoke('text').should('equal','10');
      
    })
  })