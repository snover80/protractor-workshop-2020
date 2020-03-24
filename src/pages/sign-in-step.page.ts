import { $, ElementFinder } from 'protractor';

export class SignInPage {
  private email: ElementFinder;
  private password: ElementFinder;
  private logInButton: ElementFinder;

  constructor () {
    this.email = $('#email');
    this.password = $('#passwd');
    this.logInButton = $('#SubmitLogin');
  }

  public async setEmail(emailP : string): Promise<void> {
    await this.email.sendKeys(emailP);
  }

  public async setPassword(passwordP : string): Promise<void> {
    await this.password.sendKeys(passwordP);
  }

  public async clickLoginButton(): Promise<void> {
    await this.logInButton.click();
  }

  public async login(emailP1: string, passwordP1 : string): Promise<void> {
    await this.setEmail(emailP1);
    await this.setPassword(passwordP1);
    await this.clickLoginButton();
  }
}
