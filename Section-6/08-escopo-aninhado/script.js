// ESCOPO ANINHADO é basicamente um escopo dentro de outro escopo.

let y = 5; // ESCOPO GLOBAL (1)

const multiplicar = function(n) {
    let y = n * 2;
    console.log(y) //ESCOPO DA FUNÇÃO (2)

    if(y == 10){
        let y = 55;
        console.log(y) // ESCOPO IF DENTRO DA FUNÇÃO (3)
    } 
}
console.log(y)

multiplicar(y);