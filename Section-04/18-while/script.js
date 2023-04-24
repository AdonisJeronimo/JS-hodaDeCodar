/*
Estruturas de repetição: while

Esta instrução é usada quando não sabemos quantas vezes um determinado bloco de instruções precisa ser repetido. Com ele, a execução das instruções vai continuar até que uma condição seja verdadeira. A condição a ser analisada para a execução do laço de repetição deverá retornar um valor booleano.

While: Executa o loop enquanto a condição for verdadeira.

while(condição){
     bloco de execução 
    };

*/

let x = 10;

while(x > 0){
    console.log(`O X é ${x}`);

    x =  x - 1
};

let y = 0;

console.log("-------")

while( y <= 10){
    console.log(`O Y é ${y}`)

    y++
}