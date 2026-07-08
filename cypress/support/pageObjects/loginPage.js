export default class LoginPage {
    constructor() {
        this.emailInput = '[data-testid="email"]';
        this.passwordInput = '[data-testid="password"]';
        this.loginButton = '[data-testid="login"]';
        this.cadastrarButton = '[data-testid="cadastrar"]';
    }

    visit() {
        cy.visit('/login');
    }

    fillEmail(email) {
        cy.get(this.emailInput).type(email);
    }

    fillPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    clickCadastrarButton() {
        cy.get(this.cadastrarButton).click();
    }
}