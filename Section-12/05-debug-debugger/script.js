/*
METODO DE DEBUG: DEBUGGER

Outro método bastante utilizado é o debugger que é uma instrução, ou seja, uma palavra reservada do JS que ela simsplesmente ira parar o código onde ela estiver inserida. Então podemos inserir esta plavra 'debugger' em pontos estrategicos do código, para entendermos ee analizarmos o que esta acontecendo naquele exato momento no código. 

*/

let a = 1;
let b = 2;

if(a == 1){
    a = b + 2;
    debugger;

}

for(i = 0; i < b; i++){
    a = a + 2;
}
debugger;


if(a > 10){
    a == 25;
}