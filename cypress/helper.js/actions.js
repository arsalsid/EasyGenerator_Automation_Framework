class actions {

    enterText(locator, testData) {
        return cy.get(locator).clear().type(testData)
    }

    click(locator) {
        return cy.get(locator).click();
    }
}
export default actions