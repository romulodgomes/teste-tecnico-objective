import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('o usuário faz uma requisição de criação de usuário', () => {
    cy.registerRandomUser();
});

Given('que existe um usuário {word}', (userType) => {
    cy.registerRandomUser(userType === 'administrador' ? 'true' : 'false');
});

When('o usuário faz uma requisição de criação de usuário com o mesmo email', () => {
    cy.registerRandomUser('false', Cypress.env('userEmail'));
});

Then('a api responde com status {int} e mensagem {string}', (status, message) => {
    cy.get('@response').then(response => {
        expect(response.status).to.be.equal(status);
        expect(response.body.message).to.be.equal(message);
    });
});

Given('que existe um carrinho de compras associado a esse usuário', () => {
    cy.createCart(Cypress.env('userId'));
});

When('o usuário faz uma requisição de deletar o usuário', () => {
    cy.request({
        method: 'DELETE',
        url: `${Cypress.env('apiUrl')}/usuarios/${Cypress.env('userId')}`,
        headers: {
            authorization: Cypress.env('authToken'),
        },
        failOnStatusCode: false,
    }).as('response');
});