/*
CONSTRUCTOR NA CLASSE (ES6)

Com a chegada da nova atualização do JavaScript, o ES6 que saiu entre 2015 e 2016, eles trouxeram maneiras mais semelhantes as outras linguagens de criar classes, onde tudo fica mais organizado e mais "bonito". Vale resaltar que nem todas as atualizações que o ES6 trouxe foram implementadas a todos os navegadores, então é sempre bom estarmos atentos a isso. Podemos verificar a compatibilidade de recursos atraves do site Can I use.

Com o ES6, uma nova possibilidade de criar uma classe (objeto) com constructor foi adicionada, o que acaba não precisando mais criar classes por meio de uma função, veja no exemplo abaixo:
*/

class Cachorro {
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador',"Amarelo");
console.log(labrador);
console.log(labrador.raca);
console.log(labrador.cor);