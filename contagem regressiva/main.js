let intervalo
let texto = document.getElementById("cont")

function iniciarCont(){
    clearInterval(intervalo)
    let campoData = document.getElementById("dataEvento")
    let dataEscolhida = campoData.value
    if(!dataEscolhida){
        texto.innerText = "Escolha uma data"
    }
    let data = new Date(dataEscolhida + "T00:00:00")
    intervalo = setInterval(function(){
        atualizarContagem(data)
    }, 1000)
}
function atualizarContagem(dataFutura){
    let agora = new Date()
    let diferenca = dataFutura - agora
    if(diferenca<=0){
        texto.innerText = "O tempo acabou"
    }
    let dias = Math.floor(diferenca/ (1000*60*60*24))
    let horas = Math.floor(diferenca% (1000*60*60*24)/(1000*60*60))
    let minutos = Math.floor(diferenca% (1000*60*60) /(1000*60))
    let segundos = Math.floor(diferenca%(1000*60)/(1000))

    texto.innerText = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
}