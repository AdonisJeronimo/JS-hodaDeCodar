/*
Destructuring em objetos


Destructuring é uma sintaxe que nos permite, criar variaveis por meio de objetos e arrays de uma maneira mais rapida, sem termos que ficar chamando as propriedades em cada linha.

Esta estrutura é bastante usada nos frameworks mais modernos como Angular, VUE e React.
*/

const person = {
    name: 'Jhon',
    lastName: 'Doe',
}

const { name: fname, lastName: lname} = person;
console.log(fname);
console.log(lname);

//EXEMPLO 2
console.log("Exemplo 2")

let carro = {
    rodas: 4,
    portas: 4,
    tetoSolar: true,
    motor: "3.0"
};

//Agora se quisermos separar todas as propriedades do objeto em variaveis, podemos utilizar o metodo Destructuring em objetos. Que é da seguinte fomra:

const { rodas:vRodas ,portas: vPortas ,tetoSolar: vTetoSolar ,motor: vMotor } = carro;
console.log(vRodas);
console.log(vPortas);
console.log(vTetoSolar);
console.log(vMotor);

//Com isso, desestruturamos o objeto em variaveis.



