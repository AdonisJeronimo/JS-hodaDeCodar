/*

RECURSION

É uma funcionaliade que permite uma função se chamar novamente, ou seja, a mesma função vai se auto invocar depenendo da logica que colocarmos nela. è bem util quando queremos fazer uma logica que esta função precisa ser reexecutada, porem ela tem dois problemas:
    1- Ela não é muito boa em questões de performance. Se precisarmos utilizar-la varias vezes, muitas vezes é melhor pensarmos em outra abordagem, como um loop;
    2- e isso pode gerar uma confusão para quem esta lendo o código, ou seja, pode ser mais complciado de fazer manutenção.
 */

function retornarNumeroPar(n){
    if(n % 2 == 0){
        console.log("n agora é par: " + n);
    }else{
        console.log(n);
        retornarNumeroPar( n - 1);
    }
}

retornarNumeroPar(33)