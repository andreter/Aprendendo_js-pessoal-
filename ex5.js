let idade = 27
console.log(`Você tem ${idade} anos`)
if (idade < 16 ){
    console.log(`Logo você não pode votar`)
}else if (idade >= 16 && idade <18){
    console.log(`Logo seu voto é opcional`)
}else if(idade > 18){
    console.log(`Logo seu voto é obrigatório`)
}else{
    console.log(`dados invalidos`)
}