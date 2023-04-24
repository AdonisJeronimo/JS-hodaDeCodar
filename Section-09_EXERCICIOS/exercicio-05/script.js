let nomes = ["Adonis","Nina","Pedro","Alicia","Naruto"];

let verificacaoDeNome = nomes.includes("Adonis");//eu tinha colocado um prompt aqui, mas para ficar mais simples resolvi tirar

if( verificacaoDeNome == true){
    console.log("Seja bem vindo")
}else{
    console.log("Nome não encontrado !")
};

console.log("")
//ou, de forma mais simples e direta.

if(nomes.includes("Adonis")){
    console.log("Nome encontrado")
}else{
    console.log("Nome não encontrado !")
};





