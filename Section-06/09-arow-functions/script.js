/*
ARROW FUNCTIONS

Arrow functions é uma outra forma de escrevermos funções, sendo ela bastante utilizada nos frameworks mais modernos, POREM ela não deve substituir as functions por completo por conta de alguns detalhes, então é necessario sabermos o momento mais adequado de aplicar-las.

(COMPLETAR COM EXPLICAÇÃO OU BUSCAR NA INTERNET)

O nome da função anonima deve ser atrelado a uma variavel que sera igual a algum parametro( que fica dentro de parenteses e pode estar vazio ou não), assim acabamos por ignor o comando "function" e em seguida colocamos a arrow que é representada por => para ai sim abrimos o bloco de codigo com colchetes {}

CUIDADOS AO UTILIZAR ARROW FUNCTIONS 

 - Arrow functions são anonimas, o que significa que elas não são nomeadas, criando assim mais dificuldade de depurar(debug);
 - Sem autorreferencia.


 ONDE NÃO USAR ?

 -Metodos de objetos;
 -funções de callback com contexto dinamico;
 -quando elas tornarem o código menos legivel.

 QUANDO SUAR?

 São boas para serem utilizadas para tudo aquilo que exija que this esteja vinculado ao contexto e não à propria função, também são boas para utilizarmos como métodos map e reduce.
*/

const parOuImpar = (n) => {
    return n % 2;
};

console.log(parOuImpar(3));

let consoleTeste = () =>{
    console.log("Arrow function sem parametro")
}
consoleTeste();