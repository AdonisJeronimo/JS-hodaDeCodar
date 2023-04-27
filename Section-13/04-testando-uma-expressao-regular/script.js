/*
VERIFICANDO PADRÕES COM REGEX(EXPRESSÃO REGULAR)

Depois de definimos o padrão por meio da regex, utilizamos o método test() paraq verificar se o padrão é retornado. Com isso vamos receber de resposta um valor boolean(true or false), veja:

*/

console.log("Primeira forma de utilizarmos o regex")
const reg1 = new RegExp('quadrado');
console.log(reg1.test("Tem quadrado?"));
console.log(reg1.test("Não tem"));

console.log("Segunda forma de utilizarmos o regex")

let frase = "As piramides parecem um triangulo " //podemos usar em uma variavel
const reg2 = /triangulo/;
console.log(reg2.test("Tem triangulo?"));
console.log(reg2.test("Não tem"));
console.log(reg2.test(frase));//podemos usar em uma variavel