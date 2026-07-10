import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CadastrarProdutosPage from '../../pageObjects/cadastrarProdutosPage';
import ListarProdutosPage from '../../pageObjects/listarProdutosPage';

When('o usuário {string} um produto', ( action ) => {
    const cadastrarProdutosPage = new CadastrarProdutosPage();
    cadastrarProdutosPage.fillProdutoForm();
    cadastrarProdutosPage.clickCadastrarButton();
});

Then('o produto deve ser criado com sucesso', () => {
    const listarProdutosPage = new ListarProdutosPage();
    listarProdutosPage.verifyProdutoCreated(Cypress.env('productName'), Cypress.env('productPrice'), Cypress.env('productDescription'), Cypress.env('productQuantity'), Cypress.env('productImage'));
});