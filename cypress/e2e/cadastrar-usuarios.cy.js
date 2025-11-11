describe('Tela de cadastro de usuário', () => {
  beforeEach(() => {
    cy.visit('/cadastrarusuarios')
  })
 
  it('Cadastrar usuário com sucesso (usuário comun)', () => {
    cy.cadastrarComSucesso()
  })

  it('Cadastrar usuário com sucesso (usuário administrador)', () => {
    cy.cadastrarComSucessoAdmin()
  })

  it('Cadastrar usuário com e-mail existente', () => {
    cy.cadastrarUsuarioExistente()
  })
  
  it('Cadastrar usuário sem nome', () => {
    cy.cadastrarSemNome()
  })

  it('Cadastrar usuário sem e-mail', () => {
    cy.cadastrarSemEmail()
  })

  it('Cadastrar usuário sem senha', () => {
    cy.cadastrarSemSenha()
  })

  it('Cadastrar usuários com todos os campos vazios', () => {
    cy.cadastrarVazio()
  })

})