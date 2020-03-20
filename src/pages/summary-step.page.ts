import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckOutButton: ElementFinder;

  constructor () {
    this.proceedToCheckOutButton = $('.cart_navigation span');
  }

  public async clickProceedToCheckout(): Promise<void> {
    await this.proceedToCheckOutButton.click();
  }
}
