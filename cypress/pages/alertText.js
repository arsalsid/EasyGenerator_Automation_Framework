class Alert {

readAlertContentFromFile() {
    cy.task('readAlertText').then((alertText) => {
        //Injecting a script to show alert
        cy.visit('/task.html', {
          onBeforeLoad(win) {
            win.alert = (msg) => {
              const alertEvent = new CustomEvent('alert', { detail: msg });
              win.dispatchEvent(alertEvent);
            };
          },
        });
  
        //Adding an event listener to check the alert text
        cy.window().then((win) => {
          win.addEventListener('alert', (e) => {
            expect(e.detail).to.equal(alertText);
          });
        });
  
        // Triggering the alert
        cy.window().then((win) => {
          win.alert(alertText);
        });
      });
}

}
const alertText  = new Alert()
export default alertText;