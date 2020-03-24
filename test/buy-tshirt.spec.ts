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

    await menuContentPage.goToTShirtMenu();

    await productListPage.selectTshirt();

    await productAddedModalPage.clickProceedToCheckoutPA();

    await summaryStepPage.clickProceedToCheckoutSP();

    await signInPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');

    await addressStepPage.clickProceedToCheckoutAP();

    await shippingStepPage.clickTermsAndConditions();

    await shippingStepPage.clickProceedToCheckoutSPP();

    await paymentStepPage.clickPayByBankWire();

    await bankPaymentStepPage.clickIConfirmMyOrder();

    await expect(orderSummaryPage.getOrderConfirmation())
      .toBe('Your order on My Store is complete.');
  });
});
