const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');
const button = document.querySelector('button');

let lastHole;
let score = 0;
let gameOver = false;

function randonTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const currentHole = holes[index];

    if(lastHole === currentHole) {
        return randomHole(holes);
    }
    lastHole = currentHole;

    return currentHole;
}

function peep() {
    const time = randonTime(200, 1000);
    const hole = randomHole(holes);

    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if(!gameOver) peep();
    }, time);
}

function bonk(e) {
    if(!e.isTrusted) return; // when a click is faked
    
    this.parentNode.classList.remove('up');
    score++;
    scoreBoard.textContent = `Score: ${score}`;
}

function startGame(e) {    
    score = 0;
    scoreBoard.textContent = 0;
    if(e.addEventListener === 'click') peep();
    peep();
    setTimeout(() => {
        gameOver = true;
    }, 10000);
}

moles.forEach(mole => mole.addEventListener('click', bonk));
button.addEventListener('click', startGame);