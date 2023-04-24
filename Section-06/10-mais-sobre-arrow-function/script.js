/*
    -   Se só tem UM parametro, podemos remover os parenteses do argumento e o return;
    -   Se a expressao for pequena, podera ser feita em apenas uma linha se prejudicar a leitura
*/

var raizQuadrada = (x) => {
    return x * x;
}
console.log(raizQuadrada(2))

var raizQuadrada = n => n * n; // ARROY FUNCTION
console.log(raizQuadrada(2))



//Por mais que fique curta a função e seja menos codigo escrito, devemos sempre prezar pela legibilidade do código, devemos ponderar quando é o momento certo de utilizar-las.


//OUTRO EXEMPLO

var multiplicarPorDois = (x) =>{
    return x * 2;
}
console.log(multiplicarPorDois(50));

var multiplicarPorDois = x => x * 2
console.log(multiplicarPorDois(50)) 