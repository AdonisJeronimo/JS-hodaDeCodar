/*
TRY E CATCH

Outra forma de apresentar um erro ou até verificar se algo que queremos fazer deu certo, é atraves do bloco try catch.
O bloco try catch, vai tentar executar um código e caso não consiga ele pode retornar o erro que esse código gerou, sendo ele bastante util para debug.
*/

try{
    let c = a + b;
}catch(error){ //dentro do catch, passamos a variavel com o nome que quisermos ( como no casso: "error")
    console.log('Algo deu errado ' + error)
}

/*
No código assim, no try ele ira tentar rodar o código e se algo dentro dele der errado, ele ira rodar o catch.
*/


