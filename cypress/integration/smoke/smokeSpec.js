import sel from '../../fixtures/selectors';
import exp from '../../fixtures/expected.json';

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

      it('TC-004 Name field label is present', () => {
          cy.contains('form', exp.nameLabel).then( nameLabel => {
              const label = nameLabel.find('[for="name"]').text();
              expect(label).to.equal(exp.nameLabel);
          });
      });

      it('TC-005 Name field is present',  () => {
          cy.get(sel.name).should('be.visible');
      });

  });

});