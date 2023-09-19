/*
Faça um programa que cria um array de numeros.
Depois calcule e imprima no console a soma de todos os numeros desse array
*/

const numeros = [0, 3, 4, 6];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]; // soma = a mesma variavel acrescida de cada 'i', ou seja, elemento do array numeros.
}
console.log(soma);