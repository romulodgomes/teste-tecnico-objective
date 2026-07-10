import { When } from '@badeball/cypress-cucumber-preprocessor';
import NavPage from '../../pageObjects/navPage';

When('o usuário acessa a página de cadastro de produtos', () => {
    const navPage = new NavPage();
    navPage.accessCadastroProdutosPage();
});