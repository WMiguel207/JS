console.log("Ex 1")

let idade = Number(prompt("Qual sua idade?"))
let CNH = prompt("Você tem carteira de motorista?")

if (CNH == "S"|| CNH == "s"){
    CNH = true
}else{
    CNH = false
}

if (idade >= 18 && CNH == true){
    console.log ("Você pode dirigir!")
}else if (CNH == false){
    console.log("Você não pode dirigir; falta a CNH")
}else{
    console.log("Você não pode dirigir; idade insuficiente")
}

console.log('/////////////////////////////////////')
console.log("Ex 2")

let JY = Number(prompt("Há quantos anos você trabalha no Senai?"))
let projct = Number(prompt("Quantos projetos você já produziu aqui?"))

if (JY >= 5 && projct >= 10){
    console.log("Você é elegivel para promoção!")
}else{
    console.log ("Você não é elegivel para uma promoção")
}

console.log('/////////////////////////////////////')
console.log("Ex 3")

let VD = Number(prompt( "Qual sua idade?"))

if (VD >= 18 && VD <= 30){
    console.log ("Seja bem-vindo")
}else{
    console.log ("Acesso negado")
}

console.log('/////////////////////////////////////')
console.log("Ex 4")

let x = Number(prompt("Qual sua idade?"))
let exp = prompt("Você possui experiencia na area?")

if (exp == "S"|| exp == "s"){
    exp = true
}else{
    exp = false
}

if (idade > 21 && exp == true){
    console.log ("Você foi aceito na vaga!")
}else if (exp == false && idade > 21){
    console.log("Você não foi aceito; falta de experiencia")
}else{
    console.log("Você não foi aceito; idade insuficiente")
}

console.log('/////////////////////////////////////')
console.log("Ex 5")

let user = String(prompt("Qual o nome do usuario?"))
let code = prompt("Qual sua senha", user, "?")

if (user == "admin" && code == "1234"){
    console.log("Bem-vindo,", user)
}else{
    console.log ("Acesso negado; usuario ou senha incorretos")
}

console.log('/////////////////////////////////////')
console.log("Ex 6")

let num = Number(prompt("Escolha um numero?"))

if (num >= 10 && num <= 20){
    let dif1 = (10 - num)
    let dif2 = (20 - num)
    console.log ("O numero esta entre 10 e 20")
    console.log (num, "esta a", dif1, "de diferença de 10")
    console.log (num, "esta a", dif2, "de diferença de 20")
}else if (num >= 30 && num <= 50){
    let dif1 = (30 - num)
    let dif2 = (50 - num)
    console.log ("O numero esta entre 30 e 50")
    console.log (num, "esta a", dif1, "de diferença de 30")
    console.log (num, "esta a", dif2, "de diferença de 50")
}else{
    console.log ("Ele não está dentro do intervalo de 10 a 20 ou de 30 a 50")
    if (num < 10){
        let dif1 = (10 - num)
        console.log (num, "é menor que 10, e esta a", dif1, "de diferença de 10")
    }else if (num > 20 && num < 30){
        console.log (num, "esta entre 20 e 30")
        let dif1 = (20 - num)
        let dif2 = (30 - num)
        console.log (num, "esta a", dif1, "de diferença de 20")
        console.log (num, "esta a", dif2, "de diferença de 30")
    }else if (num> 50){
        console.log (num, "é maior que 50")
        let dif1 = (50 - num)
        console.log (num, "esta a", dif1, "de diferença de 50")
    }
}

console.log('/////////////////////////////////////')
console.log("Ex 7")

let numb = Number(prompt("Escreva seu numero..."))

if (numb < 10 || numb > 100 || numb == 50){
    console.log ("Numero aceito")
}else{
    console.log ("Numero invalido")
}