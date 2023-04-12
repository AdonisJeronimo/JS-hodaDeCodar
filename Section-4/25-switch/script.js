/*
O Switch é também um tipo de declaração comparativa, sendo ele usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível não sera executada e o valor padrão será acionado. 

SINTAXE

switch(expressao){
    case a:
        // o que acontece
        break;
    case b:
        // o que acontece
        break;
    case c:
        // o que acontece
        break;
    default:
        // o que acontece
}

Quando possuirmos condições pré-defindas utilizaremos o switch, porque é mais vantajoso do que termos que colocar varios else if como forma de condições. Vale ressaltar que o switch funciona de forma literal, sendo ele equivalente ao comparador lógico de "idêntico" (===)

Como ele funciona como identico ele é sensivel aos tipos de caracteres, se são maiusculas ou minusculas, então para evitar trastornos, poderiamos criar uma função que a expressao deseja, sera .toLowerCase() deixando assim, todos os valores de entrada minuscula.

OBS: Muitos programadores ainda sim preferem utilizar varios ifs.

*/

console.log("Exemplo")

let nome = "Adonis"

switch(nome){
    case "João":
        console.log("O seu nome é João");
        break;
    case "Marcos":
        console.log("O seu nome é Marcos");
        break;
    default:
        console.log("O seu nome não é nem João e nem Marcos!");
        break;
}

// case é como se fosse um SE(if)
// default é como se fosse um senão(else)

console.log("-----")
console.log("exemplo 2")

let sinal = "vermelho"

switch(sinal){
    case "verde":
        console.log(`O sinal esta ${sinal}, então pode passar.`)
        break;
    case "laranja":
        console.log(`O sinal esta ${sinal}, então ATENÇÃO.`)
        break;
    case "vermelho":
        console.log(`O sinal esta ${sinal}, então PARE.`)
        break;
}

//Se por ventura eu esqueço o break, pode ser um problema para o código. 
console.log("----")
console.log("Exemplo se fosse IF e ELSE")

if(sinal == "verde"){
    console.log(`O sinal esta ${sinal}, então pode passar.`)
} else if( sinal == "laranja"){
    console.log(`O sinal esta ${sinal}, então ATENÇÃO.`)
}else if(sinal == "vermelho"){
    console.log(`O sinal esta ${sinal}, então PARE.`)
}else{
    console.log(`Semaforo quebrado`)
}