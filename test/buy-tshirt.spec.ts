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
  describe('Open Web Page', () => {
    it('Go to website', async () => {
      await browser.get('http://automationpractice.com/');
    });
  });

  describe('Buy t-shirt', () => {
    it('Add t-shirt to cart', async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModal = new ProductAddedModal();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.selectTshirt();
      await productAddedModalPage.clickProceedToCheckoutPA();
      await summaryStepPage.clickProceedToCheckoutSP();
    });
  });

  describe('Login', () => {
    it('Log into app', async () => {
      const signInPage: SignInPage = new SignInPage();

      await signInPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    });
  });

  describe('Address', () => {
    it('Addresing and Shipping', async () => {
      const addressStepPage: AddressStepPage = new AddressStepPage();
      const shippingStepPage: ShippingStepPage = new ShippingStepPage();

      await addressStepPage.clickProceedToCheckoutAP();
      await shippingStepPage.clickTermsAndConditions();
      await shippingStepPage.clickProceedToCheckoutSPP();
    });
  });

  describe('Payment', () => {
    it('Pay order', async () => {
      const paymentStepPage: PaymentStepPage = new PaymentStepPage();
      const bankPaymentStepPage: BankPaymentPage = new BankPaymentPage();
      const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

      await paymentStepPage.clickPayByBankWire();
      await bankPaymentStepPage.clickIConfirmMyOrder();
      await expect(orderSummaryPage.getOrderConfirmation())
      .toBe('Your order on My Store is complete.');
    });
  });

});
