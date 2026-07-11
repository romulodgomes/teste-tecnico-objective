# language: pt
Funcionalidade: Produtos

  Testes E2E relacionados a manutenção de produtos por um administrador

  Contexto:
    Dado que existe um usuário administrador

  Cenário: Criar produto com sucesso
    Dado que o usuário faz login no sistema
    Quando o usuário acessa a página de "cadastro de produtos"
    E o usuário "cria" um produto
    Então o produto deve ser criado com sucesso

  Cenário: Editar produto com sucesso
    Dado que o usuário faz login no sistema
    E o usuário acessa a página de "cadastro de produtos"
    E o usuário "cria" um produto
    E o usuário acessa a página de "listagem de produtos"
    Quando o usuário "edita" um produto
    Então o produto deve ser editado com sucesso

  Cenário: Excluir produto com sucesso
    Dado que o usuário faz login no sistema
    E o usuário acessa a página de "cadastro de produtos"
    E o usuário "cria" um produto
    E o usuário acessa a página de "listagem de produtos"
    Quando o usuário "exclui" um produto
    Então o produto deve ser excluído com sucesso
    