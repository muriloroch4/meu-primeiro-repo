/*
# Exercício 08

## Meus pets

1. Abaixo, temos uma lista de pessoas. Cada pessoa possui uma lista com **um**, **vários** ou **nenhum** pet. Percorra cada pessoa da lista e imprima uma mensagem de acordo com as condições a seguir:

a. Se a pessoa não tiver pets, a mensagem deve ser: `Sou João e não tenho pets`.

b. Se a pessoa tiver mais de um pet, a mensagem deve ser: `Sou Ana e tenho 2 pets`.

c. Se a pessoa tiver um pet, a mensagem deve ser: `Sou Beatriz e tenho 1 pet`.
*/

const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let usuario of usuarios) {
    if (usuario.pets.length > 0) { // se o tamanho do array pets for maior que zero entra no if
        if(usuario.pets.length > 1) { // se o tamanho do array pets for maior que um entra no outro if
            console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} pets`); // mensagem para todos os usuarios
        } if (usuario.pets.length === 1) {
            console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} pet`); // mensagem para todos os usuarios que só tem um pet
        }
    } else {
        console.log(`Sou ${usuario.nome} e não tenho pets`); // else
    }
}
