  
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const TODOS_CLEAR_KEY = "todos_clear";

let toDos = [];
let cleartoDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function saveclearToDos(){
    localStorage.setItem(TODOS_CLEAR_KEY, JSON.stringify(cleartoDos));
}

function deleteToDo(event){
    const li = event.target.parentElement.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id));
    cleartoDos = cleartoDos.filter(cleartoDo => cleartoDo.id != parseInt(li.id));
    saveToDos();

    if (localStorage.getItem(TODOS_KEY) === "[]") {
        localStorage.removeItem(TODOS_KEY);
        updateToDoList();
    }

    if (localStorage.getItem(TODOS_CLEAR_KEY) === "[]") {
        localStorage.removeItem(TODOS_CLEAR_KEY);
    }
}

function clearToDo(event){

    const span = event.target.parentElement.parentElement.querySelector("span");
    const clear_button = event.target;

    if (clear_button.innerText === "O"){
        span.classList.add("clear_todo");
        clear_button.innerText = "Clear";
        cleartoDos.push(parseInt(span.id));
        localStorage.setItem(TODOS_CLEAR_KEY, JSON.stringify(cleartoDos));
    } else{
        span.classList.remove("clear_todo");
        clear_button.innerText = "O";
        
        cleartoDos = cleartoDos.filter(id => id != parseInt(span.id));
        console.log(cleartoDos);
        localStorage.setItem(TODOS_CLEAR_KEY, JSON.stringify(cleartoDos));
        if (localStorage.getItem(TODOS_CLEAR_KEY) === "[]") {
            localStorage.removeItem(TODOS_CLEAR_KEY);
        }
    }
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.id = newTodo.id;
    span.innerText = newTodo.text;
    const remove_button = document.createElement("button");
    const clear_button = document.createElement("button");
    const buttons = document.createElement("div");
    remove_button.innerText = "X";
    clear_button.innerText = "O";
    remove_button.addEventListener("click", deleteToDo);
    clear_button.addEventListener("click", clearToDo);

    console.log(cleartoDos[1]);

    for (step = 0; step < cleartoDos.length; step++) {
        if (parseInt(li.id) === cleartoDos[step]){
            span.classList.add("clear_todo");
            clear_button.innerText = "Clear";
            break;
        }
    }
    li.appendChild(span);
    buttons.appendChild(clear_button);
    buttons.appendChild(remove_button);
    li.appendChild(buttons);
    toDoList.appendChild(li);
    toDoList.classList.remove(HIDDEN_CLASSNAME);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    toDoList.classList.add("todo-list_style");
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function updateToDoList() {
    const savedToDos = localStorage.getItem(TODOS_KEY);
    const savedclearToDos = localStorage.getItem(TODOS_CLEAR_KEY);

    if(savedToDos !== null){
        const parseToDos = JSON.parse(savedToDos);
        toDos = parseToDos;
        if (savedclearToDos !== null){
            const parseclearToDos = JSON.parse(savedclearToDos);
            cleartoDos = parseclearToDos;
            console.log("clear todo exist:", cleartoDos);
        }
        parseToDos.forEach(paintToDo);

    } else {
        toDoList.classList.remove("todo-list_style");
        toDoList.classList.add("hidden");
        console.log(toDoList.classList);
    }
}

updateToDoList();