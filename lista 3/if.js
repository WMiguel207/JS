
let idade = prompt("Qual sua idade?")
console.log("Sua idade é", idade)

if (idade >= 18){
    console.log ("Você é maior de idade!")
} else{
    console.log("Você é menor de idade!")
}
console.log('////////////////////////////////////////////////////////')
console.log("Ex 2")
let num = prompt('Escolha um numero')
console.log('Seu numero é', num)

if (num%2 == 0){
    console.log ("O numero é par!")
}else{
    console.log("O numero é impar!")
}
console.log('////////////////////////////////////////////////////////')
console.log("Ex 3")
let nota1 = Number(prompt("Qual sua primeira nota?"))
let nota2 = Number(prompt("Qual sua segunda nota?"))
let nota3 = Number(prompt("Qual sua terceira nota?"))
let total = nota1 + nota2 + nota3
let media = total / 3
console.log ("Sua nota total é", total)
console.log ("Sua média é", media)
if (media >= 7){
    console.log ("Você foi aprovado! :D")
}else{
    console.log ("Você foi reprovado :(")
}
console.log('////////////////////////////////////////////////////////')
console.log("Ex 4")
let verify = prompt("Qual sua idade?")
console.log ("Hmmm...", verify)

if (verify >= 18){
    console.log ("Aproveite o evento!")
}else{
    let diferença = (18 - verify)
    console.log ("Volte daqui a", diferença, "anos")
}
console.log('////////////////////////////////////////////////////////')
console.log("Ex 5")

let code = prompt("Digite a senha:")

if (code == "1234"){
    console.log("Bem-vindo, admin")
}else{
    console.log("Senha incorreta; tente novamente mais tarde")
}
console.log('////////////////////////////////////////////////////////')
console.log("Ex 6")

let temp = prompt("Qual a temperatura ambiente?")

if (temp > 30){
    console.log ("Está quente!")
} else{
    console.log("Está frio!")
}

console.log('////////////////////////////////////////////////////////')
console.log("Ex 7")

let num1 = prompt("Escolha um numero?")

if (num1 > 0){
    console.log ("É positivo!")
} else if (num1 == 0){
    console.log("É zero!")
}else{
    console.log("É negativo")
}

console.log('////////////////////////////////////////////////////////')
console.log("FIM DO EXERCICIO")