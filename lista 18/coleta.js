
function roundAll(){
let round = document.getElementById("round")
let roundUp = document.getElementById("roundUp")
let roundDown = document.getElementById("roundDown")
let num = document.getElementById("num").value

round.innerText = (Math.round(num))
roundUp.innerText = (Math.ceil(num))
roundDown.innerText = (Math.floor(num))
}

function mostrarNome() {
    let nome = document.getElementById("nome").value
    let Alta = document.getElementById("Alta")
    let Baixa = document.getElementById("Baixa")
    Alta.innerText = (nome.toUpperCase())
    Baixa.innerText = (nome.toLowerCase())
}

let ram = document.getElementById("ram")
let numRandom = Math.random()*100
ram.innerText = (Math.round(numRandom))

function nayara(){
    let decimal = document.getElementById("decimal").value
    let decDuas = document.getElementById("decDuas")
    decDuas.innerText = (Number(decimal).toFixed(2))
}

function Trocar(){
    let original = document.getElementById("original").value
    let palavraNova = document.getElementById("palavraNova").value
    let palavraFora = document.getElementById("palavraFora").value
    let nova = document.getElementById("nova")
    nova.innerText = (original.replace(palavraFora,palavraNova))   
}

function verifyNum(){
    let numOrNot = document.getElementById("numOrNot").value
    let veredito = document.getElementById("veredito")
    if (isNaN(numOrNot)){
        veredito.innerText = "Não são numeros"
    }else{
        veredito.innerText = "São numeros"
    }
}

function verifyPosition(){
    let TXTbase = document.getElementById("TXTbase").value
    let numAverificar = document.getElementById("numAverificar").value
    let resultPosition = document.getElementById("resultPosition")

    resultPosition.innerText = (TXTbase.charAt(numAverificar))
}

function completarNome() {
    let nome = document.getElementById("nome1").value
    let sobrenome = document.getElementById("sobrenome").value
    let nomeCompleto = document.getElementById("nomeCompleto")
    nomeCompleto.innerText = nome + " " + sobrenome
}

function somarNumeros() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let resultadoSoma = document.getElementById("resultadoSoma")

    let soma = Number(num1) + Number(num2)
    resultadoSoma.innerText = soma
}

function verifyAge() {
    let idade = document.getElementById("idade").value;
    let resultadoIdade = document.getElementById("resultadoIdade");

    if (idade >= 18) {
        resultadoIdade.innerText = "Você pode dirigir!";
    } else {
        resultadoIdade.innerText = "Você não pode dirigir.";
    }
}