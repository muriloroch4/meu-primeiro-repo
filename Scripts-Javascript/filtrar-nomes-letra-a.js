/*
Declare um array com alguns nomes quaisquer.

Depois, crie um novo array a partir do primeiro que contenha apenas os nomes que começam com a letra "A" ou "a"
(maiúscula ou minúscula).
Ao final, imprima a variável que guarda o array.
*/

const nomes = ["Maria", "João", "Kemilly", "marcos"];

for (let nome of nomes) {
    if (nome[0] === "M" || nome[0] === "m"){
        console.log(nome);
    }
}