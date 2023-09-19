/*
Faça um programa que conta quantas letras "E" ou "e" existem nesse array
*/

const palavra = "Estados Unidos da America";
let contagem = 0;

for (let letra of palavra) {
    if (letra === "E" || letra === "e") {
        contagem += 1;
    }
}

console.log(`A palavra ${palavra}, tem ${contagem} letras E ou e.`);