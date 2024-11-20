
let peso = prompt("digite seu peso")
let altura = prompt("digite sua altura")

let imc = peso / (altura * altura)
console.log(imc)

document.body.innerHTML = `<h1>Seu IMC é de${imc}</h1>`	
