// Obtém o elemento onde os gestos serão detectados
const gestureArea = document.getElementById('gestureArea');

// Variáveis para armazenar as coordenadas de início e fim do toque
let startX, startY, endX, endY;

// Adiciona um ouvinte de eventos para o início do toque
gestureArea.addEventListener('touchstart', function(event) {
    const touch = event.touches[0]; // Obtém o primeiro ponto de toque
    startX = touch.pageX; // Armazena a coordenada X de início
    startY = touch.pageY; // Armazena a coordenada Y de início
}, false);

// Adiciona um ouvinte de eventos para o fim do toque
gestureArea.addEventListener('touchend', function(event) {
    const touch = event.changedTouches[0]; // Obtém o ponto de toque que terminou
    endX = touch.pageX; // Armazena a coordenada X de fim
    endY = touch.pageY; // Armazena a coordenada Y de fim

    handleGesture(); // Chama a função para lidar com o gesto
}, false);

// Função para lidar com o gesto baseado nas coordenadas armazenadas
function handleGesture() {
    const dx = endX - startX; // Diferença horizontal entre o início e o fim
    const dy = endY - startY; // Diferença vertical entre o início e o fim
    
    if (Math.abs(dx) > Math.abs(dy)) {
        // Se a diferença horizontal é maior que a vertical, é um swipe horizontal
        if (dx > 0) {
            gestureArea.innerHTML = 'Deslizar para a direita'; // Deslizar para a direita
        } else {
            gestureArea.innerHTML = 'Deslizar para a esquerda'; // Deslizar para a esquerda
        }
    } else {
        // Caso contrário, é um swipe vertical
        if (dy > 0) {
            gestureArea.innerHTML = 'Deslizar para baixo'; // Deslizar para baixo
        } else {
            gestureArea.innerHTML = 'Deslizar para cima'; // Deslizar para cima
        }
    }
}
