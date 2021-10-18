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
      <h2>Book: ${title.value}</h2>
      <h3>Author: ${author.value}</h3>
      <button type="button" class="remove">Remove</button>
      <hr>
    </div>  
  ` 
}

function buttonClick(){
  const newBook = new book(title.value, author.value);
  booksListArr.push(newBook);
  addBook(newBook);
}

addButton.addEventListener('click', buttonClick)




bookList.addEventListener('click', (bk) => {
  if(bk.target.classList.contains('remove')){
    const bookD = bk.target.parentElement;
    bookList.removeChild(bookD);
    console.log("yay")
    


  }
})




// removeBtn.forEach((bk) => {
//   bk.addEventListener('click',removefunction)
// })