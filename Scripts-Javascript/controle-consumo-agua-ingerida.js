/*
# Exercício 14

## Controle de Consumo de Água Ingerida

A Cubos Academy, preocupada com a saúde de seus alunos, precisa de um programa que identifique se eles estão bebendo a 
quantidade suficiente de água diariamente.

A tabela abaixo informa o risco de complicações na saúde com base na injestão diária de água.

| Quantidade (litros) | Risco    | Mensagem                                                                |
| ------------------- | -------- | ----------------------------------------------------------------------- |
| Menos de 1.5        | ALTO     | Risco Alto - Você está ingerindo pouquissima água, beba mais água!      |
| De 1.5 a 3          | MODERADO | Risco Moderado - Você está ingerindo pouca água, beba mais!             |
| Mais de 3           | BAIXO    | Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns! |

**a)** Faça um programa que verifica a quantidade de água ingerida e imprima a mensagem com o diagnóstico conforme na tabela 
acima.
*/

const quantidadeLitrosAguaIngerida = 5;

if (quantidadeLitrosAguaIngerida < 1.5) {
    console.log("RISCO ALTO - Você está ingerindo pouquissima água, beba mais água!");
} else if (quantidadeLitrosAguaIngerida >= 1.5 && quantidadeLitrosAguaIngerida < 3) {
    console.log("RISCO MODERADO - Você está ingerindo pouca água, beba mais!");
} else if (quantidadeLitrosAguaIngerida >= 3) {
    console.log("RISCO BAIXO - Você está ingerindo uma boa quantidade de água, parabéns!");
}