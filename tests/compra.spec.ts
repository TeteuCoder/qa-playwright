import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage.ts';
import { ProductPage } from '../src/pages/ProductPage.ts';
import { CheckoutPage } from '../src/pages/CheckoutPage.ts';
import { users, products } from '../fixtures/users';

test.describe('Fluxo de Compra — SauceDemo', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.acessar();
    await loginPage.logar(users.standard.username, users.standard.password);
  });

  test('Deve adicionar produto ao carrinho', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.adicionarAoCarrinho(products.backpack);
    await expect(productPage.cartBadge).toHaveText('1');
    await expect(productPage.removeBtn(products.backpack)).toBeVisible();
  });

  test('Deve remover produto do carrinho', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.adicionarAoCarrinho(products.backpack);
    await productPage.removerDoCarrinho(products.backpack);
    await expect(productPage.cartBadge).not.toBeVisible();
  });

  test('Deve completar checkout com sucesso (fluxo completo)', async ({ page }) => {
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productPage.adicionarAoCarrinho(products.backpack);
    await productPage.irParaCarrinho();
    await checkoutPage.checkoutBtn.click();
    await checkoutPage.preencherDados('Matheus', 'Silva', '09600-000');
    await checkoutPage.finishBtn.click();

    await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
  });

  test('Deve adicionar múltiplos produtos ao carrinho', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.adicionarAoCarrinho(products.backpack);
    await productPage.adicionarAoCarrinho(products.bikeLight);
    await expect(productPage.cartBadge).toHaveText('2');
  });
});

// ---- Testes negativos (fora do beforeEach de login) ----
test.describe('Login — Cenários Negativos', () => {

  test('Usuário bloqueado não deve conseguir logar', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.acessar();
    await loginPage.logar(users.locked.username, users.locked.password);
    await expect(page.locator('[data-test="error"]')).toContainText('locked out');
  });
});