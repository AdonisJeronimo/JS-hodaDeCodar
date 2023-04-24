
function idade(){
    let idadeCliente = prompt("Digite sua idade");

    if(idadeCliente === null || idadeCliente === ""){
        alert("Informação invalida")
    }else{
        console.log(`Você tem ${idadeCliente} anos`)
    }
}

idade();

// EXEMPLO DOIS E MAIS SIMPLES

function imprimirIdade(idade){
    console.log(`Sua idade é ${idade} anos`)
}
imprimirIdade(45)