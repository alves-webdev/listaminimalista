//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//eventos

todoButton.addEventListener("click", addTodo);
todoList.addEventListener ('click', deleteCheck);

//funções

function addTodo(event) {
    event.preventDefault();
    //criar div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //criar li
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check btn
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

      // trash
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
// append to list
  todoList.appendChild(todoDiv);
//limpar todoinput
todoInput.value = " ";
}
function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === "trash-btn"){
const todo = item.parentElement;
//animação
todo.classList.add('fall');
todo.addEventListener('transitionend', function(){
    todo.remove();
});
}

    //check mark
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}