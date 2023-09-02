/*
# Exercício 15

## Nome para exibição

Uma pessoa pode ter nome, sobrenome e/ou apelido.
Escreva um código que imprima no console apenas o apelido (se o apelido estiver preenchido), ou primeiro nome + sobrenome 
(se o sobrenome estiver preenchido), ou apenas o primeiro nome (que no nosso programa é obrigatório e deverá sempre estar preenchido).

**Importante:** Neste exercício, não deveremos utilizar nenhum operador de comparação, nem de igualdade e nem de identidade. 
Para este exercício deveremos utilizar apenas o conceito de **truthiness**.
*/

const nome = "Murilo";
const sobrenome = "Rocha";
const apelido = "Lirin";

if (apelido) { // o if transforma em true, então ele entra no if e não no else
    console.log("Lirin");
} else if (nome) {
    console.log(nome + " " + sobrenome);
}