# 🧪 Estudos com Cypress

> Este repositório foi criado com o objetivo de praticar e documentar meus estudos com testes automatizados utilizando o framework **Cypress**.  
> A aplicação testada é o front-end do [Serverest.dev](https://front.serverest.dev).

---

## 🚀 Roadmap do Projeto

- ✅ Criar repositório local e remoto `estudos_cypress`
- ✅ Inicializar o projeto com `git init` e instalar Cypress com `npm install cypress`
- ✅ Rodar Cypress com `npx cypress open` para gerar a estrutura inicial
- ✅ Configurar o `cypress.config.js` com `baseUrl: 'https://front.serverest.dev'`
- ✅ Renomear `spec.cy.js` para `tela-registrar.cy.js`
- ✅ Criar testes de cadastro de usuário:
  - [x] Cadastro com sucesso
  - [x] Cadastro com e-mail duplicado
  - [x] Cadastro sem nome
  - [x] Cadastro sem e-mail
  - [x] Cadastro sem senha
  - [x] Cadastro com todos os campos vazios
- ✅ Realizar o primeiro commit e subir para o repositório remoto

---

## 🧩 Tecnologias Utilizadas

- ✅ Cypress
- ✅ Node.js
- ✅ Git/GitHub
- ✅ Markdown

---

## 🛠 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/estudos_cypress.git

# Acesse a pasta do projeto
cd estudos_cypress

# Instale as dependências
npm install

# Rode o Cypress
npx cypress open
````

---

## 📁 Estrutura do projeto

```
estudos_cypress/
├── cypress/
│   ├── e2e/
│   │   └── tela-registrar.cy.js
│   └── support/
├── cypress.config.js
├── package.json
└── README.md
```

---

## 📌 Próximos Passos

- ⬜ Criar comandos customizados para preencher formulários (cy.preencherCadastro())
- ⬜ Separar dados de testes com arquivos .json (fixtures)
- ⬜ Criar testes para login de usuário=
- ⬜ Implementar geração automática de dados (nome, email etc.)
- ⬜ Configurar testes em múltiplos navegadores
- ⬜ Automatizar execução via CLI
- ⬜ Criar integração com GitHub Actions para CI

---


## 🙋‍♂️ Autor
Feito com dedicação por Andrei Gomes 🚀

📫 linkedin.com/in/AndreiSGomes


 

