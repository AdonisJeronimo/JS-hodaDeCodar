/*
EXCEPTION

Os exception são erros que os programadores podem gerar, caso alguma condição não seja atendida, porem as exceptions abortam o programa, só gerando o erro;
*/

let a = 1;

if (a != 2){
    throw new Error('O valor de A não pode ser 1');
}

