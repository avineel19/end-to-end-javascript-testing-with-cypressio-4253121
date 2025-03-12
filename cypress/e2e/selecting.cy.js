describe('Max Characters input functionality', () => {
    it('It displays the appropriate remaining chars count', () => {
      cy.visit('/example-3');
      cy.get('span[data-cy=first-name-chars-left-count]').invoke('text').as('charLeft');

      cy.get('#first-name-input').as('inputField');

      cy.get('@charLeft').should('equal','15');
      cy.get('@inputField').type('Hello');
      cy.get('@charLeft').should('equal','10');
      cy.get('@inputField').type('Hello');
      cy.get('@charLeft').should('equal','5');
      cy.get('@inputField').type('Hello');
      cy.get('@inputField').should('have.value','HelloHelloHello');
      cy.get('@charLeft').should('equal','0');
    })
  })