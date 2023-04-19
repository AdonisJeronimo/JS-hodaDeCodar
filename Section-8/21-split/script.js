/*
Metodo de string: split

Divide uma string por um separador e retorna um array. O separador no caso é o que utilizamos na frade, é por exemplo, espaço, ponto, virgula, ponto e virgula, barra e etc.


*/

let frase = "O rato roeu a roupa do rei de roma";
let palavras = frase.split(" "); // identificamos o separador, neste caso são espaços.
console.log(palavras);

// Exemplo 2

let produtos = "banana;maça;jaca;pera";
console.log(produtos.split(";"))// identificamos o separador, neste caso são ponto e virgula.


