import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('o usuário faz uma requisição de criação de usuário', () => {
    cy.registerRandomUser();
});

Then('o usuário deve ser criado com sucesso', () => {
    cy.get('@response').should('have.status', 201);
});