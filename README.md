# 🎭 Playwright E2E Test Suite — SauceDemo

![CI](https://github.com/TeteuCoder/Projects.E2E/actions/workflows/playwright.yml/badge.svg)
![Playwright](https://img.shields.io/badge/Playwright-1.x-45ba4b?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-blue)

Suíte de testes E2E automatizados para a aplicação [SauceDemo](https://www.saucedemo.com/), desenvolvida com **Playwright + TypeScript**, seguindo o padrão **Page Object Model (POM)** e com execução automatizada via **CI/CD no GitHub Actions**.

---

## 🎯 Objetivo

Demonstrar domínio prático em automação de testes end-to-end com foco em:
- Organização e manutenibilidade do código (POM)
- Cobertura de fluxos críticos e cenários negativos
- Integração com pipeline de CI/CD
- Boas práticas de QA aplicadas a projetos reais

---

## 🗂️ Estrutura do Projeto

```
├── .github/
│   └── workflows/
│       └── playwright.yml       # Pipeline CI/CD
├── fixtures/
│   └── users.ts                 # Dados de teste centralizados
├── src/
│   └── pages/
│       ├── LoginPage.ts         # POM — página de login
│       ├── ProductPage.ts       # POM — listagem de produtos
│       └── CheckoutPage.ts      # POM — fluxo de checkout
├── tests/
│   ├── compra.spec.ts           # Testes E2E de compra
│   └── api/
│       └── usuarios.spec.ts     # Testes de API
├── playwright.config.ts
└── README.md
```

---

## 🧪 Cobertura de Testes

| Arquivo | Cenário | Status |
|---|---|---|
| `compra.spec.ts` | Adicionar produto ao carrinho | ✅ |
| `compra.spec.ts` | Remover produto do carrinho | ✅ |
| `compra.spec.ts` | Adicionar múltiplos produtos | ✅ |
| `compra.spec.ts` | Checkout completo com sucesso | ✅ |
| `compra.spec.ts` | Login com usuário bloqueado (negativo) | ✅ |

> **21 testes passando** em Chromium, Firefox e WebKit · Tempo médio: ~30s

---

## ⚙️ Decisões Técnicas

**Por que Page Object Model?**
Separa a lógica de interação com a UI dos cenários de teste. Se um seletor muda, a correção acontece em um único lugar — não em todos os testes.

**Por que locators dinâmicos no ProductPage?**
Em vez de criar um método por produto, o `ProductPage` recebe o `slug` do produto como parâmetro. Isso permite testar qualquer item sem duplicar código.

**Por que fixtures centralizadas?**
Credenciais e slugs de produto ficam em `fixtures/users.ts`. Alterações de dados de teste impactam um único arquivo.

**Por que CI/CD com 3 browsers?**
Garante que os testes passam em Chromium, Firefox e WebKit a cada push, simulando o comportamento real de usuários finais.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+
- npm

### Instalação

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
npm install
npx playwright install
```

### Executar todos os testes

```bash
npx playwright test
```

### Executar com relatório visual

```bash
npx playwright test --reporter=html
npx playwright show-report
```

### Executar em um browser específico

```bash
npx playwright test --project=chromium
```

---

## 📊 Relatório de Execução

Após rodar `npx playwright test --reporter=html`, o relatório fica disponível em `playwright-report/index.html`.

👉 **[Ver último relatório publicado](https://SEU_USUARIO.github.io/SEU_REPOSITORIO)** _(via GitHub Pages)_

---

## 🔄 Pipeline CI/CD

Os testes rodam automaticamente a cada `push` e `pull request` via GitHub Actions:

```
push → install deps → install browsers → run tests (3 browsers) → upload report
```

O badge no topo deste README reflete o status da última execução em tempo real.

---

## 🛠️ Stack

| Ferramenta | Uso |
|---|---|
| [Playwright](https://playwright.dev/) | Framework de automação E2E |
| TypeScript | Tipagem estática e segurança de código |
| GitHub Actions | Pipeline CI/CD |
| GitHub Pages | Publicação do HTML Report |

---

## 👨‍💻 Autor

**Matheus Martins Silva** — QA Analyst · QA Automation Engineer
[![GitHub](https://img.shields.io/badge/GitHub-TeteuCoder-181717?logo=github)](https://github.com/TeteuCoder)
