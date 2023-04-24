/*
FUNÇÕES

Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica. É como uma pequena "fabrica" onde você faz uma entrada e ele te da uma sáida, também pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código.
Uma função JavaScript são chamadas durante o programa e você pode ouvir alguem dizendo para executar, chamar e invocar uma função.

A definição da função (também chamada de declaração de função) consiste no uso da palavra chave function (en-US), seguida por:

    -   Nome da Função.
    -   Lista de argumentos para a função, entre parênteses e separados por vírgulas.
    -   Declarações JavaScript que definem a função, entre chaves { }.

function nomeDaFunção(parametros de entrada ou podemos deixar vazia){
   retunr bloco de código
}

function nomeDaFuncao();

function nomeDaFuncao (parametro1,parametro2);

*/

// EXEMPLO - FUNÇÃO DE COTAÇÃO DE REAL P/ DOLAR

var real = prompt("Digite o valor em REAIS")

function realParaDolar(real,cotacaoDolar){
    return real / cotacaoDolar;
}

var convercao = realParaDolar(real,5.15);
alert('R$ '+ convercao);