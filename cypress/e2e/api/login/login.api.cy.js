describe('API - Login', () => {

    it('Realizar login com sucesso', () => {
        cy.criarUsuario(`user${Date.now()}@email.com`, 'false')
            .then((response) => {
                const userId = response.body._id

                cy.buscarUsuario(userId)
                    .then((response) => {
                        const userEmail = response.body.email

                        cy.realizarLogin(userEmail, '1234')
                            .then((response) => {
                                expect(response.status).to.eq(200)
                                expect(response.body.message).to.eq('Login realizado com sucesso')
                                expect(response.body).to.have.property('authorization')
                                expect(response.body.authorization).to.be.a('string')
                            })
                    })
            })
    })

    it('Login não realizado. E-mail inválido', () => {
        cy.realizarLogin('UserNoExist@email.com', '123', false)
            .then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body.message).to.eq('Email e/ou senha inválidos')
            })
    })
})