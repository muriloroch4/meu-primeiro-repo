/*
Declare um array com alguns números quaisquer.
Depois, faça um programa que encontre o maior número desse array e o imprima no console.
*/

const numeros = [1, 8, 50, 37, 97, 85];
let maiorNumero = 0; //inicialização da variavel

for (let numero of numeros) {
    if (numero > maiorNumero) {
        maiorNumero = numero; // SE o numero for maior que a variavel maiorNumero, então o maiorNumero é igual a esse numero.
    } 
}

console.log(`O maior número é ${maiorNumero}`);