let myLibrary = [];

class Book {
    constructor(author, pages, title, read) {
        this.author = author,
        this.title = title,
        this.read = read,
        this.pages = pages;
    }
};

function addBookToLibrary(author, pages, title, read) {
    let book = new Book(author, pages, title, read);
    myLibrary.push(book)
}

function displayBooksOnPage() {
    const books = document.querySelector(".books");

    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
            console.log(myLibrary);
        }
    })
    
}

function getData(form) {
    const formData = new FormData(form);
    const books = document.querySelector(".books");
    const card2 = document.createElement("div");
    card2.classList.add("card");
    books.appendChild(card2);

    for (var pair of formData.entries()) {
        const para2 = document.createElement("p");
        para2.textContent = (pair[0] + ": " + pair[1]);
        card2.appendChild(para2)
    }
    console.log(Object.fromEntries(formData));
}

document.getElementById("myForm").addEventListener("submit", 
function(e) {
    e.preventDefault();
    getData(e.target);
});

addBookToLibrary("mark mark", "86530", "uhqwjkn", "YES");

displayBooksOnPage();