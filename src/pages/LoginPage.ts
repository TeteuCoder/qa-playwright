import { Locator, Page } from "@playwright/test"

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly LoginButton: Locator;

  constructor(page:Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.LoginButton = page.locator('[data-test="login-button"]');
  }

  async acessar(){
    await this.page.goto('/');
  }
  

  async logar(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.LoginButton.click();
  }
}