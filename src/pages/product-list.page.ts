import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;
  private productCard: ElementFinder;

  constructor () {
    this.addToCartButton = $('div.button-container > a[title="Add to cart"]');
    this.productCard = $('.product-container');
  }

  public async selectTshirt(): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(this.productCard));
    await browser.actions().mouseMove(this.productCard).perform();
    await this.addToCartButton.click();
  }
}
