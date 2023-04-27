/*
FINALLY

O finally é executado independente do resultado do try/catch, ou seja, ele é uma instrução que será executada independentemente se der erro ou não e ele também pode existir com try/catch ou apenas try.

O FINALLY NÃO É MUITO UTILIZADO, GERALMENTE AS PESSOAS APENAS SE CONCENTRAM EM UTILIZAR O TRY/CATCH.

*/
let b = 2;

try{
    let a = 2 + b;
}catch(error){ 
    console.log('Algo deu errado ' + error)
}finally{
    console.log("Executou")
}




