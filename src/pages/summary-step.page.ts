import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckOutButton: ElementFinder;

  constructor () {
    this.proceedToCheckOutButton = $('.cart_navigation > a[title="Proceed to checkout"]');
  }

  public async clickProceedToCheckoutSP(): Promise<void> {
    await this.proceedToCheckOutButton.click();
  }
}
