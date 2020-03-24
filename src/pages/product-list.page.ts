import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;
  private productCard: ElementFinder;

  constructor () {
    this.addToCartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
    this.productCard = $('.product-container');
  }

  public async selectTshirt(): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(this.productCard));
    await browser.actions().mouseMove(this.productCard).perform();
    await this.addToCartButton.click();
  }
}
