/*
 Estrutura condicional: if

if = se 

O programa executara um bloco de código SE(if) a condição for verdadeira. A condição sendo verdadeira algo ira acontecer, onde "algo" é a condição imposta por um statement que ira nos resultar um valor boolean(true or false).

*/


let idadeUsuario = 24;
console.log(`A idade do usuario é ${idadeUsuario}`)
let idadeMinima = 18;
console.log(`A idade minima é ${idadeMinima}`)

let nome = "Adonis";
 

if(idadeUsuario >= idadeMinima){
    console.log("Acesso autorizado")
} // aqui entrara um else

if( nome === "Adonis" && idadeUsuario > 18){
    console.log("Liberado")
}

if( nome === "João" && idadeUsuario > 18){
    console.log("Liberado")
}
