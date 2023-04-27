/*
CARACTERES ESPECIAIS

Alem dos conjuntos, podemos utilziar digitos ou caracteres especias que representam conjutnos de uma forma mais simplificada. por exemplo:

    \d - Qualquer digito de caractere;
    \w - Um caractre alfanumerico; (letras e numeors)
    \s - Qualquer caractere de espaço em branco;
    \D - Caracteres que não são digitos;
    \W - caracteres não-alfanumericos; (não numeros e letras)
    \S - Caracteres que não seja espaço em branco;(não aceita espaço,quebra de linha ou tab)
    . - Qualquer caractere, menos nova linha.

    BASICAMENTE AS LETRAS MAISCULAS SÃO UMA NEGAÇÃO
*/
console.log("/./")
const pontoRegex = /./;
console.log(pontoRegex.test('asas'));
console.log(pontoRegex.test('  '));
console.log(pontoRegex.test('123'));
console.log(pontoRegex.test('12asasd'));

console.log("\d")
const dRegex = /\d/;
console.log(dRegex.test('asas'));
console.log(dRegex.test('  '));
console.log(dRegex.test('123'));
console.log(dRegex.test('12asasd'));

console.log("\w")
const wRegex = /\w/;
console.log(wRegex.test('asas'));
console.log(wRegex.test('  '));
console.log(wRegex.test('123'));
console.log(wRegex.test('12asasd'));

console.log("\s")
const sRegex = /\s/;
console.log(sRegex.test('asas'));
console.log(sRegex.test('  '));
console.log(sRegex.test('123'));
console.log(sRegex.test('12asasd'));

console.log("\D")
const DRegex = /\D/;
console.log(DRegex.test('asas'));
console.log(DRegex.test('  '));
console.log(DRegex.test('123'));
console.log(DRegex.test('12asasd'));

console.log("\W")
const WRegex = /\W/;
console.log(WRegex.test('asas'));
console.log(WRegex.test('  '));
console.log(WRegex.test('123'));
console.log(WRegex.test('12asasd'));

console.log("\S")
const SRegex = /\S/;
console.log(SRegex.test('asas'));
console.log(SRegex.test('  '));
console.log(SRegex.test('123'));
console.log(SRegex.test('12asasd'));