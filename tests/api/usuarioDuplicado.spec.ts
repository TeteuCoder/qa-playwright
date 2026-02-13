import { test, expect } from '@playwright/test'

test('Deve validar erro de usuario duplicado', async ({ request }) => {
  const emailFixo = `test${Date.now()}@qa.com`;
  await request.post('https://serverest.dev/usuarios',{
    data: {
      nome: "Matheus",
      email: emailFixo,
      password: "teste1",
      administrador: 'true'
    }
  });
  const respostaDuplicada = await request.post('https://serverest.dev/usuarios', {
    data: {
      nome: "Barbara",
      email: emailFixo,
      password: "teste2",
      administrador: 'true'
    }
  });

  const body = await respostaDuplicada.json()
  console.log(body)

  expect(respostaDuplicada.status()).toBe(400);
  const bodyErro = await respostaDuplicada.json();
  expect(bodyErro.message).toBe('Este email já está sendo usado');
});