import { browser } from 'protractor';
import { MenuContentPage,
  ProductAddedModal,
  SummaryStepPage,
  SignInPage,
  AddressStepPage,
  ShippingStepPage,
  BankPaymentPage,
  PaymentStepPage,
  OrderSummaryPage,
  ProductListPage } from '../src/pages';

describe('Buy a t-shirt', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productListPage: ProductListPage = new ProductListPage();
    const productAddedModalPage: ProductAddedModal = new ProductAddedModal();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();
    const signInPage: SignInPage = new SignInPage();
    const addressStepPage: AddressStepPage = new AddressStepPage();
    const shippingStepPage: ShippingStepPage = new ShippingStepPage();
    const paymentStepPage: PaymentStepPage = new PaymentStepPage();
    const bankPaymentStepPage: BankPaymentPage = new BankPaymentPage();
    const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

    await browser.get('http://automationpractice.com/');
    await(browser.sleep(5000));

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(5000));

    await productListPage.selectTshirt();
    await(browser.sleep(5000));

    await productAddedModalPage.clickProceedToCheckout();
    await(browser.sleep(5000));

    await summaryStepPage.clickProceedToCheckout();
    await(browser.sleep(5000));

    await signInPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(5000));

    await addressStepPage.clickProceedToCheckout();
    await(browser.sleep(5000));

    await shippingStepPage.clickTermsAndConditions();
    await(browser.sleep(5000));

    await shippingStepPage.clickProceedToCheckout();
    await(browser.sleep(5000));

    await paymentStepPage.clickPayByBankWire();
    await(browser.sleep(5000));

    await bankPaymentStepPage.clickIConfirmMyOrder();
    await(browser.sleep(5000));

    await expect(orderSummaryPage.getOrderConfirmation())
      .toBe('Your order on My Store is complete.');
  });
});
