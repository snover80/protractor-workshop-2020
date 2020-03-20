import { $, ElementFinder } from 'protractor';

export class ProductAddedModal {
  private proceedToCheckOutButton: ElementFinder;

  constructor () {
    this.proceedToCheckOutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async clickProceedToCheckout(): Promise<void> {
    await this.proceedToCheckOutButton.click();
  }
}
