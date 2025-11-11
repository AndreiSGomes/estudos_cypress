// ************************ TELA DE CADASTRO DE USUARIOS
Cypress.Commands.add('cadastrar', (nome, email, senha) => {
    cy.get('input[data-testid="nome"]').type(nome)
    cy.get('input[data-testid="email"]').type(email)
    cy.get('input[data-testid="password"]').type(senha)
    cy.get('button[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('cadastrarComSucesso', () => {
    cy.cadastrar('QA User Default', 'qa.userdefault@email.com', '1234')
    cy.contains('Cadastro realizado com sucesso').should('be.visible')
    cy.url().should('include', '/home')
    cy.get('h1').contains('Serverest Store')
})

Cypress.Commands.add('cadastrarComSucessoAdmin', () => {
    cy.get('input[data-testid="nome"]').type('QA User Admin')
    cy.get('input[data-testid="email"]').type('qa.adminteste@email.com')
    cy.get('input[data-testid="password"]').type('admin')
    cy.get('input[data-testid="checkbox"]').check()
    cy.get('button[data-testid="cadastrar"]').click()
    cy.contains('Cadastro realizado com sucesso').should('be.visible')
    cy.url().should('include', '/admin/home')
    cy.get('h1').contains('Bem Vindo')
})

Cypress.Commands.add('cadastrarUsuarioExistente', () => {
    cy.cadastrar('QA User Default', 'qa.userdefault@email.com', '1234')
    cy.contains('Este email já está sendo usado').should('be.visible')
})

Cypress.Commands.add('cadastrarSemNome', () => {
    cy.get('input[data-testid="email"]').type('qa.usernoname@email.com')
    cy.get('input[data-testid="password"]').type('1234')
    cy.get('button[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('cadastrarSemEmail', () => {
    cy.get('input[data-testid="nome"]').type('QA User No Email')
    cy.get('input[data-testid="password"]').type('1234')
    cy.get('button[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('cadastrarSemSenha', () => {
    cy.get('input[data-testid="nome"]').type('QA User No Password')
    cy.get('input[data-testid="email"]').type('qa.usernopassword@email.com')
    cy.get('button[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('cadastrarVazio', () => {
    cy.get('button[data-testid="cadastrar"]').click()
})
