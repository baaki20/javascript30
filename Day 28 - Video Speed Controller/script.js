const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');

let isClicked = false;
const minSpeed = 0.2;
const maxSpeed = 4;
const defaultPlaybackSpeed = video.playbackRate // 1.0x
let height = (defaultPlaybackSpeed - minSpeed) / (maxSpeed - minSpeed);

function handleSpeed(e) {
    const y = e.pageY - speed.offsetTop;
    const fractionClicked = y / speed.offsetHeight;
    const playbackRate = fractionClicked * (maxSpeed - minSpeed) + minSpeed;
    
    height = (fractionClicked * 100) + '%';
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';

    video.playbackRate = playbackRate;
}

window.addEventListener('load', () => {
    bar.style.height = (height * 100) + '%';
    bar.textContent = defaultPlaybackSpeed.toFixed(2) + 'x';
});

speed.addEventListener('mousedown', (e) => {
    isClicked = true;
    handleSpeed(e);
});

speed.addEventListener('mousemove', (e) => {
    if(isClicked){
        handleSpeed(e);
    }
});

speed.addEventListener('mouseup', () => isClicked = false);
speed.addEventListener('mouseleave', () => isClicked = false);