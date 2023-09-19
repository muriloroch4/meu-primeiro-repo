/*
Precisamos verificar em uma caixa de disjuntores quais estão ligados.

A caixa de disjuntores é representada por um array onde, cada item do array é um disjuntor. Nesse array o índice do item é a 
identificação do disjuntor (começando em 0) e o valor do item, um `boolean`, é a indicação se o disjuntor está ligado ou não.
Imprima no console a posição **apenas dos disjuntores que estão ligados**, se possível, utilizar o conceito de **_truthiness_**.

#### Exemplo:

Tendo o array de 8 disjuntores a seguir:

const disjuntores = [false, false, true, false, false, true, false, false];

Escreva o código que imprimirá no console:
2
5
*/

const disjuntores = [false, false, true, false, false, true, false, false];
//quando precisa usar o indice é recomendavel usar o for tradicional, nao o for of

for (let numDisjuntor = 0; numDisjuntor < disjuntores.length; numDisjuntor++) {
    if (disjuntores[numDisjuntor] === true) {
        console.log(numDisjuntor);
    }
}