const botaoAbrirPopUp = document.getElementById("abrirPopUp")
const popUp = document.getElementById("popUp")
const fundo = document.getElementById("fundo")
const mensagem = document.getElementById("mensagem")

botaoAbrirPopUp.addEventListener("click", ()=>{
    popUp.classList.remove("escondido")
    fundo.classList.remove("escondido")
})
// function responder(resposta){
//     mensagem.innerText="Você escolheu: " + resposta
//     popUp.classList.add("escondido")
//     fundo.classList.add("escondido")
// }

function abrirHTML(){
    window.location.href="outraPg.html"
}
function abrirSite(){
    window.location.href="https://youtu.be/dQw4w9WgXcQ?feature=shared"
}