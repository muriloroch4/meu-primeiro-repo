/*
# Exercício 04

## Adicionando maior idade

1. Dado a lista de objetos abaixo, adicione uma nova propriedade chamada `maior_idade` para cada objeto da 
lista. A propriedade deverá receber um valor booleano de acordo com a propriedade `idade` de cada objeto. 
Caso a idade seja maior que 17, o valor deve ser `true`, caso contrário `false`.

```javascript
const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
```
*/

const usuarios = [{
    nome: "Joao",
    idade: 25,
    maior_idade: [],
},
{
    nome: "Ana",
    idade: 18,
    maior_idade: [],
},
{
    nome: "Marcos",
    idade: 15,
    maior_idade: [],
},
{
    nome: "Murilo",
    idade: 22,
    maior_idade: [],
},
{
    nome: "Claudio",
    idade: 25,
    maior_idade: [],
}
];

for (let dado of usuarios) {
    if(dado.idade > 17) {
        dado.maior_idade += true;
    } else {
        dado.maior_idade += false;
    }
}

console.log(usuarios);