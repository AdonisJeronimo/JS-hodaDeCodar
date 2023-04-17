function checarTamanhoTexto (dado){
    if( dado.length > 10){
        console.log("Texto muito longo");
    }else{
        console.log("Texto dentro do limite");
    }
console.log(dado.length);

}

checarTamanhoTexto("ooooooooooO");
checarTamanhoTexto("oooooooooo");
checarTamanhoTexto("Olá Mundo");