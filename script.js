const bookList = document.querySelector('#books');
class Books {
  static display() {
    const books = Books.getBooks();
    bookList.innerHTML = '';
    for (let bookIndex = 0; bookIndex < books.length; bookIndex += 1) {
      const book = books[bookIndex];
      bookList.innerHTML += `
      <div class="book">
      <h2>Book: ${book.title}</h2>
      <h3>Author: ${book.author}</h3>
      <button type="button" class="remove" onclick="removeBook(${bookIndex})">Remove</button>
      <hr>
      </div>`;
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
document.querySelector('.form').addEventListener('click', (e) => {
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
