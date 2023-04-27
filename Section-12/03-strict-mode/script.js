/*
STRICT MODE 

No JavaScript nos temos uma forma de reduzir um pouco os erros que cometemos por conta da linguagem ser um pouco omissa. Com o uso de strict mode, nós conseguimos minimizar um pouco esses erros decorrente da fraca tipagem do JS.

SOBRE O STRICT MODE:

    * Deixa o JavaScript mais rigosoro na hora de se programar;
    * Deve ser declarado no topo de arquivos ou funções;
    * Colocar o strict, ajuda você a codificar de forma correta e não vai impedir/limitar nada no seu software ou código.
    * Veja o exemplo de uma variavel declarada sem let/const/var:
    
*/
"use strict" // com o use strict, no console.log do navegador esta sendo mostrado que 'opa' não esta definito (let/var/const)

opa = 'teste';

// delete Object.protorype; // aqui da erro porque não se pode deletar algo nativo do JS

function teste(){ //usando o strict mode dentro apenas de um escopo
    "use strict"
    testando = 'teste'
}

teste();