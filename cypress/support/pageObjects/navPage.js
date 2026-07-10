export default class NavPage {
    constructor() {
        this.cadastroProdutoButton = '[data-testid="cadastrar-produtos"]';
        this.listaProdutosButton = '[data-testid="listar-produtos"]';
        this.logoutButton = '[data-testid="logout"]';
    }

    accessCadastroProdutosPage() {
        cy.get(this.cadastroProdutoButton).click();
    }

    accessListaProdutosPage() {
        cy.get(this.listaProdutosButton).click();
    }
}