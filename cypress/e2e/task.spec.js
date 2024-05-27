// import HomePage from "../pages/homePage";
import homePage from "../pages/homePage";
import alertText from "../pages/alertText";

describe('Practice Page and title', () => {
  beforeEach(() => {
    homePage.visit();
  });

  it('should display the correct page title', () => {
    homePage.assertPageTitle('Practice Page');

    
  });

    it('should display alert with text from file', () => {
        alertText.readAlertContentFromFile();
    });
  })
  
  









