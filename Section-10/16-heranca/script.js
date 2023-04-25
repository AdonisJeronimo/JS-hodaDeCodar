/*
HERANÇA(inheritance)

Outro conceito de orientação a objeto é a herança, que na verdade é uma classe que basicamente ira herdar as atributos/propriedades/metodos de uma classe pai. Para isso iremos utilizar a palavra reservada extends.
*/

class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero {
    constructor(patas,raca){
        super(patas, patas);
        this.raca = raca;
    }
}

let pug = new Cachorro(4, 'Pug');
console.log(pug);