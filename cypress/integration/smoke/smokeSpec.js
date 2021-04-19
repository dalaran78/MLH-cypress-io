import sel from '../../fixtures/selectors';
//import exp from '../../data/expected.json';

describe('SMOKE TESTS SUITE', () => {

  before('Open App', () => {
    cy.visit('/');
  });

  describe('Elements exist:', () => {

      it('TC-001 Page Title is MLH trial', () => {
          cy.title().should('include', 'MLH trial')
      });

      it('TC-002 Login form is present', () => {
          cy.get(sel.header).should('be.visible');
      });

      it('TC-003 Instruction is present', () => {
          cy.get(sel.instruction).should('be.visible');
      });

  });

});