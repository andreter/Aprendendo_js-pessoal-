/**/

/*aqui vou aprender sobre eventos 
e funções no js*/

/*mouseenter - quando o mouse entra na delimitação
mousemove - enquato o cursor estiver dentro 
mousedown - clicar e segurar
mouseup - soltar o botão do mouse
clik - clik
mouseout - quando o cursor sai */

/*mas existem muitos outros eventos de mouse em dom em js*/ 

/*Funções é uma sequencia de tarefas que sera realizada quando chamada*/
var a = document.querySelector('#area')
function clicar(){
    /*no html foi posto o evento onclick para disparar estas tarefas*/
    
    a.innerText ='clicou'
    a.style.background = 'red'
}

function entrar(){
    var a = document.querySelector('#area')
    a.innerText ='entrei'
}

function sair(){
    var a = document.querySelector('#area')
    a.innerText ='saí'
    a.style.background = 'rgb(7, 223, 7)'
}

/**/

/*mas tambem à a posibilidade de chamar os eventos apenas aqui no js*/

/*para isso devemos fazer da seguinte forma

a.addEventListener('click , clicar')
a.addEventListener('mouseenter , entrar')
a.addEventListener('mouseout , sair')

*/


