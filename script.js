const bookList = document.querySelector('#books');
let bookIndex;
class Books {
  static display() {
    const books = Books.getBooks();
    bookList.innerHTML = '';
    for (bookIndex = 0; bookIndex < books.length; bookIndex += 1) {
      const book = books[bookIndex];
      bookList.innerHTML += `
      <li class="book d-flex">      
      <h2> "${book.title}" by ${book.author}</h2>      
      <button type="button" class="remove" onclick="removeBook(${bookIndex})">Remove</button>
      </li>`;
    }
  }

  static add(book) {
    const books = Books.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    Books.display();
  }

  static remove(bookId) {
    if (bookId !== null) {
      const books = Books.getBooks();
      books.splice(bookId, 1);
      localStorage.setItem('books', JSON.stringify(books));
      Books.display();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  static getBooks() {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks !== null) {
      return JSON.parse(localStorage.getItem('books'));
    }
    return [];
  }
}
document.addEventListener('DOMContentLoaded', () => Books.display());
document.querySelector('#Add').addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = {
    author: document.querySelector('#author').value,
    title: document.querySelector('#title').value,
  };
  if (newBook.title.length > 2 && newBook.author.length > 2) {
    Books.add(newBook);
    Books.clearFields();
  }
});

const removeBook = (bookId) => Books.remove(bookId);

if (bookIndex === -1) {
  removeBook();
}
