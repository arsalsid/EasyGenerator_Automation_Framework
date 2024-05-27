import actions from "../helper.js/actions"
import homePageLocators from '../fixtures/locators/homePageLocators.json';
import homePageTestData from '../fixtures/testData/homePageTestData.json';
import '../support/commands'


class HomePage {
    
    visit() {
        cy.visit('/task.html');
    }

    assertPageTitle(pageTitle) {
        actions.getTitle(homePageLocators.pageTitle).should('have.text', pageTitle);
    }

    enterInformation() {
        actions.enterText(homePageLocators.invokeAlertconfirmationmodal,homePageTestData.modalName);
        actions.click(homePageLocators.clickOnConfirmBtn);
        actions.waitForElement(homePageLocators.clickOnConfirmBtn);
    }

    clickOnButton() {
        actions.click(homePageLocators.uploadImageBtn);
    }
}

const homePage = new HomePage()
export default homePage;