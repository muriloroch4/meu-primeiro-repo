/*
Considerando que temos dois arrays do mesmo tamanho (mesma quantidade de itens) e que todos os itens de ambos os arrays
são números, deveremos, para cada respectiva posição, imprimir o menor valor encontrado entre os dois arrays.

Inicialmente, ambos os arrays terão 5 itens.
*/

const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];
let i = 0;

while (i < arrayA.length) {
    if (arrayA[i] < arrayB[i]) {
        console.log(arrayA[i]);
    } else {
        console.log(arrayB[i]);
    }
    i++;
}
