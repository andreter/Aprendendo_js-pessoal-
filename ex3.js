
function somar(){
    var num1 = document.querySelector('#n1')
    var num2 = document.querySelector('#n2')
    var res = document.querySelector('.resul')
    var nu1 = Number(num1.value)
    var nu2 = Number(num2.value)

    var s = nu1 + nu2 
    res.innerHTML = `a soma entre ${nu1} e ${nu2} é de ${s}`

}

