/*
MAIS SOBRE PROTOTYPES

Quando criamos um objeto a partir de outro o base será o prototype, ele herdará tanto os métodos e propriedades de Object(o prototype do objeto base).

*/

let pessoa = { //o prototype deste objeto é o Object
    maos : 2,
}

let pessoaNova = Object.create(pessoa);//o prototype deste objeto é o objeto pessoa

console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova) === pessoa);