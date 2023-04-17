function calculoDePotencia(x,y){
   return Math.pow(x,y)
}

console.log(calculoDePotencia(3,2))
console.log(calculoDePotencia(2,2))
console.log(calculoDePotencia(3,3))

// A maneira abaixo, é uma forma mais nova de se fazer calculos de potencia. ANtes de utilizar-la é bom verificarmos sua compatibilidade com os navegadores.

function calculoDePotencia2(a,b){
    return a ** b;
}

console.log(calculoDePotencia2(3,2))
