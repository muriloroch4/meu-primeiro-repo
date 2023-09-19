/*
Declare um array contendo alguns números quaisquer.
Depois crie um novo array que contenha apenas os números do array original que estejam entre 10 e 20, incluindo esses 
números, ou que sejam maiores que 100. Ao final, imprima a variável que guarda o novo array.
*/

const numeros = [5, 7, 13, 17, 26, 34, 118, 245];

for (let numero of numeros) {
    if(numero > 10 && numero < 20 || numero > 100) { //atendeu a primeira parte e segunda do booleano.
        console.log(numero);
    }
}