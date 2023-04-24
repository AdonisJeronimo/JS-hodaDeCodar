/*
Estrutura condicional: else

O else complementa as instruções do if(se) caso as instruções passadas não sejam atendidas, ou seja, se a primeira condição for verdadeira execute X....SENÃO(else) execute Y.
Como por exemplo o alerta que é emitido pedindo para que o usuario informe sua idade. Se a idade do usuario for maior ou igual a 18 sera executado um bloco de codigo que emite uma mensagem dizendo : 
    -Acesso foi autorizado. 
senão o else sera executado emitindo outra mensagem que é:
    -Acesso negado.
    
Obviamente que poderiamos fazer uma validação, mas como quero seguir as aulas não irei fazer.

*/

let idadeUsuario = prompt("Digite sua idade");
let idadeMinima = 18;

if( idadeUsuario >= idadeMinima){
    alert("Acesso autorizado")
}else{
    alert("Acesso negado")
}