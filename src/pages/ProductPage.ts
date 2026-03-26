import { Locator, Page } from "@playwright/test";

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators dinâmicos — funcionam com qualquer produto
  addToCartBtn(slug: string): Locator {
    return this.page.locator(`[data-test="add-to-cart-${slug}"]`);
  }

  removeBtn(slug: string): Locator {
    return this.page.locator(`[data-test="remove-${slug}"]`);
  }

  get cartBadge(): Locator {
    return this.page.locator('[data-test="shopping-cart-badge"]');
  }

  get cartLink(): Locator {
    return this.page.locator('[data-test="shopping-cart-link"]');
  }

  async adicionarAoCarrinho(slug: string) {
    await this.addToCartBtn(slug).click();
  }

  async removerDoCarrinho(slug: string) {
    await this.removeBtn(slug).click();
  }

  async irParaCarrinho() {
    await this.cartLink.click();
  }
}