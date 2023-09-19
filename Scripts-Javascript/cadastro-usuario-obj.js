/*
# Exercício 01

## Cadastro de usuário

1. Crie um objeto com as propriedades a seguir e guarde numa variável/constante chamada `endereco`. 
Cada propriedade deve receber um valor apropriado.

    - rua
    - numero
    - complemento
    - bairro
    - cep
    - cidade
    - estado
    - pais

2. Crie um objeto com as propriedades a seguir e guarde numa variável/constante chamada `usuario`. 
Cada propriedade deve receber um valor apropriado.

    - nome
    - email
    - telefone
    - data_nascimento
    - endereco

    Obs.: a propriedade `endereco` do objeto do `usuario` deverá receber, como valor, a variável `endereco` 
    criada anteriormente.
*/

const endereco = {
    rua: "Venceslau Braz",
    numero: 27,
    complemento: "Rua sem Saida",
    bairro: "Santa Rita",
    cep: 45995000,
    cidade: "Teixeira de Freitas",
    estado: "Bahia",
    pais: "Brasil"
};

const usuario = {
    nome: "Murilo",
    email: "Souzarochamurilo@gmail.com",
    telefone: 73999252586,
    data_nascimento: "09/04/2001",
    endereco
}

console.log(usuario);