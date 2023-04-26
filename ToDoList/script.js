//3 things we need :
/* when u write any task -> so we need one input 
 when we click Add button -> woh Task add ho
and one todo list bante jaye */

const todoInput = document.getElementById('todoInput');
const addBtn= document.getElementById('addBtn');
const todoList = document.getElementById('todoList');


const resetBtn = document.querySelector('.reset');

// Now we adda event Listner , when  click add button ek function ko call kare

addBtn.addEventListener('click',addTodo)

function addTodo(){
    // get the value of todo Input
    const todoText = todoInput.value;
    // add hone ke baad we create a newList
    const listItem = document.createElement('li');
    // add the todoText to our listItem
    listItem.innerHTML = todoText;

    // we appened the listItem to the todolist

    todoList.appendChild(listItem);
    
    // clear input text
    todoInput.value = '';

}

resetBtn.addEventListener('click', reset);


function reset() {
    const listItems = todoList.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].remove();
    }
    // todoInput.value = '';
}


