//FUNÇÃO SEM PARAMETROS
function imprimirNoConsole(){
    console.log("Olá mundo!")
}

//Uma função ao ser criada não é executada automaticamente, ou seja, precisamos executar/invocar a função.

imprimirNoConsole(); //INVOCANDO A FUNÇÃO

//FUNÇÃO COM PARAMETRO
let numero = 4;

function imprimirNumero(numero){
    console.log(`O numero da função é: ${numero}`)
}

imprimirNumero(numero);

numero = 15;

imprimirNumero(numero);

numero = 20;

imprimirNumero(numero);


/*
Aqui de fato vemos a utilizada das funções, no caso acima podemos observar que utilizamos a mesma função sem reescreve-la para parametros diferentes. Imagine que esta função fosse complexa e grande, se ficassemos repetindo o mesmo código toda vez, alem de deixar o código mais pesado iria deixar poluido o que dificultaria manutenções.

Quando precisarmos de algo que vá se repetir mais vezes, ou é bastante complexo, devemos criar uma função e quando precisarmos uasar , iremos apenas invoca-la. 
*/

//FUNÇÃO EM UMA VARIAVEL
const numeroAleatorio = function(){
    console.log(Math.random())
};

numeroAleatorio();
numeroAleatorio();
numeroAleatorio();
numeroAleatorio();
