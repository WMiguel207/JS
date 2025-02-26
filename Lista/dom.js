let gatoGordo1 = document.getElementById("gato-gordo1")

gatoGordo1.addEventListener("mousemove", function(){
    gatoGordo1.setAttribute("src", "img/gato.png")
})
gatoGordo1.addEventListener("mouseout", function(){
    gatoGordo1.setAttribute("src", "img/gato-gordo1.png")
})

let lista = document.getElementById ("lista")
let Add = document.getElementById ("add")
let Remove = document. getElementById ("remove")

Add.addEventListener("click", function(){
    let novoItem = document.createElement("li")
    novoItem.innerText = "Novo Item"
    lista.appendChild(novoItem)
})

Remove.addEventListener("click", function(){
    if (lista.lastChild){
        lista.removeChild(lista.lastChild)
    }
})