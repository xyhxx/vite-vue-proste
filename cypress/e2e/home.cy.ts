describe('Home page', function() {
  it('Home page e2e', function() {
    cy.visit('/');

    cy.getById('count').should('include.text', 'count is 0');
    cy.getById('double_count').should('include.text', 'double count is 0');

    cy.getById('inc_btn').click();
    cy.getById('count').should('include.text', 'count is 2');
    cy.getById('double_count').should('include.text', 'double count is 4');

    cy.getById('inc_btn').click();
    cy.getById('count').should('include.text', 'count is 4');
    cy.getById('double_count').should('include.text', 'double count is 8');

    cy.getById('dec_btn').click();
    cy.getById('count').should('include.text', 'count is 2');
    cy.getById('double_count').should('include.text', 'double count is 4');
  });
});
