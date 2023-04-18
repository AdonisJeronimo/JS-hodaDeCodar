/*
Metodo de arrays: SLICE

indexOf - Encontra o indice de um determinado elemento;
lastIndexOf - Encontra o ultimo indice de um determinado elemento, ou seja, ele vai buscar a posição de um elemento de tras para frente. Como no caso abaixo, temos dusa vezes o numero 1, podem o indexOf indica sua posição como "1" e o lastIndexOf indica sua posição como "4", LEMBRANDO QUE O PRIMIEOR INDICE É O ZERO(0)


*/

let numeros = [0,1,2,3,1,5];

console.log(numeros.indexOf(1));
console.log(numeros.lastIndexOf(1));

//exemplo 2

let nomes = ["Adonis", "Mateus","Felipe","Adonis"]
console.log(nomes.indexOf("Adonis")); // INDICE 0
console.log(nomes.lastIndexOf("Adonis")); // INDECE 3

//caso o elmento nao se repita, independente de qual utilizarmos ele vai idicar a unica posição possivel.

console.log(nomes.indexOf("Felipe")); // INDICE 2
console.log(nomes.lastIndexOf("Felipe")); // INDECE 2


