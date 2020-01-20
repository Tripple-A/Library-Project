const myLibrary = [];
const table = document.getElementById('myTable');
const { bookForm } = document.forms;
bookForm.style.display = 'none';


function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function createBook() {
  const title = bookForm.bookTitle.value;
  const author = bookForm.bookAuthor.value;
  const pages = bookForm.bookPages.value;
  const status = bookForm.bookStatus.value;
  const myBook = new Book(title, author, pages, status);
  addBookToLibrary(myBook);
  clearForm();
  bookForm.style.display = 'none';
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  clearTable();
  render();
}

function clearForm() {
  bookForm.bookTitle.value = '';
  bookForm.bookAuthor.value = '';
  bookForm.bookPages.value = '';
  bookForm.bookStatus.value = 'read';
}

function showForm() {
  bookForm.style.display = 'block';
}

function render() {
  myLibrary.forEach((book, index) => {
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    button2.setAttribute('id', index);
    button1.setAttribute('class', 'status');
    button1.innerHTML = book.status;
    button2.innerHTML = 'Delete Book';
    setColor(button1);
    button1.addEventListener('click', toggleStatus);
    button2.addEventListener('click', removeBook);
    const row = table.insertRow(index + 1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    cell1.innerHTML = book.title;
    cell2.innerHTML = book.author;
    cell3.innerHTML = book.pages;
    cell4.appendChild(button1);
    cell5.appendChild(button2);
  });
}


function toggleStatus() {
  if (this.innerHTML == 'read') {
    this.innerHTML = 'Unread';
    this.style.background = 'red';
  } else {
    this.innerHTML = 'read';
    this.style.background = 'green';
  }
}

function setColor(button) {
  if (button.innerHTML == 'read') { button.style.background = 'green'; } else { button.style.background = 'red'; }
}

function clearTable() {
  if (table.rows.length > 1) {
    for (let i = table.rows.length - 1; i > 0; i--) {
      table.deleteRow(i);
    }
  }
}

function removeBook() {
  const num = parseInt(this.id);
  table.deleteRow(num + 1);
  myLibrary.splice(num, 1);
  clearTable();
  render();
}

book1 = new Book('The Dear', 'Biodun Ajibade', '456', 'read');
addBookToLibrary(book1);
book2 = new Book('JavaSCript', 'Micheal', '230', 'Unread');
addBookToLibrary(book2);
book3 = new Book('The Rails', 'Rama', '458', 'read');
addBookToLibrary(book3);
book4 = new Book('The Ruby', 'Sarah', '455', 'Unread');
addBookToLibrary(book4);
book5 = new Book('The Dear', 'Biodun Ajibade', '457', 'read');
addBookToLibrary(book5);
