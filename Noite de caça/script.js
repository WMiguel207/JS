let numeroSecreto;
let tentativasRestantes;
let historico = [];

const entradaPalpite = document.getElementById('entrada-palpite');
const botaoTentar = document.getElementById('botao-tentar');
const mensagem = document.getElementById('mensagem');
const listaHistorico = document.getElementById('lista-historico');
const spanTentativas = document.getElementById('tentativas');
const botaoReiniciar = document.getElementById('botao-reiniciar');

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;
    historico = [];

    mensagem.textContent = "🌲 Siga o rastro...";
    listaHistorico.innerHTML = "";
    spanTentativas.textContent = tentativasRestantes;
    entradaPalpite.disabled = false;
    botaoTentar.disabled = false;
    entradaPalpite.value = "";
}

function verificarPalpite() {
    const palpite = Number(entradaPalpite.value);

    if (!palpite || palpite < 1 || palpite > 100) {
        mensagem.textContent = "🌕 Mire entre 1 e 100, caçador(a)!";
        return;
    }

    historico.push(palpite);
    const itemHistorico = document.createElement('li');
    itemHistorico.textContent = `🏹 Disparo: ${palpite}`;
    listaHistorico.appendChild(itemHistorico);

    tentativasRestantes--;
    spanTentativas.textContent = tentativasRestantes;

    if (palpite === numeroSecreto) {
        mensagem.textContent = "🏹🌕 Tiro certeiro, caçador(a)! Você encontrou a presa escondida nas florestas!";
        encerrarJogo();
    } else if (tentativasRestantes === 0) {
        mensagem.textContent = `🌑 A presa escapou... O número era ${numeroSecreto}.`;
        encerrarJogo();
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "🦌 A presa corre para cima... Mire mais alto.";
    } else {
        mensagem.textContent = "🌲 O rastro desce... Mire mais baixo.";
    }

    entradaPalpite.value = "";
}

function encerrarJogo() {
    entradaPalpite.disabled = true;
    botaoTentar.disabled = true;
}

botaoTentar.addEventListener('click', verificarPalpite);
botaoReiniciar.addEventListener('click', iniciarJogo);
window.addEventListener('load', iniciarJogo);
