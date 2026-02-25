describe('API - Cadastro de usuário', () => {
  
    it('Cadastrar usuário com sucesso', () => {
        cy.criarUsuario(`user${Date.now()}@email.com`, 'true')
            .then((response) => {
                    expect(response.status).to.eq(201)
                    expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                    expect(response.body).to.have.property('_id')
                    expect(response.body._id).to.be.a('string')
            })
    })

    it('E-mail já cadastrado no sistema', () => {
        cy.criarUsuario(`user${Date.now()}@email.com`, 'false')
            .then((response) => {
                const userId = response.body._id

                    cy.buscarUsuario(userId)
                        .then((response) => {
                            const userEmail = response.body.email

                            cy.criarUsuario(userEmail, 'true', false)
                                .then((response) => {
                                    expect(response.status).to.eq(400)
                                    expect(response.body.message).to.eq('Este email já está sendo usado')
                                })
                        })
            })  
    })

    it('Deletar usuário com sucesso', () => {
        cy.criarUsuario(`user${Date.now()}@email.com`, 'true')
            .then((response) => {
                const userId = response.body._id

                cy.excluirUsuario(userId)
                      .then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body.message).to.eq('Registro excluído com sucesso')
                    })
            })
    })

    
    it('Deletar usuário que não existe', () => {
        cy.excluirUsuario('usuarioNaoExiste')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq('Nenhum registro excluído')
            })
    })

})
