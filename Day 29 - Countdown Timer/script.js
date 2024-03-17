const timerDisplay = document.querySelector('.display-time-left');
const endTimeDisplay =  document.querySelector('.display-end-time');
const buttons = document.querySelectorAll('[data-time]');

let countdown;

function setTimer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600 / 60));
    const remainderSeconds = seconds % 60;
    
    timerDisplay.textContent = `${hours}h:${includeZero(minutes)}${minutes}m:${includeZero(remainderSeconds)}${remainderSeconds}s`;
    document.title = timerDisplay.textContent;
}

function displayEndTime(timestamp) {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    let hourFormat;

    if(hours < 10) {
        hourFormat = `0${hours}`;
    }
    else if(hours > 12) {
        hours = hours - 12;
        hourFormat = `0${hours}`;
    }
    endTimeDisplay.textContent = `Be back at ${hourFormat}:${includeZero(minutes)}${minutes}${hours < 12 ? 'am' : 'pm'}`;
}

function updateTimer(seconds) {
    setTimer(this.dataset.time);
}

function includeZero(time) {
    return time < 10 ? '0' : '';
}

function handleSubmit(e) {
    e.preventDefault();
    const seconds = this.minutes.value * 60;
    setTimer(seconds);
    this.reset();
    
}

buttons.forEach(button => button.addEventListener('click', updateTimer));
document.customForm.addEventListener('submit', handleSubmit);