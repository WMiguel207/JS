let paragrafo = document.getElementById("paragrafo")
let botao = document.getElementById("button")
botao.addEventListener("click", function() { 
    paragrafo.style.color = "blue"
})

let botao2 = document.getElementById("botao")
botao2.addEventListener("click", function(){
    botao2.style.backgroundColor = "red"
})

let dual = document.getElementById("dual")
dual.addEventListener("dblclick", function(){
    dual.style.backgroundColor = "purple"
})

let mudarLorem = document.getElementById("paragrafo2")
paragrafo2.addEventListener("mousemove", function(){
    paragrafo2.style.backgroundColor ="blue"
})
paragrafo2. addEventListener("mouseout", function(){
    paragrafo2.style.backgroundColor = "aqua"
})

let potato = document.getElementById("potato")
let botao3 = document.getElementById("botao3")

botao3.addEventListener("click", function(){
    potato.style.height = "200px"
    potato.style.width = "200px"
})

let botaoArredondar = document.getElementById("botaoArredondar")
let macaxera = document.getElementById("macaxera")

botaoArredondar.addEventListener("click", function(){
    macaxera.style.borderRadius = "20px"
})

let primeiroBotao = document.getElementById("primeiroBotao")
let primeiroParagrafo = document.getElementById("primeiroParagrafo")
let primeiroTexto = document.getElementById("primeiroTexto")

primeiroBotao.addEventListener("click", function(){
    primeiroParagrafo.style.color = "magenta"
    primeiroTexto.style.backgroundColor = "blue"
})

let segundoBotao = document.getElementById("segundoBotao")
let segundoParagrafo = document.getElementById("segundoParagrafo")
let segundoTexto = document.getElementById("segundoTexto")

segundoBotao.addEventListener("click", function(){
    segundoParagrafo.style.color = "purple"
    segundoTexto.style.backgroundColor = "green"
    segundoParagrafo.style.fontSize = "20px"
})

let terceiroBotao = document.getElementById("terceiroBotao")
let terceiroParagrafo = document.getElementById("terceiroParagrafo")
let terceiroTexto = document.getElementById("terceiroTexto")

terceiroBotao.addEventListener("click", function(){
    terceiroParagrafo.style.color = "orange"
    terceiroTexto.style.backgroundColor = "red"
    terceiroParagrafo.style.fontSize = "30px"
    terceiroTexto.style.borderRadius = "40px"
})








let texto = document.getElementById("texto")
texto.innerText = "Texto Alterado"
texto.style.color = "blue"
let button = document.getElementById("button")

let passe = document.getElementById("passe")
passe.addEventListener("mousemove", function(){
    passe.innerText = "o mouse está aqui"
    passe.style.backgroundColor = "yellow"
})
passe.addEventListener("mouseout", function(){
    passe.innerText = "passe o mouse aqui"
    passe.style.backgroundColor = "cyan"
    passe.style.fontSize = "16px"
})