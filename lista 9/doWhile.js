console.log ("")
alert (`Ex 1`)

let num = 1

do {
    console.log (num)
    num += 1
}while (num <= 20)

console.log ("")
alert (`Ex 2`)

let conf = (prompt("Deseja continuar? (S ou N)").toLowerCase())
do{
    if(conf == "s"){
        conf = prompt("Deseja continuar continuando?").toLowerCase()
    }else{}
}while(conf == "s")
    console.log("Adeus!")

console.log ("")
alert (`Ex 3`)
let num2 = 1
let max = prompt("Escolha um numero")

do  {
    console.log (num2)
    num2 += 1
    }while(num2 <= max)

console.log ("")
alert (`Ex 4`)
    
let num3 = 1

do {
    console.log (num3)
    num3 += 2
}while (num3 <= 31)

console.log ("")
alert (`Ex 5`)

alert(`Escolha 5 Numeros`)
cont = 0

do{
    let num4 = prompt("Escolha um numero:")
    if(num4 > 0){
        console.log("Numero positivo")
    }else if (num4 < 0){
        console.log("Numero negativo")
    }else if (num4 == 0){
        console.log("É zero")
    }else{
        console.log ("Numero invalido;")
    }
    cont++
}while(cont != 5)

console.log ("")
alert (`Ex 6`)

let opc = prompt("Deseja fazer uma conta?").toLowerCase()

do{
    if(opc == "s"){
    alert(`Digite dois numeros:`)
    let num5 = Number(prompt("1:"))
    let num6 = Number(prompt ("2:"))
    let soma = (num5 + num6)
    console.log(num5, "+", num6, "=", soma)
    opc = prompt("Deseja fazer outra conta?").toLowerCase()}
}while(opc == "s")

    console.log("Adeus!")

alert(`FIM`)