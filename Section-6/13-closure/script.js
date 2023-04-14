/*
Closure é uma função que se lembra do ambiente em que ela foi criada, ele é bastante utilizadoa para simular metodos privados no JS, sendo ele um cocenito de orientação a objeto

COnceito mais avançado, vai ser abordado mais a frente
*/

function armazenarSoma(x){
    return y => x + y;
}

let soma1 = armazenarSoma(3);
console.log(soma1(5));

let soma2 = armazenarSoma(5);
console.log(soma1(10));