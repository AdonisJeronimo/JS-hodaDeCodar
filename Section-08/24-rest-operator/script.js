/*
Rest operator

O rest operator é uma forma de uma função receber indefinidos parametros. O operdor rest vai transformar todos os parametros e um array e estes parametros são definidos na função por tres pontos e o nome do parametro, como na forma abaixo:

...nome

*/

let num1 = 1;
let num2 = 6781;
let num3 = 521;
let num4 = 100;
let num5 = 20;

function imprimirNumeros(...argumentos){
    for(let i = 0; i < argumentos.length; i++){
        console.log(argumentos[i]);
    }
}

imprimirNumeros(num1,num2,num3,num4,num5);
console.log(" ")

imprimirNumeros(num2,num3,num4);
console.log(" ")

imprimirNumeros(num2,num3,num4);
console.log(" ")

imprimirNumeros(1,2,4,5,6,7);



