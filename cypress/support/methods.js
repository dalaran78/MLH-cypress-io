import sel from '../fixtures/selectors';
import {age, gender, name, story} from "../fixtures/testData";

function inputValues4(name, age) {
    cy.get(sel.nameField).type(name);
    cy.get(sel.radioButtonType).check('it');
    cy.get(sel.ageField).type(age);
    cy.get(sel.storyType).click();
    cy.get(sel.storyList).contains('Comedy').click();
}
//
// function inputStoryType7(story) {
//     cy.get(sel.storyType).click();
//     cy.get(sel.storyList)[story].click();
// }
//
// function inputValuesExcStory(name, gender, age) {
//     cy.get(sel.name).waitForDisplayed();
//     cy.get(sel.name).setValue(name);
//     cy.get(sel.radioButtons)[gender].click();
//     cy.get(sel.age).setValue(age);
// }
//
// function isPasteCorrect (age) {
//     cy.get(sel.name).setValue();
//     browser.keys(age);
//     cy.get(sel.age).setValue();
//     browser.keys(age);
// }
//
// function isTrimmed (age) {
//     cy.get(sel.name).setValue();
//     browser.keys(age);
//     cy.get(sel.age).setValue();
//     browser.keys(age);
//     cy.get(sel.header).click();
// }
//
// function inputNameNoErr(name) {
//     cy.get(sel.name).setValue(name);
//     const value = cy.get(sel.name).getValue();
//     const error = cy.get(sel.error).isDisplayed();
//     return value === name && error === false;
// }
//
// function inputNameErr(name) {
//     cy.get(sel.name).setValue(name);
//     const value = cy.get(sel.name).getValue();
//     const error = cy.get(sel.error).waitForDisplayed();
//     if (value === name && error === true) {
//         return cy.get(sel.error).getText();
//     }
// }
//
// function inputNameDelNoErr(name, symbolsToDelete) {
//     cy.get(sel.name).setValue(name);
//     for (let i = 0; i < symbolsToDelete; i++) {
//         browser.keys('Backspace');
//     }
//     const value = cy.get(sel.name).getValue();
//     const error = cy.get(sel.error).isDisplayed();
//     return value === name.slice(0,-symbolsToDelete) && error === false;
// }
//
// function inputNameDelErr(name, symbolsToDelete) {
//     cy.get(sel.name).setValue(name);
//     for (let i = 0; i < symbolsToDelete; i++) {
//         browser.keys('Backspace');
//     }
//     const value = cy.get(sel.name).getValue();
//     const error = cy.get(sel.error).waitForDisplayed();
//     if (value === name.slice(0,-symbolsToDelete) && error === true) {
//         return cy.get(sel.error).getText();
//     }
// }
//
// function uploadImage (image) {
//     let path = require('path');
//     let filePath = path.join(__filename, image);
//     let remoteFilePath = browser.uploadFile(filePath);
//     cy.get(sel.imageUpload).addValue(remoteFilePath);
// }
//
// function checkSwitchGender(gender1, gender2){
//     cy.get(sel.radioButtons)[gender1].click();
//     cy.get(sel.radioButtons)[gender2].click();
//     const elem =cy.get(sel.genderElem)[gender2];
//     return elem;
// }
//
// function creatStory (image) {
//     inputValues4(name.default, gender.it, age.default, story.comedy);
//     uploadImage(image);
//     cy.get(sel.submit).click();
// }
//
// function createStoryNoImage( name, gender, age, story) {
//     cy.get(sel.name).setValue(name);
//     cy.get(sel.radioButtons)[gender].click();
//     cy.get(sel.age).setValue(age);
//     cy.get(sel.storyType).click();
//     cy.get(sel.storyList)[story].click();
//     cy.get(sel.submit).click();
// }
//
// function checkNameInStory(name, index, card) {
//     const text = cy.get(sel.storyCardText)[card].getText();
//     return text.slice(index, index + name.length);
// }
//
// function checkValueInStory(value, card) {
//     const text = cy.get(sel.storyCardText)[card].getText();
//     return text.split(' ').filter(el => el === value).join('');
// }
//
// function checkAgeInStory(value, card) {
//     const text = cy.get(sel.storyCardText)[card].getText();
//     const valueTrim = value.replace(/^0+/, '');
//     const index = text.indexOf(valueTrim);
//     return text.slice(index, index + valueTrim.length);
// }
//
// function inputValues4Reset (name, gender, age, story) {
//     cy.get(sel.name).setValue(name);
//     cy.get(sel.radioButtons)[gender].click();
//     cy.get(sel.age).setValue(age);
//     cy.get(sel.storyType).click();
//     cy.get(sel.storyList)[story].click();
//     cy.get(sel.submit).click();
//     cy.get(sel.tryAgain).click();
// }

module.exports = {
    inputValues4,
    // inputValues4,
    // inputStoryType7,
    // inputValuesExcStory,
    // isPasteCorrect,
    // isTrimmed,
    // inputNameNoErr,
    // inputNameErr,
    // inputNameDelNoErr,
    // inputNameDelErr,
    // uploadImage,
    // inputValues4Reset,
    // checkSwitchGender,
    // creatStory,
    // createStoryNoImage,
    // checkNameInStory,
    // checkValueInStory,
    // checkAgeInStory
}

