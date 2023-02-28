let vet = [0,10,20,30,40,50,60]
let cont

for (cont = 0;cont < vet.length; cont++){
    console.log(vet[cont])
}

for (cont in vet){ // esta sitaxe (para cont dentro de vet) só funfa para vetores e obj
    console.log(vet[cont])
}