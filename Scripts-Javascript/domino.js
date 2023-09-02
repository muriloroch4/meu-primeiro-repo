/*
# Exercício 03

## Dominó

Num jogo de dominó toda pedra tem dois números. Quando uma pedra tem o mesmo número dos dois lados, 
dizemos que essa pedra é uma bucha.
Faça um programa que imprima "SIM" caso a pedra seja uma bucha e "NÃO" caso contrário.
*/

const lado1 = 5;
const lado2 = 6;
const somaDosLados = lado1 + lado2;

if (lado1 === lado2) {
    if (somaDosLados === 0) {
        console.log("É a bucha BRANCA (0})");
    } else if (somaDosLados === 2) {
        console.log("É a bucha de ÁS (1)");
    } else if (somaDosLados === 4) {
        console.log("É a bucha de DUQUE (2)");
    } else if (somaDosLados === 6) {
        console.log("É a bucha de TERNO (3)");
    } else if (somaDosLados === 8) {
        console.log("É a bucha de QUADRA (4)");
    } else if (somaDosLados === 10) {
        console.log("É a bucha de QUINA (5)");
    } else if (somaDosLados === 12) {
        console.log("É a bucha de SENA (6)");
    }
} else if (lado1 !== lado2) {
    console.log("Não é uma bucha");
}