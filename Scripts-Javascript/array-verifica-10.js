/*
Faça um programa que verifica se existe o número 10 nesse array. Caso exista, informa a posição (indice) em que o
número 10 se encontra. Caso não exista, deverá ser impresso -1;
*/

const numeros = [50, 87, 38, 50, 10];
const indice = numeros.indexOf(10);
let encontrado = false;

for (numero of numeros) {
    if (numero === 10) {
        console.log(indice);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log(indice);
}