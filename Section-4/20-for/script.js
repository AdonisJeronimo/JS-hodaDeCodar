/*
Estruturas de repetição: for

O comando for permite que uma variável contadora seja testada e incrementada a cada iteração, permitindo que se repita varias vezes um comando, declaração ou um bloco de códigos. Por exemplo, se mandarmos executar um laço dez vezes, ele ficara iterando diversas vezes ate executar a quantidade desejada. 
O comando for recebe como entrada uma variável contadora(inicializador), a condição e o valor de incrementação.

Executa o loop enquanto a condição for verdadeira, porém você pode instanciar as variaveis contadoras dentro da estrutura do loop.

    for(inicializador;condição;incremento){
         declaração 
        }

*/

for(let numero = 2; numero < 100; numero = numero *2){
    console.log("O numero é: " + numero);
}