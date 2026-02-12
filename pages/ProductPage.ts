import { Locator, Page } from "@playwright/test";

export class ProductPage {
  readonly page: Page;
  readonly addToCart: Locator;
  readonly shoppingCartBadge: Locator;
  readonly removeButton: Locator;

  constructor(page:Page) {
    this.page = page;
    this.addToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]')
    this.removeButton = page.locator ('[data-test="remove-sauce-labs-backpack"]');
  }
  async adicionarProdutoAoCarrinho(){
  await this.addToCart.click();  
}
  async removerProdutoDoCarrinho(){
    await this.removeButton.click();
  }

}

