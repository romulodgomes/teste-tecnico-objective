import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pageObjects/loginPage';
import CadastroPage from '../../pageObjects/cadastroPage';

Given('que o usuário está na página de login do sistema', () => {
    const loginPage = new LoginPage();
    loginPage.visit();
});

When('o usuário acessa a página de cadastro', () => {
    const loginPage = new LoginPage();
    loginPage.clickCadastrarButton();
});

When('o usuário cria um novo usuário com os seguintes dados:', (table) => {
    const cadastroPage = new CadastroPage();
    const dados = table.hashes()[0];
    cadastroPage.fillUserForm(dados.Nome, dados.Email, dados.Senha, dados.Administrador === 'Sim');
});

Then('o novo usuário deve ser criado com sucesso', () => {
    const cadastroPage = new CadastroPage();
    cadastroPage.verifySuccessMessage();
});