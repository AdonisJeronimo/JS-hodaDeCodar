/*
O QUE SÃO VARIAVEIS?

Variaveis são "recipientes" onde podemos armazenar informações que podem ter qualquer tipo de valor.

No Javascript temos 3 palavras-chaves para declarar váriaveis:

-> var
-> let
-> const

SINTAXE DE UMA VARIAVEL

let nomeDaVarivel = valor;
const nomedaConstante = valor;
var = nomeDaVariavel = valor;

*/

var nome, sobrenome,nomeCompleto;

nome = "Adonis";
sobrenome = "Jeronimo";
nomeCompleto = nome + sobrenome;

/*              ou

var nome = "Adonis";
var sobrenome = "Jeronimo";
var nomeCompleto = nome + sobrenome;
*/


const nomeGato = "Xaruto";

console.log(nomeGato);
console.log(`O nome do meu gato é ${nomeGato}`);


let laranjas = 5;

console.log(laranjas) // 5
console.log( laranjas * laranjas); // 25
laranjas = laranjas + 1
console.log( `Existem ${laranjas} laranjas na sexta`)

laranjas = "Laranjas"

console.log(laranjas)

