import { When } from '@badeball/cypress-cucumber-preprocessor';
import NavPage from '../../pageObjects/navPage';

When('o usuário acessa a página de {string}', ( page ) => {
    const navPage = new NavPage();
    if ( page === 'cadastro de produtos' ) {
        navPage.accessCadastroProdutosPage();
    } else if ( page === 'listagem de produtos' ) {
        navPage.accessListaProdutosPage();
    }
});