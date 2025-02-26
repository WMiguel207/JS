let mudarCor = document.getElementById("mudarCor")

mudarCor.addEventListener("click", function(){
    if(mudarCor.style.backgroundColor == "red"){
        mudarCor.style.backgroundColor = "blue"
    }else{
        mudarCor.style.backgroundColor = "red"
    }
})

let likeClicker = document.getElementById("likeClicker")
let contador = 0
let mostrarContador = document.getElementById("mostrarContador")

likeClicker.addEventListener("click", function(){
    contador++
    mostrarContador.innerText = contador
})

let mudarOpc = document.getElementById("mudarOpc")
let p1 =document.getElementById ("1")
let p2 =document.getElementById ("2")
let p3 =document.getElementById ("3")
let p4 =document.getElementById ("4")
let p5 =document.getElementById ("5")

mudarOpc.addEventListener("click", function(){
    p1.innerText = "Eu gosto de JavaScript"
     p2.innerText = "Eu gosto de JavaScript"
      p3.innerText = "Eu gosto de JavaScript"
       p4.innerText = "Eu gosto de JavaScript"
        p5.innerText = "Eu gosto de JavaScript"
})

let msg = document.getElementById("msg")
let excluirMsg = document.getElementById ("excluirMsg")

excluirMsg.addEventListener("click", function(){
    msg.innerText = ""
    excluirMsg.innerText = "Mensagem enviada!"
})

let flex = document.getElementById("flex")
let txt1 = document.getElementById("txt1")
let txt2 = document.getElementById("txt2")
let altFlex = document.getElementById("altFlex")

altFlex.addEventListener("click", function(){
    flex.style.display = "flex"
})

let quadrado = document.getElementById("quadrado")
let square = document.getElementById("square")
let circle = document.getElementById("circle")

circle.addEventListener("click", function(){
    quadrado.style.borderRadius = "200px"
})

square.addEventListener("click", function(){
    quadrado.style.borderRadius = "0px"
})