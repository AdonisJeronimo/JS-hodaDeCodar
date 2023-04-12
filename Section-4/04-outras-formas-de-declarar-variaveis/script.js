/*
 As variáveis servem para armazenaremos valores que serão utilizados em todo o nosso código. A partir do Es6, existem três modos de declararmos esta variáveis no JS que são o var, const e let. O que as distinguem é seu escopo.
Mais para frente farei uma descrição detalhada de cada variavel levando em consideração seus escopo(que é o que as diferencia)
*/

var nome = "Adonis"
console.log(nome)

const ip = "192.168.0.1"
console.log(ip)

let email = "email@gmail.com"
console.log(email)

/*
 DIFERENÇA ENTRE CADA UMA DELAS

var - Permite redeclaração e ela é valida para todo os escopo.

let - Não permite redeclaração de variavel, ela foi criada e implementada a partir de 2015 com o intuito de evitar problemas de repetição/sobrescrever variaveis a medida em que nosso código vai crescendo e se tornando cada vez mais complexo. Hoje em dia por pratica, usamos o let para praticamente tudo em vez do var. Lembrando que o let só ira funcionar dentro do escopo que ele esta trabalhando.


const - Significa constante, ou seja, ela é a regra mais restrita de todas, uma vez declarada ela não pode ser usada novamente e não ira alterar

*/