document.addEventListener("DOMContentLoaded", () => {
    const tabuleiro = document.getElementById('puzzle-board');
    const botaoEmbaralhar = document.getElementById('shuffle-btn');
    const contadorMovimentos = document.getElementById('move-count');
    const contadorTempo = document.getElementById('time-count');
    const mensagemVitoria = document.getElementById('win-message');
    const botaoJogarNovamente = document.getElementById('play-again');
    const botaoNovato = document.getElementById('novato');
    const botaoExperiente = document.getElementById('experiente');
    const botaoFormando = document.getElementById('formando');
    const textoNivel = document.getElementById('Nivel');

    let pecas = [];
    let indiceVazio = 0;
    let contadorMovimentosTotal = 0;
    let tempo = 0;
    let intervalo = null;
    let jogoAtivo = false;

    let tamanhoGrade = 4;
    let totalPecas = 16;
    let dificuldadeAtual = 'novato';

    function definirDificuldade(dificuldade) {
        switch (dificuldade) {
            case 'novato':
                tamanhoGrade = 2;
                totalPecas = 4;
                textoNivel.textContent = 'Nível: Novato';
                break;
            case 'experiente':
                tamanhoGrade = 3;
                totalPecas = 9;
                textoNivel.textContent = 'Nível: Experiente';
                break;
            case 'formando':
                tamanhoGrade = 4;
                totalPecas = 16;
                textoNivel.textContent = 'Nível: Formando';
                break;
        }
        dificuldadeAtual = dificuldade;
        iniciarPuzzle();
        embaralharPuzzle();
    }

    botaoNovato.addEventListener('click', () => definirDificuldade('novato'));
    botaoExperiente.addEventListener('click', () => definirDificuldade('experiente'));
    botaoFormando.addEventListener('click', () => definirDificuldade('formando'));

    function iniciarPuzzle() {
        botaoEmbaralhar.disabled = false;
        botaoEmbaralhar.classList.remove('desativado');
        botaoNovato.disabled = false;
        botaoNovato.classList.remove('desativado');
        botaoExperiente.disabled = false;
        botaoExperiente.classList.remove('desativado');
        botaoFormando.disabled = false;
        botaoFormando.classList.remove('desativado');
        tabuleiro.style.backgroundImage = 'none';
        tabuleiro.innerHTML = '';
        pecas = [];
        contadorMovimentosTotal = 0;
        tempo = 0;
        jogoAtivo = false;
        clearInterval(intervalo);
        contadorMovimentos.textContent = '0';
        contadorTempo.textContent = '0s';
        mensagemVitoria.classList.add('hidden');

        tabuleiro.style.gridTemplateColumns = `repeat(${tamanhoGrade}, 1fr)`;

        for (let i = 0; i < totalPecas; i++) {
            while (pecas[i] == i) {
                i = Math.floor(Math.random() * totalPecas);
            }
            const peca = document.createElement('div');
            peca.className = 'bloco';
            peca.dataset.index = i;

            if (i < totalPecas - 1) {
                const img = document.createElement('img');
                img.src = `img/${dificuldadeAtual}/part${i + 1}.png`;
                img.className = 'part';
                img.style.width = '100%';
                img.style.height = '100%';
                peca.appendChild(img);
                peca.dataset.value = i + 1;
            } else {
                peca.dataset.value = 'empty';
                indiceVazio = i;
            }

            peca.addEventListener('click', () => clicarPeca(i));
            tabuleiro.appendChild(peca);
            pecas.push(peca);
        }

        atualizarTabuleiro();
    }

    function embaralharPuzzle() {
        contadorMovimentosTotal = 0;
        tempo = 0;
        contadorMovimentos.textContent = '0';
        contadorTempo.textContent = '0s';
        clearInterval(intervalo);
        jogoAtivo = true;

        intervalo = setInterval(() => {
            tempo++;

            const minutos = Math.floor(tempo / 60);
            const segundos = tempo % 60;

            if (minutos > 0) {
                contadorTempo.textContent = `${minutos}m ${segundos.toString().padStart(2, '0')}s`;
            } else {
                contadorTempo.textContent = `${segundos}s`;
            }
        }, 1000);

        const valores = [...Array(totalPecas - 1).keys()].map(i => (i + 1).toString());
        valores.push('empty');

        let vazioAtual = totalPecas - 1;
        for (let i = 0; i < 1000; i++) {
            const movimentosPossiveis = getMovimentosValidos(vazioAtual);
            const moverPara = movimentosPossiveis[Math.floor(Math.random() * movimentosPossiveis.length)];
            [valores[vazioAtual], valores[moverPara]] = [valores[moverPara], valores[vazioAtual]];
            vazioAtual = moverPara;
        }

        valores.forEach((val, i) => {
            pecas[i].dataset.value = val;
            if (val === 'empty') indiceVazio = i;
        });
     if (!jogoAtivo) return;
     do{
        for (let i = 0; i < 1000; i++) {    
            const movimentosPossiveis = getMovimentosValidos(vazioAtual);
            const moverPara = movimentosPossiveis[Math.floor(Math.random() * movimentosPossiveis.length)];
            [valores[vazioAtual], valores[moverPara]] = [valores[moverPara], valores[vazioAtual]];
            vazioAtual = moverPara;
        }
        valores.forEach((val, i) => {
            pecas[i].dataset.value = val;
            if (val === 'empty') indiceVazio = i;
        });
     }while(verificarVitoria());


    atualizarTabuleiro();
    }

    function getMovimentosValidos(indice) {
        const movimentos = [];
        const linha = Math.floor(indice / tamanhoGrade);
        const coluna = indice % tamanhoGrade;

        if (linha > 0) movimentos.push(indice - tamanhoGrade);
        if (linha < tamanhoGrade - 1) movimentos.push(indice + tamanhoGrade);
        if (coluna > 0) movimentos.push(indice - 1);
        if (coluna < tamanhoGrade - 1) movimentos.push(indice + 1);

        return movimentos;
    }

    function atualizarTabuleiro() {
        pecas.forEach(peca => {
            const val = peca.dataset.value;
            const img = peca.querySelector('img');

            if (val === 'empty') {
                if (img) img.style.display = 'none';
                peca.classList.add('transparente');
            } else {
                if (!img) {
                    const novaImg = document.createElement('img');
                    novaImg.src = `img/${dificuldadeAtual}/part${val}.png`;
                    novaImg.className = 'part';
                    novaImg.style.width = '100%';
                    novaImg.style.height = '100%';
                    peca.appendChild(novaImg);
                } else {
                    img.src = `img/${dificuldadeAtual}/part${val}.png`;
                    img.style.display = 'block';
                }
                peca.classList.remove('transparente');
            }

            peca.classList.remove('moving');
        });

        if (jogoAtivo && verificarVitoria()) {
            jogoAtivo = false;
            clearInterval(intervalo);
            botaoEmbaralhar.disabled = true;
            botaoEmbaralhar.classList.add('desativado');
            botaoNovato.disabled = true;
            botaoNovato.classList.add('desativado');
            botaoExperiente.disabled = true;
            botaoExperiente.classList.add('desativado');
            botaoFormando.disabled = true;
            botaoFormando.classList.add('desativado');

            tabuleiro.style.backgroundImage = `url('img/${dificuldadeAtual}/vitoria.png')`;
            tabuleiro.style.backgroundSize = 'cover';

            pecas.forEach((peca) => {
                peca.style.transition = 'opacity 0.5s';
                peca.style.opacity = '0'
            })

            setTimeout(() => {
                mensagemVitoria.classList.remove('hidden');

                setTimeout(() => {
                    pecas.forEach(peca => peca.classList.remove('vitoria'));
                }, 2000);
            }, 2000);
        }
    }

    function clicarPeca(indiceClicado) {
        if (!jogoAtivo) return;

        const diferenca = Math.abs(indiceClicado - indiceVazio);
        const mesmaLinha = Math.floor(indiceClicado / tamanhoGrade) === Math.floor(indiceVazio / tamanhoGrade);
        const adjacente = (diferenca === 1 && mesmaLinha) || diferenca === tamanhoGrade;

        if (adjacente) {
            pecas[indiceClicado].classList.add('moving');

            const temp = pecas[indiceVazio].dataset.value;
            pecas[indiceVazio].dataset.value = pecas[indiceClicado].dataset.value;
            pecas[indiceClicado].dataset.value = temp;

            indiceVazio = indiceClicado;
            contadorMovimentosTotal++;
            contadorMovimentos.textContent = contadorMovimentosTotal.toString();
            atualizarTabuleiro();
        }
    }

    function verificarVitoria() {
        for (let i = 0; i < totalPecas - 1; i++) {
            if (pecas[i].dataset.value !== (i + 1).toString()) return false;
        }
        return pecas[totalPecas - 1].dataset.value === 'empty';
    }

    botaoEmbaralhar.addEventListener('click', embaralharPuzzle);
    botaoJogarNovamente.addEventListener('click', () => {
        iniciarPuzzle();
        embaralharPuzzle();
    });

    definirDificuldade('novato');
});