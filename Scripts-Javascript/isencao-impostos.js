/*
## Isenção de impostos

Segundo a receita federal, algumas pessoas são isentas do pagamento de imposto de renda (IR). 
Simplificamos aqui quem são essas pessoas:

- Pessoas portadores de alguma doença grave
- Pessoas que já estão aposentadas
- Para pessoa não esteja isenta, avalia-se seus rendimentos tributáveis ao longo do ano. Na condição em que o total de 
rendimentos seja **superior** a R$ 28.559,70, a pessoa deve pagar imposto de renda, caso contrário, não.

Faça um programa que determine se a pessoa deve pagar IR ou não.

- Caso a pessoa não deva pagar IR por pertencer ao grupo de pessoas isentas, imprima na tela **ISENTA**
- Caso a passoa não deva pagar IR por nao ter o rendimento mínimo necessário, imprima na tela **VAZA LEAO! JA TA DIFICIL 
SEM VOCE**
- Caso a pessoa deva pegar IR imprima na tela **PEGA LEAO**
*/

const portadoraDeDoenca = false;
const aposentado = false;
const redimentoAoLongoDoAno = 20000;

if (portadoraDeDoenca === false && aposentado === true) {
    console.log("**ISENTA DE PAGAR IMPOSTO DE RENDA**");
} else if (portadoraDeDoenca === true && aposentado === false) {
    console.log("**ISENTA DE PAGAR IMPOSTO DE RENDA**");
} else if (portadoraDeDoenca === false && aposentado === false) {
    if (redimentoAoLongoDoAno <= 28559.70) {
        console.log("**VAZA LEAO! JÁ TA DIFICIL SEM VOCE**");
    } else if (redimentoAoLongoDoAno >= 28559.70) {
        console.log("**PEGA LEAO**");
    }
} else {
    console.log("Dados inválidos, tente novamente");
}