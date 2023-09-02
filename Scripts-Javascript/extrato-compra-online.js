/*
# Exercício 17

## Extrato de Compra Online

Dado o valor de um produto, a quantidade de parcelas escolhidas e quanto já foi pago, faça um programa que ajude a Fernanda a 
saber o valor restante para pagamento e quantas parcelas faltam pagar.
*/

const valorProduto = 1000;
const parcelasEscolhidas = 4;
const parcelasPagas = 4;
const parcelasRestantes = parcelasEscolhidas - parcelasPagas;
const valorParcela = (valorProduto / parcelasEscolhidas).toFixed(2);
const valorRestante = (valorProduto - valorParcela * parcelasPagas).toFixed(2);

console.log(`O valor que falta efetuar o pagamento é de: ${valorRestante} reais em ${parcelasRestantes} vezes de ${valorParcela} reais`);