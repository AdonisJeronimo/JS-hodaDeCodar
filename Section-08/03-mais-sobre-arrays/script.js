/*
MAIS SOBRE ARRAYS

Podemos acessar um array pelo seu indice, lembrando que o primeiro do indice sempre será ZERO(0), exemplo:

lista1 [0] (lista na posição 0) vai conter o valor "arroz".
lista1 [1] (lista na posição 1) vai conter o valor "feijão".
                 E ASSIM POR DIANTE

*/

let lista1 = [
    "arroz",
    "feijão",
    "macarrão",
    "leite",
];

// PODEM SER DECLARADAS DAS DUAS FOMRAS

let lista = ["arroz","feijão","macarrão","leite"];

//para acessarmos um  valor especifico do array, faremos da seguinte forma: nomeDoArray[posição]

console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
console.log(lista[3]);

//Para consultarmos todos os valores do array
console.log(lista);

//Para consultarmos o numero total de itens no array
console.log(lista.length);

//para consultar o ultimo elemento do array
console.log(lista[lista.length - 1]);



