// aprofundando em functions

function par_imp(n) {
     /*Aqui temos um parametro formal, que vai ser 
     substituido na chamada para dar um retorno*/

     if (n % 2 == 0){ 
        //teste lógico para ver se a var tem num impar ou par
        // se o resto de n dividido por 2 for 0 é par 
        return 'par'
        //ele retornara a resposta 'par'
     }else{
        // se não é ímpar
        return 'imp'
        //ele retornara a resposta 'ímpar'
     }

}

let res = par_imp(11)
//declara uma variavel que chamara a função, com o valor de parametro real 11

console.log(res)
// fara o teste logico da função e retornara de acordo com o valor do parametro
