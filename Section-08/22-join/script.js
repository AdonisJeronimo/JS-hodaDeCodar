/*
Metodo de string: join

O metodo join, junta elementos de um array em uma frase por meio de um separador. Basicamente, ele faz o metodo inverso do split.


*/

let frase = "O rato roeu a roupa do rei de roma";
let palavras = frase.split(" "); // identificamos o separador, neste caso são espaços.
console.log(palavras);

let fraseMontada = palavras.join('<->');
console.log(fraseMontada)

//exemplo 2

let numeros = [10,20,30,40,50,60,70,80,90];
console.log(numeros)

let numerosJuntos = numeros.join("-")
console.log(numerosJuntos) //virou string
console.log(typeof(numerosJuntos)) //virou string



