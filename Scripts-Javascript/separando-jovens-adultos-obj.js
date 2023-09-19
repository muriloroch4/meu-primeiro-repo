/*
# Exercício 06

## Separando jovens de adultos

1. Dado a lista de usuários abaixo, separe os usuários que possuem menos de 18 anos dos demais. Para isso, 
você deverá criar duas novas constantes `jovens` e `adultos`. Todos os usuários menores de 18 anos devem ser 
inseridos na constante `jovens` e os demais na constante `adultos`.
*/

const usuarios = [
    {
        nome: "Murilo",
        idade: 22
    },
    {
        nome: "Daniel",
        idade: 17
    },
    {
        nome: "Amós",
        idade: 57
    },
    {
        nome: "Emily",
        idade: 22
    },
    {
        nome: "Elisa",
        idade: 2
    }
];

const jovens = [];
let indiceJovens = 0;

const adultos = [];
let indiceAdultos = 0;

for (let usuario of usuarios) {
    if (usuario.idade > 17) {
        adultos[indiceAdultos] = usuario;
        indiceAdultos++;
    } else {
        jovens[indiceJovens] = usuario;
        indiceJovens++;
    }
}

console.log(jovens);
console.log(adultos);
