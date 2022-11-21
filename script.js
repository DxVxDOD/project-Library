function getData(form) {
    const formData = new FormData(form);
    const books = document.querySelector(".books");
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);

    for (var pair of formData.entries()) {
        const para = document.createElement("p");
        para.textContent = (pair[0] + ": " + pair[1]);
        card.appendChild(para)
    }
};

document.getElementById("myForm").addEventListener("submit", 
function(e) {
    e.preventDefault();
    getData(e.target);
    deleteButton();
});

function deleteButton() {
    const cards = document.querySelectorAll(`.card`);
    const buttonCancel = document.createElement(`button`);
    buttonCancel.classList.add(`cancel`)
    buttonCancel.innerText = `x`
    cards.forEach(card => card.appendChild(buttonCancel));
    cancels = document.querySelectorAll(`.cancel`);
    cancels.forEach(cancel => cancel.addEventListener(`click`, deleteCard));
}

function deleteCard() {
    this.closest(`div`).remove();
}

function bookRead() {
    
}