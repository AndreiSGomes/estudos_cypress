describe('Tela de login do usuário', () => {
    beforeEach(() => {
    cy.visit('/login')
})

it('Realizar login com sucesso (usuário comum)', () => {
    cy.loginComSucesso()
})

it('Realizar login com sucesso (usuário Admin)', () => {
    cy.loginComSucessoAdmin()
})

it('Realizar login com e-mail incorreto', () => {
    cy.loginEmailIncorreto()
})

it('Realizar login com senha incorreta', () => {
    cy.loginSenhaIncorreta()
})

it('Realizar login com campo e-mail vazio', () => {
    cy.loginSemEmail()
})

it('Realizar login com campo senha vazio', () => {
    cy.loginSemSenha()
})

it('Realizar login com todos os campos vazios', () => {
    cy.loginCamposVazios()
})

})