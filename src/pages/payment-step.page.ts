import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireButton: ElementFinder;

  constructor () {
    this.payByBankWireButton = $('#HOOK_PAYMENT a[title="Pay by bank wire"]');
  }

  public async clickPayByBankWire(): Promise<void> {
    await this.payByBankWireButton.click();
  }
}
