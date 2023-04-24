/*
Como em algumas anotações anteriores eu ja havia mostrado que as variaveis também possuem escopo. Atualmente com o let e const, qualquer bloco de código pode separar seu escopo (em um if por exemplo), o que não acontecia com o var, que muitas vezes era reescrito e que acabava causando um grande transtorno para os dev.

A diferença de VAR,LET e CONST está no seu escopo, que podem ser entendidos da seguinte forma:

var - Possui um escopo global, permite redeclaração e pode ser subescrita 

let - Não permite redeclaração de variavel, ela foi criada e implementada a partir de 2015 com o intuito de evitar problemas de repetição/sobrescrever variaveis a medida em que nosso código vai crescendo e se tornando cada vez mais complexo. Hoje em dia por pratica, usamos o let para praticamente tudo em vez do var. Lembrando que o let só ira funcionar dentro do escopo que ele esta trabalhando.


const - Significa constante, ou seja, ela é a regra mais restrita de todas uma vez declarada ela não pode ser usada novamente e não ira alterar. caso você tente declarar um const de mesmo nome ira dar erro.
*/

var nome = "Adonis";
console.log("FORA DO ESCOPO")
let sobrenome = "Jeronimo";
const idade = 24;

console.log(nome)
console.log(sobrenome)
console.log(idade)


console.log("")


{
console.log("DENTRO DO ESCOPO")

    var nome = "João" // Aqui a VAR esta em um escopo{} e mesmo permitiu que seu valor fosse alterado
    console.log(nome)

    let sobrenome = "Fernandes" //Aqui vemos que o valor de let, só foi alterado dentro do escopo
    console.log(sobrenome)

    const idade = 48;
    console.log(idade)  //valor alterado apenas dentro do escopo

    
}
console.log("")
console.log("FORA DO ESCOPO")

console.log(nome) // aqui vemos novamente que o valor da variavel foi alterado (para JOAO)

console.log(sobrenome) //Aqui vemos que o valor de let, só foi alterado dentro do escopo e seu valor inicial foi mantido

console.log(idade) // valor inicial mantido

console.log("")
console.log("DECLARANDO VARIAVEIS COM O MESMO NOME NO MESMO ESCOPO")

var nome = "Naruto"
console.log(nome) // o Var permite declararmos novamente e isso faz com que seu valro seja alterado

// let sobrenome = "sobrenome" // não permite, da erro

// const idade = 20 // não permite, da erro


