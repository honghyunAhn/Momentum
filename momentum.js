// const title = document.getElementById("title");
const title = document.querySelector("#title");
// title.innerHTML = "Hi! From JS"; 
// title.style.color = "red"
// console.dir(document);
// document.title = "I own you now";
function handleResize(event){
    console.log(event);
}

function handleClick(){
    title.style.color =  "red";
}
// window.addEventListener("resize", handleResize);

title.addEventListener("click", handleClick);