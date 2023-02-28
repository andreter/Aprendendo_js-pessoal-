/*Estruturas de repetições while - 

A estrutura while consiste em dois tipos a que condiciona e executa e a que faz o inverso.*/

/*Comando while condicionando primeiro e executando depois*/
let FatiasDePizza = 8

    while(FatiasDePizza > 0 ){  /*ENQUANTO tiver fatias de pizza*/

    console.log("fatia comida")

    FatiasDePizza--

console.log(`Você comeu uma fatia. Restam agora ${FatiasDePizza} fatias`)

}

console.log ("Você comeu todas as fatias, a pizza acabou")

/*Comando while executando primeiro e condicionando depois*/

let fatiaDeBolo = 6

do{
    console.log("comi uma fatia de bolo")

    fatiaDeBolo--

    console.log(`Agora o bolo tem ${fatiaDeBolo} fatias`)
}while(fatiaDeBolo > 0)

console.log("O bolo acabou")


