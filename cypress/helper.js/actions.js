class Actions {

    enterText(locator, testData) {
        return cy.get(locator).clear().type(testData)
    }

    click(locator) {
        return cy.get(locator).click();
    }

    getTitle(locator) {
        return cy.get(locator);
    }

    handlingModal() {
        // Assert that the alert modal is visible
    cy.on('window:alert', (text, expectedText) => {
        expect(text).to.equal(expectedText);
      });

     } 
     
     waitForElement(locator){
        cy.waitForElement(locator);
     }

}
export default new Actions