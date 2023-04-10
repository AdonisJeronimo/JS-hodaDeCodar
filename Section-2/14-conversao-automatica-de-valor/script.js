/*
Em determinadas operações o JavaScript pode converter silenciosamente o tipo do resultado final da operação, isso 
se da devivo a erros e principalemnte pela fraca tipagem do JS, como por exemplo:
*/

console.log(5 * null) // 0
console.log( "5" - 3) // 2
console.log( "5" + 1 ) // 51
console.log("Dois" * "Três") // NaN