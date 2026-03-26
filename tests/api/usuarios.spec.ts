import { test, expect } from '@playwright/test';

const BASE_URL = 'https://serverest.dev';

test.describe('API ServeRest — Usuários', () => {

  test('POST /usuarios — Deve cadastrar um usuário com sucesso', async ({ request }) => {
    const payload = {
      nome: 'Matheus QA',
      email: `qa.${Date.now()}@teste.com`, 
      password: 'teste123',
      administrador: 'true'
    };

    const response = await request.post(`${BASE_URL}/usuarios`, { data: payload });
    const body = await response.json();

    // Status code
    expect(response.status()).toBe(201);

    // Validação do corpo da resposta
    expect(body).toHaveProperty('message', 'Cadastro realizado com sucesso');
    expect(body).toHaveProperty('_id');
    expect(typeof body._id).toBe('string');
  });

  test('POST /usuarios — Deve rejeitar e-mail duplicado', async ({ request }) => {
    const emailFixo = `duplicado.${Date.now()}@teste.com`;

    const payload = {
      nome: 'Usuário Original',
      email: emailFixo,
      password: 'senha123',
      administrador: 'true'
    };

    // 1ª criação — deve passar
    await request.post(`${BASE_URL}/usuarios`, { data: payload });

    // 2ª criação com mesmo e-mail — deve rejeitar
    const respostaDuplicada = await request.post(`${BASE_URL}/usuarios`, {
      data: { ...payload, nome: 'Usuário Duplicado' } // mesmo email, nome diferente
    });

    const body = await respostaDuplicada.json();

    expect(respostaDuplicada.status()).toBe(400);
    expect(body.message).toBe('Este email já está sendo usado');
  });

  test('GET /usuarios — Deve listar usuários com sucesso', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/usuarios`);
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body).toHaveProperty('quantidade');
    expect(body).toHaveProperty('usuarios');
    expect(Array.isArray(body.usuarios)).toBeTruthy();
  });

  test('GET /usuarios/:id — Deve retornar 400 para ID inexistente', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/usuarios/idquenoexiste123`);
    const body = await response.json();

    expect(response.status()).toBe(400);
    expect(body.message).toBe('Usuário não encontrado');
  });

});