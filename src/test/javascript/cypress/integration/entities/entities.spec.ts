import { carListOrderButtonSelector } from '../../support/commands';

describe('/', () => {
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit('');
  });

  describe('/', () => {
    it('should order car', () => {
      cy.get(carListOrderButtonSelector).should('not.exist');
    });

    it('should order car', () => {
      cy.login(username, password);
      cy.get(carListOrderButtonSelector).should('be.visible');
    });
  });
});
