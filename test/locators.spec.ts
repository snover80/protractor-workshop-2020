import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/pages';

describe('Given a page to practice automation', () => {
  beforeAll(async () => {
    await browser.get('https://demoqa.com/automation-practice-form/');
  });

  describe('when I am training locators', () => {
    const personalInformationPage = new PersonalInformationPage();

    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        file: './resources/photo.jpg',
        downloadFile: true,
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });
    });

    it('the form should be filled', async () => {
      expect(await personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });
  });
});
