/*
Continue 

Da mesma maneira que tem como parar um loop por completo, conseguimos também pular apenas uma  execução e continuar.
*/

for( let i = 10; i > 0; i = i -1 ){
    if( i % 2 == 0){
        console.log("Caiu no continue")
        continue
    }

    console.log(i);
}