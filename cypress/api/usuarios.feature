# language: pt
Funcionalidade: Usuários
  Cenário: Criar usuário com sucesso
    Quando o usuário faz uma requisição de criação de usuário
    Então o usuário deve ser criado com sucesso
    
  Cenário: Criar usuário com email já existente
    Dado que existe um usuário
    Quando o usuário faz uma requisição de criação de usuário com o mesmo email
    Então a api responde com status 400 e mensagem de erro "Este email já está sendo usado"