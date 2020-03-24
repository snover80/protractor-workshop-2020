import { $, ElementFinder } from 'protractor';

export class ProductAddedModal {
  private proceedToCheckOutButton: ElementFinder;

  constructor () {
    this.proceedToCheckOutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async clickProceedToCheckoutPA(): Promise<void> {
    await this.proceedToCheckOutButton.click();
  }
}
