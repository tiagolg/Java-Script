let peso = 12
let altura = 1.70

let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log("Maagreza")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("Normal")
}else if(imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso")
}else if(imc >= 30 && imc <= 34.9){
    console.log("Obesidade Grau I")
}else if(imc >= 35 && imc <= 39.9){
    console.log("Obesidade Grau II")
}else{
    console.log("Obesidade Grau III")
}