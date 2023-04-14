/*
Podemos pre-determinar um valor para um argumento e caso o usuario/programador não passe este argumento, o programara ira tomar este valor(default) como o valor do argumento.
*/

function repetirFrase(frase, n=2){
    for(let x = 1; x <= n; x++){
        console.log(frase + " " + x);
    }
};

repetirFrase("Testanto", 5);// Aqui definimos os dois parametros, portanto a frase sera executada 5 vezes

repetirFrase("Só duas vezes"); // Porque como não definimos o segundo paramentro, ele ira tomar como "default" e usara o valor pre-determinado, que neste caso ira executar a frase 2 vezes(como definido na função)

//EXEMPLO 2 - Neste caso estamos determinando que caso naõ seja definido o expoente de um numero, ele sempre sera elevado ao quadrado(2)

function potencia(base, exp=2){
    return Math.pow(base,exp);
}
console.log(potencia(2));   //elevado ao quadrado
console.log(potencia(2,2)); //elevado ao quadrado
console.log(potencia(2,3)); //elevado ao cubo
console.log(potencia(2,4));  // elevado a quatro

