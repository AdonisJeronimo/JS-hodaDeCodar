class ContaBancaria{
    constructor(saldoCorrente,saldoPoupanca,jurosPoupanca){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    };
    deposito(valor){
        this.saldoCorrente += valor;
    }
    saque(valor){
        this.saldoCorrente -= valor;
    }

    transferenciaCP(valor){
        this.saldoCorrente -= valor;
        this.saldoPoupanca += valor;
    }
    transferenciaCC(valor){
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor;
    }

    jurosMensal(){
        let juros = (this.saldoPoupanca * this.jurosPoupanca) / 100;
        this.saldoPoupanca += juros;
    }
}

class ContaEspecial extends ContaBancaria{
    constructor(saldoCorrente,saldoPoupanca,jurosPoupanca){
        super(saldoCorrente,saldoPoupanca,jurosPoupanca *2);

    }
}

console.log("Saldo da conta");
let conta1 = new ContaBancaria(5000,15000,2);
console.log(conta1);

console.log("Deposito");
conta1.deposito(1000);
console.log(conta1);

console.log("Saque");
conta1.saque(500);
console.log(conta1);

console.log("Transferencia");
conta1.transferenciaCP(1500);
console.log(conta1);

console.log("Saldo da Poupança com juros mensal");
conta1.jurosMensal();
console.log(conta1.saldoPoupanca);

console.log("Conta especial");

let conta2 = new ContaEspecial(10000,5000,2)
console.log(conta2);

conta2.jurosMensal()
console.log(conta2);
