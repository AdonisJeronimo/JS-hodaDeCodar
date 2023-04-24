function numerosAleatorios(numero){
    return Math.floor(Math.random() * numero) + 1; // bem comum de se utilizar
}

console.log(numerosAleatorios(2));
console.log(numerosAleatorios(5));
console.log(numerosAleatorios(10));
console.log(numerosAleatorios(15));

console.log(numerosAleatorios(50));
console.log(numerosAleatorios(100));
