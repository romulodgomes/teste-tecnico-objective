export default class LoginPage {
    constructor() {
        this.emailInput = '[data-testid="email"]';
        this.passwordInput = '[data-testid="senha"]';
        this.loginButton = '[data-testid="entrar"]';
        this.cadastrarButton = '[data-testid="cadastrar"]';
        this.logoutButton = '[data-testid="logout"]';
    }

    visit() {
        cy.visit('/login');
    }

    fillLoginForm(email, password) {
        cy.get(this.emailInput).type(email);
        cy.get(this.passwordInput).type(password);
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }

    clickCadastrarButton() {
        cy.get(this.cadastrarButton).click();
    }

    verifyIsLoggedIn() {
        cy.get(this.logoutButton).should('be.visible');
    }
}