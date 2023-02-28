function somar(n1=0, n2=0){ 
    /*neste caso, estou dizendo para a função
    que se, o valor de n1 ou de n2 não for 
    declarado, o valor dete parametro valera 0*/
     return n1+n2
}

console.log(somar(7))
/*aqui estou declarando só o valor do
primeiro parâmetro, logo no teste logico 
ele me retornara 7+0*/


//vamos calcular o fatorial de um numero
function fatorial(n){
    //o fatorial de um numero é ele vezes o numero atecessor
    //5! = 5x4x3x2x1
    //ou 5!= 5x4!

    //logo 

    let fat = 1
    for (let c= n;c>1;c-- ){
        fat *= c
    
    }
    
    return fat
}

console.log(fatorial(5))



