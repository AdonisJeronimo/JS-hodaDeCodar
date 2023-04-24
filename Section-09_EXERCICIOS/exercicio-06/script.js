let hardware = ["processador","cooler","placa-mae","memoria-ram","SSD","fonte"] // 6 itens
let perifericos = ["mouse","teclado","monitor"] // 3 itens

console.log(hardware.length)
console.log(perifericos.length)

function numerosDeElementos(el){
    if(el.length >= 5 ){
        console.log("Muitos elementos")
    }else{
        console.log("Poucos elementos")
    }
}

numerosDeElementos(hardware);
numerosDeElementos(perifericos);