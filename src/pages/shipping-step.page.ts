import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsAndConditionsCheckBox: ElementFinder;
  private proceedToCheckOutButton: ElementFinder;

  constructor () {
    this.termsAndConditionsCheckBox = $('#cgv');
    this.proceedToCheckOutButton = $('.cart_navigation > button[name="processCarrier"]');
  }

  public async clickTermsAndConditions(): Promise<void> {
    await this.termsAndConditionsCheckBox.click();
  }

  public async clickProceedToCheckoutSPP(): Promise<void> {
    await this.proceedToCheckOutButton.click();
  }
}
