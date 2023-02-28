let amigo = {
    nome: 'José',
    peso: 85.4,
    sexo: 'm',
    engordar (p=0){
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa agora ${amigo.peso}Kg`)