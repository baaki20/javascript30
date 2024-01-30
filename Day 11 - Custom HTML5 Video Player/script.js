const player = document.querySelector('.player')
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress-fill');
const fullProgressBar = player.querySelector('.progress');
const toggle = player.querySelector('.toggle');
const sliders = player.querySelectorAll('.player-slider');
const skips = player.querySelectorAll('[data-skip]');

let toggleClicked = false;
let mousemove = false;



/***********  functions   *************/

function play() {
    if (video.paused) {
        video.play();
    }else{
        video.pause();
    }
}

function updateToggle() {
    if (toggleClicked) {
        toggle.textContent ='❚❚';
    } else {
        toggle.textContent =  '►';
    }
}

function updateSkip() {
    const skipTime = parseFloat(this.dataset.skip);
    video.currentTime += skipTime;
}

function updateProgression() {
    const updateTime = (video.currentTime / video.duration) * 100;
    progress.style.width = `${updateTime}%`
}

function volumeAndSpeed() {
    if (toggleClicked) {
        video[this.name] = this.value;
    }
}

function scrub(e) {
        const jumpTo = (e.offsetX / this.offsetWidth) * video.duration;   
        video.currentTime = jumpTo;
}



/***********  event listeners   *************/

// event listeners for play()
video.addEventListener('click', play);
toggle.addEventListener('click', play);

// event listeners for updateToggle()
video.addEventListener('pause', () => {
    toggleClicked = false;
    updateToggle();
});
video.addEventListener('play', () => {
    toggleClicked = true;
    updateToggle();
});

// event listeners for skip()
skips.forEach(skip => skip.addEventListener('click', updateSkip));

// event listeners for updateProgression()
video.addEventListener('timeupdate', updateProgression);

// event listeners for volumeAndSpeed()
sliders.forEach(slider => slider.addEventListener('change', () => {
    toggleClicked = true;
    volumeAndSpeed;
}));
sliders.forEach(slider => slider.addEventListener('mousemove', volumeAndSpeed));
sliders.forEach(slider => slider.addEventListener('mousedown', () => {
    toggleClicked = true;
    volumeAndSpeed;
}));
sliders.forEach(slider => slider.addEventListener('mouseup', () => {
    toggleClicked = false;
    volumeAndSpeed;
}));

// event listener for scrub()
fullProgressBar.addEventListener('click', scrub);
fullProgressBar.addEventListener('mousemove', () => {
    if (mousemove) {
        scrub();
    }
});
fullProgressBar.addEventListener('mousedown', () => mousemove = true);
fullProgressBar.addEventListener('mouseup', () => mousemove = false);