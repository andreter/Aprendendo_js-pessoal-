
let agr = new Date()
let DiaSem = agr.getDay()

/*

let agr = new Date() ->  cria uma variavel com espaço para atribuir tempo
let DiaSem = agr.getDay() -> cria uma variavel pegando o espaço de tempo na var anterior e fala pra ela pegar o dia atual

o valor dado pelo getDay é o numero do dia da semana, sendo

0 = domingo
1 = segunda
2 = terça 
3 = quarta
4 = quinta 
5 = sexta 
6 = sabado

*/

console.log(DiaSem)

switch (DiaSem){
    case 0:
        console.log(`Domingo`)
    break

    case 1:
        console.log(`Segunda`)
    break

    case 2:
        console.log(`Terça`)
    break

    case 3:
        console.log(`Quarta`)
    break

    case 4:
        console.log(`Quinta`)
    break

    case 5:
        console.log(`Sexta`)
    break

    case 6:
        console.log(`Sábado`)
    break

    default:
        console.log(`Data Inválida`)
}



