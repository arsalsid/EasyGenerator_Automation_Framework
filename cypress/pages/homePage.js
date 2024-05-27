import actions from "../helper.js/actions"
import homePageLocators from '../fixtures/locators/homePageLocators.json';


class HomePage {
    
    visit() {
        cy.visit('/task.html');
    }

    assertPageTitle(pageTitle) {
        return actions.getTitle(homePageLocators.pageTitle).should('have.text', pageTitle);
    }
}

const homePage = new HomePage()
export default homePage;