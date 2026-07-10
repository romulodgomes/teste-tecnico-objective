import { faker } from '@faker-js/faker';

export default class CadastrarProdutosPage {
    constructor() {
        this.nomeInput = '[data-testid="nome"]';
        this.precoInput = '[data-testid="preco"]';
        this.descricaoInput = '[data-testid="descricao"]';
        this.quantidadeInput = '[data-testid="quantity"]'
        this.imagemInput = '[data-testid="imagem"]';
        this.cadastrarButton = '[data-testid="cadastarProdutos"]';
        this.defaultImage = 'cypress/assets/test-img.png';
    }

    fillProdutoForm(nome, preco, descricao, quantidade, imagem) {
        const productName = nome || faker.commerce.productName();
        const productPrice = preco || faker.number.int({ min: 10, max: 300 });
        const productDescription = descricao || faker.commerce.productDescription();
        const productQuantity = quantidade || faker.number.int({ min: 1, max: 100 });
        const productImage = imagem || this.defaultImage;

        cy.get(this.nomeInput).type(productName);
        cy.get(this.precoInput).type(productPrice);
        cy.get(this.descricaoInput).type(productDescription);
        cy.get(this.quantidadeInput).type(productQuantity);
        cy.get(this.imagemInput).selectFile(productImage);
        Cypress.env('productName', productName);
        Cypress.env('productPrice', productPrice);
        Cypress.env('productDescription', productDescription);
        Cypress.env('productQuantity', productQuantity);
        Cypress.env('productImage', productImage);
    }

    clickCadastrarButton() {
        cy.get(this.cadastrarButton).click();
    }
}