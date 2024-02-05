const wrapper = document.querySelector('.wrapper');
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name="item"]')).value;
    const item = {
        text,
        done: false
    };
    this.reset();
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function populateList(items = [], itemsList) {
    itemsList.innerHTML = items.map((item, i) => {  
        return `
        <li>
            <input type="checkbox" data-index="${i}" id="item${i}" ${item.done ? 'checked' : ''}>
            <label for="item${i}">${item.text}</label>
        </li>
        `  
    }).join('');
    
}

function toggleDone(e) {
    const element = e.target;
    const index = element.dataset.index;
    
    if (!element.matches('input')) return;
    items[index].done = !items[index].done;
    
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function clearItems() {
    localStorage.clear();
    items = [];
    populateList(items, itemsList);
    itemsList.innerHTML = `<li><em>list cleared</em></li>`;
  }

document.querySelector('.clear').addEventListener('click', clearItems);
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

