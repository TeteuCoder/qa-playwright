import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';


test('Deve adicionar um produto ao carrinho com sucesso', async ({page}) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  await loginPage.acessar();
  await loginPage.logar('standard_user', 'secret_sauce')

  await productPage.adicionarProdutoAoCarrinho();

  await expect(productPage.removeButton).toHaveText('Remove')
  await expect(productPage.shoppingCartBadge).toHaveText('1')

  await productPage.removerProdutoDoCarrinho();
})