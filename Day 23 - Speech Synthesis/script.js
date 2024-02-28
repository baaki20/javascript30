const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

let voices = [];
const message = new SpeechSynthesisUtterance();
message.text = document.querySelector('[name="text"]').value;

function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option name=${voice.name}>${voice.name}</option>`)
        .join('');
}

function updateVoice() {
    message.voice = voices.find(voice => voice.name === this.value);
    console.log(this.value);
    toggle();
}

function updateOptions() {
    message[this.name] = this.value;
    toggle();
}

function toggle(start = true) {
    speechSynthesis.cancel();

    if(start) {
        speechSynthesis.speak(message);
    }
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', updateVoice);
options.forEach(option => option.addEventListener('change', updateOptions));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));