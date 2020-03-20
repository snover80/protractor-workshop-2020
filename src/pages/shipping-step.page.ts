import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsAndConditionsCheckBox: ElementFinder;
  private proceedToCheckOutButton: ElementFinder;

  constructor () {
    this.termsAndConditionsCheckBox = $('#cgv');
    this.proceedToCheckOutButton = $('#form > p > button > span');
  }

  public async clickTermsAndConditions(): Promise<void> {
    await this.termsAndConditionsCheckBox.click();
  }

  public async clickProceedToCheckout(): Promise<void> {
    await this.proceedToCheckOutButton.click();
  }
}
