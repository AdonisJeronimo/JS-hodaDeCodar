/*
METODOS NO PROTOTYPE - CKASSES: CONSTRUCTOR COM METODOS

Alem de propriedades, podemos criar a classe base já com metodos, basta definir ao prototype o método desejado.


*/

function Cachorro(raca){
    this.raca = raca;
}

console.log(Cachorro);

Cachorro.prototype.uivar = function(){
    console.log('Auuuuu');
}

let pug = new Cachorro ('Pug');
console.log(pug.raca);
pug.uivar();






