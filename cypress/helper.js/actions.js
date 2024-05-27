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
}
export default new Actions