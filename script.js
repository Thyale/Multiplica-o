var nome = window.prompt ('Olá, qual o seu nome?')
var h1titulo = window.document.querySelector('h1.bemvindo')
h1titulo.innerHTML = `Bem vindo ${nome}`

function multiplicar(){
  var tn1 = window.document.querySelector('input#n1')
  var tn2 = window.document.querySelector('input#n2')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var multi = n1*n2
  var res = window.document.querySelector('p.resultado')
  res.innerHTML = `${multi}`
}