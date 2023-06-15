const cardDate = document.getElementById('card-date');
const userInput = document.getElementById('user-input-text');
const addBtn = document.getElementById('add-item-btn');
const listItems = document.getElementById('list-items');

// sets card date
const d = new Date();
cardDate.innerHTML = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;

let listLength = 0;

// add event listener to add item button
addBtn.addEventListener('click', addItem);

// list item template
const itemTemplate = document.createElement('div');

// add new list item to list
function addItem() {
    itemTemplate.innerHTML =  
                        `<div class="list-item" id='item-${listLength + 1}'>
                            <h4 class="list-item-name">${userInput.value}</h4>
                            <input type="checkbox" class="list-item-checkbox" onClick='itemCheckbox(this, "item-${listLength + 1}")'>
                        </div>`;
    // checks if user has input data                        
    if(userInput.value) {
        const newItem = itemTemplate.cloneNode(true);
        listItems.appendChild(newItem);
        listLength++;
        // resets input
        userInput.value = '';
    } else {
        alert('Please enter task');
    }
};

// checkboxes
function itemCheckbox(checkbox, ID) {
    const text = document.getElementById(ID).querySelector('h4');

    if (checkbox.checked) {
        text.style.textDecoration = 'line-through';
    } else {
        text.style.textDecoration = 'none';
    }
}