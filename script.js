const bookList = document.querySelector('#books');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addButton = document.querySelector('#Add');

const Book = function ofbook(title, author) {
  this.title = title;
  this.author = author;
};

let booksListArr = [];

function addBook(newBook) {
  bookList.innerHTML += `
  <div class="book">
  <h2>Book: ${newBook.title}</h2>
  <h3>Author: ${newBook.author}</h3>
  <button type="button" class="remove">Remove</button>
  <hr>
  </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  if (bookList !== null) {
    booksListArr = [...JSON.parse(localStorage.getItem('bookListlocal'))];
    booksListArr.forEach((item) => {
      addBook(item);
    });
  }
});

bookList.addEventListener('click', (bk) => {
  if (bk.target.classList.contains('remove')) {
    const bookD = bk.target.parentElement;
    bookList.removeChild(bookD);
    const removeBook = booksListArr.find((item) => item.title === bookD.firstChild.innerText);
    booksListArr.splice(booksListArr.indexOf(removeBook), 1);
    localStorage.setItem('bookListlocal', JSON.stringify(booksListArr));
  }
});

function buttonClick() {
  const newBook = new Book(title.value, author.value);
  booksListArr.push(newBook);
  addBook(newBook);
  title.value = '';
  author.value = '';
  localStorage.setItem('bookListlocal', JSON.stringify(booksListArr));
}

addButton.addEventListener('click', buttonClick);
