import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderConfirmationLabel: ElementFinder;

  constructor () {
    this.orderConfirmationLabel = $('div.box > p.cheque-indent > strong.dark');
  }

  public async getOrderConfirmation(): Promise<string> {
    const label = await this.orderConfirmationLabel.getText();
    return label;
  }
}
