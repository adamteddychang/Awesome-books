const List = document.getElementById('List');
const addNew = document.getElementById('Add-new');
const Contact = document.getElementById('Contact');
const bookdisplay = document.getElementById('bookdisplay');
const Addbook = document.getElementById('Addbook');
const contactSec = document.getElementById('contact-sec');

List.addEventListener('click', () => {
  Addbook.classList.add('d-no');
  bookdisplay.classList.remove('d-no');
  contactSec.classList.add('d-no');
});

addNew.addEventListener('click', () => {
  Addbook.classList.remove('d-no');
  bookdisplay.classList.add('d-no');
  contactSec.classList.add('d-no');
});

Contact.addEventListener('click', () => {
  Addbook.classList.add('d-no');
  bookdisplay.classList.add('d-no');
  contactSec.classList.remove('d-no');
});
