function verificacaoDeTipo (dado){
    if( typeof dado === 'string'){
        console.log(`O dado inserido "${dado}" é uma string`)
    }else if( typeof dado === 'number'){
        console.log(`O dado inserido "${dado}" é um number`)
    }else{
        console.log(`O dado inserido "${dado}" é um boolean`)
    }
}

verificacaoDeTipo("Olá");
verificacaoDeTipo(true);
verificacaoDeTipo(4);
verificacaoDeTipo(false);
verificacaoDeTipo("World");
verificacaoDeTipo(25);
