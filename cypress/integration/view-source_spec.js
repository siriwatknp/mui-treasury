const runCodeProjectorTests = () => {
  cy.get('.MuiDrawer-root')
    .last()
    .find('[data-testid="app-sidebar-link"]')
    .each(elm => {
      cy.get(elm).click();
      // show each page
      cy.get('main').then(main => {
        console.log(main.find('[data-testid="view-code-button"]'));
        if (main.find('[data-testid="view-code-button"]').length) {
          cy.get('[data-testid="view-code-button"]').each(item => {
            cy.get(item).click();
            cy.get('[data-testid="variant-name"]').then(title => {
              cy.log(title[0].textContent)
            })
            cy.get('[data-testid="source-code-projector"]').should(
              'not.be.empty'
            );
            cy.get('[data-testid="close-projector"]').click();
          });
        }
      });
    });
};

describe('Code Projector', () => {
  it('should be able to view code in /styles', () => {
    cy.visit('http://localhost:8000/styles');
    runCodeProjectorTests()
  });

  it('should be able to view code in /components', () => {
    cy.visit('http://localhost:8000/components');
    runCodeProjectorTests()
  });
});
