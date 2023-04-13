/*
Aqui veremos duas coisas que ja foram mencionadas anteriormente, mas que irão incrementar no nosso aprendizado. Que é o return e 

Mas antes disso, vale fazer uma observação. As function é muito mais que esses exemplo anteriores, elas podem e muitas vezes devem receber estruturas complexas de programação, como condições(if,else),variaveis(var,const,let), estruturas de repetições e etc. 


*/

// EXEMPLO 1- retornando valor
const soma = function( a, b){
    return a + b;
}
console.log(soma(2,2))

// EXEMPLO 2



const saudacao = function(nome){
    if(nome == "Adonis"){
        return ("Olá, Seja bem vindo");
    }
}

console.log(saudacao("Adonis"))

function multiplicarTresNumeros(x,y,z){
    return x * y * z; 
}

console.log(multiplicarTresNumeros(10,20,30)) // retornamos a função em uma expressao de console.log()

const multiplicar = multiplicarTresNumeros(2,2,2) // retornamos a função em uma variavel

console.log(`O resultado da multiplicação de 2*2*2 é: ${multiplicar}`)

//EXEMPLO DA CNH

function podeDirigir(idade,cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir")
    }else{
        console.log("Não pode dirigir")
    }
    
}

console.log((18,true))
console.log(podeDirigir(18,false))
console.log(podeDirigir(17,false))

console.log(podeDirigir(24,0)) // 0 é entendido como FALSE
console.log(podeDirigir(25,1)) // 1 é entendido como TRUE
