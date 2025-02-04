console.log("Ex 1")

let FE = number(prompt("Qual sua idade?"))

if (FE < 12){
    console.log ("Criança")
} else if (FE <= 17){
    console.log("Adolescente")
}else if (FE <= 59){
    console.log("Adulto")
}else{
    console.log ("Idoso")
}

console.log('////////////////////////////////////////////////////////')
console.log("Ex 2")

let temp = number(prompt("Qual sua temperatura?"))

if (temp < 10){
    console.log ("Muito frio!")
} else if (temp < 20){
    console.log("Frio")
}else if (temp < 30){
    console.log("Agradavel")
}else if (temp > 30){
    console.log ("Muito quente!")
}

console.log('////////////////////////////////////////////////////////')
console.log("Ex 3")

console.log("MATUTINO; VESPERTINO; NOTURNO")
let tde = string(prompt("Qual seu horario de estudo?"))
 if (tde == M){
    console.log("Bom dia!")
 }else if (tde == V){
    console.log("Boa tarde!")
 }else if (tde == N){
    console.log("Boa noite!")
 }else{
    console.log("Turno inválido")
 }

 console.log('////////////////////////////////////////////////////////')
console.log("Ex 4")

let valor = number(prompt("Qual o valor da compra?"))

if (valor <= 100){
    console.log("Desconto de 5%")
    let desc = valor*0,05
}
let nota = Number(prompt("Qual a nota?"))
if (nota >= 9){
    console.log("Excelente")
}else if (nota>=7){
    console.log("Bom")
}else if (nota >= 5){
    console.log("Regular")
}else{
    console.log("Abaixo da média")
}

console.log('////////////////////////////////////////////////////////')
