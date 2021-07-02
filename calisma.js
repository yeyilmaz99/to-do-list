let toDos = [
    "Wash Dishes",
    "Water flowers",
    "Pay the bills",
    "Go to the vet",

];

let dones = [
    "Write Code",
    "Do Sex",
    "Go to the market",
    "Go to the gym",
    "See the doctor"
];
let readyList = "";
toDos.forEach(toDo => { 
    readyList += `<li onclick= "moveToTheOtherList(this)" class=" btn list-group-item"> ${toDo} </li>`
});

document.getElementById("todo-list").innerHTML = readyList;


let doneList = "";
dones.forEach(done => {
    doneList += `<li onclick= "moveToTheOtherList(this)" class=" btn list-group-item"> ${done} </li>`
});
document.getElementById("done-list").innerHTML =doneList;

function moveToTheOtherList(elem) {
    console.log(elem.parentElement.id);
    if(elem.parentElement.id == "todo-list"){
        console.log("Bu element todo-list'tedir");
        elem.parentNode.removeChild(elem);
        document.getElementById("done-list").appendChild(elem);
    }else{
        console.log("Bu element done-list'tedir");
        elem.parentNode.removeChild(elem);
        document.getElementById("todo-list").appendChild(elem);
    }

}