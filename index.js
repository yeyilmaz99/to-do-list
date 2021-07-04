// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const taskList = document.querySelector('#task-list');
const doneList = document.querySelector('#done-list');
const btnDeleteAll = document.querySelector('#btnDeleteAll')
const btnDeleteAllDoneList = document.querySelector('#btnDeleteAllDoneList')
const items = [
    "Wash Dishes",
    "Water flowers",
    "Pay the bills",
    "Go to the vet",
    "Write Code",
    "Do Sex",
    "Go to the market",
    "Go to the gym",
    "See the doctor"]

loadItems();
eventListeners();

function eventListeners() {
    //adding new item
    form.addEventListener('submit', addNewItem);
    // deleting all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
    btnDeleteAllDoneList.addEventListener('click', deleteAllItemsDoneList)
    // deleting an item
    taskList.addEventListener('click', deleteItems);
    doneList.addEventListener('click', deleteItems)
    // moving an item to done list
    taskList.addEventListener('click', moveToTheDoneList);
    doneList.addEventListener('click', moveToTheTaskList);
}

function loadItems() {
    items.forEach( function (item){
        createItem(item);
    })
}

function createItem(text) {
    //creating li
    let li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));
    // creating x button
    let a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href' , '#');
    a.innerHTML = '<i class="fas fa-times"></i>';
    // adding a to li
    li.appendChild(a);
    // adding li to tasklist
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

function deleteAllItemsDoneList(e) {
    doneList.innerHTML = '';
    e.preventDefault();
}


function deleteItems(e) {
    if(e.target.className ==='fas fa-times'){
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault()
}

function moveToTheDoneList(e) {
    if(e.target.parentElement.id ==='task-list'){
        e.target.remove();
        doneList.appendChild(e.target);
    }
}

function moveToTheTaskList(e) {
    if(e.target.parentElement.id ==='done-list'){
        e.target.remove();
        taskList.appendChild(e.target);
    }
}


















// let readyList = "";
// toDos.forEach(toDo => {
//     readyList += `<li onclick= "moveToTheOtherList(this)" class=" btn list-group-item"> ${toDo} </li>`
// });

// document.getElementById("todo-list").innerHTML = readyList;


// let doneList = "";
// dones.forEach(done => {
//     doneList += `<li onclick= "moveToTheOtherList(this)" class=" btn list-group-item"> ${done} </li>`
// });
// document.getElementById("done-list").innerHTML = doneList;

// function moveToTheOtherList(elem) {
//     if (elem.parentElement.id == "todo-list") {
//         elem.parentNode.removeChild(elem);
//         document.getElementById("done-list").appendChild(elem);
//     } else {
//         elem.parentNode.removeChild(elem);
//         document.getElementById("todo-list").appendChild(elem);
//     }

// }

// function getInputValue(){
//     let inputVal = document.getElementById("input").value;
//     let inputValHTML;
//     inputValHTML = `<li onclick= "moveToTheOtherList(this)" class=" btn list-group-item"> ${inputVal} </li>`
//     document.getElementById("todo-list").innerHTML += inputValHTML;
// };
