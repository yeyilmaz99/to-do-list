// selecting elements


// Single Elements
// document.getElementById
// let val;

// val = document.getElementById("header");
// val = document.getElementById("header").id;
// val = document.getElementById("header").className;
// val = document.getElementById("header");
// // // val = val.id;
// // val = val.className;
// // console.log(val);

// val.style.fontSize = "45px";
// val.style.color = "red";
// val.style.fontWeight = "bold";

// val = document.getElementById("header").innerText = "Hello Word!"

// document.querySelector()

// console.log(document.querySelector("#header")); //id için diyez
// console.log(document.querySelector(".card-header")); // class için nokta
// // hep ilk bulduğunu getirir diğerlerini getirmez.
// console.log(document.querySelector("div"));
// document.querySelector("li").style.color = "red"
// document.querySelector("li:last-child").style.color = "blue"
// document.querySelector("li:nth-child(2)").style.color = "yellow"
// document.querySelector("li:nth-child(3)").textContent = "Task Name"
// document.querySelector("li:nth-child(4)").textContent = "Task Name"


// // document.querySelector("li").className = "list-group-item  list-group-item-primary"
// document.querySelector("li").classList.add("active")

// Multiple Elements
// document.getElementsByClassName();

// let val;

// val = document.getElementsByClassName("list-group-item");

// val = document.getElementsByClassName("list-group-item")[0].innerText = "hello";

// val = document.getElementsByClassName("list-group-item")[0].style.color = "red";

// val = val[2].innerText = " selam aga"

// val[3].style.color = "blue"
// val[3].style.fontSize = "25px"
// val[3].innerText = "Napisen?"


// for(let i=0; i<val.length; i++){
//     console.log(val[i].style.color = " red");
//     val[i].textContent = "new item";
// }


// console.log(val.length)

//document.getElementByTagName()

// val = document.getElementsByTagName("li");
// val = document.getElementById("task-list") .getElementsByTagName("a");

// document.querySelectorAll()

// val = document.querySelectorAll("li");

// val.forEach(function(item,index){
//     item.textContent = `${index} - hello` ;

// });

// val = document.querySelectorAll("li:nth-child(even)");

// val.forEach(function(item){
//     item.style.background= "grey"
// })

// console.log(val)


// traversing the DOM

// let val;

// let list = document.querySelector(".list-group");

// val = list;


// val = list.childNodes;

// val = list.children;


// console.log(val);

// Element oluşturma /create element

// const li = document.createElement("li");

// //add class

// li.className = "list-group-item list-group-item-secondary";

// // add attribute

// li.setAttribute("title", "new item");
// li.setAttribute("data-id","5");

// // text node add

// const text = document.createTextNode("new item");

// li.appendChild(text);

// const a = document.createElement("a");
// a.setAttribute("href", "#");
// a.className = "delete-item float-right";
// a.innerHTML = '<i class="fas fa-times"></i>'


// // append a to li
// li.appendChild(a);

// //append li to ul
// document.getElementById("task-list").appendChild(li);


// console.log(li)


// Deleting elements & transforming

const taskList = document.getElementById("task-list");

//removing element

// taskList.remove();

// taskList.childNodes[7].remove();

// taskList.children[3].remove();

// removing attributes

// taskList.children[0].removeAttribute("class");

// for(let i = 0; i<taskList.children.length; i++){
//     taskList.children[i].removeAttribute("class");
// }


// replacing Elements

// const cardHeader = document.querySelector('.card-header');
// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));
// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);


// classes


let val;
link = taskList.children[0].children[0]
// val = link.className; // string olarak geliyor
// val = link.classList; //dizi olarak geliyor
link.classList.add("new");
link.classList.remove("new");


//attributes
val = link.getAttribute('data-id');
val = link.getAttribute('href');
val = link.setAttribute('href', "http//google.com");
val = link.hasAttribute('href')
console.log(val);








