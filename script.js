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
            card.appendChild(para)
        }
    })
}



addBookToLibrary("mark mark", "86530", "uhqwjkn", "YES");
addBookToLibrary("mark mark", "86530", "uhqwjkn", "YES");
addBookToLibrary("mark mark", "86530", "uhqwjkn", "YES");

console.log("end of contents", myLibrary);

displayBooksOnPage();