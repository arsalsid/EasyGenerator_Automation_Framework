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

    uploadImage() {
        actions.uploadFile(homePageLocators.uploadImageBtn,'../images/dummy.png');
    }

    openNewTab() {
        actions.click(homePageLocators.newTabLocator);
        actions.getCurrentUrl();
    }

    enterInformation() {
        actions.enterText(homePageLocators.invokeAlertconfirmationmodal,homePageTestData.confirmationModalText);
        actions.click(homePageLocators.clickOnConfirmBtn);
        actions.waitForElement(homePageLocators.clickOnConfirmBtn);
        
    }

    hideAndShowField() {
        actions.click(homePageLocators.hideButtonLocator);
        actions.click(homePageLocators.showButtonLocator);
        actions.enterText(homePageLocators.displayFieldLocator,homePageTestData.enterShowTextLocator);
    }
}

const homePage = new HomePage()
export default homePage;