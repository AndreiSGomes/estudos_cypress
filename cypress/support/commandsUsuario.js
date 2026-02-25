Cypress.Commands.add('criarUsuario', (email, administrador, failOnStatusCode = true) => {
        return cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            failOnStatusCode,
            body: {
                'nome': `User_${Date.now()} QA`,
                'email': email,
                'password': '1234',
                'administrador': administrador
            }
        })
})

Cypress.Commands.add('buscarUsuario', (id, failOnStatusCode = true) => {
    return cy.request({
        method: 'GET',
        url: `https://serverest.dev/usuarios/${id}`,
        failOnStatusCode
    })
})

Cypress.Commands.add('excluirUsuario', (id, failOnStatusCode = true) => {
    return cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/${id}`,
        failOnStatusCode
    })
})

