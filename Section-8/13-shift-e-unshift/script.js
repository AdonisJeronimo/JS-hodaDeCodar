/*
Metodo de arrays: shift e unshift

Adiciona(unshift) e remove(shift) elementos no INICIO do array.

METODO UNSHIFT  -    Adiciona por primeiro
METODO SHIFT    -   Removeu o PRIMEIRO item da lista


*/

let frutas = ["maça","pera","uva"];
console.log(frutas);

let frutaRemovida = frutas.shift();
console.log(frutaRemovida);
console.log(frutas);

console.log("");

let frutaAdicionada = frutas.unshift("Banana");
console.log(frutaAdicionada);
console.log(frutas);

console.log("EXEMPLO 2");

let carro = ["BMW","Audi","Mercedes","Ferrari"];
console.log(carro);

let adicionarCarro = carro.unshift("Porsche");
console.log(adicionarCarro);
console.log(carro);

let removerCarro = carro.shift();
console.log(removerCarro);
console.log(carro);
