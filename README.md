# 🧪 Teste Técnico Objective

Suíte de testes automatizados com **Cypress** e **JavaScript** para a aplicação [ServeRest](https://serverest.dev/), desenvolvida como desafio técnico para a Objective.

A suíte cobre cenários **E2E** no frontend e cenários de **API**, com organização em Gherkin (Cucumber), Page Objects, custom commands e pipeline de CI/CD no GitHub Actions.

## 📑 Sumário

- [Aplicação sob teste](#aplicacao-sob-teste)
- [Stack](#stack)
- [Pré-requisitos](#pre-requisitos)
- [Instalação](#instalacao)
- [Como executar](#como-executar)
- [Cenários cobertos](#cenarios-cobertos)
  - [E2E — Produtos](#e2e-produtos)
  - [API — Usuários](#api-usuarios)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Padrões e configuração](#padroes-e-configuracao)
- [CI/CD](#cicd)
  - [Como acessar os relatórios no GitHub Actions](#relatorios-github-actions)
- [Relatórios locais](#relatorios-locais)

<a id="aplicacao-sob-teste"></a>

## 🔗 Aplicação sob teste

| Camada    | URL |
|-----------|-----|
| Frontend  | https://front.serverest.dev/ |
| API (Swagger) | https://serverest.dev/ |

<a id="stack"></a>

## 🛠️ Stack

- [Cypress](https://www.cypress.io/) — execução E2E e API
- [Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor) — cenários em Gherkin (BDD)
- Page Object Model — encapsulamento das páginas
- [@faker-js/faker](https://fakerjs.dev/) — dados dinâmicos de teste
- GitHub Actions — CI/CD e publicação de relatórios HTML

<a id="pre-requisitos"></a>

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) 26 (ou compatível)
- npm

<a id="instalacao"></a>

## 📦 Instalação

Clone o projeto e então execute o comando a seguir:

```bash
npm install
```

<a id="como-executar"></a>

## ▶️ Como executar

| Comando | Descrição |
|---------|-----------|
| `npm run open` | Abre o Cypress em modo interativo |
| `npm run test:e2e` | Executa os testes E2E (Chrome) e gera relatório HTML |
| `npm run test:api` | Executa os testes de API e gera relatório HTML |
| `npm test` | Executa a suíte completa |

<a id="cenarios-cobertos"></a>

## 📋 Cenários cobertos

<a id="e2e-produtos"></a>

### 🖥️ E2E — Produtos (`cypress/e2e/produtos.feature`)

Fluxos de manutenção de produtos por um usuário administrador:

1. Criar produto com sucesso
2. Editar produto com sucesso
3. Excluir produto com sucesso

<a id="api-usuarios"></a>

### 🔌 API — Usuários (`cypress/api/usuarios.feature`)

Operações no recurso `/usuarios`:

1. Criar usuário com sucesso
2. Não permitir criar usuário com e-mail já existente
3. Não permitir deletar usuário com carrinho cadastrado

<a id="estrutura-do-projeto"></a>

## 📁 Estrutura do projeto

```
.
├── .github/workflows/     # Pipeline CI/CD
├── cypress/
│   ├── api/               # Features de API
│   ├── e2e/               # Features E2E
│   ├── assets/            # Arquivos auxiliares (ex.: imagem de produto)
│   ├── reports/           # Relatórios HTML (gerados localmente / CI)
│   └── support/
│       ├── commands.js    # Custom commands
│       ├── pageObjects/   # Page Objects
│       └── stepDefinitions/
│           ├── api/       # Steps de API
│           └── e2e/       # Steps E2E
├── cypress.config.ts      # Configuração (baseUrl, apiUrl, Cucumber)
└── package.json
```

<a id="padroes-e-configuracao"></a>

## 🧩 Padrões e configuração

- **Page Object Model** — seletores e ações de UI em `cypress/support/pageObjects/`
- **Step definitions** — mapeamento Gherkin → código em `cypress/support/stepDefinitions/`
- **Custom commands** — helpers reutilizáveis em `cypress/support/commands.js` (ex.: `registerRandomUser`)
- **URLs** — definidas em `cypress.config.ts`:
  - `baseUrl`: `https://front.serverest.dev`
  - `env.apiUrl`: `https://serverest.dev`

Artefatos locais de execução (`cypress/videos/`, `cypress/screenshots/`, `cypress/reports/`) e arquivos `.env` estão no `.gitignore`.

<a id="cicd"></a>

## 🚀 CI/CD

O workflow em [`.github/workflows/workflow.yaml`](.github/workflows/workflow.yaml) roda em todo **push** e **pull request**:

1. Instala dependências
2. Executa `npm run test:api`
3. Publica o artefato `api-report` (`cypress/reports/api-report.html`)
4. Executa `npm run test:e2e`
5. Publica o artefato `e2e-report` (`cypress/reports/e2e-report.html`)

<a id="relatorios-github-actions"></a>

### 📥 Como acessar os relatórios no GitHub Actions

1. Abra a aba **Actions** do repositório
2. Selecione o workflow run desejado
3. Em **Artifacts**, baixe `api-report` e/ou `e2e-report`
4. Extraia o ZIP e abra o arquivo `.html` no navegador

Os artefatos são publicados mesmo quando os testes falham (`if: success() || failure()`).

<a id="relatorios-locais"></a>

## 📊 Relatórios locais

Após `npm run test:api` ou `npm run test:e2e`, os relatórios HTML ficam em:

- `cypress/reports/api-report.html`
- `cypress/reports/e2e-report.html`

Essa pasta não é versionada; os arquivos são gerados a cada execução.
