const button = document.getElementById('confettiButton');

button.addEventListener('click', function() {
    nConfetti = window.innerWidth / 2
    createNConfetti(nConfetti);
});

function createNConfetti(n) { 
    const fragment = document.createDocumentFragment();

    for(let i = 0; i <= n; i++) {
        const confetti = createConfetti();
        fragment.appendChild(confetti);
    }

    document.body.appendChild(fragment);
}

function createConfetti() {

    const startPositionY = 0;
    const minX = window.innerWidth * 0.04;
    const maxX = window.innerWidth * 0.96;
    const startPositionX = Math.random() * (maxX - minX) + minX; 
    const duration = Math.random() * 3 + 2; 

    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    confetti.style.top = startPositionY + 'px';
    confetti.style.left = startPositionX + 'px';

    confetti.style.animationDuration = duration + 's';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationName = 'fall';
    confetti.style.animationTimingFunction = 'ease-in';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    setTimeout(() => {
        confetti.remove();
    }, duration * 1000);

    return confetti; 
}

function getRandomColor() {
    const colors = ['#4287f5', '#f542dd', '#f54263', '#48f542', '#f58a42', '#edd605'];
    return colors[Math.floor(Math.random() * colors.length)];
}
