let jogadorEscolha = 0;
let jogadorPontos = 0;
let pcEscolha = 0;
let pcPontos = 0;
let ganhador = -1;

function jogar(Escolha) {
    jogadorEscolha = Escolha;
    pcEscolha = Math.floor(Math.random() * 3) + 1;

    if (jogadorEscolha === pcEscolha) {
        ganhador = 0;
    } else if (
        (jogadorEscolha === 1 && pcEscolha === 3) ||
        (jogadorEscolha === 2 && pcEscolha === 1) ||
        (jogadorEscolha === 3 && pcEscolha === 2)
    ) {
        ganhador = 1;
        jogadorPontos++;
    } else {
        ganhador = 2;
        pcPontos++;
    }

    document.querySelectorAll("#jogadorEscolha a, #pcEscolha a").forEach(el => el.classList.remove("selecionado"));

    document.getElementById("jogadorEscolha" + jogadorEscolha).classList.add("selecionado");
    document.getElementById("pcEscolha" + pcEscolha).classList.add("selecionado");

    let Mensagem = document.getElementById("Mensagem");
    if (ganhador === 0) {
        Mensagem.innerText = "Empate!";
    } else if (ganhador === 1) {
        Mensagem.innerText = "Usuário ganhou!";
    } else {
        Mensagem.innerText = "Computador ganhou!";
    }

    document.getElementById("jogadorPontos").innerText = jogadorPontos;
    document.getElementById("pcPontos").innerText = pcPontos;
}
