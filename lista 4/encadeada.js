console.log("Ex 1")

let FE = Number(prompt("Qual sua idade?"))

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

let temp = Number(prompt("Qual sua temperatura?"))

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
let tde = String(prompt("Qual seu horario de estudo?"))
if (tde == "M"){
    console.log("Bom dia!")
}else if (tde == "V"){
    console.log("Boa tarde!")
}else if (tde == "N"){
    console.log("Boa noite!")
}else{
    console.log("Turno inválido")
}

console.log('////////////////////////////////////////////////////////')
console.log("Ex 4")

let valor = Number(prompt("Qual o valor da compra?"))

if (valor <= 100){
    console.log("Desconto de 5%")
    let desc = (valor* 0.05)
    let NV = (valor - desc)
    console.log("O novo valor é", NV)
}else if (valor > 200){
    console.log("Desconto de 10%")
    let desc = (valor* 0.10)
    let NV = (valor - desc)
    console.log("O novo valor é", NV)
}else if (valor <= 100){
    console.log("Desconto de 15%")
    let desc = (valor* 0.15)
    let NV = (valor - desc)
    console.log("O novo valor é", NV)}

console.log('////////////////////////////////////////////////////////')
console.log("Ex 5")
    
let nota = Number(prompt("Qual a nota?"))
if (nota > 90){
    console.log("A")
}else if (nota> 80){
    console.log("B")
}else if (nota > 70){
    console.log("C")
}else if (nota >= 60){
    console.log("D")
}else if (nota < 60){
    console.log ("F")
}

console.log('////////////////////////////////////////////////////////')
console.log("Ex 6")

let day = Number(prompt("Qual o numero correspondente ao dia da semana de hoje?"))

if (day == 1){
    console.log("Domingo")
}else if (day == 2){
    console.log("Segunda-feira")
}else if (day == 3){
    console.log("Terça-feira")
}else if (day == 4){
    console.log("Quarta-feira")
}else if (day == 5){
    console.log("Quinta-feira")
}else if (day == 6){
    console.log("Sexta-feira")
}else if (day == 7){
    console.log("Sabado")
}else{
    console.log ("... mentiroso")
}

console.log('////////////////////////////////////////////////////////')
console.log("Ex 7")

let pista = Number(prompt("Qual a distancia em metros desta pista de corrida?"))

if (pista < 400){
    console.log("Pista curta")
}else if (pista < 800){
    console.log("Pista média")
}else if (pista < 1500){
    console.log("Pista longa")
}else if (pista > 1500){
    console.log("Pista muito longa")
}

console.log('////////////////////////////////////////////////////////')
console.log("Ex 8")

let pont = Number(prompt("Qual sua pontuação?"))

if (pont < 1000){
    console.log("Iniciante")
}else if (pont < 5000){
    console.log("Intermediario")
}else if (pont < 10000){
    console.log("Avançado")
}else if (pont > 10000){
    console.log("Mestre")
}