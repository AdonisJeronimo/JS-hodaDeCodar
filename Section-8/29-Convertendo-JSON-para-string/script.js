/*
CONVERTENDO JSON --> STRING e STRING --> JSON

Estas conversões são muito utilizadas.

JSON para STRING - utilizaremos o JSON.stringify
STRING PARA JSON - utilizaremos o JSON.parse

*/

let pessoa = {
    "name": "Matheus",
    "age": 29,
    "position": "Developer",
    "languages": ["PHP","JavaScript","Python"]
}

let jsonParaString = JSON.stringify(pessoa);
console.log(jsonParaString)

let stringParaJson = JSON.parse(jsonParaString);
console.log(stringParaJson)



