/*
Os comparadores logicos ou operadores lógicos, nos possibilitam validar dados ou verificar condições, ou seja, se uma
comparação entre dois (ou mais) valores ira retornar um valor esperado dentro do nosso fluxo de código. Se for retornado
o valor esperado, nos mandaremos nosso código executar X comando, caso contrario, mandaremos o código executar
Y. Estas comparações sempre irão nos retonar valores boolean, VERDADEIRO(TRUE) ou FALSO(FALSE) e estas comparações
podem ser de valor, tipo ou valor E tipo Abaixo irei deixar
alguns comparadores e suas funções.

OPERADOR         FUNÇÃO
=               ATRIBUIR VALOR
==              IGUAL(VALOR)
===             IDENTICO(VALOR E TIPO)
!==             NÃO IDENTICO (VALRO E TIPO)
!=              DIFERENTE
<               MENOR QUE
>               MAIOR QUE
<=              MENOR IGUAL QUE
>=              MAIOR IGUAL QUE

*/

a = 10
b = 20
c = "10"
d = 10

console.log( a > b) // false
console.log( a < b) // true
console.log( a == b) // false
console.log( a == c ) // true
console.log( a === d) // true
console.log( a >= 10) // true
console.log( a != a) // false
console.log( a != b) // true
