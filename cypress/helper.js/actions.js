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

    getCurrentUrl () {
        return cy.url();
    }

    uploadFile(locator,filePath) {
        return cy.get(locator).attachFile(filePath, { subjectType: 'input'});
    }
    
     waitForElement(locator){
        cy.waitForElement(locator);
     }

}
export default new Actions