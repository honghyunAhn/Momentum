const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const logout_bt = document.createElement("button");
    greeting.innerText = `${username} 오늘도 화이팅!`;
    logout_bt.setAttribute("class", "fas fa-sign-out-alt");
    logout_bt.id = "logout_bt";
    greeting.appendChild(logout_bt);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    logout_bt.addEventListener("click", logout);
}

function logout(){
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TODOS_KEY);
    location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}