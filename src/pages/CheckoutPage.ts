import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get checkoutBtn(): Locator {
    return this.page.locator('[data-test="checkout"]');
  }
  get firstNameInput(): Locator {
    return this.page.locator('[data-test="firstName"]');
  }
  get lastNameInput(): Locator {
    return this.page.locator('[data-test="lastName"]');
  }
  get postalCodeInput(): Locator {
    return this.page.locator('[data-test="postalCode"]');
  }
  get continueBtn(): Locator {
    return this.page.locator('[data-test="continue"]');
  }
  get finishBtn(): Locator {
    return this.page.locator('[data-test="finish"]');
  }
  get successMessage(): Locator {
    return this.page.locator('[data-test="complete-header"]');
  }

  async preencherDados(first: string, last: string, postal: string) {
    await this.firstNameInput.fill(first);
    await this.lastNameInput.fill(last);
    await this.postalCodeInput.fill(postal);
    await this.continueBtn.click();
  }
}
