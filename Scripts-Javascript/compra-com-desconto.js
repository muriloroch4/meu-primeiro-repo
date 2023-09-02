/*
# Exercício 13

## Compra com Desconto

A Loja do Juninho está com uma super promoção. E na compra de qualquer produto você ganha desconto conforme a forma de 
pagamento seguindo a tabela seguinte.

| Forma de Pagamento | Desconto |
| ------------------ | -------- |
| 1-credito            | 5%       |
| 2-cheque             | 3%       |
| 3-debito ou dinheiro | 10%      |

**a)** Faça um programa que verifica o tipo de desconto, calcule o valor do produto com o desconto e imprima o resultado.*/

const valorProduto = 100.00;
const tipoDePagamento = 3;
// 1 = credito
// 2 = cheque
// 3 = debito ou dinheiro

if (tipoDePagamento === 1) {
    const valorFinal = (valorProduto - (valorProduto * 0.05)).toFixed(2);
    console.log(`O valor do produto com o desconto vai de ${valorProduto} reais para ${valorFinal} reais`);
} else if (tipoDePagamento === 2) {
    const valorFinal = (valorProduto - (valorProduto * 0.03)).toFixed(2);
    console.log(`O valor do produto com o desconto vai de ${valorProduto} reais para ${valorFinal} reais`);
} else if (tipoDePagamento === 3) {
    const valorFinal = (valorProduto - (valorProduto * 0.1)).toFixed(2);
    console.log(`O valor do produto com o desconto vai de ${valorProduto} reais para ${valorFinal} reais`);
}