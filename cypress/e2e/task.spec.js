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

  it('should handle the dropdwn options', () => {
    homePage.practicePageDropDown();
  });

  it('should upload dummy image from system', () => {
    homePage.uploadImage();
  });

  it('should open new tab to verify', () => {
    homePage.openNewTab();
  });

  it('should click Confirmation button', () => {
    homePage.enterInformation();
  });

  it('should hide and show input field', () => {
    homePage.hideAndShowField();
  });







  })
  
  









