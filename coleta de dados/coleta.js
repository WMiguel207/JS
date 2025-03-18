function mostrarNome() {
    let nome = document.getElementById("nome").value
    let mensagem = document.getElementById("mensagem")
    mensagem.innerText = "Oi, " + nome
}

function mostrarIdade() {
    let idade = parseInt(document.getElementById("idade").value)
    let result = document.getElementById("result")
    result.innerText = "Você tem " + idade + " anos."
}

function mostrarComent() {
    let coment = document.getElementById("coment").value
    let comentarioExibido = document.getElementById("comentarioExibido")
    comentarioExibido.innerText = coment
}

function attTXT(){
    let campoTxt = document.getElementById("campoTxt").value
    let txtDigitando = document.getElementById("txtDigitando")
    txtDigitando.innerText = campoTxt
}