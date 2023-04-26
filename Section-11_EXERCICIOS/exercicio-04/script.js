class Carro{
    constructor(marca,cor,autonomia){
        this.marca = marca;
        this.cor = cor;
        this.autonomia = autonomia;
    }
    dirigir(consumo){
        consumo = 10
        this.autonomia -= consumo
    }
    abastecer(tanque){
        tanque = 100
        this.autonomia = tanque;
        }
}

let carro1 = new Carro("Citroen","Preto",100);
console.log(carro1)

carro1.dirigir();
console.log(carro1)

carro1.dirigir();
console.log(carro1)

carro1.dirigir();
console.log(carro1)

carro1.abastecer();
console.log(carro1)

