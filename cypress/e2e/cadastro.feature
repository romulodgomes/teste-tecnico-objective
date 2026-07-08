# language: pt
Funcionalidade: Cadastro de usuário
  Cenário: Cadastro de usuário administrador
    Dado que o usuário está na página de login do sistema
    Quando o usuário acessa a página de cadastro
    E o usuário cria um novo usuário com os seguintes dados:
      | Nome   | Email              | Senha  | Administrador |
      | Rômulo | romulo@example.com | 123456 | Sim           |
    Então o novo usuário deve ser criado com sucesso