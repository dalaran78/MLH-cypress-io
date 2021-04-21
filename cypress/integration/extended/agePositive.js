import sel from '../../fixtures/selectors';
import exp from '../../fixtures/expected.json';
import {age} from '../../fixtures/testData';
// import {isPasteCorrect} from '../../support/methods';

describe('AGE FIELD SUITE', () => {

    before('Open app', () => {
        cy.visit('/');
    });

    describe('Placeholder:', () => {

        it('TC-066 Placeholder is correct', () => {
            cy.get(sel.ageField).invoke('attr', sel.PlaceholderAttr)
                .should('contain', exp.agePlaceholder)
        });
    });

    describe('Positive cases:', () => {

        afterEach('Refresh page', () => {
            cy.reload()
        });

        it('TC-067 Vertical input stepper should increase age value to UP', () => {
            cy.get(sel.spanUP).click();
            cy.get(sel.ageField).invoke('attr', 'value').should('contain', exp.oneDigit);
        });

        it('TC-068 Vertical input stepper should decrease age value to DOWN', () => {
        cy.get(sel.ageField).type(age.six)
        cy.get(sel.spanDown).click();
        cy.get(sel.ageField).invoke('attr', 'value').should('contain', exp.keyDown);
        });

        it('TC-069 The Age input field should accepts 1 digit', () => {
            cy.get(sel.ageField).type(age.min);
            cy.get(sel.ageField).invoke('attr', 'value').should('contain', exp.oneDigit);
        });

        it('TC-070 The Age input field should accepts 6 digit', () => {
            cy.get(sel.ageField).type(age.six);
            cy.get(sel.ageField).invoke('attr', 'value').should('contain', exp.sixDigits);
        });

        it('TC-071 The Age input field should accepts 12 digit', () => {
            cy.get(sel.ageField).type(age.twelve);
            cy.get(sel.ageField).invoke('attr', 'value').should('contain', exp.twelveDigits);
        });

        it('TC-072 Vertical input stepper should decrease age value by Arrow DOWN onkeypress event', ()=> {
            cy.get(sel.ageField).type(age.six);
            cy.get(sel.ageField).type('{downarrow}');
            cy.get(sel.ageField).invoke('attr', 'value').should('contain', exp.keyDown);
        });

        /* === COPY AND PASTE FEATURE NOT IMPLEMENTED IN CYPRESS YET ===
        it.only('TC-073 Paste function should accepts correct value', ()=> {
        });

        it('TC-074 Paste function should not accepts value more than 12 digits', ()=> {
        });
        */

        it('TC-075 Vertical input stepper should increase age value by Arrow UP onkeypress event', ()=> {
            cy.get(sel.ageField).type(age.six);
            cy.get(sel.ageField).type('{uparrow}');
            cy.get(sel.ageField).invoke('attr', 'value').should('contain', exp.keyUp);
        });

    });

});
