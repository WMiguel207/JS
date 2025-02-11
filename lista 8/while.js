alert (`Ex 1`)

let num = 0 

while (num <= 10){
    console.log ("Numero é", num)
    num++
}
console.log ("-/-/-/-/-/-/--/-/-/-/-/-/-/-/-/-/-/-/-")
alert (`Ex 2`)

num = Number(prompt("Escolha um numero:"))
let multiplicador = 1
while (multiplicador <= 10){
    result = (multiplicador*num)
    console.log (multiplicador, "=", result)
    multiplicador++
}
console.log ("-/-/-/-/-/-/--/-/-/-/-/-/-/-/-/-/-/-/-")
alert (`Ex 3`)

num = 10

while (num > 0){
    console.log (num)
    num--
}
console.log ("-/-/-/-/-/-/--/-/-/-/-/-/-/-/-/-/-/-/-")
alert (`Ex 4`)

let senha = String(prompt("Digite uma senha:"))

while (senha != "12345"){
    senha = prompt("Tente novamente:")
    if (senha == "12345"){
        
    }
}
console.log ("Bem-vindo")
console.log ("-/-/-/-/-/-/--/-/-/-/-/-/-/-/-/-/-/-/-")
alert (`Ex 5`)

num = 50

while (num <= 100){
    console.log ("Numero é", num)
    num++
}
console.log ("-/-/-/-/-/-/--/-/-/-/-/-/-/-/-/-/-/-/-")
alert (`Ex 6`)

num = 0

while (num <= 100){
    console.log ("Numero é", num)
    num += 5
}

console.log ("-/-/-/-/-/-/--/-/-/-/-/-/-/-/-/-/-/-/-")
alert (`Ex 7`)

num = 0

while (num < 5){
    console.log ("Eu gosto de JS!")
    num++
}

console.log ("-/-/-/-/-/-/--/-/-/-/-/-/-/-/-/-/-/-/-")
alert (`Ex 8`)

let nome = prompt("Qual seu nome?")
num = prompt("Escolha o numero de repetições:")
let cont = 0
while (cont != num){
    console.log(nome)
    cont++
}

alert(`FIM`)