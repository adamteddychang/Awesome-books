const bookList = document.querySelector('#books')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const addButton = document.querySelector('#Add')

// constructor for book
const book = function (title, author){
  this.title = title;
  this.author = author;
}

//books stored in array
let booksListArr = [];

function addBook(){
  bookList.innerHTML +=`
  <div class="book">
      <h2 id ="titleVal">Book: ${title.value}</h2>
      <h3 id ="authorVal">Author: ${author.value}</h3>
      <button type="button" class="remove">Remove</button>
      <hr>
    </div>  
  ` 
}

// document.addEventListener('DOMContentLoaded', () => {
//   if(bookList !== null) {
//     booksListArr = [JSON.parse(localStorage.getItem('bookList'))]
//     booksListArr.forEach(e => {
//       addBook(e)
//     })
//   }
// })

function buttonClick(){
  const newBook = new book(title.value, author.value);
  booksListArr.push(newBook);
  addBook(newBook);

  localStorage.setItem('bookList', JSON.stringify(booksListArr))
}

document.addEventListener('DOMContentLoaded', () => {
  if (bookList !== null) {
    addBook()
    let grabforminfo = localStorage.getItem('bookList');
    grabforminfo = [...JSON.parse(grabforminfo)];
    for(let i = 0; i < grabforminfo.length; i++) {
      document.getElementById('titleVal').textContent = grabforminfo[i].title
      document.getElementById('authorVal').textContent = grabforminfo[i].author;
    }
  }
});


addButton.addEventListener('click', buttonClick)

bookList.addEventListener('click', (bk) => {
  if(bk.target.classList.contains('remove')){
    const bookD = bk.target.parentElement;
    bookList.removeChild(bookD);
    console.log("yay")
  }
})
