/*
OBJETOS

Objetos é uma coleção de propriedades, parecidas com o arrays que também nos possui acessar as propriedades
*/

let pessoa = {
    nome: "Adonis",
    profissao: "Desenvolvedor",
    idade: 24,
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.profissao)
console.log(pessoa.idade)

/*
QUANDO USAR ARRAY E QUANDO USAR OBJETO?

Normalmente iremos utilizar objetos para agrupar dados e informações que tem algo em comum, por exemplo no caso do paciente. 

    -   nome;
    -   peso e altura;
    -   imc.

Tudo são dados que não tem sentido sozinho.
Iremos utilizar arrays quando queremos agrupar informações, onde cada uma faz sentido sozinha, então criar algo como:*/

    var pacientes = [ paciente1, paciente2, paciente3]
/*
    Onde cada paciente é um objeto, e veja que dessa maneira, cada elemento do array tem sentido sozinho :)

Podemos ter arrays dentro de objetos também, por exemplo:*/

var aluno = {
    nome: "José",
    turma: "8º ano",
    notas: [ 10, 9, 7.5, 5]

};



