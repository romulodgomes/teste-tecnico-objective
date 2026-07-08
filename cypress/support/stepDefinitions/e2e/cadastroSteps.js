import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que o usuário está na página de login do sistema', () => {
    cy.visit('/login');
});

When('o usuário acessa a página de cadastro', () => {
    cy.get('[data-testid="cadastrar"]').click();
});

When('o usuário cria um novo usuário com os seguintes dados:', (table) => {
    const dados = table.hashes()[0];
    cy.get('[data-testid="nome"]').type(dados.Nome);
    cy.get('[data-testid="email"]').type(dados.Email);
    cy.get('[data-testid="password"]').type(dados.Senha);
    dados.Administrador === 'Sim' ? cy.get('[data-testid="checkbox"]').check() : cy.get('[data-testid="checkbox"]').uncheck();
    cy.get('[data-testid="cadastrar"]').click();
});

Then('o novo usuário deve ser criado com sucesso', () => {
    cy.get('[data-testid="sucesso"]').should('be.visible');
});