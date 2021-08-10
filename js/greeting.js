const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hour = new Date().getHours();
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

let hello = "Hello,";

if (hour < 12){
    hello = "Good Morning,";
} else if (hour < 18) {
    hello = "Good Afternoon,";
} else {
    hello = "Good Evening,";
};

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    bookMarkForm.classList.remove(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const logout_bt = document.createElement("button");
    greeting.innerText = `${hello} ${username}`;
    logout_bt.setAttribute("class", "fas fa-sign-out-alt");
    logout_bt.id = "logout_bt";
    greeting.appendChild(logout_bt);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    logout_bt.addEventListener("click", logout);
}

function logout(){
    if(!confirm("로그아웃하시면, 저장한 모든 정보가 삭제됩니다. \n 로그아웃 하시겠습니까?")){
        return;
    }
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TODOS_KEY);
    localStorage.removeItem(BOOKMARK_KEY_URL);
    location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.add(HIDDEN_CLASSNAME);
    bookMarkForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}