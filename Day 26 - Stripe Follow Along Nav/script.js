const triggers = document.querySelectorAll('.cool > li');
const nav = document.querySelector('.top');
const background = document.querySelector('.dropdownBackground');

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if(this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active'); 
        }
    }, 150);

    const dropdown = this.querySelector('.dropdown');
    
    const dropDownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    
    const coords = {
        width: dropDownCoords.width,
        height: dropDownCoords.height,
        left: dropDownCoords.left - navCoords.left,
        top: dropDownCoords.top - navCoords.top
    }

    background.classList.add('open');

    background.style.width = `${coords.width}px`;
    background.style.height = `${coords.height}px`;
    background.style.left = `${coords.left}px`;
    background.style.top = `${coords.top}px`;
    
    /* Alternative to styling background*/
    //background.style.setProperty('width', `${coords.width}px`);
    //background.style.setProperty('height', `${coords.height}px`);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));