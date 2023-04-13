/*
ESCOPO DE UMA FUNÇÃO

O que acontece dentro de uma função fica separado do escopo global, ONDE ESCOPO GLOBAL É TODO O ARQUIVO JAVASCRIPT. Devemos assim, tratar uma função como algo separado do código 

No exemplo abaixo iremos declarar uma variavel com o mesmo nome, uma no escopo global e a outra dentro de uma função e com o console.log() veremos que seus valores serão diferentes, ou seja, uma variavel não afeta a outra.

OBS: Você pode sobrescrever uma variavel do mesmo escopo.
*/

let n = 10;

const numero = function(){
    let n = 25;
    console.log(n);
}
numero();

console.log(n)