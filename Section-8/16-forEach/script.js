/*
Metodo de arrays: FOREACH

ele intera a cada elemento do array, é como se fosse um loop de for ou while, porem ele é um metodo pronto do JavaScript (varias linguagens possuem este metodos para lidar com arrays).

*/

const nums = [1,2,3,4,5,6,7,8,9];
nums.forEach(num => {
    console.log(num);
})

//EXEMPLO 2
console.log("Exemplo 2")

let nomes = ["Adonis","Alicia","Pedro","Nina","Naruto"];

nomes.forEach( nomes => {
    console.log(`O nome é ${nomes}`)
})



