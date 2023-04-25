/*
OVERRIDE NAS PROPRIEDADES DO PROTOTYPE

Outro conceito que une com o que falamos na aula passada das propriedades via prototype, é que podemos mudar também a propriedade do prototype depois que a classe foi instanciada, ou seja, poderiamos ter um tipo de constante como valor do prototype, que ira servir por exemplo se quisermos definir as patas do cachorro, que vem como padrão 4, mas pode existir casos em que o cachorro possui apenas 3 patas. Então teremos a possibilidade de acessar a propriedade do prototype e conseguimos acessar o valor padrao no pai desse objeto instanciado, conseguindo ter dois valores diferentes, o valor padrao(que fica no prototype) e o valor da classe em si que instanciamos nova.


*/

class Cachorro {
    constructor(raca){
        this.raca = raca;
    }
}

let poodle = new Cachorro('Poodle');

Cachorro.prototype.raca = 'SRD';

console.log(poodle.raca);
console.log(Cachorro.prototype.raca);

