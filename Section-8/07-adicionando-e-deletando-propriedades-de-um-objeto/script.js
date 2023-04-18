/*
Depois que o objeto é inicializado, pdoemos adicionar ou remover propriedades ao longo do nosso programa
*/

//EXEMPLO 1

let carro = {
    marca: "VW",
    portas: 4,
    eletrico: false,
    motor: 1.0
}
console.log(carro);


console.log(carro.portas);
delete carro.portas; //Quando deletamos uma propriedade ela fica como UNDEFINED
console.log(carro.portas);

carro.tetoSolar = true; // adicionando uma nova propriedade 
console.log(carro.tetoSolar)
console.log(carro)

// Exemplo 2

let pessoa = {
    nome: "Adonis",
    idade: 24,
    profissao: "Desenvolvedor",
}

console.log(pessoa);
console.log(pessoa.nome);
delete pessoa.nome
console.log(pessoa);

pessoa.casado = true;

console.log(pessoa)
console.log(pessoa.casado)

