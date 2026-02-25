# 🧪 Cypress – Testes de API | Serverest

> Este repositório foi criado com o objetivo de praticar testes automatizados de API utilizando o framework Cypress.
> Os testes são realizados contra a API do Serverest, cobrindo fluxos completos de:
> - Usuários
> - Login
> - Produtos

---


# 🚀 Roadmap Atual do Projeto

## 🔹 Estrutura Inicial

- ✅ Instalação e configuração do Cypress
- ✅ Organização de specs por domínio:
  - usuarios.api.cy.js
  - login.api.cy.js
  - produtos.api.cy.js
    
- ✅ Configuração de baseUrl


## 🔹 Testes de Usuários

- ✅ Cadastro com sucesso
- ✅ Validação de e-mail duplicado
- ✅ Exclusão com sucesso
- ✅ Exclusão de usuário inexistente

Validações aplicadas:

- Status code
- Mensagem da API
- Estrutura do response body


## 🔹 Testes de Login

- ✅ Login com sucesso
- ✅ Login com credenciais inválidas
- ✅ Validação de retorno do token (authorization)


## 🔹 Testes de Produtos

Cadastro

- ✅ Cadastro com sucesso (usuário admin)
- ✅ Produto com nome duplicado
- ✅ Cadastro sem token
- ✅ Cadastro com usuário comum (validação de permissão)

Exclusão

- ✅ Exclusão com sucesso
- ✅ Exclusão de produto inexistente
- ✅ Exclusão sem token
- ✅ Exclusão com usuário não administrador


---


# 🧠 Conceitos Técnicos Aplicados

- Uso de cy.request() via comandos customizados

- Encadeamento assíncrono com .then()

- Captura dinâmica de IDs retornados pela API

- Geração dinâmica de dados com Date.now()

- Testes positivos e negativos

- Validação de regras de autorização (admin vs usuário comum)

- Separação de responsabilidades por domínio


# 🛠 Tecnologias Utilizadas

- Cypress
- Node.js
- Git
- GitHub



# 📁 Estrutura Atual

```
cypress/
├── e2e/

│   ├── usuarios.api.cy.js
│   ├── login.api.cy.js
│   └── produtos.api.cy.js
├── support/
│   ├── commandsLogin.js
│   ├── commandsUsuario.js
│   └── commandsProduto.js
```


# 🔜 Próximas Evoluções Técnicas

- ⬜ Refatorar encadeamentos usando beforeEach
- ⬜ Armazenar token utilizando Cypress.env()
- ⬜ Implementar cleanup automático com afterEach
- ⬜ Trabalhar com cy.intercept() para testes híbridos (UI + API)
- ⬜ Implementar ambientes dinâmicos (dev/hml)
- ⬜ Estruturar execução para CI/CD


---


## 🙋‍♂️ Autor
Feito com dedicação por Andrei Gomes 🚀

📫 linkedin.com/in/AndreiSGomes
