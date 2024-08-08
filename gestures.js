const gestureArea = document.getElementById('gestureArea');
const pages = ['index.html', 'nav.html', 'cap1.html']; // Lista de páginas
let currentPageIndex = pages.indexOf(window.location.pathname.split('/').pop());

let startX, endX;
const threshold = 50; // Limite para considerar um gesto como swipe

gestureArea.addEventListener('touchstart', function(event) {
    const touch = event.touches[0];
    startX = touch.pageX;
}, false);

gestureArea.addEventListener('touchend', function(event) {
    const touch = event.changedTouches[0];
    endX = touch.pageX;

    handleGesture();
}, false);

function handleGesture() {
    const dx = endX - startX;

    if (Math.abs(dx) > threshold) { // Detecta um deslize significativo
        if (dx > 0) {
            // Swipe para a direita
            goToPreviousPage();
        } else {
            // Swipe para a esquerda
            goToNextPage();
        }
    }
}

function goToNextPage() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        window.location.href = pages[currentPageIndex];
    }
}

function goToPreviousPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        window.location.href = pages[currentPageIndex];
    }
}
