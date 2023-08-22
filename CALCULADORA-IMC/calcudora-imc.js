/*
Elabore um algoritmo que calcule o imc de uma pessoa e o classifique segundo a tabela:
 Abaixo de 18.5 = Abaixo do peso
 Entre 18.6 e 24.9 = Peso ideal
 Entre 25 e 29.9 = Um pouco acima do peso
 Entre 30 e 34.9 = Obesidade Grau I
 Entre 35 e 39.9 = Obesidade Grau II (Severa)
 Acima de 40 = Obesidade III (Morbida)
*/


const pesoEmKg = 90;
const alturaEmMetros = 1.80;

imc = pesoEmKg / (alturaEmMetros * alturaEmMetros);

if (imc <= 18.5) {
    console.log(`Seu IMC de ${imc} o classifica como ABAIXO DO PESO`);
} else if (imc > 18.5 && imc < 25) {
    console.log(`Seu IMC de ${imc} o classifica como PESO IDEAL`);
} else if (imc >= 25 && imc < 30) {
    console.log(`Seu IMC de ${imc} o classifica como UM POUCO ACIMA DO PESO`);
} else if (imc >= 30 && imc < 35) {
    console.log(`Seu IMC de ${imc} o classifica como OBESIDADE GRAU I `);
} else if (imc >= 35 && imc < 40) {
    console.log(`Seu IMC de ${imc} o classifica como OBESIDADE GRAU II (SEVERA)`);
 } else {
    console.log(`Seu IMC de ${imc} o classifica como OBESIDADE III (MORBIDA)`);
 }