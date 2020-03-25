import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/*spec.js'],
  SELENIUM_PROMISE_MANAGER : false,
  getPageTimeout: 30000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-popup-blocking', '--no-default-browser-check', '--start-maximized', '--headless'],
      prefs: { credentials_enable_service: false }
    }
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
    browser.manage().timeouts().implicitlyWait(0);
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};
