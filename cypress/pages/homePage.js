import actions from "../helper.js/actions"

class HomePage {
    visit() {
        cy.visit('/task.html');
    }

    getPageTitle() {
        actions.getTitle();
    }
}

export default new HomePage();