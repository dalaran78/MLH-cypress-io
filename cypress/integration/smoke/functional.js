import sel from '../../fixtures/selectors';
import {name, age} from '../../fixtures/testData';
import {inputValues4} from '../../support/methods';

describe('SMOKE TESTS SUITE', () => {

    before('Open App', () => {
        cy.visit('/');
    });

    describe('Required fields and Story created:', () => {

        it('TC-026 Submit button is enabled after fields 1...4 filled with valid values', () => {
            inputValues4(name.default, age.default);
            cy.get(sel.submit).should('be.enabled');
        });

         it('TC-027 User can create a story with valid values', () => {
             cy.visit('/')
             inputValues4(name.default, age.default);
             cy.get(sel.submit).click();
             cy.get(sel.tryAgain).should('be.visible');
         });
    });
});
