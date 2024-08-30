const slider = document.querySelector('.slider');
let isMoving = true;

slider.addEventListener('mouseover', () => {
    isMoving = false;
});

slider.addEventListener('mouseout', () => {
    isMoving = true;
});

setInterval(() => {
    if (isMoving) {
        slider.style.animationPlayState = 'running';
    } else {
        slider.style.animationPlayState = 'paused';
    }
}, 100);