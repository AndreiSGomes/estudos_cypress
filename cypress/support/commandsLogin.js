Cypress.Commands.add('realizarLogin', (email, senha, failOnStatusCode = true) => {
    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        failOnStatusCode,
        body: {
            email: email,
            password: senha,
        }
    })
})