# language: pt
Funcionalidade: Produtos

  Contexto:
    Dado que existe um usuário administrador

  Cenário: Criar produto com sucesso
    Dado que o usuário faz login no sistema
    Quando o usuário acessa a página de cadastro de produtos
    E o usuário "cria" um produto
    Então o produto deve ser criado com sucesso