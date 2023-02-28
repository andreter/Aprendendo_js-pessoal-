function calcular(){

let vel = document.querySelector('#vel').value
vel = Number(vel)

let res = document.querySelector('#res')

res.innerHTML = `Sua velocidade  atual é de <strong>${vel} km/h </strong>`


if(vel > 60){
    res.innerHTML += `<p> Você esta multado por excesso de velocidade </p>`
}

res.innerHTML += `<p>Dirija com cuidado</p>`

}


