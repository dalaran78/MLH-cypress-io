import sel from '../../fixtures/selectors';
import exp from '../../fixtures/expected.json';

describe('SMOKE TESTS SUITE',  () => {

    before('Open App', () => {
        cy.visit('/');
    });

    describe('Labels are correct:', () => {

        it('TC-015 Header is "My Little Hero"', () => {
            cy.get(sel.heroForm).find(sel.header).should('contain', exp.header);
        });

        it('TC-016 Instruction is "Let\'s create your own HERO! It\'s super easy with our application!"', () => {
            cy.get(sel.heroForm).find(sel.instruction).should('contain', exp.instruction);
        });

        it('TC-017 Name field label is "1. What\'s your Hero\'s name?"', () => {
            cy.get(sel.heroForm).find(sel.requiredLabel).should('contain', exp.nameLabel);
        });

        it('TC-018 Gender field label is "2. Please choose a gender."', () => {
            cy.get(sel.heroForm).find(sel.requiredLabel).should('contain', exp.genderLabel);
        });

        it('TC-019 Radio button #1 named "he"', () => {
            cy.get(sel.heroForm).find(sel.radioButtonsLabel).should('contain', exp.heLabel);
        });

        it('TC-020 Radio button #2 named "she"', () => {
            cy.get(sel.heroForm).find(sel.radioButtonsLabel).should('contain', exp.sheLabel);
        });

        it('TC-021 Radio button #3 named "it"', () => {
            cy.get(sel.heroForm).find(sel.radioButtonsLabel).should('contain', exp.itLabel);
        });
        /* commented until bug fix, see JIRA bug ticket QA8-1306
        it('TC-022 Age field label is "3. How old is your Hero?"', () => {
            cy.get(sel.heroForm).find(sel.requiredLabel).should('contain', exp.ageLabel);
        });
        */
        it('TC-023 Story type label is "4. What type of story would you like to read?"', () => {
            cy.get(sel.heroForm).find(sel.requiredLabel).should('contain', exp.storyLabel);
        });

        it('TC-024 Image label is "5. Upload an image (optional)"', () => {
            cy.get(sel.heroForm).find(sel.imageLabel).should('contain', exp.imageLabel);
        });

        it('TC-025 Submit button label is "Create!"', () => {
            cy.get(sel.heroForm).find(sel.submit).should('contain', exp.submitText);
        });

    });

});
