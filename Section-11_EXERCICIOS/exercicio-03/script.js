class Endereco{
    constructor(rua,bairro,cidade,estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    atualizarRua(rua){
        this.rua = rua;
    }
    atualizarBairro(bairro){
        this.bairro = bairro;
    }
    atualizarCidade(cidade){
        this.cidade = cidade;
    }
    atualizarEstado(estado){
        this.estado = estado;
    }
}

console.log("Primeiro endereço do cliente")
let cliente1 = new Endereco("Rua 2","Pinheiros","São Paulo","São Paulo")
console.log(cliente1)


console.log("Endereço atualizado")

cliente1.atualizarRua("rua 10")
cliente1.atualizarBairro("Alphaville")
cliente1.atualizarCidade("Barueri")
console.log(cliente1)

/*Meu exercicio está correto, pois realizou o que foi proposto, porem na correção do exercicio o professor utilizou o metodo set, então acredito ser valido eu entender um pouco mais sobre o assunto (set e get) para que assim talvez futuramente eu começe a utilizar.

set atualizarRua(atualizarRua){
    this.rua = atualizarRua;
}

endereco.atualizarRua = "rua 10";

Olhando para o código, ele fica até mais bonito e facil de entender.
*/
