let idadeUsuario = 24;
console.log(`A idade do usuario é ${idadeUsuario}`)
let idadeMinima = 18;
console.log(`A idade minima é ${idadeMinima}`)

let nome = "Adonis";
 

if(idadeUsuario >= idadeMinima){
    console.log("Acesso autorizado")
} // aqui entrara um else

if( nome === "Adonis" && idadeUsuario > 18){
    console.log("Liberado")
}

if( nome === "João" && idadeUsuario > 18){
    console.log("Liberado")
}
