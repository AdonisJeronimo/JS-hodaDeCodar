/*
Definindo uma função

Uma função tem uma estrutura um pouco mais complexa:

    - Devemos declarar a função sempre com a palavra function(palavra reservada);
    - Uma função deve ter um nome;
    - Uma função pode conter argumentos/parametros definidos entre parenteses(), mas mesmo que não haja   parametros, obrigatoriamente devemos abrir parenteses posis faz parte da estrutura da função;
    - O corpo da função é definido entre colchetes {};
    - Geralmente uma função retorna um valor;
    - É possivel declararmos funções em variaveis.
    
*/

//SINTAXE DE UMA FUNCTION

function nomedafuncao(){
    console.log("Escrever no console")
};

nomedafuncao(); //É ASSIM QUE EXECUTAMOS/INVOCAMOS UMA FUNÇÃO

// SINTAXE DE UMA FUNCTION EM UMA VARIAVEL

const textoNoConsole = function(){
    console.log("Texto no console")
}