//************** TELA DE LOGIN
Cypress.Commands.add('login', (email, senha) => {
    cy.get('input[data-testid="email"]').type(email)
    cy.get('input[data-testid="senha"]').type(senha)
    cy.get('button[data-testid="entrar"]').click()
})

Cypress.Commands.add('loginComSucesso', (email, senha) => {
    cy.login('qa.userdefault@email.com', '1234')
    cy.url().should('include', '/home')
    cy.get('h1').contains('Serverest Store')
})
Cypress.Commands.add('loginComSucessoAdmin', (email, senha) => {
    cy.login('qa.adminteste@email.com', 'admin')
    cy.url().should('include', '/admin/home')
    cy.get('h1').contains('Bem Vindo')
})

Cypress.Commands.add('loginEmailIncorreto', (email, senha) => {
    cy.login('qa.userdefault1@email.com', '1234')
    cy.url().should('include', '/login')
    cy.contains('Email e/ou senha inválidos').should('be.visible')
})

Cypress.Commands.add('loginSenhaIncorreta', (email, senha) => {
    cy.login('qa.userdefault@email.com', '123')
    cy.url().should('include', '/login')
    cy.contains('Email e/ou senha inválidos').should('be.visible')
})

Cypress.Commands.add('loginSemEmail', () => {
    cy.get('input[data-testid="senha"]').type('1234')
    cy.get('button[data-testid="entrar"]').click()
    cy.url().should('include', '/login')
    cy.contains('Email é obrigatório').should('be.visible')
})

Cypress.Commands.add('loginSemSenha', () => {
    cy.get('input[data-testid="email"]').type('qa.userdefault@email.com')
    cy.get('button[data-testid="entrar"]').click()
    cy.url().should('include', '/login')
    cy.contains('Password é obrigatório').should('be.visible')
})

Cypress.Commands.add('loginCamposVazios', () => {
    cy.get('button[data-testid="entrar"]').click()
    cy.url().should('include', '/login')
    cy.contains('Email é obrigatório').should('be.visible')
})
