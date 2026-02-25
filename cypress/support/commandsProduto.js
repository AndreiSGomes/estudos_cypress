Cypress.Commands.add('criarProduto', (nome, preco, descricao, qtd, token, failOnStatusCode = true) => {
    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        failOnStatusCode,
        headers: {
            Authorization: token
        },
        body: {
            'nome': nome,
            'preco': preco,
            'descricao': descricao,
            'quantidade': qtd
        }
    })
})

Cypress.Commands.add('buscarProduto', (id, failOnStatusCode = true) => {
    return cy.request({
        method: 'GET',
        url: `https://serverest.dev/produtos/${id}`,
        
    })
})


Cypress.Commands.add('deletarProduto', (token, id, failOnStatusCode = true) => {
    return cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/produtos/${id}`,
        failOnStatusCode,
        headers: {
            Authorization: token
        }

    })
})