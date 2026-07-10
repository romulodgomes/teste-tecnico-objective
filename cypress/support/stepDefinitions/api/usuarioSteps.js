import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('o usuário faz uma requisição de criação de usuário', () => {
    cy.registerRandomUser();
});

Then('o usuário deve ser criado com sucesso', () => {
    cy.get('@response').then(response => {
        expect(response.status).to.be.equal(201);
        expect(response.body.message).to.be.equal('Cadastro realizado com sucesso');
        expect(response.body._id).to.be.not.null;
    });
});

Given('que existe um usuário', () => {
    cy.registerRandomUser();
});

When('o usuário faz uma requisição de criação de usuário com o mesmo email', () => {
    cy.registerRandomUser('false', Cypress.env('userEmail'));
});

Then('a api responde com status {int} e mensagem de erro {string}', (status, message) => {
    cy.get('@response').then(response => {
        expect(response.status).to.be.equal(status);
        expect(response.body.message).to.be.equal(message);
    });
});