import { $, ElementFinder } from 'protractor';

export class SignInPage {
  private email: ElementFinder;
  private password: ElementFinder;
  private logInButton: ElementFinder;

  constructor () {
    this.email = $('#email');
    this.password = $('#passwd');
    this.logInButton = $('#SubmitLogin > span');
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

  public async login(emailP: string, passwordP : string): Promise<void> {
    this.setEmail(emailP);
    this.setPassword(passwordP);
    this.clickLoginButton();
  }
}
