import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModal {
  private proceedToCheckOutButton: ElementFinder;

  constructor () {
    this.proceedToCheckOutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async clickProceedToCheckoutPA(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckOutButton), 3000);
    await this.proceedToCheckOutButton.click();
  }
}
