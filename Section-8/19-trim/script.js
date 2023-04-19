/*
Metodo de string: TRIM

Este metodo remove tudo o que não é string.

EXEMPLO DE USO:

Imagine que recebemos um dado todo zuado do usuario, com nome cheio de espaços por exemplo, neste caso conseguimos utilziar o trim e não mandarmos esses espaços desnecessarios para o servidor e até um eventual código malicioso. 

Cuidado ao usar em uma frase, porque ele pode remover até os espaços entre as palavras.
*/

//imagine que o usuario enviou o nome dele cheio de espaços
console.log("--Nome que o usuario digitou")
let nome = "      Adonis";
console.log(nome)
console.log(`Olá ${nome}, muito obrigado por se cadastrar em nosso site.`)//imagine que isso é um email que enviaremos para o usuario, isso ira dar a impressao que o erro vem da parte do desenvolvedor e não do ususario
console.log("--Nome corrigido")

let nomeCorrigido = nome.trim();
console.log(nomeCorrigido)
console.log(`Olá ${nomeCorrigido}, muito obrigado por se cadastrar em nosso site.`)
