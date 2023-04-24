/*
Metodo de string: padStart

Este método insere caracteres antes da string.

Pode ser utilizado para padronizar alguns elementos dentro do nosso sistema. POr exemplo os SKU do sistema possuem 6 digitos, mas o usuario digitou apenas 2.

O primeiro argumento é o limite que queremos que a string tenha, e o segundo é o que iremos inserir.

VER MAIS SOBRE SUAS UTILIDADES

*/

let milAoContrario = '1';
console.log(milAoContrario.padStart(4,"0"))

//eXEMPLO 2

let sku = "34";

console.log(sku.padStart(6,"0"));


