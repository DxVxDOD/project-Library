let myLibrary = [];

class Book {
    constructor(author, pages, title, read) {
        this.author = author,
        this.title = title,
        this.read = read,
        this.pages = pages;
    }
};

const lotr = new Book("JRRT", "312321", "TLOTR", "Yes");

