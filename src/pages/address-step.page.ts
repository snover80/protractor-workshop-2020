import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheckOutButton: ElementFinder;

  constructor () {
    this.proceedToCheckOutButton = $('.cart_navigation > button[name="processAddress"]');
  }

  public async clickProceedToCheckoutAP(): Promise<void> {
    await this.proceedToCheckOutButton.click();
  }
}
