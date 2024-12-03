import { getGreeting } from '../support/app.po';

describe('e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    getGreeting().contains(/Ecommerce/);
  });
});
