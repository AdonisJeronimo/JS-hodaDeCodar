class Carrinho{
    constructor(itens,qtd,valorTotal){
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addItem(item){

        let contator = 0; // Com isso conseguiremos adicionar um novo item

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contator = 1;
            }
        }
        if(contator == 0 ){
            this.itens.push(item); //aqui conseguimos adicionar um novo item ao array que criamos, fora aqueles que ja existem no carrinho. Com o push, iremos adicionar este novo item ao final do array.
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    removeItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){

               let obj = this.itens[itemCarrinho];
               let index = this.itens.findIndex(function(obj){ // o findIndex ...
                return obj.id == item.id
               });

               this.qtd -= this.itens[itemCarrinho].qtd;
               this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

               this.itens.splice(index,1); // o Splice ...
            }
        }
    }

}

let carrinho = new Carrinho([
    {
        id:01,
        nome: "Camisa",
        qtd:1,
        preco:20,
    },
    {
        id:02,
        nome: "Calça",
        qtd:2,
        preco:50,
    }
],3,120);
console.log(carrinho);

//Adicionando mais itens, daqueles que JÁ EXISTEM.
carrinho.addItem({id:01,nome:"Camisa",qtd:3,preco:20},3,60);
console.log(carrinho);

//Adicionando um novo item ao carrinho
carrinho.addItem({id:03,nome:"Bermuda",qtd:2,preco:15},2,30);
console.log(carrinho);

//remover item do carrinho
carrinho.removeItem({id:03,nome:"Bermuda",qtd:2,preco:15},2,30);
console.log(carrinho);


