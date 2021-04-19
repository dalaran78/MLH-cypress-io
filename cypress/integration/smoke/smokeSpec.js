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

      it('TC-006 Gender label is present', () => {
          cy.contains('form', exp.genderLabel).then( genderLabel => {
              const label = genderLabel.find('[for="gender"]').text();
              expect(label).to.equal(exp.genderLabel);
          });

      });

      it('TC-007-1 Gender "he" radio button is present', () => {
          cy.get('[type="radio"]').check('he');
      });

      it('TC-007-2 Gender "she" radio button is present', () => {
        cy.get('[type="radio"]').check('she');
      });

      it('TC-007-3 Gender "it" radio button is present', () => {
        cy.get('[type="radio"]').check('it');
      });


      // it('TC-008 Age field label is present', () => {
      //     let label = $$(sel.requiredLabel)[2].isDisplayed();
      //     expect(label).toEqual(true);
      // });
      //
      // it('TC-009 Age field is present', () => {
      //     let age = $(sel.age).isDisplayed();
      //     expect(age).toEqual(true);
      // });
      //
      // it('TC-010 Story type field label is present', () => {
      //     let label = $$(sel.requiredLabel)[3].isDisplayed();
      //     expect(label).toEqual(true);
      // });
      //
      // it('TC-011 Story type dropdown is present', () => {
      //     let dropdown = $(sel.storyType).isDisplayed();
      //     expect(dropdown).toEqual(true);
      // });
      //
      // it('TC-012 Image field label is present', () => {
      //     let label = $$(sel.imageLabel)[4].isDisplayed();
      //     expect(label).toEqual(true);
      // });
      //
      // it('TC-013 Image field is present', () => {
      //     let image = $(sel.image).isDisplayed();
      //     expect(image).toEqual(true);
      // });
      //
      // it('TC-014 Submit button is present', () => {
      //     let submit = $(sel.submit).isDisplayed();
      //     expect(submit).toEqual(true);
      // });

  });

});