/*
CONJUNTOS DE CARACTERES

Podemos definir um conjunto de caracteres para encontrar por regex, basta por entre colchetes[] e podemos também atraves de um traço, definirmos um intervalo a qual queremos verificar, veja:

 */

console.log(/[123]/.test('Existe 123 aqui?')) //true
console.log(/[123]/.test('Existe 4 aqui?')) //false
console.log(/[0-9]/.test('o numero 8 esta presente aqui?')) //true

/*
Pelo que vi isso não é tão util se caso você quiser saber por exemplo, se exite X nuemro, por exemplo...queor saber se o numero 10(dez) esta presente em uma frase e utilizo o pardao [0-9], teoriacamente era para dar false, porem ele da true, por o 1(um) e o 0(zero), estão presentes na expressão. Pelo que entendi, é mais util caso a gente queira saber se tem algum caracter especifico dentro de uma string, por exemplo o @ ou se a string possui numeros.
*/