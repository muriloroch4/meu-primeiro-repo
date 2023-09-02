/*
# Exercício 01

## Pedra, papel ou tesoura

Duas pessoas estão jogando pedra, papel ou tesoura. 
Você deve imprimir o nome da jogada vencedora, ou "empate", em caso de empate.
*/

const jogada1 = "tesoura";
const jogada2 = "tesoura";

if (jogada1 === "pedra" && jogada2 === "tesoura") {
    console.log("O vencedor é: pedra");
} else if (jogada1 === "tesoura" && jogada2 === "pedra") {
    console.log("O vencedor é: pedra");
} else if (jogada1 === "pedra" && jogada2 === "papel") {
    console.log("O vencedor é: papel");
} else if (jogada1 === "papel" && jogada2 === "pedra") {
    console.log("O vencedor é: papel");
} else if (jogada1 === "papel" && jogada2 === "tesoura") {
    console.log("O vencedor é: tesoura");
} else if (jogada1 === "tesoura" && jogada2 === "papel") {
    console.log("O vencedor é: tesoura");
} else if (jogada1 === "pedra" && jogada2 === "pedra") {
    console.log("Empate");
} else if (jogada1 === "papel" && jogada2 === "papel") {
    console.log("Empate");
} else if (jogada1 === "tesoura" && jogada2 === "tesoura") {
    console.log("Empate");
} else {
    console.log("Jogada inválida, tente novamente");
}