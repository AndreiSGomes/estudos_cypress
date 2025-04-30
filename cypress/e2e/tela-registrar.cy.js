describe('Tela de registro de usuário', () => {
  beforeEach(() => {
    cy.visit('/cadastrarusuarios')

  })
  it('Registrar usuário com sucesso', () => {
    cy.get('input[data-testid="nome"]').type('Usuario Teste Um')
    cy.get('input[data-testid="email"]').type('emailtesteum@email.com')
    cy.get('input[data-testid="password"]').type('123456')
    cy.get('button[data-testid="cadastrar"]').click()
    //cy.contains('Cadastrado realizado com sucesso').should('be.visible')
  })

  it('Registrar usuário com e-mail já cadastrado', () => {
    cy.get('input[data-testid="nome"]').type('Usuario Teste Novo')
    cy.get('input[data-testid="email"]').type('emailtesteum@email.com')
    cy.get('input[data-testid="password"]').type('123456')
    cy.get('button[data-testid="cadastrar"]').click()
    cy.contains('Este email já está sendo usado').should('be.visible')
  })

  it('Registrar usuário sem nome', () => {
    cy.get('input[data-testid="email"]').type('emailtestedois@email.com')
    cy.get('input[data-testid="password"]').type('123456')
    cy.get('button[data-testid="cadastrar"]').click()
    cy.contains('Nome é obrigatório').should('be.visible')

  })

  it('Registrar usuário sem e-mail', () => {
    cy.get('input[data-testid="nome"]').type('Usuario Teste Tres')
    cy.get('input[data-testid="password"]').type('123456')
    cy.get('button[data-testid="cadastrar"]').click()
    cy.contains('Email é obrigatório').should('be.visible')
  })

  it('Registrar usuário sem senha', () => {
    cy.get('input[data-testid="nome"]').type('Usuario Teste Quatro')
    cy.get('input[data-testid="email"]').type('emailtestequatro@email.com')
    cy.get('button[data-testid="cadastrar"]').click()
    cy.contains('Password é obrigatório').should('be.visible')
  })

  it('Registrar usuários com todos os campos vazios', () => {
    cy.get('button[data-testid="cadastrar"]').click()
    cy.contains('Password é obrigatório').should('be.visible')
  })
})