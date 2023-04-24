// Aqui iremos ver algumas funcionalidades e detalhes da string

/*
1-) a contra barra (\) podemos dar um 'escape' na string, e isso permite 'efeitos epeciais', exemplo:
    - Se dermos um \n o JS vai entender para pular uma linha.
*/

console.log("Esta é uma string \n de duas linhas")
console.log('Primeira linha \n Segunda linha')

/*
2-) Para inserirmos aspas dentro de um texto, devemos usar a inversa daquela que estamos envolvendo a string.
Se começarmos a string com aspas dupla, no meio do texto usamos a simples(apostrofo)
*/
console.log("Este texto esta envolvido com aspas 'dupla' ")
console.log('Este texto esta envolvido com aspas "simples" ')

/*
3-) O template literals serve para computar e concatenar valores nele podemos executar JS dentro da string, exemplo:
*/

console.log(`A soma de 2 + 2 é igual a ${2+2}`) // aqui poderiamos concatenar com alguma cons,let ou var detro de ${}
console.log( "salada" + " de" + " fruta") // outra forma de concatenar 