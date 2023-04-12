/*
 Estrutura condicional: else if

Com o else if, podemos encadear mais condições, ou seja, antes de finalizarmos uma condição com o else, podemos colocar outras condições.

*/

let a = 5;
let b = 3;

if( a + b ===3){
    console.log("o resultado é 3");
}else if(a == 4){
    console.log("o valor de a é 4")
}else if( b == 3){
    console.log("O valor de b é 3")
}else{
    console.log("Nenhum dos valores acima")
}
