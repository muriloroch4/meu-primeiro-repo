/* # Exercício 09 Soma dos ângulos internos de um polígono #

Faça um programa que, a partir do número de lados de um polígono, 
imprima na tela a soma dos seus ângulos internos, conforme a fórmula abaixo:

<!-- ![](https://4.bp.blogspot.com/-Vv69QfUHsrA/W5v7V35XwZI/AAAAAAABp5A/Zfy8oD9IOXgbVaw82BAw6PHfFh_CS3RmQCK4BGAYYCw/s1600/sn%2Bok.png) -->

Onde:

**S:** soma dos ângulos internos do polígono \
**n:** número de lados do polígono

Em seguida, calcule quanto vale cada um desses ângulos, caso eles sejam todos iguais, utilizando a fórmula abaixo:

$$ a = \frac{S}{n} $$

Sendo:

**a:** o valor de cada ângulo em graus

#### Exemplo:
Considerando a figura abaixo:

![](https://static.escolakids.uol.com.br/conteudo_legenda/460f67f820a78f732d55395e1932a031.jpg)

$$ S = 180 \* (6 - 2) $$
$$ S = 720 $$
$$ a = \frac{720}{6} $$
$$ a = 120 $$

Imprima na tela o valor da soma dos ângulos internos $S$ e o valor de cada ângulo do polígono $a$ */

const numeroLadosPoligono = 5;

const soma = 180 * (numeroLadosPoligono - 2);
console.log(`A soma dos angulos internos desse polígono é de: ${soma}`);

const valorCadaAngulo = soma / numeroLadosPoligono;
console.log(`O valor de cada angulo interno desse polígono é de: ${valorCadaAngulo}`);