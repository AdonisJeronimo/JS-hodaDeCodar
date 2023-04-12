/*
Estruturas de repetição: do while

O do while é um pouco parecido com o while, porem ele é um laço de repetição com o  seu teste lógico no final, diferente do while que seu teste lógico  é no começo.

    WHILE - primeiro ele testa a condição e vê se é verdadeira antes de executar.
    DO WHILE -  primeiro ele executa o código e depois ve se a condição é verdadeira.
    DO While: Executa o loop primeiro e depois verifica a condição.
    
    do{
         bloco de execução
        } while(condição);
*/

let y = 0;

do{
    console.log(y);
    y = y +1
}while(y < 5);