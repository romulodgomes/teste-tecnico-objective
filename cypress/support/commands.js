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

Cypress.Commands.add('registerRandomUser', (isAdmin = 'false', email) => {
    const emailUser = email || faker.internet.email();
    const password = faker.internet.password();
    const nome = faker.person.fullName();
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/usuarios`,
        body: {
            nome,
            email: emailUser,
            password,
            administrador: isAdmin,
        },
        failOnStatusCode: false,
    }).as('response').then(response => {
        Cypress.env('userId', response.body._id);
    });
    Cypress.env('userEmail', emailUser);
    Cypress.env('userPassword', password);
    Cypress.env('userName', nome);
    Cypress.env('userIsAdmin', isAdmin);
});

Cypress.Commands.add('createRandomProduct', () => {
    cy.request({
        method: 'POST', url: `${Cypress.env('apiUrl')}/produtos`,
        headers: {
            authorization: Cypress.env('authToken'),
        },
        body: {
            nome: faker.commerce.productName(),
            preco: faker.number.int({ min: 10, max: 300 }),
            descricao: faker.commerce.productDescription(),
            quantidade: faker.number.int({ min: 1, max: 100 }),
        }
    }).then(response => {
        Cypress.env('productId', response.body._id);
    });
});

Cypress.Commands.add('apiLogin', () => {
    cy.request('POST', `${Cypress.env('apiUrl')}/login`, {
        email: Cypress.env('userEmail'),
        password: Cypress.env('userPassword'),
    }).then(response => {
        Cypress.env('authToken', response.body.authorization);
    });
});

Cypress.Commands.add('createCart', () => {
    cy.apiLogin().then(() => {
        cy.createRandomProduct().then(() => {
            console.log(Cypress.env('authToken'));
            cy.request({
                method: 'POST',
                headers: {
                    authorization: Cypress.env('authToken'),
                },
                url: `${Cypress.env('apiUrl')}/carrinhos`,
                body: {
                    produtos: [
                        {
                            idProduto: Cypress.env('productId'),
                            quantidade: 1
                        }
                    ]
                },
            }).as('response');
        });
    });
});