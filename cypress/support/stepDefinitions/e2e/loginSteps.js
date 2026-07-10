import { Given } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pageObjects/loginPage';

Given('que o usuário faz login no sistema', () => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.fillLoginForm(Cypress.env('userEmail'), Cypress.env('userPassword'));
    loginPage.clickLoginButton();
    loginPage.verifyIsLoggedIn();
});