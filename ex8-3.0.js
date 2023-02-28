function calcular(){

let num = document.querySelector('#num').value
let res = document.querySelector('#tabuada')


num = Number(num)

let cont 

res.innerHTML=""

/*while (cont <= 10)*/
for(cont = 0;cont<=10 ; cont++){
    let tab = document.createElement('option')
    tab.text += `${num} X ${cont} = ${num*cont}`
    /*(<Option>`${num} X ${cont} = ${num*cont}`</Option>)*/
    res.appendChild(tab)
    
}

res.innerHTML += "fim"

}

/**/