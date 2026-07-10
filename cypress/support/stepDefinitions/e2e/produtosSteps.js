import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CadastrarProdutosPage from '../../pageObjects/cadastrarProdutosPage';
import ListarProdutosPage from '../../pageObjects/listarProdutosPage';

When('o usuário {string} um produto', ( action ) => {
    const cadastrarProdutosPage = new CadastrarProdutosPage();
    const listarProdutosPage = new ListarProdutosPage();
    if ( action === 'cria' ) {
        cadastrarProdutosPage.fillProdutoForm();
        cadastrarProdutosPage.clickCadastrarButton();
    } else if ( action === 'edita' ) {
        listarProdutosPage.clickEditarButton(Cypress.env('productName'));
        cadastrarProdutosPage.fillProdutoForm();
        cadastrarProdutosPage.clickSalvarButton();
    } else if ( action === 'exclui' ) {
        listarProdutosPage.clickExcluirButton(Cypress.env('productName'));
        listarProdutosPage.verifyProdutoDeleted(Cypress.env('productName'));
    }
});

Then('o produto deve ser criado com sucesso', () => {
    const listarProdutosPage = new ListarProdutosPage();
    listarProdutosPage.verifyProdutoCreated(Cypress.env('productName'), Cypress.env('productPrice'), Cypress.env('productDescription'), Cypress.env('productQuantity'), Cypress.env('productImage'));
});

Then('o produto deve ser editado com sucesso', () => {
    const listarProdutosPage = new ListarProdutosPage();
    listarProdutosPage.verifyProdutoCreated(Cypress.env('productName'), Cypress.env('productPrice'), Cypress.env('productDescription'), Cypress.env('productQuantity'), Cypress.env('productImage'));
});

Then('o produto deve ser excluído com sucesso', () => {
    const listarProdutosPage = new ListarProdutosPage();
    listarProdutosPage.verifyProdutoDeleted(Cypress.env('productName'));
});

