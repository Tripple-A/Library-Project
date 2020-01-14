let myLibrary = [];
let table = document.getElementById('myTable')

function Book(title,author,pages,status) {
  this.title = title
  this.author= author
  this.pages = pages
  this.status = status
}

function createBook(){
    let bookForm = document.forms['bookForm']
    let title = bookForm['bookTitle'].value
    let author = bookForm['bookAuthor'].value
    let pages = bookForm['bookPages'].value
    let status = bookForm['bookStatus'].value
    let myBook = new Book(title,author,pages,status)
    addBookToLibrary(myBook)   
}

function addBookToLibrary(book) {
    
    myLibrary.push(book)

}

function showBooks(){
    myLibrary.forEach((book,index)=>{
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    button2.setAttribute("id", index)
    button1.setAttribute("class", 'status')
    button1.innerHTML = book.status
    button2.innerHTML = 'Delete Book'
    setColor(button1)
    button1.addEventListener('click', toggleStatus)
    button2.addEventListener('click', removeBook)
    let row = table.insertRow(index+1)
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4)
        cell1.innerHTML = book.title;
        cell2.innerHTML = book.author;
        cell3.innerHTML = book.pages;
        cell4.appendChild(button1)
        cell5.appendChild(button2)
    })
}


function toggleStatus(){
    if (this.innerHTML == 'read'){
        this.innerHTML = 'Unread'
        this.style.background = 'red'
    }
    else {
        this.innerHTML = 'read'  
        this.style.background = 'green'
    }
}

function setColor(button){
if (button.innerHTML == 'read'){button.style.background = 'green'}
else {button.style.background = 'red'}
}

function removeBook(){
    let num = parseInt(this.id)
    table.deleteRow(num + 1) 
    myLibrary.splice(num,1)
    clearTable()
    showBooks()
}

book1 = new Book('The Dear','Biodun Ajibade','456','read')
addBookToLibrary(book1)
book2 = new Book('JavaSCript', 'Micheal','230','Unread')
addBookToLibrary(book2)
book3 = new Book('The Rails','Rama','458','read')
addBookToLibrary(book3)
book4 = new Book('The Ruby','Sarah','455','Unread')
addBookToLibrary(book4)
book5 = new Book('The Dear','Biodun Ajibade','457','read')
addBookToLibrary(book5)
showBooks()