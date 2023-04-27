/*
TRATAMENTO DE INPUT POR FUNÇÃO

Os inputs são as entradas de dados que os usuarios enviam e como não temos controle sobre eles é muito importante que façamos um tratamento de input, para que assim haja sempre um bom funcionamento do software. Veja no exemplo abaixo que faremos um tratamento de dados do tipo number.
*/

function checarNumero(valor){
    let resultado = Number(valor);
    if(Number.isNaN(resultado)){ //isNAN verifica se não é um numero
        console.log("Digite apenas numeros");
    }else{
        return resultado;
    }
}

console.log(checarNumero(5));
console.log(checarNumero("teste"));