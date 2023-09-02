/*
# Exercício 11

## Valor da parcela do Sucesso Compartilhado

Na Cubos Academy alguns estudantes podem fazer o Curso de Desenvolvimento de Software e só começar a pagar após finalizado o 
curso quando (e se) tiverem obtido renda acima de R$ 2.000,00. Nesse caso o valor da parcela a ser paga é de 18% do valor da 
renda mensal da pessoal.

Após 60 meses, independente de ter quitado ou não o valor total do curso (de R$ 18.000,00) a pessoa não deve nada, ou seja, 
o valor da parcela é zero.

**a)** Faça um programa que calcula o valor da parcela a ser paga pelo aluno. Imprima uma mensagem bonita na tela, 
com o valor em reais.
**b)** Altere o seu programa anterior para que, quando o valor da parcela a ser pago for 0, a mensagem explique porque o aluno
não precisa pagar nada naquele mês.
*/

const rendaMensal = 3000.00;
const mesesDecorridos = 12;
const valorParcela = rendaMensal * (18 / 100);
const valorDevido = 18000.00;
const tempoParaPagar = valorDevido / valorParcela;

if (rendaMensal < 2000) {
    console.log("Não é permitido o pagamento, pois está abaixo da renda minima.")
} else if (mesesDecorridos > 60) {
    console.log("Não é permitido o pagamento, pois já expirou o tempo para pagamento.")
} else if (rendaMensal > 2000) {
    console.log(`Com a renda mensal de ${rendaMensal} reais, o valor a ser pago pelo aluno é de ${valorParcela} reais.`);
}
