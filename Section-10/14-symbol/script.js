/*
SYMBOL

Os symbol são propriedades unicas que não podem ser alteradas e nem criadas duas vezes, são basicamente uma constante só que para propriedades de objetos.
*/

class Cachorro{
    constructor(raca){
        this.raca = raca;
    }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let golden = new Cachorro('Golden Retriver')

// para acessarmos um symbol, fazemos da seguinte forma:

console.log(Cachorro.prototype[patas]);
console.log(golden[patas]);
