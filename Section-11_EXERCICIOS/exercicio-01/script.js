function ContaBancaria(saldo){
    this.saldo = saldo;
    this.deposito = function (deposito){
         this.saldo += deposito;
    };
    this.saque = function (saque){
        this.saldo -= saque
    };
    
}

let contaAdonis = new ContaBancaria(3000)
console.log(contaAdonis.saldo);

contaAdonis.deposito(1000);
console.log(contaAdonis.saldo);

contaAdonis.saque(500);
console.log(contaAdonis.saldo);

//METODO ES6
console.log("Exemplo com metodo do ES6")

class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }
    deposito(deposito){
    this.saldo += deposito;
    }
    saque(saque){
    this.saldo -= saque;
    }
}

let conta = new Conta(1000);
console.log(conta.saldo);

conta.deposito(500);
console.log(conta.saldo);

conta.saque(300);
console.log(conta.saldo);


