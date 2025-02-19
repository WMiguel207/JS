console.log ("")
alert(`Ex 1`)

function JavaScript (){
    console.log("Eu gosto de JS")
}

JavaScript()

console.log ("")
alert(`Ex 2`)

function cont(){
    for (let i = 0; i <= 5; i++){
        console.log(i)
    }
}

console.log(cont())

console.log ("")
alert(`Ex 3`)

function saudacao(){
    let nome = String(prompt("Qual seu nome?"))
    console.log("Olá", nome, "! Seja bem-vindo(a)")
}

saudacao()

console.log ("")
alert(`Ex 4`)

function mult(){
    console.log (5*3)
}

mult()

console.log ("")
alert(`Ex 5`)

function verify(){
    let idade = Number(prompt("Informe sua idade:"))
    if (idade>=18){
        console.log ("Maioridade")
    }else{
        console.log("Menor de idade; faltam", 18-idade, "até a maioridade")
    }
}

verify()

console.log ("")
alert(`Ex 6`)

function soma(a,b){
    console.log(a+b)
}

a = Number(prompt("Escolha um numero:"))
b = Number(prompt("Escolha outro numero:"))

console.log(soma(a,b))

console.log ("")
alert(`Ex 7`)

function area1 (largura,altura){
    console.log(largura * altura)
}

largura = Number(prompt("Escolha a largura do retangulo:"))
altura = Number(prompt("Escolha a altura do retangulo:"))

console.log(area1(largura,altura))

console.log ("")
alert(`Ex 8`)
let idade1 = Number(prompt("Qual a primeira idade?"))
    let idade2 = Number(prompt("Qual a segunda idade?"))

function comparacao(idade1,idade2){
    if (idade1==idade2){
        console.log("Ambos tem a mesma idade")
    }else if(idade1>idade2){
        console.log("A primeira pessoa é mais velha por", idade1-idade2, "anos")
    }else{
        console.log("A segunda pessoa é mais velha por", idade2-idade1, "anos")
    }
}

comparacao(idade1,idade2)