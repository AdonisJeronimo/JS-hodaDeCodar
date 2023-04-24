let nome = "Adonis"

for(let i = 0; i < 10; i = i + 1){
    
    if( i == 3) {
        nome = "ADONIS";
    }

    if( i == 5 && nome == "ADONIS"){
        console.log("Parar")
        break;
    }
    console.log(i);
}