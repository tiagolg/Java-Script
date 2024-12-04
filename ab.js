let idade = 10

switch(idade){
    case  idade <0 && idade>=10:
        console.log("criança")
        break
    case idade >= 10 && idade <= 17:
        console.log("adolescente")
        break
    case idade >= 18 && idade <= 59:
        console.log("adulto")
        break
    case idade >= 60:
        console.log("idoso")
        break
    
}