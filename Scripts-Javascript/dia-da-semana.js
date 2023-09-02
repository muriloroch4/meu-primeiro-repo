/*
# Exercício 12

## Dia da Semana

**a)** Sabendo que a semana possui 7 dias, sendo 1 para **segunda** e 7 para **domingo**, faça um programa que verifica o 
número armazenado em uma variável e imprima o dia (por extenso) da semana correspondente.
**b)** Crie uma verificação padrão para caso o número informado não esteja no intervalo de 1 a 7.
*/

const diaDaSemana = 8;

if (diaDaSemana === 1){
    console.log("SEGUNDA-FEIRA");
} else if (diaDaSemana === 2) {
    console.log("TERÇA-FEIRA");
} else if (diaDaSemana === 3) {
    console.log("QUARTA-FEIRA");
} else if (diaDaSemana === 4) {
    console.log("QUINTA-FEIRA");
} else if (diaDaSemana === 5) {
    console.log("SEXTA-FEIRA");
} else if (diaDaSemana === 6) {
    console.log("SÁBADO");
} else if (diaDaSemana === 7) {
    console.log("DOMINGO");
} else {
    console.log("Dia da semana inválido, informe um número entre 1 e 7.")
}