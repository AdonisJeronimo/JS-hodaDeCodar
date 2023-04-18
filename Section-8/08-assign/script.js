//Podemos copiar proprieades de um objeto para outro

let objetoA = {
    prop1: "teste1",
    prop2: "teste2"
};
console.log(objetoA)
console.log("")


let objetoB = {
    prop3: "teste3",
}
console.log(objetoB)
console.log("")

Object.assign (objetoA,objetoB);
//Aqui entendemos que o objetoA ira herdar todas as propriedades do objetoB

console.log(objetoA)
console.log(objetoB)

console.log("")
//Exemplo 2

let carro ={
    portas: 2,
    portaMalas: "200l",
    motor: "2.0"
};

let adicionais = {
    arCondicinado: true,
    tetoSolar: true,
    bancoDeCouro: true,
};

console.log(carro)
console.log("Atribuindo propriedades com o ASSIGN")

Object.assign(carro,adicionais)
console.log(carro)