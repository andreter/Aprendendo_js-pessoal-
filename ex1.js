/**/

/* Aqui irei aprender a como selecionar os objetos do meu site através da estrutura dom*/



/*  getElementsByTagName  */

var p1 = document.getElementsByTagName('p')[0]  
/*aqui declarei uma variavel e atribui a ela uma tag p (que ja esta no meu) arquivo html sendo ela a primeira tag 'p' ([0])*/

/*logo ele replicara o elemento p ja escrito*/
document.write(p1.innerText)

p1.style.color = 'blue'
/* atribui uma style cor azul a variavel p1*/

var corpo = document.body
corpo.style.backgroundColor = 'black'
corpo.style.color = 'white'

/*Nos comandos acima declarei uma variavel corpo e tribui
a ela a tag body, assim modificando o style dela */

document.write(p1.innerText)
document.write(p1.innerHTML)
/* podemos ver a diferença do innerText e o immerHTML
onde o innerText vai escrever o texto mas sem as tags de formatação,
ou seja, sem as tags childs de 'p' ja o innerHTML vai*/


/*  getElementsByid ou /*  getElementsByClassName  

estas aqui selecionam o elemento pelo nome da id ou class*/ 

var d = document.getElementById('exId')
var c = document.getElementsByClassName('exClass')

d.style.backgroundColor='green'
d.innerText = 'aqui eu modifiquei o texto original'
/*e ainda mudei o plano de fundo para verde*/

/*c.style.backgroundColor='white'
c.innerText = 'aqui eu modifiquei o texto original'*/

/*querySelector*/

c = document.querySelector('.exClass')
c.style.color = 'red'
c.innerText='querySelector'

/**/





