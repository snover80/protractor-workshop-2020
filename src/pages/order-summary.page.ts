import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderConfirmationLabel: ElementFinder;

  constructor () {
    this.orderConfirmationLabel = $('#center_column > div > p > strong');
  }

  public async getOrderConfirmation(): Promise<string> {
    const label = await this.orderConfirmationLabel.getText();
    return label;
  }
}
