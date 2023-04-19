/*
Metodo de arrays: includes

Verifica se o array tem um determinado elemento
Com o includes, podemos verificar a existencia de um elemento dentro do array.

Se o elemento existir, nos sera retornado TRUE, caso contrario, FALSE.

*/

let carros = ["BMW","Fiat","Audi"];
console.log(carros.includes("Fiat")); //TRUE, porque existe na lista
console.log(carros.includes("Ferrai")); //FALSE, porque NÃO existe na lista

//EXEMPLO 2
console.log("EXEMPLO 2");

let cestaDeFrutas = ["maça","banana","pera","maracuja","acerola","laranja","tangerina"];
console.log(cestaDeFrutas.includes("maracuja")) // Existe "maracuja" na lista? - TRUE, pois existe
console.log(cestaDeFrutas.includes("mamão")) // Existe "mamão" na lista? - FALSE, pois NÃO existe