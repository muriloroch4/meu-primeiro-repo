/*
Declare um array com alguns números inteiros quaisquer.

Depois, percorra este array, filtrando apenas os números **pares** e os armazenando em um novo array.

Ao final, imprima a variável do array contendo apenas os números pares no console.
*/

const numeros = [2, 4, 8, 50, 68, 74, 21, 89];

for (let numero of numeros) {
    if (numero % 2 === 0) {
        const numerosPares =+ numero;
        console.log(numerosPares);
    }
}