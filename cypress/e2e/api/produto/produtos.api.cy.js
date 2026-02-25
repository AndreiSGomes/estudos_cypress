describe('API - Cadastro de produtos', () => {

//------------------------------------------------------
//                 CADASTRAR PRODUTO
//------------------------------------------------------
    it('Cadastrar produto com sucesso', () => {
        cy.criarUsuario(`user${Date.now()}@email.com`, 'true')
            .then((response) => {
                const userId = response.body._id

                cy.buscarUsuario(userId)
                    .then((response) => {
                        const email = response.body.email
                        const senha = response.body.password

                        cy.realizarLogin(email, senha)
                            .then((response) => {
                                const token = response.body.authorization
            
                                    cy.criarProduto(`${Date.now()}_Iphone 16 Pro Max`, 6245, 'Celular', 3, token)
                                        .then((response) => {
                                            expect(response.status).to.eq(201)
                                            expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                                            expect(response.body).to.have.property('_id')
                                            expect(response.body._id).to.be.a('string')
                                        })         
                            })
                    })
            })
    })

    it('Cadastrar produto com nome existente', () => {
        cy.criarUsuario(`user${Date.now()}@email.com`, 'true')
            .then((response) => {
                const userId = response.body._id

                cy.buscarUsuario(userId)
                    .then((response) => {
                        const email = response.body.email
                        const senha = response.body.password

                        cy.realizarLogin(email, senha)
                            .then((response) => {
                                const token = response.body.authorization
            
                                cy.criarProduto(`Produto_${Date.now()}`, 6245, 'Produto', 3, token)
                                    .then((response) => {
                                        const idProduto = response.body._id

                                        cy.buscarProduto(idProduto, false)
                                            .then((response) => {
                                                const nomeProduto = response.body.nome
                                                
                                                cy.criarProduto(nomeProduto, 100, 'Produto', 1, token, false)
                                                    .then((response) => {
                                                        expect(response.status).to.eq(400)
                                                        expect(response.body.message).to.eq('Já existe produto com esse nome')
                                                    })  
                                            })
                                    })                              
                            })
                    })
            })
    })

    it('Cadastrar produto sem token', () => {
            
            cy.criarProduto(`Produto_${Date.now()}`, 425, 'Fone', 7, 'semToken', false)
                .then((response) => {
                    expect(response.status).to.eq(401)
                    expect(response.body.message).to.eq('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
                })  
    })

    it('Cadastrar produto com usuário comum', () => {
        cy.criarUsuario(`user${Date.now()}@email.com`, 'false')
            .then((response) => {
                const id = response.body._id

                cy.buscarUsuario(id)
                    .then((response) => {

                        const email = response.body.email
                        const senha = response.body.password

                        cy.realizarLogin(email, senha)
                            .then((response) => {
                                const token = response.body.authorization

                                cy.criarProduto(`${Date.now()}_Mecânico Gamer Redragon Dark`, 161, 'Teclado', 9, token, false)
                                    .then((response) => {
                                        expect(response.status).to.eq(403)
                                        expect(response.body.message).to.eq('Rota exclusiva para administradores')
                                    })
                            })
                    })
            })

    })          

//------------------------------------------------------
//               EXCLUIR PRODUTO
//------------------------------------------------------
    it('Excluir produto com sucesso', () => {
        cy.criarUsuario(`user${Date.now()}@email.com`, 'true')
            .then((response) => {
                const userId = response.body._id

                cy.buscarUsuario(userId)
                    .then((response) => {
                        const email = response.body.email
                        const senha = response.body.password

                        cy.realizarLogin(email, senha)
                            .then((response) => {
                                const token = response.body.authorization
            
                                    cy.criarProduto(`${Date.now()}_Produto Novo`, 210, 'Produto', 3, token)
                                        .then((response) => {
                                            const idProduto = response.body._id

                                            cy.deletarProduto(token, idProduto)
                                                    .then((response) => {
                                                        expect(response.status).to.eq(200)
                                                        expect(response.body.message).to.eq('Registro excluído com sucesso')
                                                    }) 
                                        })     
                            })
                    })
            })  
    })


    it('Excluir produto que não existe', () => {
        cy.criarUsuario(`user${Date.now()}@email.com`, 'true')
            .then((response) => {
                const userId = response.body._id

                cy.buscarUsuario(userId)
                    .then((response) => {
                        const email = response.body.email
                        const senha = response.body.password

                        cy.realizarLogin(email, senha)
                            .then((response) => {
                                const token = response.body.authorization
            
                                cy.deletarProduto(token, '00excluirProduto')
                                        .then((response) => {
                                            expect(response.status).to.eq(200)
                                            expect(response.body.message).to.eq('Nenhum registro excluído')
                                        }) 
                            })
                    })
            })
    })

    it('Excluir produto sem token', () => {
        cy.deletarProduto(null, 'fbgYPoUCvnmSj4xF', false)
                .then((respostDeleteProduto) => {
                    expect(respostDeleteProduto.status).to.eq(401)
                    expect(respostDeleteProduto.body.message).to.eq('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
                }) 
    })

    it('Excluir produto com usuário comum', () => {
        cy.criarUsuario(`user${Date.now()}@email.com`, 'false')
            .then((response) => {
                const idUser = response.body._id

                cy.buscarUsuario(idUser)
                    .then((response) => {
                        const emailUser = response.body.email
                        
                         cy.realizarLogin(emailUser, '1234')
                            .then((responsePostLogin) => {
                                const token = responsePostLogin.body.authorization

                                cy.criarProduto(`${Date.now()}_Produto Novo`, 6245, 'Produto', 3, token, false)
                                    .then((response) => {
                                        const idProduto = response.body._id

                                        cy.deletarProduto(token, idProduto, false)
                                            .then((respostDeleteProduto) => {
                                                expect(respostDeleteProduto.status).to.eq(403)
                                                expect(respostDeleteProduto.body.message).to.eq('Rota exclusiva para administradores')
                                            }) 
                                    })
                            })
                    })         
            }) 
    })
    
})