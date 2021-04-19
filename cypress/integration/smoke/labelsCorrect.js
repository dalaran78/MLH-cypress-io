import sel from '../../fixtures/selectors';
import exp from '../../fixtures/expected.json';

describe('SMOKE TESTS SUITE',  () => {

    before('Open App', () => {
        cy.visit('/');
    });

    describe('Labels are correct:', function () {

        it('TC-015 Header is "My Little Hero"', () => {
            cy.get(sel.heroForm).find(sel.header).should('contain', exp.header);
        });

        it('TC-016 Instruction is "Let\'s create your own HERO! It\'s super easy with our application!"', function () {
            cy.get(sel.heroForm).find(sel.instruction).should('contain', exp.instruction);
        });

        // it('TC-017 Name field label is "1. What\'s your Hero\'s name?"', function () {
        //     let label = $$(sel.requiredLabel)[0].getText();
        //     expect(label).toEqual(exp.nameLabel);
        // });
        //
        // it('TC-018 Gender field label is "2. Please choose a gender."', function () {
        //     let label = $$(sel.requiredLabel)[1].getText();
        //     expect(label).toEqual(exp.genderLabel);
        // });
        //
        // it('TC-019 Radio button #1 named "he"', function () {
        //     let buttonHe = $$(sel.radioButtonsLabel)[0].getText();
        //     expect(buttonHe).toEqual(exp.heLabel);
        // });
        //
        // it('TC-020 Radio button #2 named "she"', function () {
        //     let buttonShe = $$(sel.radioButtonsLabel)[1].getText();
        //     expect(buttonShe).toEqual(exp.sheLabel);
        // });
        //
        // it('TC-021 Radio button #3 named "it"', function () {
        //     let buttonIt = $$(sel.radioButtonsLabel)[2].getText();
        //     expect(buttonIt).toEqual(exp.itLabel);
        // });
        //
        // /* commented until bug fix, see JIRA bug ticket QA8-1306
        //
        // it('TC-022 Age field label is "3. How old is your Hero?"', function () {
        //   let age = $$(sel.requiredLabel)[2].getText();
        //   expect(age).toEqual(exp.ageLabel);
        // });
        //
        //  */
        //
        // it('TC-023 Story type label is "4. What type of story would you like to read?"', function () {
        //     let label = $$(sel.requiredLabel)[3].getText();
        //     expect(label).toEqual(exp.storyLabel);
        // });
        //
        // it('TC-024 Image label is "5. Upload an image (optional)"', function () {
        //     let label = $$(sel.imageLabel)[4].getText();
        //     expect(label).toEqual(exp.imageLabel);
        // });
        //
        // it('TC-025 Submit button label is "Create!"', function () {
        //     let submit = $(sel.submit).getText();
        //     expect(submit).toEqual(exp.submitText);
        // });

    });

});
