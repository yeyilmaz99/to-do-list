// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const taskList = document.querySelector('#task-list');
const btnDeleteAll = document.querySelector('#btnDeleteAll')
const items = ['item 1', 'item 2', 'item 3', 'item 4']
// adding item

loadItems();
eventListeners();

function eventListeners() {
    form.addEventListener('submit', addNewItem);
    btnDeleteAll.addEventListener('click', deleteAllItems);
    taskList.addEventListener('click', deleteItems);
}

function loadItems() {
    items.forEach( function (item){
        createItem(item);
    })
}

function createItem(text) {
    let li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    let a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href' , '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);
}


function addNewItem(e) {
    if(input.value ===''){
        alert('Please enter value');
    }
    createItem(input.value);

    input.value = ''


    e.preventDefault();
}

function deleteAllItems(e) {

        taskList.innerHTML = '';



    e.preventDefault();
}

function deleteItems(e) {
    if(e.target.className ==='fas fa-times'){

        e.target.parentElement.parentElement.remove();
    }


    e.preventDefault()
}