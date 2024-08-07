const gestureArea = document.getElementById('gestureArea');

let startX, startY, endX, endY;

// Lista das páginas em ordem
const pages = ['index.html', 'nav.html', 'cap1.html'];
let currentPageIndex = pages.indexOf(window.location.pathname.split('/').pop());

gestureArea.addEventListener('touchstart', function(event) {
    const touch = event.touches[0];
    startX = touch.pageX;
    startY = touch.pageY;
}, false);

gestureArea.addEventListener('touchend', function(event) {
    const touch = event.changedTouches[0];
    endX = touch.pageX;
    endY = touch.pageY;

    handleGesture();
}, false);

function handleGesture() {
    const dx = endX - startX;

    if (Math.abs(dx) > 50) { // Detecta um deslize significativo
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
