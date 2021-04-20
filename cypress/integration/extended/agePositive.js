import sel from '../../fixtures/selectors';
import exp from '../../fixtures/expected.json';
import {age} from '../../fixtures/testData';
import {isPasteCorrect} from '../../support/methods';

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

        // it('TC-067 Vertical input stepper should increase age value to UP', () => {
        //     $(sel.spanUP).click();
        //     let stepperUP = $(sel.age).getValue();
        //     expect(stepperUP).toEqual(exp.oneDigit);
        // });

        // it('TC-068 Vertical input stepper should decrease age value to DOWN', () => {
        //     $(sel.age).setValue(age.six);
        //     $(sel.spanDown).click();
        //     let stepperDown = $(sel.age).getValue();
        //     expect(stepperDown).toEqual(exp.keyDown);
        // });
        //
        // it('TC-069 The Age input field should accepts 1 digit', () => {
        //     $(sel.age).setValue(age.min);
        //     let isOneDigit = $(sel.age).getValue();
        //     expect(isOneDigit).toEqual(exp.oneDigit);
        // });
        //
        // it('TC-070 The Age input field should accepts 6 digit', () => {
        //     $(sel.age).setValue(age.six);
        //     let isSixDigit = $(sel.age).getValue();
        //     expect(isSixDigit).toEqual(exp.sixDigits);
        // });
        //
        // it('TC-071 The Age input field should accepts 12 digit', () => {
        //     $(sel.age).setValue(age.twelve);
        //     let isTwelveDigit = $(sel.age).getValue();
        //     expect(isTwelveDigit).toEqual(exp.twelveDigits);
        // });
        //
        // it('TC-072 Vertical input stepper should decrease age value by Arrow DOWN onkeypress event', ()=> {
        //     $(sel.age).setValue(age.six);
        //     browser.keys('\uE015');
        //     let keyPressDown = $(sel.age).getValue();
        //     expect(keyPressDown).toEqual(exp.keyDown);
        // });
        //
        // it('TC-073 Paste function should accepts correct value', ()=> {
        //     isPasteCorrect(age.twelve, age.selectAndCopy, age.paste);
        //     let copyPaste = $(sel.age).getValue();
        //     expect(copyPaste).toEqual(exp.twelveDigits);
        // });
        //
        // it('TC-074 Paste function should not accepts value more than 12 digits', ()=> {
        //     isPasteCorrect(age.max, age.selectAndCopy, age.paste);
        //     let error = $(sel.error).waitForDisplayed({interval: 500});
        //     expect(error).toEqual(true);
        // });
        //
        // it('TC-075 Vertical input stepper should increase age value by UP onkeypress event', ()=> {
        //     $(sel.age).setValue(age.six);
        //     browser.keys('\uE013');
        //     let keyPressUp = $(sel.age).getValue();
        //     expect(keyPressUp).toEqual(exp.keyUp);
        // });
    });
});
