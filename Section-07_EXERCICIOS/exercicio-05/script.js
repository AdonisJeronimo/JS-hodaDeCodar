function verificacaoAutoEscola(idade){
    if( idade >= 18){
        alert("Você esta apto a fazer a matricula. ")
    }else{
        alert("Você não possui a idade minima!")
    };
};

verificacaoAutoEscola(prompt("Digite sua idade"));