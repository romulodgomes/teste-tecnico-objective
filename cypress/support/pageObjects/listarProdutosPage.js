export default class ListarProdutosPage {
    constructor() {
        this.produtosTable = 'table tr';
    }

    verifyProdutoCreated( nome, preco, descricao, quantidade ) {
        const linhaProduto = cy.get(this.produtosTable).contains(nome).parent('tr');
        linhaProduto.within(() => {
            cy.get('td').eq(0).should('have.text', nome);
            cy.get('td').eq(1).should('have.text', preco);
            cy.get('td').eq(2).should('have.text', descricao);
            cy.get('td').eq(3).should('have.text', quantidade);
            cy.get('td').eq(4).should('have.text', 'C:\\fakepath\\test-img.png');
        });
    }

    verifyProdutoDeleted( nome ) {
        cy.get(this.produtosTable).should('not.contain', nome);
    }

    clickEditarButton( nome ) {
        const linhaProduto = cy.get(this.produtosTable).contains(nome).parent('tr');
        linhaProduto.within(() => {
            cy.get('button').contains('Editar').click();
        });
    }

    clickExcluirButton( nome ) {
        const linhaProduto = cy.get(this.produtosTable).contains(nome).parent('tr');
        linhaProduto.within(() => {
            cy.get('button').contains('Excluir').click();
        });
    }
}