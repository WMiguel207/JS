document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById('puzzle-board');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const moveCount = document.getElementById('move-count');
    const timeCount = document.getElementById('time-count');
    const winMessage = document.getElementById('win-message');
    const playAgainBtn = document.getElementById('play-again');
    const novato = document.getElementById('novato');
    const experiente = document.getElementById('experiente');
    const formando = document.getElementById('formando');
    const nivelText = document.getElementById('Nivel');

    let tiles = [];
    let emptyIndex = 0;
    let moveCounter = 0;
    let timer = 0;
    let timerInterval = null;
    let isGameActive = false;

    let gridSize = 4;
    let totalTiles = 16;
    let currentDifficulty = 'formando';

    function setDifficulty(difficulty) {
        switch (difficulty) {
            case 'novato':
                gridSize = 2;
                totalTiles = 4;
                nivelText.textContent = 'Nível: Novato';
                break;
            case 'experiente':
                gridSize = 3;
                totalTiles = 9;
                nivelText.textContent = 'Nível: Experiente';
                break;
            case 'formando':
                gridSize = 4;
                totalTiles = 16;
                nivelText.textContent = 'Nível: Formando';
                break;
        }
        currentDifficulty = difficulty;
        initPuzzle();
        shufflePuzzle();
    }

    novato.addEventListener('click', () => setDifficulty('novato'));
    experiente.addEventListener('click', () => setDifficulty('experiente'));
    formando.addEventListener('click', () => setDifficulty('formando'));

    function initPuzzle() {
        board.innerHTML = '';
        tiles = [];
        moveCounter = 0;
        timer = 0;
        isGameActive = false;
        clearInterval(timerInterval);
        moveCount.textContent = '0';
        timeCount.textContent = '0s';
        winMessage.classList.add('hidden');

        board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

        for (let i = 0; i < totalTiles; i++) {
            const tile = document.createElement('div');
            tile.className = 'bloco';
            tile.dataset.index = i;

            if (i < totalTiles - 1) {
                const img = document.createElement('img');
                img.src = `img/${currentDifficulty}/part${i + 1}.png`; 
                img.className = 'part';
                img.style.width = '100%';
                img.style.height = '100%';
                tile.appendChild(img);
                tile.dataset.value = i + 1;
            } else {
                tile.dataset.value = 'empty';
                emptyIndex = i;
            }

            tile.addEventListener('click', () => handleTileClick(i));
            board.appendChild(tile);
            tiles.push(tile);
        }

        updateBoard();
    }

    function shufflePuzzle() {
        moveCounter = 0;
        timer = 0;
        moveCount.textContent = '0';
        timeCount.textContent = '0s';
        clearInterval(timerInterval);
        isGameActive = true;

timerInterval = setInterval(() => {
    timer++;

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    if (minutes > 0) {
        timeCount.textContent = `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
    } else {
        timeCount.textContent = `${seconds}s`;
    }
}, 1000);


        const values = [...Array(totalTiles - 1).keys()].map(i => (i + 1).toString());
        values.push('empty');

        let currentEmpty = totalTiles - 1;
        for (let i = 0; i < 1000; i++) {
            const possibleMoves = getValidMoves(currentEmpty);
            const moveTo = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            [values[currentEmpty], values[moveTo]] = [values[moveTo], values[currentEmpty]];
            currentEmpty = moveTo;
        }

        values.forEach((val, i) => {
            tiles[i].dataset.value = val;
            if (val === 'empty') emptyIndex = i;
        });

        updateBoard();
    }

    function getValidMoves(index) {
        const moves = [];
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;

        if (row > 0) moves.push(index - gridSize);
        if (row < gridSize - 1) moves.push(index + gridSize);
        if (col > 0) moves.push(index - 1);
        if (col < gridSize - 1) moves.push(index + 1);

        return moves;
    }

    function updateBoard() {
        tiles.forEach(tile => {
            const val = tile.dataset.value;
            const img = tile.querySelector('img');

            if (val === 'empty') {
                if (img) img.style.display = 'none';
                tile.classList.add('transparente');
            } else {
                if (!img) {
                    const newImg = document.createElement('img');
                    newImg.src = `img/${currentDifficulty}/part${val}.png`;
                    newImg.className = 'part';
                    newImg.style.width = '100%';
                    newImg.style.height = '100%';
                    tile.appendChild(newImg);
                } else {
                    img.src = `img/${currentDifficulty}/part${val}.png`;
                    img.style.display = 'block';
                }
                tile.classList.remove('transparente');
            }

            tile.classList.remove('moving');
        });

       if (isGameActive && checkWin()) {
    isGameActive = false;

    clearInterval(timerInterval);

tiles.forEach(tile => tile.classList.add('vitoria'));

setTimeout(() => {
    winMessage.classList.remove('hidden');

    setTimeout(() => {
        tiles.forEach(tile => tile.classList.remove('vitoria'));
    }, 2000); 
}, 1500); 

}

    }

    function handleTileClick(clickedIndex) {
        if (!isGameActive) return;

        const diff = Math.abs(clickedIndex - emptyIndex);
        const sameRow = Math.floor(clickedIndex / gridSize) === Math.floor(emptyIndex / gridSize);
        const isAdjacent = (diff === 1 && sameRow) || diff === gridSize;

        if (isAdjacent) {
            tiles[clickedIndex].classList.add('moving');

            const temp = tiles[emptyIndex].dataset.value;
            tiles[emptyIndex].dataset.value = tiles[clickedIndex].dataset.value;
            tiles[clickedIndex].dataset.value = temp;

            emptyIndex = clickedIndex;
            moveCounter++;
            moveCount.textContent = moveCounter.toString();
            updateBoard();
        }
    }

    function checkWin() {
        for (let i = 0; i < totalTiles - 1; i++) {
            if (tiles[i].dataset.value !== (i + 1).toString()) return false;
        }
        return tiles[totalTiles - 1].dataset.value === 'empty';
    }
    shuffleBtn.addEventListener('click', shufflePuzzle);
    playAgainBtn.addEventListener('click', () => {
        initPuzzle();
        shufflePuzzle();
    });

    setDifficulty('formando');
});
