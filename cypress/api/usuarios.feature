# language: pt
Funcionalidade: Usuários
  Cenário: Criar usuário com sucesso
    Quando o usuário faz uma requisição de criação de usuário
    Então a api responde com status 201 e mensagem "Cadastro realizado com sucesso"

  Cenário: Não permite criar usuário com email já existente
    Dado que existe um usuário comum
    Quando o usuário faz uma requisição de criação de usuário com o mesmo email
    Então a api responde com status 400 e mensagem "Este email já está sendo usado"

  Cenário: Não permite deletar usuário com carrinho
    Dado que existe um usuário administrador
    E que existe um carrinho de compras associado a esse usuário
    Quando o usuário faz uma requisição de deletar o usuário
    Então a api responde com status 400 e mensagem "Não é permitido excluir usuário com carrinho cadastrado"