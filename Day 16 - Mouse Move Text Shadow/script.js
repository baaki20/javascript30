const hero = document.querySelector('.hero');
const text = document.querySelector('.text');
const walk = 20; // px

function textShadow(e) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;

    let x = e.offsetX;
    let y = e.offsetY;
    
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = x + e.target.offsetTop;
    }

    const xwalk = ((x / width) * walk) - (walk / 2);
    const ywalk = ((y / height) * walk) - (walk / 2);

    text.style.textShadow = `
    ${xwalk}px ${ywalk}px 0 rgba(255, 0, 0, 0.5),
    ${ywalk}px ${xwalk}px 0 rgba(0, 255, 0, 0.5),
    ${xwalk}px ${ywalk}px 0 rgba(0, 0, 255, 0.5),
    ${ywalk}px ${xwalk}px 0 rgba(255, 0, 0, 0.5)
    `;

}

hero.addEventListener('mousemove', textShadow);