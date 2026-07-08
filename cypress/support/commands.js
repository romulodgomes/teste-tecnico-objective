// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker';

Cypress.Commands.add('registerRandomUser', (isAdmin = false) => {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const nome = faker.person.fullName();
    cy.request('POST', `${Cypress.env('apiUrl')}/usuarios`, {
        nome,
        email,
        password,
        administrador: isAdmin,
    }).as('response');
    Cypress.env('userEmail', email);
    Cypress.env('userPassword', password);
    Cypress.env('userName', nome);
    Cypress.env('userIsAdmin', isAdmin);
});