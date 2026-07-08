export default class CadastroPage {
    constructor() {
        this.nomeInput = '[data-testid="nome"]';
        this.emailInput = '[data-testid="email"]';
        this.passwordInput = '[data-testid="password"]';
        this.checkboxInput = '[data-testid="checkbox"]';
        this.cadastrarButton = '[data-testid="cadastrar"]';
        this.successMessage = '[data-testid="sucesso"]';
    }

    visit() {
        cy.visit('/cadastro');
    }
    
    verifyPage() {
        cy.url().should('include', '/cadastro');
    }

    fillUserForm(nome, email, password, isAdmin) {
        cy.get(this.nomeInput).type(nome);
        cy.get(this.emailInput).type(email);
        cy.get(this.passwordInput).type(password);
        isAdmin ? cy.get(this.checkboxInput).check() : cy.get(this.checkboxInput).uncheck();
        cy.get(this.cadastrarButton).click();
    }

    verifySuccessMessage() {
        cy.get(this.successMessage).should('be.visible');
    }
}