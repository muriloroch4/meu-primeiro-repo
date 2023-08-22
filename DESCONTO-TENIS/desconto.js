/* # Exercício 03
## Desconto do tênis

Você deseja comprar um tênis novo, porém, está com o dinheiro do mês contado e te sobrará somente R$ 80,00 para comprá-lo.
O tênis custa R$ 130 porém um amigo seu trabalha na loja e consegue te dar um cupom de desconto, a única coisa que ele 
precisa saber é quanto por cento de desconto você necessita.
Crie um programa para calcular a porcentagem necessária de desconto para você conseguir comprar o tênis, utilizando 
a regra de três.
*/

const dinheiroQueSobrou = 80;
const valorDoTenis = 130;

valorDesconto = valorDoTenis - dinheiroQueSobrou;
console.log(`O valor do desconto é de ${valorDesconto.toFixed(2)} reais`);

percentualDesconto = (valorDesconto * 100) / valorDoTenis;
console.log(`A porcentagem de desconto necessária é de ${percentualDesconto.toFixed(2)}%`);