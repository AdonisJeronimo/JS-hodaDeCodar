/*
METODOS

Os metodos são propriedades que servem como funções, ou seja, são as ações dos objetos e elas são chamadas(invocadas) da mesma maneira que as funções.

Quando criamos uma função em uma propriedade, ela vira um metodo. EX:

latir - é uma propriedade, mas como definimos uma função para ela, ela se torna um metodo.
*/

let cachorro = {
    latir: function(){
        console.log("Au au");
    },
    uivar: function(){
        console.log("Auuuuuu")
    },
};

cachorro.latir();
cachorro.uivar();

