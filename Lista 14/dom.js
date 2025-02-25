let titulo =  document.getElementById("titulo")
console.log(titulo.innerText)

let texto = document.getElementById("texto")
texto.innerText = "Texto Alterado"

texto.style.color = "blue"

let button = document.getElementById("button")
  
button.addEventListener("click", function() { 
    alert(`Botao clicado`)
})

let dual = document.getElementById("dual")

dual.addEventListener("dblclick", function(){
    dual.style.backgroundColor = "purple"
})

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