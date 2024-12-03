describe('login page', () => {
  beforeEach(() => cy.visit('/'));

  it('should login', () => {
    cy.login('user@email.com', '123456');

    // should redirect to home
    cy.url().should('include', '/home');
  });
});
