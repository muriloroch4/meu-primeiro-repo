/*
# Exercício 16

## Rematrícula Escolar

Para fazer a rematrícula na escola o aluno precisa ser maior de idade ou estar acompanhado de um responsável. Sendo assim:

**a)** Faça um programa que verifique se o aluno é maior de idade e realize a rematrícula, caso não seja, só será possível 
acompanhado de um responsável.
*/

const idade = 15;
const estaAcompanhado = 2; // 1 - para sim , 2 para não;

if (idade >= 18) {
    console.log("Rematricula realizada com sucesso!");
} else if (idade < 18 && estaAcompanhado === 1) {
    console.log("Rematricula realizada com sucesso!");
} else if (idade < 18 && estaAcompanhado === 2) {
    console.log("Não é possivel realizar a rematricula, favor volte com um responsavel.");
}