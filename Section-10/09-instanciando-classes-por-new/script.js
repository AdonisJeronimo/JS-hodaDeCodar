/*
INSTANCIANDO CLASSES POR NEW  - constructor por new

Esta palavra new ela serve para instanciarmos classes e ela é bem comum em outras linguagens e basicamente iremos criar uma função com uma convenção, onde o nome da função é iniciado com a letra MAISCULA,  que isso nos indica que essa função é uma CLASSE.


*/

function Cachorro(raca,cor,patas,vacina){
    this.raca = raca;
    this.cor = cor;
    this.patas = patas;
    this.vacina = vacina;
}

let husky = new Cachorro('Husky','Branco',4,true);
console.log(husky);
console.log(husky.raca);
console.log(husky.cor);
console.log(husky.patas);
console.log(husky.vacina);

let doberman = new Cachorro('Doberman','Preto',4,false);
console.log(doberman);

let pinscher = new Cachorro('Pinscher','Marron',4,true);
console.log(pinscher);




