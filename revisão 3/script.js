function saudacao(){
    console.log("Olá")
    console.log("Função 'Saudação' executada")
}

saudacao()

function apresentacao(nome) {
    console.log("Função 'nome' executada")
    return "Olá, " + nome
}

console.log(apresentacao("Miguel"))

let anom = function (){
    console.log("Função 'anom' executada")
}
anom()

const mult = (a, b) =>{
    console.log("Função 'multiplicar' executada")
    return a * b
}
console.log(mult(3,5))

console.log("<-----------------------------------")
console.log("Manipulação do DOM")

const paragrafo = document.getElementById("msg")
const titulo = document.getElementById("titulo")
const novoItem = document.createElement("li")
const apagar = document.getElementById("apagar")
const caixa = document.getElementById("caixa")
const body = document.getElementById("body")
const botaoApagar = document.getElementById("apagar-botao")
const resposta = document.getElementById("resposta")
const tela = document.getElementById("tela")

function trocarTexto(){
    paragrafo.innerText = "Texto alterado pelo JS"
}
function trocarFundo(){
    if(body.style.backgroundColor == "blue"){
    body.style.backgroundColor = "white"
    body.style.color = "black"
    }else{
        body.style.backgroundColor = "blue"
        body.style.color = "white"
    }
}
function adicionarItem() {
      const lista = document.getElementById("minhaLista");
      const novoItem = document.createElement("li");
      novoItem.textContent = "Novo item";
      lista.appendChild(novoItem);
}
function remove(){
    apagar.remove()
    botaoApagar.remove()
}
function mudarTexto(){
    document.getElementById("tituloMudar").style.color = "blue"
    document.getElementById("tituloMudar").style.fontSize = "20px"
    document.getElementById("textoMudar").style.color = "green"
    document.getElementById("textoMudar").style.fontSize = "30px"
}

titulo.style.color ="red"
titulo.style.fontSize = "30px"
novoItem.innerText="Novo Item"
document.body.appendChild(novoItem)
botao.addEventListener("click", ()=>{
    alert("Você clicou no botão")
})
function mostrarTexto(){
   resposta.innerText = nome.value
}

function mudarBotao(){
    caixa.innerText = "Passando o cursor"
}
function botaoOriginal(){
    caixa.innerText = "Passe o cursor"
}
function esconder(){
    if(tela.style.display != "none"){
    tela.style.display = "none"
    }else{
        tela.style.display = "block"
    }
}

function randomSize(){
    let novoTamanho
    do{
        novoTamanho = Math.floor(Math.random()*40+1)
    }while(novoTamanho == body.style.fontSize || novoTamanho<10)
        body.style.fontSize = novoTamanho + "px"
}