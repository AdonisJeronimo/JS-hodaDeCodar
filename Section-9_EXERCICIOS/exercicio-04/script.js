let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2,
};

console.log(onibus);


onibus.janela = 20;
console.log(onibus);

delete onibus.rodas;
console.log(onibus)
console.log(onibus.janela)
console.log(onibus.rodas)