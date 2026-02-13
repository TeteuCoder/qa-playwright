import { test, expect } from '@playwright/test'

test ('Deve cadastrar um usuário com sucesso:', async ({ request }) => {
  const novoUsuario = await request.post('https://serverest.dev/usuarios', {
    data: {
      nome: "Teteu da Silva",
      email: `test${Math.random()}@qa.com`,
      password: "teste",
      administrador: 'true'
    },
  })
  
  const body = await novoUsuario.json();
  console.log(body)

  expect(novoUsuario.status()).toBe(201);  
});