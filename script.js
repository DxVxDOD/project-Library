class Book {
    constructor(author, pages, title, read) {
        this.author = author,
        this.title = title,
        this.read = read,
        this.pages = pages;
    }
};

const lotr = new Book("JRRT", "312321", "TLOTR", "Yes");
const currentBooks = document.querySelector(".current-books");
const btn = document.querySelector(".button");

function makeDiv(e) {
    e.preventDefault();
    let cell = document.createElement("div");
    currentBooks.appendChild(cell).className = "book";
}

function getData(form) {
    let formData = new FormData(form);

    // iterate trough enteries
    for (let pair of formData.entries()) {
        console.log(pair[0] + ":" + pair[1]);
    }
}

document.getElementById("myForm").addEventListener("submit",
function(e) {
    e.preventDefault();
    getData(e.target);
});