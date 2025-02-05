const player = document.querySelector('.player');
const gameArea = document.querySelector('.game-area');

// Posições iniciais do jogador
let playerPosition = {
    x: gameArea.offsetWidth / 2 - player.offsetWidth / 2,
    y: gameArea.offsetHeight - player.offsetHeight - 10
};

let speed = 5;

// Função para mover o jogador com as teclas
function movePlayer(event) {
    const playerRect = player.getBoundingClientRect();
    switch (event.key) {
        case 'ArrowLeft':
            if (playerRect.left > 0) {
                playerPosition.x -= speed;
            }
            break;
        case 'ArrowRight':
            if (playerRect.right < gameArea.offsetWidth) {
                playerPosition.x += speed;
            }
            break;
        case 'ArrowUp':
            if (playerRect.top > 0) {
                playerPosition.y -= speed;
            }
            break;
        case 'ArrowDown':
            if (playerRect.bottom < gameArea.offsetHeight) {
                playerPosition.y += speed;
            }
            break;
    }
    updatePlayerPosition();
}

// Atualiza a posição do jogador na tela
function updatePlayerPosition() {
    player.style.left = `${playerPosition.x}px`;
    player.style.top = `${playerPosition.y}px`;
}

// Adiciona evento para mover o jogador
window.addEventListener('keydown', movePlayer);

// Criar inimigos em intervalos aleatórios
function createEnemy() {
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
    const xPosition = Math.random() * (gameArea.offsetWidth - 40); // Posição aleatória do inimigo
    enemy.style.left = `${xPosition}px`;
    gameArea.appendChild(enemy);

    // Inicia a animação de movimento
    setTimeout(() => {
        enemy.style.animation = 'moveEnemy 2s linear infinite';
    }, 100);

    // Remove o inimigo quando ele sair da tela
    enemy.addEventListener('animationiteration', () => {
        enemy.remove();
    });
}

// Criar inimigos a cada 3 segundos
setInterval(createEnemy, 3000);
