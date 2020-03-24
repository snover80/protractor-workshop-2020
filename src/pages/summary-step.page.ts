import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckOutButton: ElementFinder;

  constructor () {
    this.proceedToCheckOutButton = $('.cart_navigation span');
  }

  public async clickProceedToCheckoutSP(): Promise<void> {
    await this.proceedToCheckOutButton.click();
  }
}
