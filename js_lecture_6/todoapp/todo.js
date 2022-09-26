//grabbing all the html elements

//getting form
const todoForm = document.querySelector('.todo-form');

//getting the input field
const todoInput = document.querySelector('.todo-input');

//getting the ul
const todoListItems = document.querySelector('.todo-items');

//creating an empty list that will store our todo items
let todos = [];

//add eventListener to the form 
todoForm.addEventListener('submit', function (event) {
    //prevent the form to refresh the page
    event.preventDefault();
    //calling the addTodo function
    addTodo(todoInput.value);
});

//function to add todo items in array
function addTodo(item) {
    //if input is empty or not
    if (item !== '') {
        //making an object that we will push into the array as our task
        const todo = {
            id: Date.now(),
            name: item,
        }
        //then push this object into todos array
        todos.push(todo);
        console.log(todos);
        //calling my localStorage function
        addToLocalStorage(todos);

        //finally clearing out input field after saving the data
        todoInput.value = '';
    } else {
        alert("Please enter your task");
    }
}

//making a function that stores our todo items into browser localStorage
function addToLocalStorage(todos) {
    //converting the array data into string then store it into localStorage
    localStorage.setItem('tasks', JSON.stringify(todos));
}

//function that display our todo tasks in the list
function renderTodos(todos){
    //loop for displaying all the tasks in the list
    todos.forEach(function (item) {
        //generating the li dynamically
        const li = document.createElement("li");

        li.innerHTML = `
        ${item.name}
        `;

        //finally append these dynamically generated li into my html ul
        todoListItems.append(li);
    })
}

//function that takes the todo tasks from the browser localStorage
function getFromLocalStorage(){
    const reference = localStorage.getItem('tasks');

    //if reference exist
    if(reference){
        //convert them back to the array/JSON and store it into todos array
        todos = JSON.parse(reference);
        renderTodos(todos);
    }
}

//this function will run first when we open the page 
getFromLocalStorage();