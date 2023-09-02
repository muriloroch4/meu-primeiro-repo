/*
# Exercício 05

## Peneira de Vôlei

Numa "peneira" (processo seletivo para novos jogadores) de vôlei, em alguns clubes, 
o primeiro filtro é ver se um determinado candidato tem a altura mínima necessária de 180cm. 
Faça um programa que, dada a altura de um determinado candidato, diga se ele está aprovado ou reprovado nessa 
primeira fase do processo.

Imprima na tela **APROVADO** caso o jogador tenha 180cm de altura ou mais
Imprima na tela **REPROVADO** caso o jogador tenha menos de 180cm
Após passar na primeira fase de uma peneira de vôlei, os candidatos aprovados são separados em grupos diferentes, 
de acordo com suas alturas, para serem testados para posições específicas. 
Faça um programa que, dada a altura de um determinado candidato, diga para qual posição ele deverá fazer o teste.

- Caso o jogador tenha menos de 180cm, o programa deve imprimir **REPROVADO**
- Caso tenha entre 180cm e 185cm, o programa deve imprimir **LÍBERO**
- Caso tenha entre 186cm e 195cm, o programa deve imprimir **PONTEIRO**
- Caso tenha entre 196cm e 205cm, o programa deve imprimir **OPOSTO**
- Caso tenha mais de 205cm, o programa deve imprimir **CENTRAL**
*/

const alturEmCm = 208;

if (alturEmCm >= 180) {
    if (alturEmCm >= 180 && alturEmCm <= 185) {
        console.log("**LIBERO**");
    } else if (alturEmCm >= 186 && alturEmCm <= 195){
        console.log("**PONTEIRO**");
    } else if (alturEmCm >= 196 && alturEmCm <= 205){
        console.log("**OPOSTO**");
    } else if (alturEmCm >= 206){
        console.log("**CENTRAL**");
    }
} else if (alturEmCm < 180) {
    console.log("Reprovado");
}