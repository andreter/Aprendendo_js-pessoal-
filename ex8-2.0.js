function contar() {

    let resul = document.querySelector(".res")
    let start = document.querySelector('#inicio').value
    let end = document.querySelector('#fim').value
    let step = document.querySelector('#passo').value

    start = Number(start)
    end = Number(end)
    step = Number(step)

    let cont = start
    resul.innerHTML = ``

/*

para tirar:
 step = 0
 start > end if step +
 start < end if step -


*/
    
    if (start === "" || end === "" || step === "") {
        resul.innerHTML = "Por favor preencha todos os valores"
    } else if(step == 0 ){
        resul.innerHTML= "por favor, digite um passo diferente de <strong>0</strong>"
    }else if (step > 0 && start > end){
        resul.innerHTML = "O <strong>inicio</strong> não pode ser maior que o <strong>fim</strong> se os passos forem <strong>positivos</strong>"
    }else if (step < 0 && start < end){
        resul.innerHTML = "O <strong>inicio</strong> não pode ser menor que o <strong>fim</strong> se os passos forem <strong>negativos</strong>"
    }else{


        while (cont <= end) {

            resul.innerHTML += `&#128073; ${cont}`

            cont += step


        }
        resul.innerHTML += "&#128073;&#129304;"
    }

}


function resetar() {
resul.innerHTML = `olá , ${start}`

  /*  let resul = document.querySelector(".res")
    resul.innerHTML = ""*/
}