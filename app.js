// Selectors

const todoInput =  document.querySelector('.todo-input');
const todoButton =  document.querySelector('.todo-button');
const todoList =  document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click', filterTodo);

// Functions

function addTodo(event) {
    
    // Prevent from from submitting

    event.preventDefault();

    // Todo div

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create Li

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check mark button

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // Delete button

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to list

    todoList.appendChild(todoDiv);

    // Clear todoInput value

    todoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;

    //Delete todo

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;

        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    // Check mark

    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
//Check MARCK


function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }  else  {
                    todo.style.display = "none";
                };
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                }  else  {
                    todo.style.display = "none";
                };
                break;
        }
    });
}

// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     todos.forEach((todo) => {
//         //check for undefined values and skips then and only apply the switch statement on nodes with properties 
//       if (todo.classList !== undefined) {
//         switch (e.target.value) {
//           case "all":
//             todo.style.display = "flex";
//             break;
//           case "completed":
//             if (todo.classList.contains("completed")) {
//               todo.style.display = "flex";
//             } else {
//               todo.style.display = "none";
//             }
//             break;
//           default:
//             break;
//         }
//       }
//       return;
//     });
// }

// function saveLocalStorage(todo){
//     //check do I already have thing on there ?

//     let todos;
//     if (localStorage.getItem(todos) === null) {
//         todos= [];
//     } else {
//         tofos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }




