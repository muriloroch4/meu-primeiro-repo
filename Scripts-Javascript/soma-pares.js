/*
Declare um array com alguns números inteiros quaisquer.

Depois, percorra este array e calcule a **soma dos números pares** presentes nesse array.
*/

const numeros = [2, 4, 7, 8];
let soma = 0;

for (let numero of numeros) {
    if (numero % 2 === 0) {
        soma = soma + numero;
    }

}

console.log(soma);