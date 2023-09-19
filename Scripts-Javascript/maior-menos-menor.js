/*
Declare um array com alguns números inteiros quaisquer.

Depois, faça um programa que calcule a maior diferença entre dois números desse array.
*/

const numeros = [8, 11, 4, 1];
let maiorNumero = 0;
let menorNumero = 1;

for (let numero of numeros) {
    if (numero > maiorNumero) {
        maiorNumero = numero;
    } else if (numero <= menorNumero) {
        menorNumero = numero;
    }
}
const diferença = maiorNumero - menorNumero;
console.log(diferença);
