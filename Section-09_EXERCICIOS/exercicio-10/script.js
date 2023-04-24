const calculadora = {
    soma: function(a,b){
        return a + b
    },
    subtracao: function(a,b){
        return a - b
    },
    divisao: function(a,b){
        return a / b
    },
    multiplicacao: function(a,b){
        return a * b
    }
}

console.log(calculadora.soma(6,6)); // 12
console.log(calculadora.subtracao(10,6)); // 4
console.log(calculadora.divisao(4,2)); //2
console.log(calculadora.multiplicacao(5,5)); // 25


