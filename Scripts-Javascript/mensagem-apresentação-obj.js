/*
# Exercício 03

## Mensagem de apresentação

1. Dado o objeto `usuario` abaixo, monte a mensagem `Olá... Eu sou João e tenho 25 anos de idade. 
Sou programador e minha cor preferida é verde!`, passando dinamicamente as informações contidas no objeto.

```javascript
const usuario = {
    nome: "João",
    idade: 25,
    profissao: "programador",
    cor_preferida: "verde",
}
```

_Dica: a desestruturação pode facilitar a escrita do código, além de torná-lo mais legível._

*/

const usuario = { //criação do objeto com suas propriedades seguidas dos seus valores
    nome: "Murilo",
    idade: 22,
    profissao: "Futuro dev",
    cor_preferida: "azul"
};

const {nome, idade, profissao, cor_preferida} = usuario; //desestruturação de um objeto

console.log(`Olá ... eu sou ${nome}, tenho ${idade} anos de idade, sou ${profissao}, e minha cor 
preferida é ${cor_preferida}.`);