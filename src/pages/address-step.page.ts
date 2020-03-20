import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheckOutButton: ElementFinder;

  constructor () {
    this.proceedToCheckOutButton = $('#center_column > form > p > button > span');
  }

  public async clickProceedToCheckout(): Promise<void> {
    await this.proceedToCheckOutButton.click();
  }
}
