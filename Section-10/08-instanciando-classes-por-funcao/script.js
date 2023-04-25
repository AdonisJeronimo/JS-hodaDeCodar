/*
INSTANCIANDO CLASSES POR FUNÇÃO  - constructor por função

Estavamos criando classes pelo Object.create, mas este não é a maneira mais utilizada para fazermos isso por temos o chamado CONSTRUCTOR. No JS temos algumas formas de utilizar-lo, que nada mais é uma forma de instanciarmos o objeto de uma maneira que a gente ja consiga passar os parametrso base para ele ser um objeto diferenciado e agora iremos ver como instanciar objetos a partir de funções, lembrando que instanciar uma classe em uma linguagem de programação, é criar um NOVO objeto.

*/

function criarCachorro(raca,patas,cor){
    let cachorro = Object.create({}); // aqui temos ({}), pois criamos um objeto vazio.
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;

    return cachorro;
}

let doberman = criarCachorro('Doberman',4,'preto');

console.log(doberman)
console.log(doberman.raca)
console.log(doberman.patas)
console.log(doberman.cor)

let pastorSuico = criarCachorro('Pastor Suiço',4,'branco');

console.log(pastorSuico)
console.log(pastorSuico.raca)
console.log(pastorSuico.patas)
console.log(pastorSuico.cor)

/*
Acima, simulamos um constructor, que não é o mais usual porque não vemos isso em outras linguagens, porem no JS ele nos da essa possibilidade. No exemplo, estamos declarando uma função que cria um objeto "cachorro" onde definimos a raça como parametro da função e retornamos este objeto para a pessoa que instanciou em uma variavel.
*/