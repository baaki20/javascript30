const items = document.querySelector('.items');
let isClicked = false;
let startX;
let scrollLeft;

function mouseDown(e) {
    isClicked = true;
    scrollLeft = items.scrollLeft;
    items.classList.add('active');
    startX = e.pageX - items.offsetLeft; // startX is offsetLeft to take care of any available margins on items container
}

function outOfBounds() {
    isClicked = false;
    items.classList.remove('active');
}

function Dragging(e) {
    if(!isClicked) return;
    e.preventDefault();
    const x = e.pageX - items.offsetLeft;
    let walk = x - startX; // By how much have we deviated from the staring point, startX
    walk*=3; // Increase drag speed by a scale, say 3
    items.scrollLeft = scrollLeft - walk;
}

items.addEventListener('mousedown', mouseDown);
items.addEventListener('mouseleave', outOfBounds);
items.addEventListener('mouseup', outOfBounds);
items.addEventListener('mousemove', Dragging);