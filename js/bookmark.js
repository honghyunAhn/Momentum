const bookMarkForm = document.getElementById("bookmark-form");
const bookMarkInput = bookMarkForm.querySelector("input");
const bookMarkList = document.getElementById("bookmark-list");

const BOOKMARK_KEY_URL = "bookmarks_url";
const BOOKMARK_CLEAR_KEY_URL = "bookmarks_clear";

let bookMark_urls = [];
let clearbookMark_urls = [];

function saveBookMark(){
    localStorage.setItem(BOOKMARK_KEY_URL, JSON.stringify(bookMark_urls));
}

function saveclearBookMark(){
    localStorage.setItem(BOOKMARK_CLEAR_KEY_URL, JSON.stringify(clearbookMark_urls));
}

function deleteBookMark(event){
    const li = event.target.parentElement.parentElement;
    li.remove();
    bookMark_urls = bookMark_urls.filter(bookMark_url => bookMark_url.id != parseInt(li.id));
    clearbookMark_urls = clearbookMark_urls.filter(clearbookMark_url => clearbookMark_url.id != parseInt(li.id));
    saveBookMark();

    if (localStorage.getItem(BOOKMARK_KEY_URL) === "[]") {
        localStorage.removeItem(BOOKMARK_KEY_URL);
        updateBookMarkList();
    }

    if (localStorage.getItem(BOOKMARK_CLEAR_KEY_URL) === "[]") {
        localStorage.removeItem(BOOKMARK_CLEAR_KEY_URL);
    }
}

function updateBookMarkList() {
    const savedBookMarks = localStorage.getItem(BOOKMARK_KEY_URL);
    const savedclearBookMarks = localStorage.getItem(BOOKMARK_CLEAR_KEY_URL);

    if(savedBookMarks !== null){
        const parseBookMarks = JSON.parse(savedBookMarks);
        bookMark_urls = parseBookMarks;
        if (savedclearBookMarks !== null){
            const parseclearBookMarks = JSON.parse(savedclearBookMarks);
            clearbookMark_urls = parseclearBookMarks;
        }
        parseBookMarks.forEach(paintBookMark);

    } else {
        bookMarkList.classList.remove("bookmark-list_style");
        bookMarkList.classList.add("hidden");
    }
}
updateBookMarkList();

function paintBookMark(newBK){
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.id = newBK.id;
    a.id = newBK.id;
    a.href = newBK.text;
    const innerUrl = newBK.text.substring(8,30);
    a.innerText = innerUrl;
    const bk_remove_button = document.createElement("button");
    const buttons = document.createElement("div");
    bk_remove_button.innerText = "X";
    bk_remove_button.addEventListener("click", deleteBookMark);

    for (step = 0; step < clearbookMark_urls.length; step++) {
        if (parseInt(li.id) === clearbookMark_urls[step]){
            a.classList.add("clear_bookmark");
            break;
        }
    }
    li.appendChild(a);
    buttons.appendChild(bk_remove_button);
    li.appendChild(buttons);
    bookMarkList.appendChild(li);
    bookMarkList.classList.remove("hidden");

}

function handleSubmitBK(event) {
    event.preventDefault();
    let newBookMark = bookMarkInput.value;
    bookMarkInput.value = "";
    if(newBookMark.substring(0,8) != "https://"){
        newBookMark = "https://" + newBookMark;
    }
    const newBookMarkUrlObj = {
        text: newBookMark,
        id: Date.now(),
    };
    bookMark_urls.push(newBookMarkUrlObj);
    paintBookMark(newBookMarkUrlObj);
    saveBookMark();
    bookMarkList.classList.add("bookmark-list_style");
}

bookMarkForm.addEventListener("submit", handleSubmitBK);