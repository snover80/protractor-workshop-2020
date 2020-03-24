import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/*.spec.js'],
  SELENIUM_PROMISE_MANAGER : false,
  getPageTimeout: 30000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--start-maximized']
    }
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
    browser.manage().timeouts().implicitlyWait(3000);
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};
