let vet = []
let c = 0




function adicionar() {
    let num = document.querySelector('#num').value
    let g = document.querySelector('#grupo')

    if (num === '') {
        alert('Digite um numero')
    } else {
        num = Number(num)
    }

    if(num < 1 || num > 100){
        alert('Digite um número dentre as limitações')
    }else{

    vet[c] = num

    let pos = document.createElement('option')
    pos.text += `O número ${vet[c]} foi adicionado`

    g.appendChild(pos)

    c++
}
}

function finalizar() {
    let res = document.querySelector('.res')
    vet.sort()
    let maior = vet[0]
    let menor = vet[0]
    let soma = 0 
    let num_vet = vet.length

   
    for (let cont = 1; cont <= num_vet; cont++) {
        if (maior < vet[cont]) {
            maior = vet[cont]

        }
    }

    for (let cont = 1; cont <= num_vet; cont++) {
        if (menor > vet[cont]) {
            menor = vet[cont]

        }
    }

    for (let cont = 0; cont < num_vet; cont++) {

        soma += vet[cont]
    }

    let med = soma / num_vet
    res.innerHTML = ''
    res.innerHTML += `<p>O total de números nesta lista é de ${num_vet}</p>`
    res.innerHTML += `<p>O Maior dos numeros é ${maior}</p>`
    res.innerHTML += `<p>O Menor dos numeros é ${menor}</p>`
    res.innerHTML += `<p>A Média dos numeros é de ${med}</p>`


}





/*add numeros
        dos quais:
        não podem ter 2 do mesmo
        estar entre a limitação
        não pode estar vazio ao clicar nos botões
        
finalizar

        mostrar:
        total de indices
        maior valor
        menor valor
        soma de todos 
        e a média*/