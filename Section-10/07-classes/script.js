/*
CLASSES

Quando estamos falando de orientação a objeto, não falamos "vamos criar um objeto", geralmente falamos que iremos criar uma classe e instanciar um objeto naquela classe. Sendo assim, na orientação a objeto, os objetos passam a ser chamados de classes(é só uma nomenclatura nova que fim das contas é um objeto).

* O prototype do JavaScript pode ser chamado de classe;
* Pois nas outras linguagens uma Class é um molde de um objeto;
* ou seja, podemos criar diversos objetos em cima de um prototype.
*/

let cachorro = {
    raca: "SRD",
}

let pastorAlemao = Object.create(cachorro);
console.log(pastorAlemao)

pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao.raca)
console.log(pastorAlemao)