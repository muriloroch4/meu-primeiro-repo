/*
Uma empresa de delivery de comida está com dificuldades para organizar a ordem dos pedidos e precisa criar uma rotina 
que organize seus pedidos em uma fila por odem de prioridade.

Sabendo que a fila atualmente está da seguinte ordem:

const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

**a)** Adicione um novo pedido `"pedido 15"` ao **final** da fila.

**b)** Retire o **primeiro** pedido `"pedido 12"` da fila.

**c)** Imprima no console a `filaDePedidos`
*/

const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

//adicionar algo no final de um array = .push
filaDePedidos.push("pedido 15");

//retirar o primeiro item de um array = .shift
filaDePedidos.shift();

console.log(filaDePedidos);