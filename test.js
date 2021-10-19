const bookList = document.querySelector('#books')
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class show {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => show.addBookToList(book));
  }

  
  static addBookToList(book) {
    bookList.innerHTML += `
    <div class="book">
    <h2>Book: ${book.title}</h2>
    <h3>Author: ${book.author}</h3>
    <button type="button" class="remove">Remove</button>
    <hr>
    </div>`;
  }

  static deleteBook(bk) {
    if (bk.target.classList.contains('remove')) {
      const bookD = bk.target.parentElement;
      bookList.removeChild(bookD);
      const removeBook = books.find((item) => item.title === bookD.firstChild.innerText);
      books.splice(books.indexOf(removeBook), 1);
      localStorage.setItem('books', JSON.stringify(books));
      console.log("remove click");
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
let books;
class Store {
  static getBooks() {
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', show.displayBooks);

document.querySelector('.form').addEventListener('click', (e) => {

  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if(title === '' || author === '') {
    e.preventDefault();
  } else {

    const book = new Book(title, author);

    show.addBookToList(book);

    Store.addBook(book);

    show.clearFields();
  }
});

bookList.addEventListener('click', (e) => {
  show.deleteBook(e);
});