/*
MÉTODOS E PROPRIEDADES EM UMA CLASS

Uma coisa interessante é que usando a abordagem de class, é que as coisas se invertem um pouco. Com ela não podemos adicionar propriedades na classe, só via prototype, pois a class só aceita métodos.


*/

class Cachorro {
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){ //metodo adicionamos como se fosse uma função 
        console.log("Au au");
    }
}

Cachorro.prototype.patas = 4; // aqui inserimos esta informação direto no prototype

let labrador = new Cachorro('Labrador',"Amarelo");
console.log(labrador);

console.log(labrador.patas)
labrador.latir();


