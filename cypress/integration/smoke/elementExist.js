import sel from '../../fixtures/selectors';

describe('SMOKE TESTS SUITE', () => {

  before('Open App', () => {
    cy.visit('/');
  });

  describe('Elements exist:', () => {

      it('TC-001 Page Title is MLH trial', () => {
          cy.title().should('include', 'MLH trial');
      });

      it('TC-002 Login form is present', () => {
          cy.get(sel.header).should('be.visible');
      });

      it('TC-003 Instruction is present', () => {
          cy.get(sel.instruction).should('be.visible');
      });

      it('TC-004 Name field label is present', () => {
          cy.get(sel.nameLabel).should('be.visible');
      });

      it('TC-005 Name field is present',  () => {
          cy.get(sel.nameField).should('be.visible');
      });

      it('TC-006 Gender field label is present', () => {
          cy.get(sel.genderLabel).should('be.visible');
      });

      it('TC-007-1 Gender "he" radio button is present', () => {
          cy.get(sel.radioButtonType).check('he');
      });

      it('TC-007-2 Gender "she" radio button is present', () => {
          cy.get(sel.radioButtonType).check('she');
      });

      it('TC-007-3 Gender "it" radio button is present', () => {
          cy.get(sel.radioButtonType).check('it');
      });
      
      it('TC-008 Age field label is present', () => {
          cy.get(sel.ageField).should('be.visible');
      });

      it('TC-009 Age field is present', () => {
          cy.get(sel.ageField).should('be.visible');
      });

      it('TC-010 Story type field label is present', () => {
          cy.get(sel.storyLabel).should('be.visible');
      });

      it('TC-011 Story type dropdown is present', () => {
          cy.get(sel.storyType).should('be.visible');
      });

      it('TC-012 Image field label is present', () => {
          cy.get(sel.imageLabel).should('be.visible');
      });

      it('TC-013 Image field is present', () => {
          cy.get(sel.image).should('be.visible');
      });

      it('TC-014 Submit button is present', () => {
          cy.get(sel.submit).should('be.visible');
      });

  });

});
