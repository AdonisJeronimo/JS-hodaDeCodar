
//VALORES PARA EXEMPLIFICAR
const a = 2;
const b = 2;

/*Abaixo iremos utilizar o comparador logico && (AND/E)
Neste caso, iremos perceber que se alguma das condições forem falsas, o resultado final sera FALSO*/

        //  TRUE       TRUE
console.log(a == b && a <= b)    //TRUE
        //  TRUE       FALSE
console.log(a === b && a < b)    //FALSE
        //  FALSE      TRUE
console.log(a > b && a === b)   //FALSE
        //  FALSE       FALSE
console.log(a > b && a < b)     //FALSE

/*Abaixo iremos utilizar o comparador logico || (OR/ou)
Neste caso, iremos perceber que se alguma das condições for VERDADEIRA, o resultado final sera VERDADEIRO*/

        //  TRUE       TRUE
console.log(a == b || a <= b)    //TRUE
        //  TRUE       FALSE
console.log(a === b || a < b)    //TRUE
        //  FALSE      TRUE
console.log(a > b || a === b)   //TRUE
        //  FALSE       FALSE
console.log(a > b || a < b)     //FALSE

/*Abaixo iremos utilizar o comparador logico ! (NOT)
Neste caso, iremos negar a expressao, então o que for verdadeiro se torna falso e o que for falso se torna verdadeiro.
O que irea nos dizer o resultado final, é o tipo de comparação feita.
*/

        //  TRUE       TRUE
console.log(!(a == b && a <= b))    //FALSE
        //  TRUE       FALSE
console.log(!(a === b && a < b) )   //TRUE
        //  FALSE      TRUE
console.log(!(a > b && a === b) )  //TRUE
        //  FALSE       FALSE
console.log(!(a > b && a < b) )    //TRUE