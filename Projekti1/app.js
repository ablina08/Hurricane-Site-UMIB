const list = document.querySelector('.list');
const items = document.querySelectorAll('.item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const timeRunning = document.querySelector('.timeRunning');

let currentIndex = 0;

function showSlide(index) {
    const totalItems = items.length;
    if (index < 0) {
        currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    list.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function autoSlide() {
    showSlide(currentIndex + 1);
}

next.addEventListener('click', () => showSlide(currentIndex + 1));
prev.addEventListener('click', () => showSlide(currentIndex - 1));

let interval = setInterval(autoSlide, 3000);

// Pause carousel on hover
list.addEventListener('mouseover', () => clearInterval(interval));
list.addEventListener('mouseout', () => (interval = setInterval(autoSlide, 3000)));


   