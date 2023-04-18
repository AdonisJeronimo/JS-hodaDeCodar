/*
MUTAÇÃO(MUTABILITY)

Um objeto pode herdar todas as caracteristicas de outro, virando uma referencia ao mesmo, onde neste caso muito alem de herdar propriedades ele é um NOVO objeto.
*/

let objetoA = {
    pontos:10
};

objetoB = objetoA;

let objetoC = {
    pontos: 10
}

console.log(objetoA == objetoB); //true
console.log(objetoA == objetoC); //false