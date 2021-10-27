describe('Histogram', () => {
    it('Displays the message in the list', () => {
      cy.visit('http://localhost:3000');
  
      cy.contains('Histogram Chart');
    });
  });
  