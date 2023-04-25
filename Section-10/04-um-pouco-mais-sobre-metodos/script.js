/*
UM POUCO MAIS SOBRE METODOS

Normalmente os metodos interagem com os objetos, até mudando os valores das suas propriedades para corresponder a lógica do programa desenvolvido.

this - Utilizamos o this para fazer uma referencia ao proprio objeto que estamos trabalhando, this do ingles significa "este", ou seja, ESTE OBJETO. Por exemplo:

this.raca é a mesma coisa que cachorro.raca, onde cachorro é o objeto que estamos trabalhando e raca é sua propriedade ou metodo.
*/

let pessoa = {
    nome: "",
    setnome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    }
}
pessoa.setnome("Adonis");

console.log(pessoa.getNome());

//Exemplo 2
console.log("Exemplo 2");

let cachorro = {
    raca: "SRD",
    latir: function(){
        console.log("Au au");
    },
    uivar: function(){
        console.log("Auuuuuu")
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é " + this.raca;
    }
};
console.log(cachorro.raca);
cachorro.setRaca("Pastor Alemão");

console.log(cachorro.raca);
console.log(cachorro.getRaca());